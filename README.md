# HerCare – Women's Health & Wellness Platform

> A modern, responsive frontend web application designed to provide women with health tracking, wellness tools, educational resources, nutrition guidance, and community features — all in one place.

---

# About HerCare

**HerCare** is a Women's Health & Wellness Platform developed to provide a simple, organized, and user-friendly digital experience for women's health and wellness.

The platform brings together:

- 🩸 Menstrual cycle tracking
- 📅 Period calendar & prediction
- 😊 Mood & symptom tracking
- 💧 Water intake tracking
- 💊 Medicine reminders
- 🩺 Women's disease information
- 📚 Health education
- 🥗 Nutrition guidance
- 🧘 Wellness tracking
- 📰 Health & wellness articles
- 👥 Community feed
- 👩‍⚕️ Educational doctor posts
- 🔔 Notifications
- 👤 User profile
- ⚙️ Settings
- 🌙 Dark & Light mode

HerCare is currently a **frontend-focused project** using mock data and browser Local Storage. Its structure can be extended with a backend, database, authentication system, and real APIs in the future.

---

# Key Features

Home & Dashboard

- Modern healthcare landing page
- Responsive navigation
- Dashboard overview
- Quick access to health and wellness features
- Statistics and tracking cards
- Responsive layout

---

Menstrual Cycle Tracker

Users can manage their cycle-related information through a dedicated tracking interface.

### Features

- Cycle tracking
- Calendar interface
- Period prediction interface
- Cycle-related information
- Dashboard statistics

---

Mood & Symptoms Tracker

Track daily wellness information through interactive UI components.

### Includes

- Mood tracking
- Symptoms selection
- Daily wellness information
- Progress display

---

Water Intake Tracker

Monitor daily water intake through an easy-to-use tracker.

### Features

- Daily water goal
- Intake progress
- Interactive tracking
- Local Storage persistence

---

Medicine Reminder

Manage medicine reminders through a simple frontend interface.

### Features

- Add reminders
- Display reminders
- Manage reminder information
- Store data locally

---

Women's Disease Library

HerCare provides an educational disease library focused on women's health.

### Topics Include

- PCOS
- Endometriosis
- Uterine Fibroids
- Ovarian Cysts
- Menstrual Disorders
- Anemia
- Thyroid Disorders
- Other women's health conditions

### Features

- Disease cards
- Short descriptions
- Disease details
- Search
- Filtering
- Educational information

> **Note:** The disease information is provided for educational purposes and does not replace professional medical advice.

---

Health Education Center

The Health Education section provides organized educational content related to women's wellness.

### Categories

- Menstrual Health
- Reproductive Health
- Mental Wellness
- Hygiene
- Healthy Lifestyle
- General Women's Health

---

Nutrition & Diet Guide

The Nutrition Guide provides educational nutrition and wellness content.

### Includes

- Healthy food guidance
- Nutrition tips
- Iron-rich food information
- Calcium sources
- Hydration guidance
- Healthy lifestyle information

---

Wellness Tracker

The Wellness Tracker helps users monitor everyday wellness activities.

### Includes

- Daily wellness goals
- Sleep
- Exercise
- Stress management
- Meditation
- Self-care
- Progress tracking

---

Articles

HerCare includes an educational Articles section for women's health and wellness content.

### Article Cards Include

- Article title
- Category
- Author
- Published date
- Short description
- Read More option

---

Community Feed

Module 4 introduces a community interface where users can interact with educational content.

### Features

- Community posts
- Create post interface
- Like
- Comment
- Save/bookmark
- Share
- Post categories
- User information
- Post timestamps

Community interactions are handled on the frontend using React state and Local Storage.

---

Doctor Posts

A dedicated educational section for healthcare-related posts.

### Post Information

- Doctor/Expert name
- Specialty
- Verified-style badge
- Category
- Post date
- Educational content
- Read More option

> Doctor profiles and posts are mock/demo content for this frontend project.

---

Notifications

HerCare includes a notification interface for application activity.

### Features

- Notification list
- Read/unread status
- Mark as read
- Mark all as read
- Delete notification
- Notification counter
- Local Storage persistence

---

User Profile

Users can view and manage their profile information.

### Profile Includes

- Profile avatar
- Name
- Email
- Member information
- Activity summary
- Saved content
- Wellness information

Users can also update basic profile information through the frontend interface.

---

Settings

The Settings section allows users to manage application preferences.

### Sections

#### Account
- Name
- Email
- Profile settings

#### Notifications
- Community notifications
- Article notifications
- Wellness reminders
- Medicine reminders

#### Privacy
- Local data information
- Clear Local Storage

#### Appearance
- Light Mode
- Dark Mode

---

Dark & Light Mode

HerCare supports a global theme system.

### Features

- ☀️ Light Mode
- 🌙 Dark Mode
- Theme toggle
- Persistent theme preference
- Theme applied across the complete application

The selected theme is stored in Local Storage so that it remains active after refreshing the page.

---

Responsive Design

HerCare is designed to provide a consistent experience across different screen sizes.

### Supported Layouts
 Device 

- Mobile 
- Tablet 
- Desktop 

The responsive design covers:

- Navigation
- Sidebar
- Dashboard
- Cards
- Forms
- Calendar
- Articles
- Community
- Profile
- Settings
- Educational content

---

 Technology Stack

| Technology | Purpose |
|---|---|
| ⚛️ React.js | Frontend UI |
| ⚡ Vite | Development & build tool |
| 🎨 Tailwind CSS | Styling & responsive design |
| 🧭 React Router DOM | Application routing |
| 💾 Local Storage | Frontend data persistence |
| 📦 Mock JSON | Demo/educational data |
| 💡 Lucide React | Icons |
| 🎨 Figma | UI/UX planning |
| 🔧 Git | Version control |
| 🐙 GitHub | Repository & collaboration |
| ▲ Vercel | Deployment |

---

 Project Structure

HerCare/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── DashboardCard.jsx
│   │   ├── CommunityPost.jsx
│   │   ├── NotificationCard.jsx
│   │   ├── ProfileHeader.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DiseaseLibrary.jsx
│   │   ├── DiseaseDetails.jsx
│   │   ├── HealthEducation.jsx
│   │   ├── NutritionGuide.jsx
│   │   ├── WellnessTracker.jsx
│   │   ├── Articles.jsx
│   │   ├── Community.jsx
│   │   ├── DoctorPosts.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── data/
│   │   └── Mock JSON Data
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
