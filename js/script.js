var app = new Vue({
  el: '#app',
  data: {
    links: ['Home', 'About Us', 'Features', 'Testimonials', 'Contact Us'],
    footer: [
      {
        name: 'Menu',
        subnav: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog']
      },
      {
        name: 'About Us',
        subnav: ['About Sofbox', 'Roadmap', 'How it Work', 'Team', 'News']
      },
      {
        name: 'Quick Links',
        subnav: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog']
      }
    ]
  }
})
