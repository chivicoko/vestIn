const asyncHandler = require('express-async-handler');
const Deposit = require('../models/DepositModel');
const User = require('../models/UserModel');
const axios = require('axios');
const nodemailer = require('nodemailer');

// @desc    Get deposits
// @route  GET /api/deposits
// @access Private
const getDeposits = asyncHandler(async (req, res) => {
    const deposits = await Deposit.find({ user: req.user.id });
    // console.log(deposits);

    res.status(200).json(deposits);
})

// @desc    Get deposit
// @route  GET /api/deposits/{id}
// @access Private
const getUserDeposits = asyncHandler(async (req, res) => {
    const depositId = req.params.id;
    const deposit = await Deposit.findById(depositId);
    deposit.status = "Confirmed"
    deposit.save();
    // console.log(deposit);


    res.status(200).json(deposit);
});
// getUserDeposits('647d62a5b1da183d4d4f8c25');

// @desc    Set deposit
// @route  POST /api/deposits
// @access Private
const setDeposit = asyncHandler(async (req, res) => {
    const { depositAmount, depositCryptoCurrency } = req.body;
    
    if (!depositAmount || !depositCryptoCurrency) {
        res.status(400)
        throw new Error('Please select from all the required options');
    };

    const deposit = await Deposit.create({
        depositeAmount: depositAmount,
        cryptoCurrency: depositCryptoCurrency,
        user: req.user.id
    });

    
    // Email sending to the user who just deposited
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    // Using raw html to construct the mail message
    let htmlText = `
    <main>
        <header style="background-color: orangered; padding: 30px 50px; text-align: center;">
            <span style="background-color: aliceblue; padding: 35px; border-radius: 50%;">
                <span style="color: black; font-size: larger; ">U</span>
                <span style="color: orangered; font-size: larger; ">G</span>
            </span>
        </header>
        <section style="padding: 20px;">
            <h2>UltrexGold Intl.</h2>
            <h3>${req.user.username}, you have made a deposit of $${depositAmount}. <br /></h3>
            <p>Amount Deposited: <strong>$${depositAmount}</strong></p>
            <p>Cryptocurrency used: <strong>${depositCryptoCurrency}</strong></p> <br/><br/> <em>Congrats!</em> <br/>
            <small>The Admin will confirm this deposit as soon as possible.</small>
        </section>
        <footer><strong>Ultrexgold Intl. <br> <em>Best Wishes!</em></strong></footer>
    </main>
    `

    // The mail container itself
    let message = {
        from:`UltrexGold Intl. 💰 <${process.env.EMAIL}>`,
        to: `${req.user.email}`,
        subject: "Successfully Invested! 👍",
        html: htmlText
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(message, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
    // ----------

    
    // Email sending to the Administrator to notify him/her of this deposit
    let config2 = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter2 = nodemailer.createTransport(config2);

    // Using raw html to construct the mail message
    let htmlText2 = `
    <main>
        <header style="background-color: orangered; padding: 30px 50px; text-align: center;">
            <span style="background-color: aliceblue; padding: 35px; border-radius: 50%;">
                <span style="color: black; font-size: larger; ">U</span>
                <span style="color: orangered; font-size: larger; ">G</span>
            </span>
        </header>
        <section style="padding: 20px;">
            <h2>UltrexGold Intl.</h2>
            <h3>${req.user.username} has made a deposit of $${depositAmount}, yet to be confirmed.</h3><br />
            <p>Amount Deposited: <strong>$${depositAmount}</strong></p>
            <p>Cryptocurrency used: <strong>${depositCryptoCurrency}</strong></p> <br/>
            <small>Go to the site and confirm this deposit - <a href="https://ultrexgold.herokuapp.com/">Go to site</a></small>
        </section>
        <footer><strong>Ultrexgold Intl.</strong></footer>
    </main>
    `

    // The mail container itself
    let message2 = {
        from:`UltrexGold Intl. 💰 <${process.env.EMAIL}>`,
        to: `${process.env.EMAIL}`,
        subject: `${req.user.username} Invested! 👍`,
        html: htmlText2
    }

    await new Promise((resolve, reject) => {
        transporter2.sendMail(message2, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
    // ----------

    res.status(201).json(deposit);
})

// @desc    Set deposit
// @route  POST /api/deposits
// @access Private
const withdrawDeposit = asyncHandler(async (req, res) => {
    // const { depositAmount, depositCryptoCurrency } = req.body;
    
    // if (!depositAmount || !depositCryptoCurrency) {
    //     res.status(400)
    //     throw new Error('Please select from all the required options');
    // };

    // const deposit = await Deposit.create({
    //     depositeAmount: depositAmount,
    //     cryptoCurrency: depositCryptoCurrency,
    //     user: req.user.id
    // });

    // const users = await User.find();
    // console.log(users);
    // for (let i = 0; i < users.length; i++) {
    //     const user = users[i];
    // }
        
        const deposits = await Deposit.find({user: "64859b32c6f421922db11c9d"});
        let totalDepo = 0;
        for (let i = 0; i < deposits.length; i++) {
            const deposit = deposits[i];
            if (deposit.cryptoCurrency === 'Usdt bep20') {
                totalDepo += deposit.depositeAmount;
                console.log(deposit);
                console.log(totalDepo);
            }
        }
        const totalSum = deposits.reduce((total, current) => total + current.depositeAmount, 0);
        // console.log(totalSum);

    
    // // Email sending to the user who just deposited
    // let config = {
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.EMAIL,
    //         pass: process.env.PASSWORD
    //     }
    // }

    // let transporter = nodemailer.createTransport(config);

    // // Using raw html to construct the mail message
    // let htmlText = `
    // <main>
    //     <header style="background-color: orangered; padding: 30px 50px; text-align: center;">
    //         <span style="background-color: aliceblue; padding: 35px; border-radius: 50%;">
    //             <span style="color: black; font-size: larger; ">U</span>
    //             <span style="color: orangered; font-size: larger; ">G</span>
    //         </span>
    //     </header>
    //     <section style="padding: 20px;">
    //         <h2>UltrexGold Intl.</h2>
    //         <h3>${req.user.username}, you have made a deposit of $${depositAmount}. <br /></h3>
    //         <p>Amount Deposited: <strong>$${depositAmount}</strong></p>
    //         <p>Cryptocurrency used: <strong>${depositCryptoCurrency}</strong></p> <br/><br/> <em>Congrats!</em> <br/>
    //         <small>The Admin will confirm this deposit as soon as possible.</small>
    //     </section>
    //     <footer><strong>Ultrexgold Intl. <br> <em>Best Wishes!</em></strong></footer>
    // </main>
    // `

    // // The mail container itself
    // let message = {
    //     from:`UltrexGold Intl. 💰 <${process.env.EMAIL}>`,
    //     to: `${req.user.email}`,
    //     subject: "Successfully Invested! 👍",
    //     html: htmlText
    // }

    // await new Promise((resolve, reject) => {
    //     transporter.sendMail(message, (err, info) => {
    //       if (err) {
    //         console.error(err);
    //         reject(err);
    //       } else {
    //         resolve(info);
    //       }
    //     });
    //   });
    // // ----------

    
    // // Email sending to the Administrator to notify him/her of this deposit
    // let config2 = {
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.EMAIL,
    //         pass: process.env.PASSWORD
    //     }
    // }

    // let transporter2 = nodemailer.createTransport(config2);

    // // Using raw html to construct the mail message
    // let htmlText2 = `
    // <main>
    //     <header style="background-color: orangered; padding: 30px 50px; text-align: center;">
    //         <span style="background-color: aliceblue; padding: 35px; border-radius: 50%;">
    //             <span style="color: black; font-size: larger; ">U</span>
    //             <span style="color: orangered; font-size: larger; ">G</span>
    //         </span>
    //     </header>
    //     <section style="padding: 20px;">
    //         <h2>UltrexGold Intl.</h2>
    //         <h3>${req.user.username} has made a deposit of $${depositAmount}, yet to be confirmed.</h3><br />
    //         <p>Amount Deposited: <strong>$${depositAmount}</strong></p>
    //         <p>Cryptocurrency used: <strong>${depositCryptoCurrency}</strong></p> <br/>
    //         <small>Go to the site and confirm this deposit - <a href="https://ultrexgold.herokuapp.com/">Go to site</a></small>
    //     </section>
    //     <footer><strong>Ultrexgold Intl.</strong></footer>
    // </main>
    // `

    // // The mail container itself
    // let message2 = {
    //     from:`UltrexGold Intl. 💰 <${process.env.EMAIL}>`,
    //     to: `${process.env.EMAIL}`,
    //     subject: `${req.user.username} Invested! 👍`,
    //     html: htmlText2
    // }

    // await new Promise((resolve, reject) => {
    //     transporter2.sendMail(message2, (err, info) => {
    //       if (err) {
    //         console.error(err);
    //         reject(err);
    //       } else {
    //         resolve(info);
    //       }
    //     });
    //   });
    // // ----------

    // res.status(201).json(deposits);
})
withdrawDeposit();


// @desc    Update deposit
// @route  PUT /api/deposits/:id
// @access Private
const updateDeposit = asyncHandler(async (req, res) => {
    const deposit = await Deposit.findById(req.params.id);

    if (!deposit) {
        res.status(400)
        throw new Error('Deposit not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the deposit user
    if (deposit.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    const updatedDeposit = await Deposit.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedDeposit);
})

// @desc    Delete deposit
// @route  DELETE /api/deposits/:id
// @access Private
const deleteDeposit = asyncHandler(async (req, res) => {
    const deposit = await Deposit.findById(req.params.id);

    if (!deposit) {
        res.status(400)
        throw new Error('Deposit not found')
    }
    
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the deposit user
    if (deposit.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    await deposit.deleteOne();

    res.status(200).json({ id: req.params.id });
})

module.exports = { getDeposits, setDeposit, updateDeposit, deleteDeposit, getUserDeposits };