import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Todo extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;
    
    @Column
    title: string;
    
    @Column
    description: string;
    
    @Column
    status: boolean;
}
