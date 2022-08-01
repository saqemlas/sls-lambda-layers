import {APIGatewayProxyStructuredResultV2} from 'aws-lambda/trigger/api-gateway-proxy';

function sum(a:string, b:string): number {
  return Number(a) + Number(b);
};

function response(status: number, response: object, headers?: object): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: status,
    body: JSON.stringify(response),
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    isBase64Encoded: false
  };
};

export {sum, response};
