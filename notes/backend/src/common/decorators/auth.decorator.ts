import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';

export function Auth() {
  return applyDecorators(UseGuards(AuthGuard));
}
