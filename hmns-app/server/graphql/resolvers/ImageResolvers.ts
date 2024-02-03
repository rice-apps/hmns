const { GraphQLUpload} = require('graphql-upload');
const {nodemailer} = require('nodemailer');


const resolvers = {
    Mutation: {
      receiveImage: async (_:any, {imageData}:{imageData:string} ) => {
        try {
            // Decode base64 image data
            const decodedImage = Buffer.from(imageData, 'base64');
    
            // Call sendEmail function with the decoded image
            await sendEmail(decodedImage);

          } catch (error) {
            console.error('Error sending email:', error);
          }
    }
  }
};


async function sendEmail(decodedImage: Buffer){

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
        html: `<img src="cid:uniqueImageId" />`,
        attachments: [
            {
              filename: 'image.jpg',
              content: decodedImage,
              encoding: 'base64',
              cid: 'uniqueImageId',
            },
          ],
    };

    await transporter.sendMail(mailOptions);
}
