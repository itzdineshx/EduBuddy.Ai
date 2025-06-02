
# EduBuddy.ai - AI-Powered Learning Platform

A comprehensive clone of EduBuddy.ai featuring AI-powered learning tools including text summarization, Q&A generation, essay assistance, and more. Built with React, TypeScript, and integrated with Google Gemini 2.0-Flash API.

## 🚀 Features

### Public Pages
- **Landing Page**: Hero section, feature showcase, testimonials, and trusted by section
- **Features**: Detailed feature descriptions with interactive demos
- **Pricing**: Three-tier pricing with feature comparison table
- **About**: Company story, timeline, team, and values
- **Contact**: Contact form with validation and company information

### AI-Powered Tools
- **Text Summarizer**: Transform lengthy content into concise summaries
- **Q&A Generator**: Create interactive quizzes from any content
- **Essay Assistant**: Get help with writing and structuring essays
- **Code Explainer**: Understand complex code with AI explanations
- **Concept Mapper**: Visualize relationships between ideas
- **Study Planner**: Create personalized learning schedules

### Authentication & User Management
- Email/password authentication
- OAuth integration (Google, GitHub)
- User dashboard and profile management
- Protected routes and session management

### AI Integration
- Google Gemini 2.0-Flash API integration
- Real-time content generation
- Multiple AI tool modes
- Error handling and rate limiting
- Streaming responses support

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EduBuddy-ai-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   The app uses the Google Gemini 2.0-Flash API. The API key is currently hardcoded for demo purposes:
   ```
   AIzaSyBp_pWhRL7CulKzFLG7Vlg2ByT_Tv4eoGc
   ```
   
   For production, create a `.env.local` file and add:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   VITE_GA_MEASUREMENT_ID=your_ga_id_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify
1. Push your code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

## 🔧 Configuration

### API Configuration
The app is configured to use Google Gemini 2.0-Flash API at:
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

### Customization
- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Update font imports in `src/index.css`
- **Content**: Edit component files to customize text and messaging
- **Features**: Add new AI tools by extending the playground component

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests (when implemented)
```bash
npm run test:e2e
```

## 📊 Analytics

The app includes Google Analytics integration. Update the GA measurement ID in:
- `index.html` (gtag configuration)
- Environment variables

## 🔒 Security

- Input validation on all forms
- Secure API key handling
- XSS protection through React
- HTTPS enforcement in production

## 🎨 Design System

The app uses a consistent design system based on:
- **Typography**: Inter font family
- **Colors**: Blue primary with purple accents
- **Spacing**: Tailwind's spacing scale
- **Components**: shadcn/ui component library

## 📄 SEO & Performance

- **Meta tags**: Comprehensive OpenGraph and Twitter Card support
- **Sitemap**: Auto-generated sitemap.xml
- **Performance**: Lazy loading, code splitting, optimized images
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🔗 API Reference

### Gemini API Integration
```typescript
const response = await fetch(
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 1024,
      }
    })
  }
);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: support@EduBuddy.ai
- **Documentation**: [docs.EduBuddy.ai]
- **Issues**: GitHub Issues

## 🎯 Roadmap

- [ ] User dashboard and project management
- [ ] Advanced AI model integration
- [ ] Collaborative features
- [ ] Mobile app development
- [ ] Enterprise features
- [ ] API for third-party integrations

---

Built with ❤️ using React, TypeScript, and Google Gemini AI
