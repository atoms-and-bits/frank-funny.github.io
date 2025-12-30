# EmbeddedCtrl Website Deployment Guide

## 📁 File Structure

Your website consists of 3 main files:

```
yourusername.github.io/
├── index.html          (Main HTML structure)
├── style.css           (All styling)
├── script.js           (All JavaScript functionality)
├── favicon.svg         (Your chosen favicon)
└── your-photo.jpg      (Your profile photo - optional)
```

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it exactly: `yourusername.github.io` (replace with your actual username)
4. Set to **Public**
5. Click "Create repository"

### Step 2: Upload Files
1. Click "Add file" → "Upload files"
2. Drag and drop all 3 files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Optionally add:
   - `favicon.svg` (choose from the 8 designs I created)
   - `your-photo.jpg` (your profile picture)
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes

### Step 4: Access Your Site
Your website will be live at:
```
https://yourusername.github.io
```

## ✏️ Customization Checklist

### In `index.html`:
- [ ] Replace "Your Name Here" in Profile section
- [ ] Add your bio/story (3 paragraphs)
- [ ] Update highlights (Education, Experience, etc.)
- [ ] Change `your-photo.jpg` to your actual photo filename
- [ ] Update contact information (email, phone, location)
- [ ] Fill in Books section with your books
- [ ] Add blog posts
- [ ] Update entrepreneurship ventures
- [ ] Replace social media links in footer

### In `style.css`:
- [ ] Optionally adjust colors in `:root` variables
- [ ] Customize fonts if desired
- [ ] Adjust spacing/sizing if needed

### In `script.js`:
- [ ] No changes needed unless adding custom features

## 🎨 Favicon Selection

I created 8 favicon designs for you. Choose your favorite:

1. **PID Control Loop** - Classic feedback control diagram
2. **Microcontroller IC** - Realistic chip with pins
3. **State Machine** - FSM with transitions
4. **Signal Processing** - ADC conversion
5. **Infinite Loop** - Continuous operation symbol
6. **Hexagon Circuit** - Network topology
7. **PWM Control** - Pulse-width modulation
8. **Ladder Logic** - PLC automation

Save your chosen design as `favicon.svg` and upload to repository.

## 🔧 Testing Locally (Optional)

To test before deploying:

1. Create a folder on your computer
2. Put all 3 files in it
3. Double-click `index.html` to open in browser
4. Test all features and links

## 📱 Mobile Testing

After deployment, test on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes

## 🐛 Troubleshooting

### Site not loading?
- Wait 2-5 minutes after enabling Pages
- Check repository name is exactly `yourusername.github.io`
- Ensure files are in root directory (not in a subfolder)

### CSS/JS not working?
- Verify file names are exactly: `style.css` and `script.js`
- Check for typos in `<link>` and `<script>` tags
- Open browser console (F12) to check for errors

### Images not showing?
- Verify image filename matches exactly in HTML
- Use lowercase filenames (e.g., `photo.jpg` not `Photo.JPG`)
- Ensure images are in root directory with HTML files

## 🎯 Next Steps

After deployment:

1. **Content**: Fill in all placeholder text
2. **Projects**: Add your actual project details and links
3. **Blog**: Write and publish blog posts
4. **SEO**: Add meta descriptions for better search rankings
5. **Analytics**: Consider adding Google Analytics
6. **Custom Domain**: Optionally purchase and connect a custom domain

## 💡 Additional Features to Consider

- Add a resume/CV download button
- Integrate with GitHub API to show live repositories
- Add a newsletter signup form
- Include project demo videos/GIFs
- Add testimonials section
- Create project detail pages

## 📞 Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all files are uploaded correctly
3. Review GitHub Pages documentation
4. Check that repository is set to Public

---

**Built with**: HTML5, CSS3, Vanilla JavaScript  
**Hosting**: GitHub Pages (Free)  
**Performance**: Optimized for speed and SEO  
**Mobile**: Fully responsive design

Good luck with your website! 🚀