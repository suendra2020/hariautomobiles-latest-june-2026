# Hari Automobiles - Multi-Brand Car Service Workshop

A modern, responsive website for Hari Automobiles, Bangalore's premier independent multi-brand car repair workshop specializing in Fiat and Jeep vehicles.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme** - Toggle between dark and light modes
- **Booking System** - Integrated booking modal with WhatsApp integration
- **Service Catalog** - Comprehensive wash and detailing services
- **Contact Management** - Multiple contact channels and location information
- **SEO Optimized** - Structured data, meta tags, and Open Graph support
- **Fast Performance** - Built with Vite for optimal load times

## Tech Stack

- **Frontend Framework** - React 19 with TypeScript
- **Build Tool** - Vite 6
- **Styling** - Tailwind CSS 4 with custom theme
- **Icons** - Lucide React
- **Animations** - Motion library
- **Video Streaming** - HLS.js for adaptive bitrate streaming

## Getting Started

### Prerequisites

- Node.js 22.13.0 or higher
- npm 10.0.0 or higher

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hari-automobiles
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment

### Netlify Deployment

This project is configured for seamless deployment on Netlify.

1. **Connect your repository** to Netlify
2. **Build settings** are automatically configured via `netlify.toml`
3. **Deploy** - Netlify will automatically build and deploy on push

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod
```

### Environment Variables

Create a `.env.local` file in the root directory (not committed to git):

```env
# Add any environment variables needed for your deployment
```

See `.env.example` for reference.

## Project Structure

```
hari-automobiles/
├── src/
│   ├── components/        # Reusable React components
│   ├── views/            # Page views
│   ├── assets/           # Images and static assets
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles with Tailwind
│   ├── data.ts           # Static data
│   └── types.ts          # TypeScript types
├── public/
│   └── _redirects        # Netlify redirect rules
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── netlify.toml          # Netlify configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Key Components

- **Header** - Navigation and theme toggle
- **HomeView** - Landing page with hero section and services
- **ServicesView** - Detailed service offerings
- **BookingModal** - Appointment booking interface
- **ContactView** - Contact information and inquiry form
- **FloatingButtons** - Quick access WhatsApp and booking buttons

## Booking System

The booking system integrates with:
- **FormSubmit.co** - Form submission handling
- **WhatsApp API** - Direct messaging integration
- **LocalStorage** - Client-side booking history

## Performance Optimizations

- Vite for fast build times and HMR
- Code splitting and lazy loading
- Optimized images and assets
- Caching strategies configured in `netlify.toml`
- CSS-in-JS with Tailwind for minimal bundle size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`
5. Submit a pull request

## License

All rights reserved. Hari Automobiles © 2024

## Support

For issues or questions, please contact:
- **Phone** - +91 9845352109
- **Email** - Contact form on website
- **Location** - Kada Agrahara Main Road, Bangalore 560077
