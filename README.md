# System Design Simulator (SDS)

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![React Flow](https://img.shields.io/badge/React_Flow-11.11.4-FF0072.svg)](https://reactflow.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An interactive, visual system design tool that helps developers and engineers practice system design interviews by building scalable architectures through an intuitive drag-and-drop interface.

![System Design Simulator Preview](./preview.png)

## 🌟 Features

### 🎨 Visual Architecture Builder

- **Drag & Drop Interface**: Build system architectures by dragging components onto the canvas
- **Real-time Connections**: Connect components with animated edges to show data flow
- **Component Library**: Pre-built components for common system design patterns

### 🏗️ Available Components

- **Client Layer**: User, Client App
- **Infrastructure**: CDN, Load Balancer
- **Backend**: API Gateway, Services
- **Data Layer**: Database, Cache
- **AI/ML**: AI Service
- **Communication**: Notification Service

### ⚙️ Configuration & Customization

- **Component Settings**: Configure instances, regions, and other properties
- **Visual Customization**: Change colors and labels for each component
- **Position Management**: Precise positioning and layout control

### 💾 Import/Export & Persistence

- **JSON Export/Import**: Save and load architecture designs
- **PDF Export**: Generate professional documentation of your designs
- **Local Storage**: Automatic saving of work in progress

### 🎯 Interview Preparation

- **Real-world Examples**: Study architectures from WhatsApp, Netflix, Uber, and Twitter
- **Practice Scenarios**: Solve common system design interview problems
- **Architecture Patterns**: Learn scalable design patterns and best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nitin9706/SDS.git
   cd SDS
   ```

2. **Install dependencies**

   ```bash
   cd Client
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Building Your First Architecture

1. **Access the Builder**: Click "Open Builder" from the landing page
2. **Add Components**: Drag components from the sidebar onto the canvas
3. **Connect Components**: Click and drag from connection points to create edges
4. **Configure Settings**: Select components to modify properties in the right panel
5. **Export Your Design**: Use the export button to save as PDF or JSON

### Component Configuration

Each component can be configured with:

- **Label**: Custom naming for the component
- **Color**: Visual customization
- **Instances**: Number of instances (for scaling)
- **Region**: Geographic deployment location

### Saving & Loading

- **Save**: Click the save button to store your architecture locally
- **Export**: Generate PDF documentation or JSON files
- **Import**: Load previously saved JSON architecture files

## 🏗️ Project Structure

```
SDS/
├── Client/                    # React Frontend Application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── BuilderPage/  # Main builder interface
│   │   │   │   ├── Builder.jsx
│   │   │   │   ├── Canvas.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Topbar.jsx
│   │   │   │   ├── Configbar.jsx
│   │   │   │   ├── CustomNode.jsx
│   │   │   │   ├── CustomEdge.jsx
│   │   │   │   └── Simulation.jsx
│   │   │   ├── LandingPage/  # Landing page
│   │   │   └── LoginPage/    # Authentication (future)
│   │   ├── context/          # React context providers
│   │   │   └── NodeContext.jsx
│   │   ├── utils/            # Utility functions
│   │   │   └── exportUtils.js
│   │   ├── constants.js      # Application constants
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Application entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
├── server/                   # Backend API (planned)
└── README.md
```

## 🛠️ Tech Stack

### Frontend

- **React 19**: Modern React with concurrent features
- **Vite**: Fast build tool and development server
- **React Flow**: Powerful library for node-based diagrams
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

### Development Tools

- **ESLint**: Code linting and formatting
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🎨 Design Philosophy

The System Design Simulator embraces a **visual-first approach** to system design education. Traditional system design interviews rely heavily on verbal explanations and whiteboard drawings. SDS bridges this gap by providing an interactive, visual environment where:

- **Concepts become tangible**: Abstract ideas like load balancing and caching become visual components
- **Relationships are clear**: Data flow and dependencies are immediately apparent through connections
- **Iteration is fast**: Changes can be made and visualized instantly
- **Learning is engaging**: Interactive elements make complex topics more approachable

## 📚 Learning Resources

### System Design Concepts Covered

- **Scalability**: Horizontal and vertical scaling patterns
- **Load Balancing**: Distribution of traffic across multiple servers
- **Caching**: Performance optimization through data caching
- **Database Design**: Data storage and retrieval patterns
- **API Design**: RESTful and GraphQL API patterns
- **Microservices**: Service-oriented architecture patterns

### Real-World Examples

- **WhatsApp**: Messaging system architecture
- **Netflix**: Video streaming platform design
- **Uber**: Ride-sharing service architecture
- **Twitter**: Social media platform scaling

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Areas for Contribution

- **New Components**: Add more system design components
- **Templates**: Create pre-built architecture templates
- **Backend Integration**: Implement the simulation backend
- **Testing**: Add comprehensive test coverage
- **Documentation**: Improve documentation and tutorials

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Flow](https://reactflow.dev/) for the amazing node-based diagram library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Simple Icons](https://simpleicons.org/) for the component icons

## 📞 Support

If you have questions, suggestions, or need help:

- **Issues**: [GitHub Issues](https://github.com/nitin9706/SDS/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nitin9706/SDS/discussions)
- **Email**: [nitin@example.com](mailto:nitin@example.com)

## 🎯 Future Roadmap

### Phase 1 (Current)

- ✅ Visual architecture builder
- ✅ Component library
- ✅ Basic configuration
- ✅ Export functionality

### Phase 2 (Upcoming)

- 🔄 Backend simulation engine
- 🔄 Real-time collaboration
- 🔄 Architecture templates
- 🔄 Performance analysis

### Phase 3 (Future)

- 🔄 AI-powered suggestions
- 🔄 Cost estimation
- 🔄 Deployment automation
- 🔄 Multi-user workspaces

---

**Built with ❤️ for the developer community**

_Practice makes perfect. Start designing your scalable systems today!_ 🚀
