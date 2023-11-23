import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { constants } from '../../helpers/constants';
@ApiTags(constants.HEALTH_CONTROLLER)
@Controller(constants.HEALTH_CONTROLLER)
// @ApiBearerAuth()
export class HealthCheckController {
  @Get('/health')
  healthStatus(): object {
    return { status: 200, message: 'User-service healthcheck OK ! ....'};
  }
}
