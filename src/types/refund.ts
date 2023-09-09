import { Source, Location } from "../enums/refund";

export class Refund {
    public name: string;
    public location: Location;
    public signUpDate: string;
    public requestSource: Source;
    public investmentDate: string;
    public investmentTime: string;
    public refundRequestDate: string;
    public refundRequestTime: string;

    constructor(name: string, location: Location, signUpDate: string, requestSource: Source, investmentDate: string, investmentTime: string, refundRequestDate: string, refundRequestTime: string) {
       this.name = name;
       this.location = location;
       this.signUpDate = signUpDate;
       this.requestSource = requestSource;
       this.investmentDate = investmentDate;
       this.investmentTime = investmentTime;
       this.refundRequestDate = refundRequestDate;
       this.refundRequestTime = refundRequestTime;
    }

    private getDateFormat(date: string, time?: string){
        let string = date;
        if(this.location === Location.EUROPE){
            let splited = date.split("/");
            string = splited[1] + "/" + splited[0] + "/" + splited[2];
        }

        if(time)
            string = string + " " + time;

        return new Date(Date.parse(string));
    }

    public getInvestmentDateFormat(){
        return this.getDateFormat(this.investmentDate, this.investmentTime);
    }

    public getRequestDateFormat(){
        return this.getDateFormat(this.refundRequestDate, this.refundRequestTime);
    }

    public getSignUpDateFormat(){
        return this.getDateFormat(this.signUpDate);
    }

    public getHoursElapsed(): number {
        return Math.abs(this.getInvestmentDateFormat().getTime() - this.getRequestDateFormat().getTime()) / 36e5;
    };
}