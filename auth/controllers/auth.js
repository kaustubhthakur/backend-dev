const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const isuser = await User.findOne(username)
        if (isuser) {
            res.status(400).json({ message: "invalid username" });
        }
        const salt = await bcrypt.genSalt(10);
        const hsh = await bcrypt.hash(password, salt);
        const newuser = new User({
            username, email, password: hsh, role: role || 'user'
        });
        const saveuser = await newuser.save();
        res.status(201).json(saveuser);
    } catch (error) {
        console.error(error)
    }
}
const changePassword = async (req, res) => {
    try {
        const userId = req.userInfo.userId;
        const { oldpassword, newpassword } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(201).json({ success: false })
        }
        const flg = await bcrypt.compare(oldpassword, user.password);
        if (!flg) {
            res.status(400).json({ message: "mofo remember the password" });
        }
        const salt = await bcrypt.genSalt(10);
        const dx = await bcrypt.hash(newpassword, salt);
        user.password = dx;
        await user.save();
        res.status(200).json({ message: sucess });
    } catch (error) {

    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const ispassword = await bcrypt.compare(password, user.password)
        const accesstoken = jwt.sign({
            userId: user._id,
            username: user.username,
            role: user.role,
        }, process.env.JWT_SECRET, expiresIn: '15m')
    } catch (error) {
        console.error(error)
    }
}

const logout = async (req, res) => {
    try {

    } catch (error) {
        console.error(error)
    }
}