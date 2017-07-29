**Chase Clone Website**
<br />
-This is a full stack clone of the Chase Bank website. It allows you to create a new account, login, transfer money, and reset your password.
        
**Installing**
<br />
-If you want to install this project just clone it to your machine and then "npm i". 

**Stack**
<br />
-React with Redux, Express, Node, PostgreSQL
<br />

**Front End Highlights**
<br />
-For front end styling we relied mainly on flex and also utalized SCSS. We also used css animations for the dropdown menu on the front page and javascript for the slider on the same page. We also used positioning for the accounts page. <br />
-We mainly used Redux for data flow but we occationally moved data via basic React props. Axios helped us connect to our back end.
<br />

**Back End Highlights**
<br />
-We used customized algorithms on the back end to handle login, transfering money, resetting passwords, creating new users, and viewing account data. <br />
-We also created middleware to secure our site against repeated requests over a certain number from an IP. Nodemailer was integrated in order to assist with resetting the password and welcoming new users. The database was also indexed in order to speed up the process of responding to get requests for transactions in the future. The site enjoys full CRUD capabilities.
<br />
<br />

**Images & Walkthrough**
<br />
-Here are a few snapshots from our project.
<br />
<br />
![screen shot 2017-07-28 at 10 03 44 am](https://user-images.githubusercontent.com/24628445/28730509-b5af27f2-738d-11e7-8951-828a0cd9ff92.png) <br />
The main landing page layout was done in flex. The menu drops down from the top and then reveals each icon sequentially thanks to CSS with transition animations. The slider below the main image rotates due to javascript. The top right has a square box that contains most of the interactive functionality for this page. You can create a new account, sign in, and reset your password from this box. Each of these is protected by brute force code that tracks the requesting IP and blocks them if they make too many requests in a certain period of time. The reset password and sign up sections use Node Mailer to communicate with customers who need to reset their account or get signup information.
<br />
<br />
![screen shot 2017-07-28 at 10 03 27 am](https://user-images.githubusercontent.com/24628445/28730510-b5c4add4-738d-11e7-9694-bff71c99b41f.png) <br />
This image section was build with CSS using Flex. It is responsive.
<br />
<br />
![screen shot 2017-07-28 at 10 03 35 am](https://user-images.githubusercontent.com/24628445/28730512-b5c84dfe-738d-11e7-90d9-984d41daeb7a.png) <br />
This image section was build with CSS using Flex. It is responsive.
<br />
<br />
![screen shot 2017-07-28 at 10 03 53 am](https://user-images.githubusercontent.com/24628445/28730511-b5c4a262-738d-11e7-8b15-f4e82f41eff4.png) <br />
This is the new customer page that allows you to create a new account. This endpoint checks to see if your password and username meet certain qualifications. If it does (like uniquness for the username and complexity for both) you will be redirected to the account page and you can then see your information.
<br />
<br />
![screen shot 2017-07-28 at 10 03 53 am](https://user-images.githubusercontent.com/24628445/28730511-b5c4a262-738d-11e7-8b15-f4e82f41eff4.png) <br />
This image shows the accounts page. On the left you can see the total balance in your account and a customized ad. On the top you can see your logged in name along with other navigation symbols. You can also switch between the main account page and the transfer page. On the right side you will again see your balance and the account number you have been assigned. On the right and towards the bottom you can see the recent transactions listed for that account. All of the data for this page comes from the database and is served as soon as the user is logged in. Both the login and new customer endpoints run the data through the login function (which is responsible for sending the data to the front end on success).
<br />
<br />
![screen shot 2017-07-28 at 6 54 15 pm](https://user-images.githubusercontent.com/24628445/28740766-51d67ad0-73c6-11e7-99fd-9333309e2777.png) <br />
This final image shows the transfer page. You can transfer from one account to another as long as you meet certain qualifications. The backend will update both accounts according to your transfer amount. It will also alert you before you submit the transaction. If you visit the account page after the transfer you will see the result.
<br />
<br />
**Authors**
<br />
Christopher <br />
-Linkedin: https://www.linkedin.com/in/christopherv/ <br />
-Portfolio site: http://portfolio.myefficient1.com/

Josh <br />
-Linkedin: https://www.linkedin.com/in/joshuawilcken/ <br />
-Portfolio site: http://joshwilcken.wixsite.com/portfolio/ <br /> <br />

Chase <br />
-Linkedin: https://www.linkedin.com/in/chase-pettyjohn/ <br />
-Portfolio site: tchasepettyjohn.wixsite.com/hello <br /> <br />


Shon <br />
-Linkedin: https://www.linkedin.com/in/pxdas/ <br /> <br />
