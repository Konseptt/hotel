# Grand Azure Hotel - Luxury Website

A modern, responsive website for the Grand Azure Hotel built with Next.js, React, and Tailwind CSS.

![Grand Azure Hotel](public/placeholder.svg)

## Overview

This project is a complete website for the Grand Azure Hotel, featuring:

- Modern, responsive design
- Interactive components with animations
- Booking functionality
- Room, dining, and amenities showcases
- Contact form with toast notifications

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: Custom UI components based on [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Carousels**: [Embla Carousel](https://www.embla-carousel.com/)
- **Charts**: [Recharts](https://recharts.org/)

## Features

- **Home Page**: Hotel overview with featured rooms and amenities
- **Rooms & Suites**: Detailed room listings with image galleries
- **Dining**: Restaurant information and menu samples
- **Amenities**: Hotel facilities and services
- **Contact**: Contact form with validation and success notifications
- **Dark Mode Support**: Fully styled for both light and dark themes
- **Mobile Responsive**: Optimized for all screen sizes

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hotel-website.git
   cd hotel-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

```
hotel/
├── app/                # Next.js app pages
│   ├── amenities/      # Amenities page
│   ├── contact/        # Contact page
│   ├── dining/         # Dining page
│   ├── rooms/          # Rooms & suites page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── ui/             # UI component library
│   ├── header.tsx      # Site header
│   └── footer.tsx      # Site footer
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Additional styles
```

## Customization

### Theming

The site uses Tailwind CSS for styling with a customized theme. Colors and other design tokens are defined in:

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS variables for theming

### Adding New Pages

Create new pages in the `app` directory following the Next.js App Router pattern.

## Deployment

This site can be deployed on Vercel, Netlify, or any other Next.js-compatible hosting:

```bash
npm run build
# or
yarn build
```

## License

[MIT License](LICENSE)

## Credits

- Design inspiration from luxury hotel websites
- Icons by [Lucide Icons](https://lucide.dev/)
- Placeholder images used for development