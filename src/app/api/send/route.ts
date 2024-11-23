import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(String(process.env.RESEND_API_KEY));

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Code Jr <onboarding@resend.dev>',
            to: 'leandro.fortunato@codejr.com.br',
            subject: "Nova resposta ao forms do site",
            react: EmailTemplate({ name, phone, message, email }) as React.ReactElement,
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
    }
}
