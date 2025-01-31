import "reflect-metadata"
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { RoleEnum } from "../common/types/enum";
import { Milestone } from "./milestone.entity";
import { Quiz } from "./quiz.entity";
import { Roadmap } from "./roadmap.entity";
import { Certificate } from "./certificate.entity";
@Entity({ name: "user_info" })
export class UserInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  userEmail: string;

  @Column({ nullable: true })
  userContact: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: RoleEnum[2] }) // Fix here
  role: string;

  @OneToMany(() => Roadmap, (roadmap) => roadmap.user)
  roadmaps: Roadmap[];

  @OneToMany(() => Quiz, (quiz) => quiz.user)
  quizzes: Quiz[];

  @OneToMany(() => Certificate, (certificate) => certificate.user)
  certificates: Certificate[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;
    isAdmin: any;
}
