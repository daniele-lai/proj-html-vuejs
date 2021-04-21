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
    ],
    cards: [
      {
        img: '26',
        name: 'Julia Aann',
        job: 'COO Sofbox'
      },
      {
        img: '27',
        name: 'Mac Znder',
        job: 'Manager Sofbox'
      },
      {
        img: '25',
        name: 'Uramaki Tempura',
        job: 'Janitor Sofbox'
      }
    ],
    clicked: undefined,
    datePost: dayjs().format('MMMM D, YYYY')
  },
  methods: {
    nextCard: function () {
      const first = this.cards.shift();
      this.cards = this.cards.concat(first);
      this.clicked = 2;
    },
    prevCard: function () {
      const last = this.cards.pop();
      this.cards = [last].concat(this.cards);
      this.clicked = 1;
    }
  }
})
