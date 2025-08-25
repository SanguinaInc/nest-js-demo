import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestRequestDto, TestResponseDto } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Creates a test using a request object and returns a structured response
   *
   * Currently there's a bug with the service and it's returning more data than it should,
   * potentially exposing how the underlying algorithm works.
   *
   * @param request {TestRequestDto}
   * @returns {TestResponseDto}
   */
  @Post('/test')
  createTest(@Body() request: TestRequestDto): TestResponseDto {
    return this.appService.createTestRequest(request);
  }
}
