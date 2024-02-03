const { GraphQLUpload} = require('graphql-upload');
import { ReadStream } from 'fs'; 
const {nodemailer} = require('nodemailer');



async function sendEmail(htmlContent: string): Promise<void> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'hmns.riceapps@gmail.com',
        pass: 'hmnsowls123!',
        },
});

    const mailOptions = {
        from: 'hmns.riceapps@gmail.com',
        to: 'hmns.riceapps@gmail.com',
        subject: 'Study Images',
        html: `<div>${htmlContent}</div>`,
    };

    await transporter.sendMail(mailOptions);
}