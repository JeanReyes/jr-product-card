export declare class DateChat {
    date?: Date | undefined;
    previusDate?: Date | undefined;
    private now;
    private readonly days;
    private readonly months;
    constructor(date?: Date | undefined, previusDate?: Date | undefined);
    private formateDate;
    private messageTime;
    private addMinutes;
    format(format: string): string | number | void | Date;
}
