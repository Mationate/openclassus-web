import AdminEmail from '@/app/components/admin-email';
import { EmailTemplate } from '@/app/components/template-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, rut, empresa, session } = await request.json();

    // Send email to you
    const adminEmail = await resend.emails.send({
      from: 'OpenClassus <noreply@facilitator.openclassus.com>',
      to: 'mofraga@3bslab.com',
      subject: 'Nueva reserva facilitator.openclassus',
      react: AdminEmail({ email: email, name: name, phone: phone, rut: rut, business: empresa, sessionName: session.title  }), 
    });

    // Email content for the user
    const userMessage = `
      Hola ${name},
      Gracias por registrarte en ${session.title}. Nos pondremos en contacto contigo pronto.
    `;

    // Send email to the user
    const userEmail = await resend.emails.send({
      from: 'OpenClassus <noreply@facilitator.openclassus.com>',
      to: email,
      subject: 'Gracias por tu reserva',
      react: EmailTemplate({ email, message: userMessage }),
    });

    return new Response(JSON.stringify({ adminEmail, userEmail }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
