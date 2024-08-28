import { EmailTemplate } from '@/app/components/template-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'OpenClassus <noreply@facilitator.openclassus.com>',
      to: 'mofraga@3bslab.com',
      subject: 'Nuevo mensaje de Facilitator OpenClassus',
      react: EmailTemplate({ email, message }), 
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
