/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let userData = {
    TableName: "usersbis-env",
    Item: {
      "id": event.request.userAttributes.sub,
      "username": event.request.userAttributes.email,
      "name": event.request.userAttributes.name,
      "family_name": event.request.userAttributes.family_name
    }
  };

  try {
    await dynamoDB.put(userData).promise();
    console.log("Utilisateur ajouté à DynamoDB");
  } catch (err) {
    console.error("Erreur lors de l'ajout à DynamoDB:", err);
  }
};