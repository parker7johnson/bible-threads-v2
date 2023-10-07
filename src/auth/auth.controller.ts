import { Body, Controller, Post } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Controller('auth')
export class AuthController {

    @Post('register')
    async register(@Body() body : {userName : string, email : string, password : string}) {
        const {userName, email, password} = body;

        try {
            const userRecord = await admin.auth().createUser({
                email : email,
                password : password,
                displayName : userName
            });


            await admin.firestore().collection('users').doc(userRecord.uid).set({
                userName,
                email
            });

            return { message : 'Registration successful'};

        } catch (error) {
            console.log('there was an error during registration : ' + error);
        }
    }
}
