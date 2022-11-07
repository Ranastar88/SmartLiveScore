export class Partita{
    campionato?:string;
    sport?:string;
    dataOra?: Date;
    squadraCasa?:string;
    squadraOspiti?:string;
    punteggioCasa:number = 0;
    punteggioOspiti:number = 0;
    live:boolean = false;
}