import { myContainer } from '@/inversify-config'

import { IApiService } from './Services/ApiService/Interfaces/IApiService'

import { TYPES } from '@/DI/types';

import config from '@/config'




// import nodemailer from 'nodemailer'

const api = myContainer.get<IApiService>(TYPES.ApiService)

api.Listen();

// 

async function main() {
  
  // let testAccount = await nodemailer.createTestAccount();

  // let transporter = nodemailer.createTransport({
  //   host: "smtp-relay.sendinblue.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: 'rkarshiev.new@gmail.com',
  //     pass: '0GExgs5hB8RNmFZH', // generated ethereal password
  //   },
  // });

  console.log(config.someKey, 'config.someKey');
  console.log('--------------------------------');
  console.log(config.anotherKey, 'config.anotherKey');

  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <rkarshiev.new@gmail.com>', // sender address
  //   to: "newyorrker@gmail.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}

main().catch(console.error);