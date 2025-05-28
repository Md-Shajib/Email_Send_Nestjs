import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto/send-mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendMail(data: SendMailDto): Promise<void> {
    const { to, from, subject, template, variables } = data;
    try {
      await this.mailerService.sendMail({
        to: to, // Replace with recipient email
        from: from, // Replace with sender email
        subject: subject, // Replace with your subject
        template: template, // Replace with your template name
        context: {
          first_name: variables?.first_name, // Replace with dynamic data if needed
          verification_code: variables?.verification_code,
          view_order_details_link: variables?.view_order_details_link,
          
        },
      });
    } catch (error) {
      // Handle error appropriately
      console.error('Error sending mail:', error);
    }
  }
}
