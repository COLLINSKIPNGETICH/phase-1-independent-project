# phase-1-independent-project

Transport Management System
Welcome to the Transport Management System project! This system is designed to facilitate the management of transportation requests, display transport details, and provide a platform for customer feedback. Below is an overview of the project.

Table of Contents
Introduction
Transportation Request Form
Transport Details
Customer Feedback
Server-side Implementation
Client-side Implementation

// Introduction
The Transport Management System is a web-based application that helps streamline the process of requesting transportation, displaying available transport details, and collecting customer feedback. It consists of an HTML user interface for customers and a server-side implementation using Node.js and Express.

// Transportation Request Form
Customers can submit transportation requests through the provided form. The form includes fields for the customer's name, contact number, destination, and additional comments. Upon submission, the request is sent to the server, which handles the email notification using Nodemailer.

To request transportation, fill out the form and click the "Request Transport" button. You will receive a notification that a vehicle will be assigned shortly.

// Transport Details
The system displays details of available transport options in a table. The table includes information such as the type of vehicle, vehicle number, driver's name, goods capacity (in tonnes), passengers per vehicle, and cost. The transport details are dynamically generated using JavaScript and can be updated as needed.

// Customer Feedback
Customers can submit feedback through the provided link. Click on "Click here to send a notification email" to provide feedback via email. This feature is intended for general notifications and communications with the system administrator.

// Server-side Implementation
The server-side of the Transport Management System is implemented using Node.js and Express. The server listens on port 3000 and includes an endpoint /sendEmail to handle transportation requests. Nodemailer is used to send email notifications to the system administrator.

Please make sure to replace the placeholder email and password in the server-side script with your own email credentials.

// Client-side Implementation
The client-side of the system utilizes HTML, CSS, and JavaScript. The displayTransportDetails function dynamically populates the transport details table, while the requestTransport function displays an alert upon transportation request.

For any questions or issues, please contact Collins via email at <collinskipngetich60@gmail.com>.

Thank you for using the Transport Management System!
