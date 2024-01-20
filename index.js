 const transportDetails = [
      { type: 'Truck', number: 'KCA 120S', driver: 'John Doe', goods: 5, passengers: 0, cost: 100 },
      { type: 'Bus', number: 'KCD 156D', driver: 'Jane Smith', goods: 2, passengers: 20, cost: 50 }
    ];
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/sendEmail', (req, res) => {
  // Extract form data
  const { name, contact, destination, comments } = req.body;

  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'collinskipngetich60@gmail.com',
      pass: 'your-email-password' 
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'collinskipngetich60@gmail.com',
    subject: 'Transportation Request',
    text: `Name: ${name}\nContact: ${contact}\nDestination: ${destination}\nComments: ${comments}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

    function displayTransportDetails() {
      const tableBody = document.getElementById('transportTableBody');
      tableBody.innerHTML = '';

      transportDetails.forEach(transport => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${transport.type}</td>
          <td>${transport.number}</td>
          <td>${transport.driver}</td>
          <td>${transport.goods}</td>
          <td>${transport.passengers}</td>
          <td>${transport.cost}</td>
        `;
        tableBody.appendChild(row);
      });
    }

    function requestTransport() {
      alert('Transport requested! A vehicle will be assigned shortly.');
    }

    function submitFeedback() {
      const feedback = document.getElementById('customerFeedback').value;
      alert(`Feedback submitted: ${feedback}`);
    }

    initMap();
    displayTransportDetails();


