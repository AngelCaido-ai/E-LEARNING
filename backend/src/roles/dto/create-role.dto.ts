import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'test@test.com',
    description: 'Название роли',
  })
  readonly value: string;

  @ApiProperty({
    example: '',
    description: 'Описание роли',
  })
  readonly description: string;
}
