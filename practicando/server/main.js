//import '../imports/api/tasks.js';
import '../imports/api/handleLogin.js';

import Steam from  'steam';

import { Accounts } from 'meteor/accounts-base';



var logOnDetails = {      
    "account_name": "d2gb0004",
    "password": "passwordrandom123",
    "auth_code" : "318964071"
};

steamClient=new Steam.SteamClient();
steamUser = new steam.SteamUser(steamClient);
steamClient.on('connected', function() {
    steamUser.logOn(logOnDetails);
         //console.log(logOnDetails);
});
//Accounts.sendVerificationEmail('uz4ApTbaGma54BFuY', 'kpruiz11@' );

//Accounts.sendResetPasswordEmail('KNBC7dMZfJWAuDtk4', 'kpruiz11@gmail.com' );
/*Meteor.startup(function () {
var logOnDetails = {
        
    "account_name": global.config.steam_user,
    "password": global.config.steam_pass,
};

process.env.MAIL_URL = 'smtp://localhost:3000/';
console.log('envio email');
});*/
