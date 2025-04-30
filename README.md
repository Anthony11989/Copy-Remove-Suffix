## 🎉 Support My Work

If you'd like to support this project, you can [Donate via Stripe](https://donate.stripe.com/8wMaGZasG52o2gobII)!

[![Donate](https://img.shields.io/badge/Donate-Stripe-blue.svg)](https://donate.stripe.com/8wMaGZasG52o2gobII)



# Monday.com Webhook Server

THIS GITHUB REPOSITORY IS FREE TO USE YOU'LL NEED TO START YOUR OWN REPOSITORY TO UPDATE THE .ENV FOR YOUR MONDAY.COM API KEY.

This is a Node.js server to handle webhooks from Monday.com.

It verifies the challenge during webhook setup and logs incoming webhook events.                                     

Final action is to remove (copy) suffix from duplicated items.

YOUTUBE VIDEO

[Watch how its done start to finish](https://youtu.be/2BKrJT5R1Bg)

## Usage

## 1. Go to [Visual Studio Code](https://code.visualstudio.com/) and download this program.
a. Basic download just run through the prompt... do not add any other features.

## 2. Navigate to [GitHub](https://github.com/) and create an account.
a. Create a new repository by clicking your icon on the upper right page, click repository, click new (green button). Name the repository whatever you want, if the name is available...

b. MAKE THIS PRIVATE it will contain your Monday.com API later in the tutorial.

## 3. Download Git to your pc [Git for Windows](https://git-scm.com/downloads/win) | [Git for Mac](https://git-scm.com/downloads/mac)

## 4. Configure Git Program
a. Open Visual Studio Code and a Terminal (tab can be found at the top of the program)

b. Run these commands (use your full name and registered email address on GitHub.com)
   
    git config --global user.name "ENTER IN YOUR NAME"
    
    git config --global user.email "YOUR@EMAIL.COM"

## 5. Retrive GitHub Repository to your local machine (so you can add in your API from Monday.com)
a. On your computer wherever you want to store this code and files for modifications this is where you need to do so... I have mine in my Directory files under my main user. C:\users\"USERNAME"\

b. In Open Visual Studio Code the same terminal type the code below
    
    git clone https://github.com/Anthony11989/Copy-Remove-Suffix

## 6. Adding in your Monday.com API
a. In Visual Studios Code click File at the upper left, Open FOLDER, and choose the "copy-remove-suffix" folder.

b. Open the .env file by just clicking on it once.

c. In Monday.com if you have admin privledges you will click the upper right icon, and click Developers (My Access Tokens) or Administration (Connections > API)

d. Do not share your API Key with anyone... ANYONE!

e. Copy the API key and paste it after the "=" sign in the .env file. (make sure you delete any comments after the "=")

f. Save the file by clicking save under files or Ctrl + S

## 7. Upload into your own Private GitHub Repository
a. In Visual Studio Code... since its the first time to upload in your repository follow the code below.

    git init
    git branch -M main
    git commit -m "Monday copy remove"
    git remote add origin https://github.com/YourGitHubUsername/NameofRepository.git
    git push -u origin main

b. If done properly, UPON REFRESHING YOUR BROWSER your repository should now retain all files uploaded.

## 8. Create a Render Account at [Render](https://render.com/).
a. Create a Web Service

b. Connect your GitHub account to Render

c. Select your repository (the one with your newly uploaded files)

## 9. Parameters for Render Web Service
a. Name - change it to something unique

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

l. Deploy Web Service

m. MOST IMPORTANT STEP! once your server is live near the top you should see something like this (depending on the name you gave it) https://copy-remove-suffix.onrender.com. Copy this down you will need this in the next step.

## 10. Use the `/copyremove` in your webhook.
a. In Monday.com open your automations

b. Click "Templates" at the top of the automations pop-up

c. Search "Webhook" and click the big purple box that says "webhooks"

d. Choose "When item is created, send a webhook"

e. Paste in your server name from Render.com. You can find it under the Events > right under your Git Hub account information. 

f. MAKE SURE YOU ADD IN /copyremove at the end of the URL you pasted into the monday.com webhook automation.

g. Start Automation 

H. ALL DONE!

## 🎉 Support My Work

If you'd like to support this project, you can [Donate via Stripe](https://donate.stripe.com/8wMaGZasG52o2gobII)!

[![Donate](https://img.shields.io/badge/Donate-Stripe-blue.svg)](https://donate.stripe.com/8wMaGZasG52o2gobII)
