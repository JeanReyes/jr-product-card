export class DateChat {
    private now: Date = new Date()
    private readonly days = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    private readonly months  = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agasto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    constructor(
        public date?: Date, 
        public previusDate?: Date
    ){
        this.date = date ? new Date(date) : undefined
        this.previusDate = previusDate ? new Date(previusDate) : undefined
    }

    private formateDate (format: string): (string | Date | void | number) {
        if (this.date) {
            switch(format) {
                case 'hh:mm':
                    return `${this.date.getHours()}:${this.addMinutes(this.date.getMinutes())}`
                case 'day': 
                    return this.date.getDate()
                // case 'time' :
                //     return this.isTime()
                case 'time_message' :
                    return this.messageTime()
                default: return this.date
            }
        }
    }

    private messageTime(): any {
        const dateDay = this.date?.getDate()
        const previusDay = this.previusDate?.getDate()
        const dateNow = this.now.getDate()

        // validacion para ver si los datos existen y son diferentes para hacer diferenciador de dias
        if (previusDay === undefined) {
            if (dateNow === dateDay) {
                return 'Hoy'
            } else if (dateDay && (dateNow - dateDay === 1)) {
                return 'Ayer'
            }
            if (dateDay && (dateNow - dateDay >= 7)) {
                return `${this.date?.getDate()} de ${this.months[this.date?.getMonth() as number] } de ${this.date?.getFullYear()}` 
            }
            return this.days[this.date?.getDay() as number]
        } 

        if (dateDay && (dateDay !== previusDay)) {
            if (dateNow === dateDay) {
                return 'Hoy'
            } else if (dateNow - dateDay === 1) {
                return 'Ayer'
            } else if (dateNow - dateDay >= 7) {
                return `${this.date?.getDate()} de ${this.months[this.date?.getMonth() as number] } de ${this.date?.getFullYear()}`
            }
            return this.days[this.date?.getDay() as number]
        }
    }

    // private isTime(): any {
    //     if (this.date) {
    //         if (this.now.getDate() === this.date.getDate()) {
    //             return `Hoy`
    //         } else {
    //             // if (this.)
    //             if ((this.now.getDate() - this.date.getDate()) === 1) {
    //                 return `AYER`               
    //             } else if (this.now.getDate() - this.date.getDate() === 2){
    //                 // hacer validaciones para 1 semana las anteriores enviar la fecha
    //                 return `${this.days[this.date.getDay()]}`            
    //             } else if (this.now.getDate() - this.date.getDate() === 3){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 4){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 5){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else if (this.now.getDate() - this.date.getDate() === 6){
    //                 return `${this.days[this.date.getDay()]}`
    //             } else {
    //                 return `LA FECHA`
    //             }
    //         }      
    //     }
    // }

    private addMinutes (minutes: number): any {
        if (minutes >= 0 && minutes < 9) {
            return `0${minutes}`
        }else {
            return minutes
        }
    }


    format(format: string) {
        return this.formateDate(format)
    }
}