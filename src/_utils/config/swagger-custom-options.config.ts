import { SwaggerCustomOptions } from '@nestjs/swagger';

const swaggerCustomOptions: SwaggerCustomOptions = {
  useGlobalPrefix: true,
  swaggerOptions: {
    // persistAuthorization: true,
    tryItOutEnabled: true,
    displayRequestDuration: true,
    filter: true,
  },
};

export default swaggerCustomOptions;
