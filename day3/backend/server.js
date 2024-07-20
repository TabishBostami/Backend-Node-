import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      age: 16,
      grade: "10",
      subjects: ["Math", "Science", "English"],
      contact: {
        phone: "123-456-7890",
        email: "johndoe@example.com"
      },
      address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        zip: "62701"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 15,
      grade: "9",
      subjects: ["History", "Math", "English"],
      contact: {
        phone: "234-567-8901",
        email: "janesmith@example.com"
      },
      address: {
        street: "456 Oak St",
        city: "Shelbyville",
        state: "IL",
        zip: "62565"
      }
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 17,
      grade: "11",
      subjects: ["Biology", "Chemistry", "Math"],
      contact: {
        phone: "345-678-9012",
        email: "alicejohnson@example.com"
      },
      address: {
        street: "789 Pine St",
        city: "Capital City",
        state: "IL",
        zip: "62707"
      }
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 18,
      grade: "12",
      subjects: ["Physics", "Math", "Computer Science"],
      contact: {
        phone: "456-789-0123",
        email: "bobbrown@example.com"
      },
      address: {
        street: "101 Maple St",
        city: "Ogdenville",
        state: "IL",
        zip: "62050"
      }
    },
    {
      id: 5,
      name: "Charlie Davis",
      age: 14,
      grade: "8",
      subjects: ["Art", "English", "History"],
      contact: {
        phone: "567-890-1234",
        email: "charliedavis@example.com"
      },
      address: {
        street: "202 Birch St",
        city: "North Haverbrook",
        state: "IL",
        zip: "62501"
      }
    }
  ];
  
  
  
  res.send(students);
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});