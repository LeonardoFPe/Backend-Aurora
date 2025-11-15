const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Necessário para permitir requisições do seu frontend

const app = express();
const PORT = 3001; // Porta do seu backend (diferente da porta do React)

// Middlewares
app.use(cors()); // Permite requisições de outras origens (como o React)
app.use(express.json()); // Permite que o Express leia dados JSON no corpo da requisição

// ⚠️ Use variáveis de ambiente para credenciais em produção!
const APP_EMAIL = "leos13790@gmail.com";
const APP_PASSWORD = "kate zfhh xnno axii"; // Sua senha de app

// Configuração do Nodemailer
const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: APP_EMAIL,
        pass: APP_PASSWORD
    }
});

// Rota para receber os dados do formulário e enviar o e-mail
app.post('/send-reservation', async (req, res) => {
    const { name, email, phone, date, time, people, message } = req.body;

    // Constrói o corpo do e-mail com os dados recebidos
    const mailContent = `
        <h1>Nova Reserva de Mesa</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <hr>
        <p><strong>Data da Reserva:</strong> ${date}</p>
        <p><strong>Horário:</strong> ${time}</p>
        <p><strong>Pessoas:</strong> ${people}</p>
        <hr>
        <p><strong>Observação:</strong> ${message || 'Nenhuma'}</p>
    `;

    try {
        await transport.sendMail({
            from: `Reserva Aurora Gastrô <${APP_EMAIL}>`,
            to: APP_EMAIL, // E-mail para onde as reservas serão enviadas
            subject: `NOVA RESERVA de ${name}`,
            html: mailContent,
            text: `Nova Reserva de Mesa por ${name}. Data: ${date}, Horário: ${time}`
        });

        console.log("E-mail de reserva enviado com sucesso!");
        res.status(200).json({ message: "Reserva enviada com sucesso!" });

    } catch (error) {
        console.error("Erro ao enviar e-mail de reserva:", error);
        res.status(500).json({ message: "Erro ao processar a reserva." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});