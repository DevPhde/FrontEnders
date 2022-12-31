import * as nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASS,
    }
});

async function sendMail(name, userMail, token) {
    try {
        transport.sendMail({
            from: 'noreply <contato.frontenders@outlook.com>',
            to: `${userMail}`,
            subject: 'Token para recuperação de senha',
            text: `Olá!  ${name},\n Este é seu token para recuperação de senha.
        Token: ${token}\n
            Este Token é válido por 10 minutos.`
        })
        return true
    }
    catch (err) {
        if (err) {
            return false
        }
    }
}

export default sendMail
