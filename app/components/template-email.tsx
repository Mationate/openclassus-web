import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensaje:</strong> {message}</p>
  </div>
);
