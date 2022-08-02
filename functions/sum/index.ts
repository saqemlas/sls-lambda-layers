import {Context} from 'aws-lambda/handler';
import {APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2} from 'aws-lambda/trigger/api-gateway-proxy';
import {sum, response} from '/opt/shared/common';
import {logger} from '/opt/shared/logger/logger';


async function handler(event: APIGatewayProxyEventV2, context?: Context): Promise<APIGatewayProxyStructuredResultV2> {
  logger.info('Event', {event});
  const {requestContext, headers, pathParameters} = event;

  if (!pathParameters || !pathParameters.a || !pathParameters.b) {
    return response(404, {id: requestContext.requestId, message: 'Missing Path Parameter!'}, headers);
  }

  const total: number = sum(pathParameters.a, pathParameters.b);

  return response(200, {id: requestContext.requestId, sum: total}, headers);
};

export {handler};
