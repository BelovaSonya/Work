import * as argon2 from 'argon2';

class AuthService {
    public async SignUp(email, password, name): Promise<any> {
        const passwordHashed = await argon2.hash(password);

        const userRecord = await UserModel.create({
            password: passwordHashed,
            email,
            name,
        });
        return{
            user: {
                email: userRecord.email,
                name: userRecord.name,
            },
        }
    }
}