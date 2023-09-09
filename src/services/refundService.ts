import { Refund } from "../types/refund";
import { Location, Source } from "../enums/refund";

export class RefundService {

    private refundList: Refund[] = [
        new Refund("Emma Smith", Location.US, "1/2/2020", Source.PHONE, "1/2/2021", "6:00", "1/2/2021", "09:00"),
        new Refund("Benjamin Johnson", Location.EUROPE, "12/2/2020", Source.WEB, "2/1/2021", "6:30", "1/2/2021", "23:00"),
        new Refund("Olivia Davis", Location.EUROPE, "1/2/2020", Source.WEB, "2/2/2021", "13:00", "2/2/2021", "20:00"),
        new Refund("Ethan Anderson", Location.US, "1/11/2011", Source.WEB, "2/1/2021", "13:00", "2/2/2021", "16:00"),
        new Refund("Sophia Wilson", Location.US, "2/1/2020", Source.PHONE, "2/1/2021", "22:00", "2/2/2021", "5:00"),
        new Refund("Liam Martinez", Location.EUROPE, "1/1/2020", Source.WEB, "1/1/2021", "11:00", "11/1/2021", "12:00")
    ];

    private TOSDate: Date = new Date("1/2/2020");

    get(): Refund[] {
        //TODO CALL API
        return this.refundList;
    };

    getTermsOfServiceDate(): Date{
        return this.TOSDate;
    }
}