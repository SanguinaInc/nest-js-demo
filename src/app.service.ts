import { Injectable } from '@nestjs/common';
import { RGB, TestRequestDto, TestResponseDto } from './app.model';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AppService {
  /**
   * Creates a test using a request object and returns a structured response
   * @param request {TestRequestDto}
   * @returns {TestResponseDto}
   */
  createTestRequest(request: TestRequestDto): TestResponseDto {
    const result = this.calculateTest(request.rgbList);
    return plainToInstance(TestResponseDto, result);
  }

  /**
   * Calculates the score of the test
   * @param rgbList {RGB[]} - List of RGB values
   * @returns { { score: number, total: number }} - Calculated score and total of all RGB values
   */
  calculateTest(rgbList: RGB[]): { score: number; total: number } {
    let total = 0;
    for (const rgb of rgbList) {
      total += rgb[0] + rgb[1] + rgb[2];
    }
    const score = total / (rgbList.length * 768);
    return { total, score };
  }
}
