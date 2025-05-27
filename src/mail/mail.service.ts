import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendMail(): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: '', // Replace with recipient email
        from: '', // Replace with sender email
        subject: 'Test Email', // Replace with your subject
        template: 'welcome', // Replace with your template name
        context: {
          name: 'User', // Replace with dynamic data if needed
        },
      });
    } catch (error) {
      // Handle error appropriately
      console.error('Error sending mail:', error);
    }
  }
}
