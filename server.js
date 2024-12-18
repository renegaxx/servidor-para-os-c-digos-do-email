const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Criar o aplicativo Express
const app = express();

// Usar o body-parser para processar os dados da requisição
app.use(bodyParser.json());

// Configuração do transporte de e-mail com Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou outro serviço de e-mail
    auth: {
        user: 'puthype@gmail.com', // Substitua pelo seu e-mail
        pass: 'sdxf gutp ktjv soaa' // Substitua pela senha de app gerada no Gmail
    }
});

// Rota POST para enviar o e-mail
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body; // Dados da requisição

    // Configuração do e-mail
    const mailOptions = {
        from: 'puthype@gmail.com', // Substitua pelo seu e-mail
        to: to, // E-mail do usuário
        subject: subject, // Assunto do e-mail
        text: text // Corpo do e-mail
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Erro ao enviar o e-mail.');
        }
        console.log('E-mail enviado: ' + info.response);
        res.status(200).send('E-mail enviado com sucesso!');
    });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
