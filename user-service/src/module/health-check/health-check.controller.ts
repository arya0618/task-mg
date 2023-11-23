import { Controller, Get } from "@nestjs/common";
// import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
// import { constants } from "../../helpers/constants/constants";

// @ApiTags("Health-Check")
@Controller('health-check')
// @ApiBearerAuth()
export class HealthCheckController {
  @Get("/health")
  healthStatus(): object {
    return { status: 200, message: 'User-service healthcheck OK ! ....'};
  }
}
