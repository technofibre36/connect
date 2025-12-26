# 🚀 YuvaSetu - Frontend Documentation

**Tagline:** *"Turning Ambitions into Achievements"*

## Overview

YuvaSetu is a comprehensive crowdfunding and mentorship platform designed to empower young entrepreneurs from Tier 2 and Tier 3 cities across India. The platform connects innovative startup ideas with micro-investors and experienced mentors.

## 🎯 Key Features

### For Entrepreneurs
- ✅ Submit startup ideas with video pitches
- ✅ Get verified by expert reviewers
- ✅ Access to mentorship from industry leaders
- ✅ Real-time funding progress tracking
- ✅ Dashboard to manage ideas and investor communication

### For Investors
- ✅ Browse verified startup ideas across 8+ categories
- ✅ Micro-investment starting from ₹500
- ✅ Track portfolio and returns
- ✅ Support innovation in small-town India
- ✅ Secure payment gateway integration

### For Mentors
- ✅ Profile showcase
- ✅ Connect with young entrepreneurs
- ✅ Share expertise and build network
- ✅ Track mentorship impact

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/yuvasetu` | Home page with hero, stats, featured ideas |
| `/yuvasetu/browse` | Browse all ideas with filters and search |
| `/yuvasetu/idea/[id]` | Individual idea detail page with investment option |
| `/yuvasetu/submit` | Idea submission form |
| `/yuvasetu/dashboard` | User dashboard (investor/entrepreneur views) |
| `/yuvasetu/mentors` | Mentor directory and application |
| `/yuvasetu/how-it-works` | Platform explanation and FAQ |

## 🎨 Design System

### Brand Colors
- **Primary Orange:** `#f97316` (orange-600)
- **Secondary Orange:** `#ea580c` (orange-600)
- **Accent:** Gradient from orange-500 to orange-600
- **Background:** `#f9fafb` (gray-50)
- **Text:** `#1f2937` (gray-800)

### Typography
- **Headings:** Bold, large sizes (text-4xl to text-6xl)
- **Body:** text-base to text-lg
- **Font:** System fonts via Tailwind

### Components
- **IdeaCard:** Displays idea summary with progress bar
- **YuvasetuNavbar:** Orange gradient nav with mobile menu
- **YuvasetuFooter:** Multi-column footer with links
- **Buttons:** Rounded-full with gradient backgrounds
- **Forms:** Clean inputs with orange focus rings

## 🗂️ Project Structure

```
client/
├── app/
│   └── yuvasetu/
│       ├── page.tsx                    # Home page
│       ├── browse/
│       │   └── page.tsx               # Browse ideas with filters
│       ├── submit/
│       │   └── page.tsx               # Idea submission form
│       ├── idea/
│       │   └── [id]/
│       │       └── page.tsx           # Individual idea detail
│       ├── dashboard/
│       │   └── page.tsx               # User dashboard
│       ├── mentors/
│       │   └── page.tsx               # Mentor directory
│       └── how-it-works/
│           └── page.tsx               # How it works page
├── components/
│   ├── YuvasetuNavbar.tsx             # Navigation component
│   ├── YuvasetuFooter.tsx             # Footer component
│   └── IdeaCard.tsx                   # Idea display card
└── lib/
    └── mockData.ts                     # Sample data (ideas, stats, mentors)
```

## 🧪 Mock Data

The platform uses mock data for demonstration:

- **6 Sample Ideas** across different categories
- **3 Mentor Profiles** with expertise areas
- **Platform Stats:** 1247+ ideas, 8932+ investors, ₹42.5L raised
- **8 Categories:** Technology, Handicrafts, Agriculture, Education, Healthcare, Environment, Food, Social Impact

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser:
```
http://localhost:3000/yuvasetu
```

## 📸 Screenshots

### Home Page
- Hero section with call-to-action
- Live platform statistics
- Category explorer
- Featured ideas showcase
- Success story highlight

### Browse Ideas
- Search and filter functionality
- Category-based filtering
- Sort by popularity/funding/recent
- Grid of idea cards with progress

### Idea Detail
- Full idea description
- Investment modal
- Progress tracking
- Entrepreneur profile
- Investor count and days remaining

### Dashboard
- Toggle between investor/entrepreneur view
- Investment portfolio (for investors)
- Idea management (for entrepreneurs)
- Real-time stats and analytics

## 🔧 Customization

### Adding New Categories
Edit `lib/mockData.ts`:
```typescript
export const categories = [
  { id: 'new-category', name: 'New Category', icon: '🔥' },
  // ...
];
```

### Updating Brand Colors
Modify Tailwind classes in components:
```tsx
// Change from orange-600 to any color
className="bg-orange-600" → className="bg-blue-600"
```

### Adding New Pages
Create new route in `app/yuvasetu/new-page/page.tsx`

## 🎯 Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement actual payment gateway (Razorpay/Paytm)
- [ ] Add video upload functionality
- [ ] Real-time chat between investors and entrepreneurs
- [ ] Email notifications
- [ ] Regional language support
- [ ] Mobile app (React Native)
- [ ] AI-powered idea matching
- [ ] Analytics dashboard with charts
- [ ] Social sharing integration

## 💡 Key Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - State management (useState, useEffect)
- **Next.js Navigation** - useRouter, useParams, Link

## 📊 Platform Statistics (Mock)

- 1,247+ Ideas Funded
- 8,932+ Active Investors
- ₹42.5 Lakhs+ Total Raised
- 342+ Successful Startups
- 156+ Cities Covered
- 234+ Active Mentors

## 🌟 Success Metrics

According to the business plan:
- **Short-term (Year 1):** 500+ youth mentored, 100+ ideas funded
- **Long-term (Year 3-5):** 10,000+ entrepreneurs, 1,000+ sustainable startups

## 📞 Support

For questions or issues:
- Email: support@yuvasetu.in (mock)
- Phone: 1800-123-4567 (mock)

## 🏆 Credits

YuvaSetu Frontend - Built with ❤️ for Young India

---

**Note:** This is a frontend prototype with mock data. Backend API integration and payment gateway setup required for production deployment.
