import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export class TestRequestDto {
  @ApiProperty({
    description: 'List of RGB values',
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'number',
      },
      minItems: 3,
      maxItems: 3,
    },
    example: [[0, 0, 0]],
  })
  rgbList: RGB[];
}

export class TestResponseDto {
  @ApiProperty({ description: 'Calculated score from 0 to 100' })
  @Expose()
  score: number;
}
