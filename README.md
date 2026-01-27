# CrackIt

🎯 **AI-Powered Interview Preparation Platform**

CrackIt is a comprehensive full-stack web application designed to help job seekers prepare for technical interviews using AI-driven question generation, real-time answer evaluation, and personalized analytics.

## 🌟 Features

### Core Functionality
- **🤖 AI-Powered Interview Simulation**: Generates role-specific interview questions using OpenAI GPT-3.5
- **📄 Resume Analysis**: Uploads and analyzes PDF resumes to extract skills, experience, and projects
- **💯 Real-time Answer Evaluation**: AI-powered evaluation with detailed feedback on relevance, clarity, and technical depth
- **📊 Performance Analytics**: Track interview performance over time with interactive charts and insights
- **🎭 Role-Based Questions**: Customize interview questions based on selected job roles (Full Stack Developer, Frontend, Backend, etc.)
- **📈 Interview Readiness Score**: Get personalized readiness scores based on resume analysis

### User Experience
- **🔐 Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **🌓 Dark/Light Theme**: Built-in theme switcher for comfortable viewing
- **📱 Responsive Design**: Fully responsive UI built with React and Tailwind CSS
- **⚡ Fast Performance**: Optimized with lazy loading and code splitting using Vite
- **🔄 Real-time Feedback**: Instant feedback on interview answers with scoring metrics

## 🛠️ Tech Stack

### Backend
- **Node.js** with **Express.js** - RESTful API server
- **MongoDB** with **Mongoose** - Database and ODM
- **OpenAI API** - AI-powered question generation and answer evaluation
- **JWT** - Secure authentication
- **Multer** - File upload handling
- **pdf-parse** - PDF resume parsing
- **bcryptjs** - Password hashing

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

## 📁 Project Structure

```
CrackIt/
├── config/
│   └── database.js              # MongoDB connection configuration
├── controllers/
│   ├── analyticsController.js   # Analytics and session history endpoints
│   ├── authController.js        # User authentication (login, register)
│   ├── interviewController.js   # Interview session management
│   └── resumeController.js      # Resume upload and analysis
├── models/
│   ├── User.js                  # User schema with resume data
│   └── InterviewSession.js      # Interview session and Q&A schema
├── routes/
│   ├── analyticsRoutes.js       # Analytics API routes
│   ├── authRoutes.js            # Authentication routes
│   ├── interviewRoutes.js       # Interview session routes
│   └── resumeRoutes.js          # Resume management routes
├── services/
│   └── aiService.js             # OpenAI integration for Q&A generation
├── middleware/
│   ├── auth.js                  # JWT authentication middleware
│   └── errorHandler.js          # Global error handling
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   ├── pages/               # Page components
│   │   ├── context/             # React context (Auth, Theme)
│   │   └── services/            # API client services
│   └── public/                  # Static assets
├── uploads/                     # Temporary resume upload directory
└── server.js                    # Express server entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- OpenAI API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CrackIt
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

2. **Start the frontend dev server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

#### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📖 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Resume Endpoints
- `POST /api/resume/upload` - Upload and analyze resume PDF (protected)
- `GET /api/resume` - Get resume data (protected)
- `PUT /api/resume/role` - Update selected role (protected)

### Interview Endpoints
- `POST /api/interview/start` - Start a new interview session (protected)
- `GET /api/interview/:sessionId` - Get interview session details (protected)
- `POST /api/interview/:sessionId/answer` - Submit an answer (protected)
- `POST /api/interview/:sessionId/complete` - Complete interview session (protected)

### Analytics Endpoints
- `GET /api/analytics` - Get user analytics and performance metrics (protected)
- `GET /api/analytics/history` - Get interview session history (protected)

## 🎯 How It Works

1. **User Registration**: Create an account with email and password
2. **Resume Upload**: Upload a PDF resume for AI analysis
3. **Role Selection**: Choose a target job role for customized questions
4. **Interview Start**: Begin an AI-generated interview session (5 questions)
5. **Answer Questions**: Type answers and receive instant AI feedback
6. **View Results**: Get detailed scores on relevance, clarity, and technical depth
7. **Track Progress**: View analytics and performance trends over time

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Protected API routes with middleware
- Input validation with express-validator
- Secure file upload handling
- CORS configuration for production

## 📊 Evaluation Metrics

Each interview answer is evaluated on:
- **Relevance**: How well the answer addresses the question
- **Clarity**: Communication effectiveness and structure
- **Technical Depth**: Level of technical understanding demonstrated
- **Missing Keywords**: Important concepts not covered in the answer

## 🌐 Deployment

The application is configured for deployment on platforms like:
- **Backend**: Render, Railway, or Heroku
- **Frontend**: Vercel, Netlify, or Render
- **Database**: MongoDB Atlas

Current deployment URL: `https://crackit-interview-ai.onrender.com`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- The React and Node.js communities
- All contributors and users of CrackIt

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Made with ❤️ to help job seekers crack their interviews!**
