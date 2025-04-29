## 🎉 Support My Work

If you'd like to support this project, you can [Donate via Stripe](https://donate.stripe.com/8wMaGZasG52o2gobII)!

[![Donate](https://img.shields.io/badge/Donate-Stripe-blue.svg)](https://donate.stripe.com/8wMaGZasG52o2gobII)



# Monday.com Webhook Server

THIS GITHUB REPOSITORY IS FREE TO USE YOU'LL NEED TO START YOUR OWN REPOSITORY TO UPDATE THE .ENV FOR YOUR MONDAY.COM API KEY.
This is a Node.js server to handle webhooks from Monday.com.
It verifies the challenge during webhook setup and logs incoming webhook events.                                     Final action is to remove (copy) suffix from duplicated items.

## Usage

1. Go to [Visual Studio Code](https://code.visualstudio.com/) and download this program.
    a. Basic download just run through the prompt... do not add any other features.

2. Navigate to [GitHub](https://github.com/) and create an account.
    a. Create a new repository by clicking your icon on the upper right page, click repository, click new (green button)
    b. MAKE THIS PRIVATE it will contain your Monday.com API later in the tutorial.
    
3. Download Git to your pc [Git for Windows](https://git-scm.com/downloads/win) | [Git for Mac](https://git-scm.com/downloads/mac)

4. Configure Git
    a. Open Visual 

2. Create a Render Account at [Render](https://render.com/).
    a. Create a Web Service
    b. Navigate to the Public Git Repository tab
    c. Enter in https://github.com/Anthony11989/Copy-Remove-Suffix and Connect

3. Parameters for Render Web Service
    a. Name - leave as is
    b. Project - disregard
    c. Language - Node
    d. Branch - main
    e. Region - Oregon (US West)
    f. Root Director - disregard
    g. Build Command - npm install
    h. Start Command - npm start
    i. Instance Type - I use free as it suites what I need... if you find a lag in removal of (copy) then you might need to upgrade for faster processing.

    j. Enviroment Variables - disregard
    k. Advanced - disregard

4. Deploy Web Service

4. Use the `/copyremove` endpoint for Monday.com webhook integration.
