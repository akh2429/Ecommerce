require("./DB/config.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./DB/User.js");
const products = require("./DB/Products.js")
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: '*' }));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Signup API ======================================================================================================

app.post("/register", async (req, res) => {
    try {
        const { email, fullname, newPassword, mobileNumber, fullAddress, pincode, repeatPassword } = req.body;
        if (newPassword !== repeatPassword) { return res.status(400).json({ ConfirmPassword: "Password do not match" }) };
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const user = new users({
            email,
            fullname,
            newPassword: hashedPassword,
            mobileNumber,
            fullAddress,
            pincode
        });
        await user.validate();
        let result = await user.save();
        result = result.toObject();
        delete result.newPassword;
        res.send(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});


//Login API =======================================================================================================
const secretKey = "pass2429@#+-"
app.post('/login', async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        let user = await users.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(newPassword, user.newPassword);
            if (isMatch) {
                const payLoad = { userId: user._id, email: user.email };
                const token = jwt.sign(payLoad, secretKey, { expiresIn: "1h" });
                res.send({ token: token });
            } else {
                res.send({ result: "Incorrect Password" });
            }
        } else {
            res.send({ result: "User Not Found" });
        }
    } catch (error) {
        res.status(400).send(error)
    }
});

//LandingPage API ==================================================================================================

app.post("/landingpage", async (req, res) => {
    let result = await products.distinct("category");
    res.send(result);
});

// Product LandingPage API =========================================================================================

app.post("/productlanding", async (req, res) => {
    let result = await products.find(req.body);
    res.send(result);
});



// Product Display page API =========================================================================================

app.post("/finalCheckout", async (req, res) => {
    let result = await products.findById(req.body._id);
    res.send(result);
});

// cartPage API ==================================================================================================

app.get("/cart", async (req, res) => {
    try {
        const productId = req.query.productId;
        let result = await products.findById(productId);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.post("/cart", async (req, res) => {
    const { userId, productId, quantity, action } = req.body;
    try {
        const user = await users.findById(userId);
        if (user && action === "addProduct") {
            const check = user.cart.find(val => val.prodId.toString() === productId);
            if (check) {
                res.send("Product Already Exist");
                return;
            } else {
                user.cart.push({ prodId: productId, qty: quantity });
                await user.save();
                res.send("Item Saved");
            }
        } else if (user && action === "addProductQuantity") {
            const check = user.cart.find(val => val.prodId.toString() === productId);
            if (check) {
                check.qty++;
                await check.save();
                await user.save();
                res.send("Quantity Increased");
            } else {
                res.send("Item dont exist");
            }
        } else if (user && action === "decreasequantity") {
            const check = user.cart.find(val => val.prodId.toString() === productId);
            if (check) {
                if (check.qty > 1) {
                    check.qty--;
                    await check.save();
                    await user.save();
                    res.send("Quantity Decreased");
                } else {
                    res.send("Quantity Can not be less than one")
                }

            } else {
                res.send("Item dont exist");
            }
        }
        else if (user && action === "deleteItem") {
            const checkIndex = user.cart.findIndex(val => val.prodId.toString() === productId);
            if (checkIndex >= 0) {
                user.cart.splice(checkIndex, 1);
                await user.save();
                res.send("Item Deleted");
            } else {
                res.send("Item doesn't exist");
            }
        }

    } catch (error) {
        res.send(error);
    }

});

app.post("/cartdata", async (req, res) => {
    const { id } = req.body;
    try {
        const cart = await users.findById(id).populate("cart.prodId");
        res.send(cart.cart)
    } catch (error) {
        res.send(error);
    }

})

app.listen(5050, () => console.log("Server Started"));