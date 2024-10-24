import * as React from 'react';

interface EmailTemplateProps {
  email: string | null;
  message: string;
}
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate = ({
  email,
  message
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {email},</Text>
        <Text style={paragraph}>
          Gracias por reservar tu cupo, estaremos en contacto lo antes posible
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://facilitator.openclassus.com">
            Ver
          </Button>
        </Section>
        <Text style={paragraph}>
          Saludos,
          <br />
          Equipo Openclassus
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Santiago
        </Text>
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  email: "Alan",
} as EmailTemplateProps;

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#fbbf24",
  borderRadius: "3px",
  color: "#000000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

