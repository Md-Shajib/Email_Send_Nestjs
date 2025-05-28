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
          host: 'sandbox.smtp.mailtrap.io', // Replace with your SMTP host
          port: '2525',
          auth: {
            user: 'b8ae85d66a1d17', // Replace with your SMTP user
            pass: '8d45cec8494875', // Replace with your SMTP password
          },
        },
        defaults: {
          from: '"No Reply" <no-reply@example.com>', // Replace with your default sender email
        },
        template: {
          dir: join(process.cwd(), 'src', 'mail', 'templates'), // Path to your email templates
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
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
