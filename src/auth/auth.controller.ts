import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(){}

    @Post('sign-up')
    async userSignUp(){
        console.log("Success! Now start development");
    }
}
