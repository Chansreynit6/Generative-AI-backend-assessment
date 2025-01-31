import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Certificate } from "../entity/certificate.entity";
import { UserInfo } from "../entity/user.entity";

export const createCertificate = async (req: Request, res: Response) => {
    try {
        const userRepo = AppDataSource.getRepository(UserInfo);
        const certificateRepo = AppDataSource.getRepository(Certificate);
        const { userId, courseName } = req.body;
        const user = await AppDataSource.getRepository(UserInfo).findOne({ where: { id: userId } });
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: "Admin role required." });
        }
        const certificate = new Certificate();
        certificate.courseName = courseName;
        certificate.user = userId;
        return res.status(201).json({ message: "successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating", });
    }
};
