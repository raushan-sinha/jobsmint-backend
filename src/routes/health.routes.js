import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Backend is running'
    })
    console.log(`Backend is running successfully with ${res.statusCode}`)
})

export default router;