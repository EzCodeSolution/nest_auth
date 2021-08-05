import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('gun')

export class GunEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    token: string;

    @Column()
    gun: string;

}