import { defineAction, ActionError } from 'astro:actions';
import { RESEND_API_KEY, FORM_TO, FORM_FROM } from 'astro:env/server';
import { forms } from '../data/forms';
import { isFormId, parseEnquiry, subjectFor, bodyFor } from '../lib/enquiry';

export const server = {
  /**
   * Sends any enquiry form to sales@procuro.in through Resend.
   * Returns field errors for the form to show inline; throws only when the
   * email itself can't be sent.
   */
  enquiry: defineAction({
    accept: 'form',
    handler: async (data: FormData, context) => {
      // Honeypot: real visitors never see or fill this field.
      if (data.get('website')) return { ok: true as const };

      const formId = data.get('form_id');
      if (!isFormId(formId)) {
        throw new ActionError({ code: 'BAD_REQUEST', message: 'Unknown form.' });
      }

      const parsed = parseEnquiry(forms[formId], data);
      if (!parsed.ok) return { ok: false as const, errors: parsed.errors };

      if (!RESEND_API_KEY) {
        console.error('Enquiry not sent: RESEND_API_KEY is not set.');
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Email sending is not set up yet.' });
      }

      const page = context.request.headers.get('referer') ?? context.url.origin;
      const { text, html } = bodyFor(parsed.enquiry, page);

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: FORM_FROM,
          to: [FORM_TO],
          reply_to: parsed.enquiry.replyTo,
          subject: subjectFor(parsed.enquiry),
          text,
          html,
        }),
      });

      if (!response.ok) {
        console.error('Resend error', response.status, await response.text());
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'The email could not be sent.' });
      }

      return { ok: true as const };
    },
  }),
};
