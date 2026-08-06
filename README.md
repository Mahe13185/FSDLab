# 🚀 Full Stack Development (FSD) Lab

This repository contains all the experiments, programs, and practice exercises completed as part of the **Full Stack Development (FSD) Laboratory**. The primary objective of this repository is to document the concepts learned during lab sessions and serve as a reference for future learning.

---

## 📚 Course Information

* **Course:** Full Stack Development Lab
* **Technology Stack:** Node.js (Current)
* **IDE:** Visual Studio Code
* **Runtime:** Node.js
* **Language:** JavaScript (ES Modules)

---

## 📂 Repository Structure

```text
FSDLab/
│
├── Experiment-01/
├── Experiment-02/
├── Experiment-03/
├── self_practice/
├── README.md
└── ...
```

Each experiment folder contains:

* Source code
* Sample programs
* Practice files
* Additional notes (if applicable)

---

## 🧪 Experiments

| Experiment | Topic                                 | Status      |
| ---------- | ------------------------------------- | ----------- |
| 01         | Introduction to Node.js & HTTP Server | ✅ Completed |
| 02         | Coming Soon                           | ⏳           |
| 03         | Coming Soon                           | ⏳           |

> The table will be updated as new experiments are completed.

---

## 💻 First Experiment

### Creating a Simple HTTP Server

The first experiment demonstrates how to create a basic HTTP server using Node.js.

### Features

* Importing the built-in `http` module
* Creating an HTTP server
* Sending HTML responses
* Listening on a specific port
* Viewing the output in a web browser

Example:

```javascript
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.write("<p>This is a sample HTTP server.</p>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
```

---

## ▶️ Running the Programs

### 1. Clone the Repository

```bash
git clone https://github.com/Mahe13185/FSDLab.git
```

### 2. Navigate to the Project

```bash
cd FSDLab
```

### 3. Run a Program

```bash
node filename.js
```

Example:

```bash
node server.js
```

---

## 🛠 Prerequisites

* Node.js (v20 or later recommended)
* Visual Studio Code
* Git

Verify your installation:

```bash
node -v
npm -v
```

---

## 🎯 Learning Objectives

Through this lab, I aim to:

* Learn the fundamentals of Node.js
* Understand server-side JavaScript
* Build HTTP servers
* Work with modules and packages
* Learn Express.js
* Build REST APIs
* Gain hands-on experience in backend development

---

## 📖 Topics Covered

* Node.js Basics
* HTTP Module
* File System Module
* Events
* Modules
* NPM
* Express.js
* Routing
* Middleware
* REST APIs
* Database Connectivity
* Full Stack Development Concepts

---

## 👨‍💻 Author

**Mahendra**

Computer Science Engineering Student

---

## ⭐ Notes

This repository is maintained as part of my academic Full Stack Development Lab. It will be updated regularly with new experiments, practice programs, and improvements throughout the course.
