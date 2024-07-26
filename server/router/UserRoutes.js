import express from 'express';
import UserModel from '../model/UserModel.js';

const router = express.Router();

router.post("/signUpUser", async (req, res) => {
    const userDetails = req.body;

    try {
        const user = await UserModel.create(userDetails);

        return res.status(200).json({ status: "Success", message: "User created!!", data: user });
    } catch(err) {
        return res.status(300).json({ status: "Error", message: "Error Occurred!!!" });
    }

})

export default router;