<h1 align="center">Welcome to the Real Estate Listing Platform on GitHub!🏠</h1>
<br/>
<h2>Problem</h2>
The users in the real estate market faced significant challenges in both property buying and renting processes. The absence of a centralized and user-friendly platform hindered property sellers from effectively listing their properties, while prospective buyers struggled to find suitable properties. Similarly, renters encountered difficulties in finding rental properties, and property owners faced challenges in efficiently listing their rental units.
The lack of a seamless platform caused significant time wastage and frustrations for all parties involved, leading to a disconnect between property sellers, buyers, landlords, and tenants. Additionally, the absence of reliable resources hindered their ability to inquire about available properties or rental units efficiently.<br>
<h2>Solution</h2>
Our dynamic Real Estate Listing Platform bridges the gap between property sellers and buyers, offering a centralized platform where property owners can list their properties for sale or rent. Prospective buyers can easily search for available properties using advanced filters, view virtual tours, and communicate directly with property owners. Thus making the property renting and buying process efficient and hassle-free.
<h2>About the Project</h2>
Built with the MERN stack, this platform combines the efficiency of React.js for the frontend and the robustness of Express.js for the backend. Seamlessly integrating AWS services, including SES for email sending during registration and password reset, and S3 for secure storage of property photos, we ensure a smooth and secure user experience. Platform's database leverages MongoDB, ensuring optimal data management and retrieval for a seamless property listing and search experience.
<h2>Guest User Walkthrough</h2>
<p align="center"> 
  <img src="https://github.com/vaibhav5140/Real-estate-MERN/assets/85643531/fa63294e-0df4-453a-be0b-6d8bb8eb1854"/>
 </p> 

<h2>Logged In User Walkthrough</h2>
<p align="center"> 
  <img src="https://github.com/vaibhav5140/Real-estate-MERN/assets/85643531/87224039-f44b-4aa1-a791-72b8d18314e7"/>
 </p> 
<h2>UML Activity Diagram</h2><br>

![Screenshot (488)](https://github.com/vaibhav5140/Real-estate-MERN/assets/85643531/f7f3b0e2-9af0-4fbd-84da-5cab3a2df02c)

<h2>Project Limitation</h2>

Please be aware thatthe project employs the AWS SES (Simple Email Service) free service to send emails for user email verification during registration, property enquiries, and password reset. However, the free service is limited to sending emails only to pre-registered email addresses within AWS SES. Therefore, users must use email addresses already registered in AWS to receive verification and communication emails effectively.
To ensure that users can explore and tour the website without email verification hurdles, these are credentials for accessing the site:
<br>
Email: ahujavaibhav825@gmail.com<br>
Password: Vaibhav@123<br>
Please note that our project is hosted on a free platform, which may result in slightly longer loading times.
<h2>Deployed Link</h2>
https://real-estate-mern.vercel.app/


<h2>Project Setup</h2>

<h4>Prerequisites</h4>
Node.js (Version 14 or higher)<br>
npm (Node Package Manager)
<h4>Installation</h4>
Clone the repository to your local machine:<br>
git clone {repository_url.git} <br>
cd {project_directory}
<h4>Install project dependencies using npm:</h4>
npm install
<h4>Configuration</h4>
Create a .env file in the root of your project directory.<br>
Add the following environment variables to the .env file:<br><br>
AWS_ACCESS_KEY={aws_access_key} # Replace with your AWS Access Key<br>
AWS_SECRET_KEY={aws_secret_key} # Replace with your AWS Secret Key<br>
DATABASE_URI={mongodb_connection_string} # Replace with your MongoDB connection string<br>
JWT_SECRET_KEY={your_jwt_secret_key} # Replace with your preferred JWT secret key<br>
<h4>Usage</h4>
To start the backend server, run the following command:<br>
<strong>npm run start</strong><br>
The server will automatically reload whenever you make changes to the code, thanks to nodemon.
<br><br>
To start the frontend server, run the following command:<br>
<strong> npm start </strong><br>
For more information refer README.md in client folder

<h2>Backend Server Documentation</h2>
https://docs.google.com/document/d/1lLi14Z_F5m1ttf5935ht0Tz_rA_Sc5ZsYGnCUHVugWY/edit?usp=sharing


