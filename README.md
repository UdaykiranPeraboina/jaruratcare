# Jarurat Care - Patient Records Dashboard

A modern, responsive patient management system built with React, featuring comprehensive patient record management, search functionality, and a beautiful user interface.

![Jarurat Care Dashboard](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Core Features
- **Landing Page** with modern design and feature highlights
- **Patient Management System** with full CRUD operations
- **Advanced Search** functionality to filter patients by name
- **Patient Details Modal** for viewing comprehensive patient information
- **Add New Patient Form** with validation
- **Responsive Design** that works seamlessly on desktop and mobile devices
- **State Management** using React Context API and Hooks
- **Loading States** with smooth animations
- **Error Handling** with retry functionality

### Technical Highlights
- Built with **React 18** and **Vite** for optimal performance
- **React Router** for seamless navigation
- **Axios** for API calls
- **Context API** for global state management
- **CSS3** animations and gradients for modern UI
- **Mobile-first responsive design**

## 📸 Screenshots

### Home Page
- Hero section with animated elements
- Feature cards highlighting key capabilities
- Statistics dashboard
- Call-to-action buttons

### Patients Page
- Grid layout for patient cards
- Real-time search functionality
- Add new patient button
- Patient status indicators

### Patient Details
- Modal view with comprehensive information
- Edit and delete functionality
- Medical history display
- Contact information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jarurat-care.git
   cd jarurat-care
   ```

2. **Navigate to project directory**
   ```bash
   cd vite-project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
vite-project/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── PatientCard.jsx # Patient card component
│   │   ├── PatientModal.jsx# Patient details modal
│   │   ├── SearchBar.jsx   # Search input component
│   │   ├── AddPatientForm.jsx # Add patient form
│   │   ├── Loading.jsx     # Loading spinner
│   │   └── Error.jsx       # Error display component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Patients.jsx   # Patients listing page
│   │   └── About.jsx       # About page
│   ├── context/           # Context providers
│   │   └── PatientContext.jsx # Patient data context
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🔧 API Integration

The application currently uses JSONPlaceholder API for mock data. The data is transformed to match patient records structure with:
- Patient personal information (name, age, contact)
- Medical details (blood group, medical history)
- Status tracking (active, recovered, under treatment)

To integrate with a real backend:
1. Update the API endpoint in `PatientContext.jsx`
2. Adjust the data transformation logic as needed
3. Implement authentication if required

## 💻 Technologies Used

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.0
- **Routing:** React Router DOM 6
- **HTTP Client:** Axios
- **Styling:** CSS3 with modern features
- **State Management:** React Context API + Hooks
- **Icons:** Unicode emojis for better accessibility

## 🎨 Design Features

- **Modern Gradient Design** with purple theme
- **Card-based Layout** for better organization
- **Smooth Animations** using CSS keyframes
- **Responsive Grid System** for all screen sizes
- **Interactive Hover Effects** for better UX
- **Modal Overlays** for detailed views
- **Loading States** with spinners
- **Error Boundaries** for graceful error handling

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoints at 768px for tablets
- Flexible grid layouts
- Touch-friendly interface
- Collapsible navigation menu
- Optimized modal views for mobile

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or use Netlify CLI: `netlify deploy`

## 🔄 Future Enhancements

- [ ] Backend integration with real database
- [ ] User authentication and authorization
- [ ] Advanced filtering (by date, status, etc.)
- [ ] Export patient data to PDF/CSV
- [ ] Appointment scheduling system
- [ ] Medical history timeline
- [ ] File upload for medical documents
- [ ] Email/SMS notifications
- [ ] Dark mode theme
- [ ] Multi-language support

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email contact@jaruratcare.com or raise an issue in the GitHub repository.

## 👏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- JSONPlaceholder for providing free mock API

---

**Made with ❤️ for Jarurat Care**# jaruratcare
