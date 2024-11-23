import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    phone: string;
    message: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    phone,
    message,
    email
}) => (
    <div>
        <h1>Nova mensagem de contato!!!!!!!</h1>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>Telefone:</strong> {phone}</p>
        <p><strong>Email:</strong>{email} </p>
        <p><strong>Mensagem:</strong></p>
        <p>{message}</p>
    </div>
);
