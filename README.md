# Hansini K - Developer Portfolio

A modern, responsive developer portfolio website showcasing skills, projects, and achievements.

## 🎨 Features

- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Dark Theme** - Modern dark theme with vibrant accent colors
- **Smooth Animations** - Engaging scroll animations and hover effects
- **Skill Cards** - Organized skill showcase with icons
- **Project Gallery** - Highlight your best work with project cards
- **Timeline Education** - Interactive education timeline
- **Contact Form** - Get in touch functionality
- **Social Links** - Connect on GitHub, LinkedIn, Twitter
- **Scroll to Top** - Quick navigation button
- **Intersection Observer** - Performance-optimized animations

## 📁 Project Structure

```
Portfolio-Hans/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── (add your profile picture here)
└── resume.pdf (optional - add when ready)
```

## 🚀 Getting Started

### Local Development

1. **Clone or Download** this repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser, or
   - Use a local server for better development experience:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx http-server
     ```
   - Visit `http://localhost:8000`

3. **Customize Content**
   - Update your information in `index.html`
   - Modify colors in `assets/css/styles.css` (CSS variables at top)
   - Add your profile picture to `assets/images/`

## 🎯 Customization Guide

### Update Your Information

1. **Basic Info** - Edit name, role, and bio in `index.html`
2. **Profile Picture**
   - Replace the placeholder in `assets/images/` folder
   - Update the image src in `index.html`

3. **Colors** - Edit CSS variables in `assets/css/styles.css`:
   ```css
   :root {
       --primary-color: #00d4ff;     /* Main accent color */
       --secondary-color: #ff006e;   /* Secondary accent */
       /* ... other colors ... */
   }
   ```

4. **Add Resume**
   - Save your resume as `resume.pdf` in the root folder
   - The download button will work automatically

5. **Social Links**
   - Update GitHub, LinkedIn, Twitter URLs in `index.html`
   - Find `href="https://github.com"` and replace with your profile

6. **Contact Information**
   - Update email, phone, and location in the Contact section
   - Configure form submission (see below)

### Form Submission Setup

The contact form currently shows a placeholder message. To enable email notifications:

#### Option 1: Formspree (Recommended - Free)
1. Go to [formspree.io](https://formspree.io/)
2. Create a free account and add your form
3. Update the form in `index.html` with Formspree's endpoint

#### Option 2: EmailJS
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Set up your email service
3. Add EmailJS script to `index.html` and configure in `assets/js/script.js`

#### Option 3: Netlify Forms
If deploying on Netlify:
1. Add `netlify` attribute to the form in `index.html`
2. Netlify will automatically capture submissions

## 📦 Deployment

### Deploy on GitHub Pages (Free)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select `main` branch as source
   - Your site will be live at `https://yourusername.github.io/portfolio`

### Deploy on Netlify (Recommended)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select portfolio repository

2. **Build Settings**
   - Build command: (leave empty)
   - Publish directory: (leave empty or set to `.`)

3. **Done!**
   - Netlify will auto-deploy on every push to main
   - Get a custom domain or use Netlify's subdomain

### Deploy on Render

1. **Push to GitHub** (if not already done)
2. **Connect on Render**
   - Go to [render.com](https://render.com)
   - Create new Static Site
   - Connect GitHub
   - Build command: (leave empty)
   - Publish directory: `/`

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactivity and scroll effects
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Segoe UI)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Sections Included

1. **Navigation** - Sticky navbar with smooth scrolling
2. **Hero** - Eye-catching introduction
3. **About** - Brief bio with stats
4. **Skills** - Categorized skill showcase
5. **Projects** - Featured project cards
6. **Certifications** - Achievements and certifications
7. **Education** - Interactive timeline
8. **Languages** - Language proficiency
9. **Contact** - Contact form and information
10. **Footer** - Social links and copyright

## ✨ Features Details

### Animations
- Scroll reveal animations for cards
- Hover effects on interactive elements
- Smooth transitions throughout
- Floating background elements in hero section

### Responsive
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Adaptive grid layouts
- Touch-friendly buttons and links

### Performance
- Lazy loading for images
- Optimized CSS animations
- Minimal JavaScript
- Fast load times

## 🐛 Troubleshooting

### Images Not Loading
- Ensure images are in `assets/images/` folder
- Check image file paths in `index.html`
- Use correct filename extensions

### Links Not Working
- Verify href attributes in `index.html`
- Check social media URLs are correct
- Test on different browsers

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path is correct
- Verify styles.css is in `assets/css/` folder

### Contact Form Not Working
- Choose a form submission service (Formspree, EmailJS, Netlify)
- Update form configuration accordingly
- Test email notifications after setup

## 📝 License

This portfolio template is free to use and modify for your own projects.

## 💡 Tips

1. **Keep Content Updated** - Update your portfolio regularly
2. **Optimize Images** - Compress images before uploading
3. **Get Feedback** - Have others review your portfolio
4. **Monitor Analytics** - Add Google Analytics to track visitors
5. **SEO Optimization** - Update meta tags in `index.html` for better search visibility

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the browser console for errors
3. Test on different browsers
4. Ensure all files are in correct locations

---

**Ready to deploy?** Choose your hosting platform above and get your portfolio live! 🚀

Last updated: March 20, 2026
