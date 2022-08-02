import {Context} from 'aws-lambda/handler';
import {APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2} from 'aws-lambda/trigger/api-gateway-proxy';
import {response} from '/opt/shared/common';
import {logger} from '/opt/shared/logger/logger';


async function handler(event: APIGatewayProxyEventV2, context?: Context): Promise<APIGatewayProxyStructuredResultV2> {
  logger.info('Event', {event});
  const {requestContext, headers} = event;

  return response(404, {id: requestContext.requestId, message: 'Invalid path or method'}, headers);
}

export {handler};
