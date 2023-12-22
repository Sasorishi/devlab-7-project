const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const { id, email, name, family_name } = JSON.parse(event.body);

  const userData = {
    TableName: "userbis-env",
    Key: { id },
    UpdateExpression: "set username = :u, family_name = :f, name = :u",
    ExpressionAttributeValues: {
      ":u": email,  // Je suppose que 'username' dans DynamoDB est utilisé pour stocker l'email
      ":f": family_name,
      ":n": name
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    await dynamoDB.update(userData).promise();
    return { statusCode: 200, body: JSON.stringify("Mise à jour réussie") };
  } catch (err) {
    console.error("Erreur lors de la mise à jour dans DynamoDB:", err);
    return { statusCode: 500, body: JSON.stringify("Erreur lors de la mise à jour") };
  }
};
