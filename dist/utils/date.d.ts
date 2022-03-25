export declare class DateChat {
    date?: Date;
    previusDate?: Date;
    private now;
    private readonly days;
    private readonly months;
    constructor(date?: Date, previusDate?: Date);
    private formateDate;
    private messageTime;
    private addMinutes;
    format(format: string): string | number | void | Date;
}
