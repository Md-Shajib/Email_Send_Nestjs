import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { SendMailDto } from './mail/dto/send-mail.dto/send-mail.dto';

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Post('send-mail')
  async sendMail(@Body() data: SendMailDto): Promise<void> {
    return this.mailService.sendMail(data);
  }
}
