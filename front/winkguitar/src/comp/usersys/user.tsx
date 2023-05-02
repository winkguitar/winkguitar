import crypto from "crypto";

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    isMember: boolean;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegistrationData {
    username: string;
    email: string;
    password: string;
}

const hashedPassword = (password: string): string {

    //store salt in .env file
    const salt = 'HfUMk=?Ui=2Ou.X*r3B-21uifLG4nhu81:JLpGk:NbS=QgYB41IKR*ct=/wz9pRI';
    const hash = crypto.createHash('sha256');

    hash.update(password + salt);
    return hash.digest('hex');
}

function login(credentials: LoginCredentials): User | null {
    //Authenticate User

    const user = findUserByEmail(credentials.email);
   
    if(user.password === hashedPassword){
        return user;
    }
        return null;
    }

    function register(registrationData: RegistrationData): User {
        //Hash the password
       const checkedPass = hashedPassword(registrationData.password);

        function getNextUserId(id: number);

        function saveUserToDatabase();

        
        //Save to the DB
        const user: User = {
            id: getNextUserId(),
            username: registrationData.username,
            email: registrationData.email,
            password: checkedPass,
            isMember: false,
        };

        saveUserToDatabase(user);
        return user;
    }

    export default {User};