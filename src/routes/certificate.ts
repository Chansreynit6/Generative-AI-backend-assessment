
import { Router } from "express";
import protectRoute from "../middleware/auth";
import { createCertificate} from "../controllers/certificate";

const router = Router();

router.post("/create",protectRoute(),createCertificate);
export default router;