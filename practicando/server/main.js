//import '../imports/api/tasks.js';
import '../imports/api/handleLogin.js';


import { Accounts } from 'meteor/accounts-base';

//Accounts.sendVerificationEmail('uz4ApTbaGma54BFuY', 'kpruiz11@' );

Accounts.sendResetPasswordEmail('KNBC7dMZfJWAuDtk4', 'kpruiz11@gmail.com' );
/*eteor.startup(function () {

process.env.MAIL_URL = 'smtp://localhost:3000/';
console.log('envio email');
});*/
