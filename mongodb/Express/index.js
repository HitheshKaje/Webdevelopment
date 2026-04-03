const express = require('express')
const { MongoClient } = require('mongodb')   // ✅ FIX
const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mySchool';

app.get('/', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        // ⚠️ Your collection name is wrong
        const collection = db.collection('students'); 
        const StudentsData = await collection.find().toArray();
        console.log(StudentsData)

        res.send(StudentsData);
        } catch (err) {
        console.log(err);
        res.send("Error connecting to DB");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Switch to school database
use school
// Insert sample teachers
db.teachers.insertMany([
    {
    },
    {
        _id: ObjectId("507f1f77bcf86cd799439011"),
        name: 'Dr. Kumar',
        subject: 'MongoDB',
        experience: 5
    _id: ObjectId("507f1f77bcf86cd799439012"),
        name: 'Prof. Sharma',
        subject: 'Node.js',
        experience: 8
    },
    {
        _id: ObjectId("507f1f77bcf86cd799439013"),
        name: 'Ms. Patel',
        subject: 'Express',
        experience: 3
    }
])
// Insert sample students with teacher references
db.students.insertMany([
    {
        name: 'Ali',
        age: 22,
        course: 'MongoDB',
        enrolled: true,
        teacherId: ObjectId("507f1f77bcf86cd799439011"),
        grades: [85, 90, 88]
    },
    {
        name: 'Sara',
        age: 20,
        course: 'Node.js',
        enrolled: true,
        teacherId: ObjectId("507f1f77bcf86cd799439012"),
        grades: [92, 88, 95]
    },
    {
        name: 'Ahmed',
        age: 24,
        course: 'Express',
        enrolled: true,
        teacherId: ObjectId("507f1f77bcf86cd799439013"),
        grades: [78, 82, 85]
    },
    {
        name: 'Fatima',
        CodeWithHarry
    age: 21,
        course: 'MongoDB',
        enrolled: true,
        teacherId: ObjectId("507f1f77bcf86cd799439011"),
        grades: [95, 93, 97]
    },
    {
    }
])
name: 'Ravi',
    age: 23,
        course: 'Node.js',
            enrolled: false,
                teacherId: ObjectId("507f1f77bcf86cd799439012"),
                    grades: [70, 75, 72]
