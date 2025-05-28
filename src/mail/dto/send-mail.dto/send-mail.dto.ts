import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';


export class SendMailDto {
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsOptional()
  from?: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  template: string;

  @IsOptional()
  variables?: Record<string, any>;
}
