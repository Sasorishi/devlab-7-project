const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log("Evénement reçu:", JSON.stringify(event, null, 2));

  // Bouclez sur chaque enregistrement d'événement S3
  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;
    const imageData = Buffer.from(record.body.image, 'base64');


    try {
      const params = {
        Bucket: bucket,
        Key: key,
        Body: 'Hello World!'
      };

      await s3.putObject(params).promise();
      console.log('Upload réussi');
      // Retourner une réponse de succès ici
    } catch (err) {
      console.error('Erreur lors de l\'upload:', err);
      // Retourner une réponse d'erreur ici
    }
  }
};
