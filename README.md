# 👥 User Profiles – ReactJS Frontend Assignment

A modern, responsive **User Profiles Application** built using **React.js** as part of SimplyFi Softech's Frontend Developer Assignment.

This project was built in **two phases** to demonstrate understanding of React fundamentals (Assignment 1) and advanced UI/UX implementation (Assignment 2).

---

## 📌 Assignment Overview

### 🎯 Objective
Build a single-page React application that fetches user data from a public API and displays them as profile cards, with responsiveness, state management, and UI enhancements.

---

## 🧰 Tools & Technologies Used

| **Category**         | **Tool / Tech** |
|---------------------|----------------|
| **Frontend**        | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="30" /> **React.js** |
| **UI Library**      | <img src="https://avatars.githubusercontent.com/u/12101536?s=200&v=4" width="30" /> **Ant Design** (Assignment 2) |
| **Styling**         | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="30" /> **CSS3** + **Bootstrap** (Assignment 1) |
| **State Management**| React Hooks (`useState`, `useEffect`) |
| **API**             | [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) + [DiceBear Avatars](https://avatars.dicebear.com) |
| **Version Control** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="30" /> **Git & GitHub** |
| **Deployment**      | <img src="https://vercel.com/vc-ap-vercel-marketing/_next/static/media/vercel-logotype-dark.9f447f76.svg" width="30" /> **Vercel** |

---

## 🔄 Assignment 1 vs Assignment 2 – Changes Implemented

| **Feature**              | **Assignment 1 (Beginner)** | **Assignment 2 (Advanced)** |
|-------------------------|----------------------------|-----------------------------|
| **UI Library**          | Bootstrap (basic styling)  | Ant Design (professional UI components) |
| **Responsiveness**      | Desktop-only layout        | Fully responsive (mobile, tablet, desktop) |
| **Data Fetching**       | Fetch API inside `useEffect` | Same, but with better error handling & loading states |
| **Components**          | `App.js`, `UserCard.js`    | Additional components for modal forms, state management |
| **User Interactions**   | Static display only        | Interactive UI – Edit buttons, Modal forms |
| **State Management**    | `useState`, `useEffect`    | "Lifting state up" – central state in `App.js` |
| **Styling**             | Bootstrap grid & cards     | Ant Design `<Card>`, `<Button>`, `<Modal>` |
| **User Experience**     | Basic loading spinner      | Polished UX with Ant Design loader & validation |

---

## 🛠️ Core Features Implemented (As per Assignment)

✅ **Fetch User Data:** From [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)  
✅ **Generate Dynamic Avatars:** Using DiceBear API based on usernames  
✅ **Display Loading State:** Show spinner while fetching users  
✅ **List Rendering:** Map through users and render individual cards  
✅ **Responsive Layout:** Desktop, tablet, and mobile support  
✅ **Modal for Editing:** Open modal to edit user details (Assignment 2)  
✅ **State Lifting:** Maintain user data in parent component for consistency  
✅ **Deployed to Vercel:** Live version accessible for testing  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

# Clone the repository
git clone https://github.com/brucelee03/users-profiles.git

# Navigate to project folder
cd users-profiles

# Install dependencies
npm install

# Start the development server
npm start


Your app will now be running at: **[http://localhost:3000](http://localhost:3000)**

---

## 📸 Screenshots

| **Desktop View**                                 | **Mobile View**                                |
| ------------------------------------------------ | ---------------------------------------------- |
| ![Desktop Screenshot](https://res.cloudinary.com/ddneepysv/image/upload/v1758278374/Screenshot_2025-09-19_160251_mfm8ir.png) | ![Mobile Screenshot](https://res.cloudinary.com/ddneepysv/image/upload/v1758272517/Screenshot_2025-09-19_143214_f3h28k.png) |

---

## 📄 Assignment Reference

<details>
<summary><strong>Click to expand</strong></summary>

### A. Assignment 1 (Beginner)

* **Create React App** using `create-react-app`
* **Fetch API data** using `fetch()` in `useEffect`
* **Store data** in state using `useState`
* **Display users** with `.map()`
* **Show loading spinner** until data is fetched
* **Style with Bootstrap** to match the provided desktop demo

### B. Assignment 2 (Advanced)

* **Install & use Ant Design**
* **Create responsive layout** using Ant Design's grid system
* **Replace Bootstrap cards** with Ant Design `<Card>` components
* **Add interactive elements** (Edit, Delete buttons)
* **Open modal** with `<Modal>` & `<Form>` components to edit user data
* **Lift state up** to manage all users centrally in `App.js`
* **Deploy live** on Vercel and submit both GitHub repo & live link

</details>

---

## 👨‍💻 Author

**Rohit (Hunter)**
🔗 [LinkedIn](https://www.linkedin.com/in/rohit25603/) | 🔗 [GitHub](https://github.com/brucelee03)

---

## 🤝 Contributions

Contributions, issues, and feature requests are welcome.
Feel free to fork the repo and submit a pull request.

---
