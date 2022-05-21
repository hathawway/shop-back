import {Column, PrimaryGeneratedColumn} from 'typeorm';

export class RecalcPrice {
    ids: number[];
    wantCurrency: string;
}
