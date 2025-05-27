import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.example.com', // Replace with your SMTP host
          auth: {
            user: '', // Replace with your SMTP user
            pass: '', // Replace with your SMTP password
          },
        },
        defaults: {
          from: 'shajib@gmail.com', // Replace with your default sender email
        },
        template: {
          dir: join(__dirname, 'templates'), // Path to your email templates
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
