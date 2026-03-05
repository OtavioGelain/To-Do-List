import bcrypt from 'bcrypt'

export class CryptPassword{
    static async encryptedPassword(password: string){
        const encryptedPassword= await bcrypt.hash(password, 8)
        return encryptedPassword
    }
}