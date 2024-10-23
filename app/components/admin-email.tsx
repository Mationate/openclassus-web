import * as React from 'react';

interface EmailTemplateProps {
  email: string | null;
  name: string | null;
  phone: string | null;
  business: string | null;
  rut: string | null;
  sessionName: string | null;
}
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";

export const AdminEmail = ({
  email,
  name,
  phone,
  business,
  rut,
  sessionName,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>
      Nueva reserva
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>
          Nombre: {name}
        </Text>
        <Text style={paragraph}>
          Rut: {rut}
        </Text>
        <Text style={paragraph}>
          Correo: {email}
        </Text>
        <Text style={paragraph}>
          Teléfono: {phone}
        </Text>
        <Text style={paragraph}>
          Empresa: {business}
        </Text>
        <Text style={paragraph}>
          Reserva: {sessionName}
        </Text>
      </Container>
    </Body>
  </Html>
);


export default AdminEmail;

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

