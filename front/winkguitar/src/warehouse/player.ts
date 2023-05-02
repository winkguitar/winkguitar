class Player {
    greeting: string;
    age!: number;
    yearsPlayed!: number;
    plays!: string[];

    constructor(message: string){
        this.greeting = message;
    }

    greet(){
        return `${this.age}${this.yearsPlayed}${this.plays}`;
    }
}


export default Player;