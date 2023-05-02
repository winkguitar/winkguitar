class Player {
    id!: number;
    username!: string;
    email!: string;
    password!: string;
    greeting: string;
    age!: number;
    yearsPlayed!: number;
    plays!: string[];
    isMember!: boolean;

    constructor(message: string){
        this.greeting = message;
    }

    greet(){
        return `${this.age}${this.yearsPlayed}${this.plays}`;
    }

    setMember(){
        if(this.isMember === false){
            this.isMember = true;
        }
        else {
            return "This user is already a member!";
        }
    }
}


export default Player;