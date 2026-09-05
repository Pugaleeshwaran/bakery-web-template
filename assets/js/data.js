/* ==========================================================================
   ROSEWOOD — BAKERY WEBSITE TEMPLATE
   data.js  ·  THE ONLY FILE MOST PEOPLE NEED TO EDIT
   --------------------------------------------------------------------------
   Everything on the website — the business name, the phone number, the whole
   menu and every price — is read from this one file. Change a value here and
   all four pages update themselves.

   No build step, no npm, no server. Save the file and refresh the browser.
   ========================================================================== */

/* ==========================================================================
   1.  YOUR BUSINESS
   ==========================================================================
   Replace every value below with your own. These appear in the header, the
   footer, the contact page and the order buttons.
   -------------------------------------------------------------------------- */
window.BK_CONFIG = {

  name:    'Rosewood Bakery',
  tagline: 'Freshly Baked With Love',
  motto:   'Life is sweeter with home baked goodies',

  /* -- How customers reach you ------------------------------------------- */
  phoneDisplay: '+1 (503) 555-0142',   // shown on the page, format it however you like
  phoneRaw:     '15035550142',         // DIGITS ONLY, starting with the country code
                                       // (1 = USA/Canada, 44 = UK, 61 = AU, 91 = India)
  email:        'hello@example.com',

  addressLine1: '1420 Maple Avenue, Suite 3',
  addressLine2: 'Portland, OR 97205',

  instagram: 'https://instagram.com/',
  facebook:  'https://facebook.com/',

  /* -- Money -------------------------------------------------------------
     currencySymbol goes in front of every price on the site.
     locale controls how numbers are grouped:  en-US -> 1,250   de-DE -> 1.250
     Examples:  '$' + 'en-US'   '£' + 'en-GB'   '€' + 'de-DE'   '₹' + 'en-IN'   */
  currencySymbol: '$',
  locale:         'en-US',

  /* -- The big "Order Now" buttons ---------------------------------------
     orderChannel decides what happens when someone taps an order button:
       'whatsapp' — opens WhatsApp with the message pre-typed  (default)
       'sms'      — opens the phone's text app with the message pre-typed
       'phone'    — dials phoneRaw straight away
     orderLabel is the wording shown on those buttons and links.               */
  orderChannel: 'whatsapp',
  orderLabel:   'WhatsApp',

  /* -- Opening hours ------------------------------------------------------
     Add, remove or reword rows freely. `closed: true` greys the row out.      */
  hours: [
    { day: 'Monday — Friday', time: '9:00 AM — 8:00 PM' },
    { day: 'Saturday',        time: '9:00 AM — 9:00 PM' },
    { day: 'Sunday',          time: '10:00 AM — 6:00 PM' },
    { day: 'Public holidays', time: 'Pre-orders only', closed: true }
  ],

  noticeHours: 24                      // minimum notice you need for custom orders
};


/* ==========================================================================
   2.  PICTURES
   ==========================================================================
   Drop your photos into  assets/images/  then either:

   1. EASIEST — name the file after the item's id and change nothing here.
        blueberry-cake.webp   ->  Blueberry Cake
        nuts-brownie.webp     ->  Nuts Brownie
      .webp, .png, .jpg and .jpeg are all tried automatically.

   2. Or, if your file already has another name, point at it in the list below.

   Anything without its own picture falls back to its category photo, so a
   missing or misspelt filename can never break a card or leave a broken image
   icon on the page. Open the browser console to see what fell back.
   -------------------------------------------------------------------------- */
window.BK_IMAGE_BASE = 'assets/images/';

window.BK_IMAGES = {

  /* ---- The big pictures on the home page ----
     Leave a value blank ('') to keep the built-in hand-drawn illustration
     instead of a photo. */

  /* The cake in the hero. ONE filename shows a still picture; a LIST of
     filenames cross-fades from one to the next every 5 seconds. Add or
     remove lines freely — any number works, and one is fine. */
  'hero-cake': [
    'head-coco.webp',
    'head-red.webp',
    'head-bendo.webp',
    'head-bc.webp'
  ],

  'kitchen':     'white-forst.webp',      // "A bakery the size of one family kitchen"
  'custom-cake': 'offcation-cake.webp',   // the "Customised cakes" panel

  /* ---- The four "How an order works" steps (home page) ---- */
  'step-1': '',   // you tell us the occasion
  'step-2': '',   // we shop and mix that day
  'step-3': '',   // baked in small batches
  'step-4': '',   // finished and sealed

  /* ---- About page pictures ---- */
  'about-1': '',  // top of the About page
  'about-2': '',  // "In the pantry" section

  /* ---- Category cards (home page) ---- */
  'cakes':    'cake.webp',
  'bento':    'b-cake.webp',
  'brownies': 'browine.webp',
  'cookies':  'cookie.webp',
  'teacakes': 'teacake.webp',

  /* ---- Cakes ---- */
  'vanilla-cake':        'vennila.webp',
  'chocolate-cake':      'choco.webp',
  'black-forest-cake':   'black-forest.webp',
  'white-forest-cake':   'white-forst.webp',
  'red-velvet-cake':     'red-velvert.webp',
  'mango-cake':          'mongo.webp',
  'rose-milk-cake':      'rosemink.webp',
  'blueberry-cake':      'blueberry.webp',
  'coffee-tres-leches':  'coffe.webp',

  /* ---- Mini cakes ---- */
  'vanilla-bento':     'bendo-ven.webp',
  'chocolate-bento':   'bendo-cho.webp',
  'red-velvet-bento':  'red-v-bendo.webp',
  'custom-bento':      'costom-bento.webp',

  /* ---- Brownies ---- */
  'classic-brownie':  'classic-brownie.webp',
  'nuts-brownie':     'nut-brownie.webp',
  'nutella-brownie':  'nutella-brownie.webp',
  'caramel-brownie':  'kinder-brownie.webp',

  /* ---- Cookies ---- */
  'choco-chip-cookies':       'chochip-cookie.webp',
  'double-chocolate-cookies': 'double-cholate-cookie.webp',
  'butter-cookies':           'butter-cookie.webp',

  /* ---- Loaf cakes ---- */
  'loaf-cake-plain':  'plance-tea.webp',
  'marble-cake':      'Marble-Cake.webp',
  'chocolate-loaf':   'choco-tea-cake.webp',
  'dry-fruit-cake':   'dry-fruit-tea-cake.webp'
};


/* ==========================================================================
   3.  CATEGORIES
   ==========================================================================
   The five cards on the home page and the filter tabs on the products page.
   `id`   must match the `category` used by the products in section 4.
   `tone` is the two-colour gradient used when an item has no photo yet.
   `from` is the lowest price in that category (shown as "from $38").
   -------------------------------------------------------------------------- */
window.BK_CATEGORIES = [
  {
    id: 'cakes',
    name: 'Cakes',
    shortName: 'Cakes',
    tone: ['#8E2436', '#4A2314'],
    art: 'cake',
    unit: '8-inch',
    blurb: 'Tall, tender layers finished by hand — from everyday vanilla to our coffee tres leches.',
    from: 38
  },
  {
    id: 'bento',
    name: 'Mini Cakes',
    shortName: 'Mini',
    tone: ['#D68FA2', '#8E2A44'],
    art: 'bento',
    unit: 'per box',
    blurb: 'Little celebration cakes in a box, piped with your message while you wait.',
    from: 24
  },
  {
    id: 'brownies',
    name: 'Brownies',
    shortName: 'Brownies',
    tone: ['#5C3A25', '#2E1A11'],
    art: 'brownie',
    unit: 'each',
    blurb: 'Dense, fudgy centres with a paper-thin crackled top. Baked fresh every morning.',
    from: 4.5
  },
  {
    id: 'cookies',
    name: 'Cookies',
    shortName: 'Cookies',
    tone: ['#D9A559', '#8A5A2E'],
    art: 'cookie',
    unit: 'half dozen',
    blurb: 'Crisp at the edge, chewy in the middle, loaded with real chocolate.',
    from: 14
  },
  {
    id: 'teacakes',
    name: 'Loaf Cakes & Others',
    shortName: 'Loaf Cakes',
    tone: ['#E0B478', '#A8703C'],
    art: 'loaf',
    unit: 'per loaf',
    blurb: 'Simple loaf cakes made for slow afternoons and a second cup of coffee.',
    from: 18
  }
];


/* ==========================================================================
   4.  PRODUCTS  —  your menu
   ==========================================================================
   Copy any block below, change the values and you have a new item. Nothing
   else needs updating: the home page, the products grid, the search, the
   filters and the order form all read from this list.

     id        unique, lowercase, hyphens only. Also used to find the photo.
     name      shown on the card
     category  must match a category id from section 3
     price     a number — no currency symbol, no quotes  (4.5 is fine)
     unit      free text shown after the price
     desc      one or two sentences
     tone      two-colour gradient used until a photo exists
     badge     optional little label on the card
     featured  optional true — puts it in "Signatures" on the home page
     seasonal  optional true — marks it as a seasonal item
     custom    optional true — sends people to the custom-order form
   -------------------------------------------------------------------------- */
window.BK_PRODUCTS = [

  /* ---- Cakes (per 8-inch) ---- */
  {
    id: 'vanilla-cake', name: 'Vanilla Cake', category: 'cakes', price: 38, unit: '8-inch',
    desc: 'Butter-soft sponge with real vanilla and a cloud of whipped cream frosting.',
    tone: ['#FBF0DC', '#F2DFBC'], badge: 'Classic'
  },
  {
    id: 'chocolate-cake', name: 'Chocolate Cake', category: 'cakes', price: 42, unit: '8-inch',
    desc: 'Deep cocoa sponge layered with silky chocolate ganache. The eternal favourite.',
    tone: ['#5B3A28', '#3A2118'], featured: true, badge: 'Bestseller'
  },
  {
    id: 'black-forest-cake', name: 'Black Forest Cake', category: 'cakes', price: 46, unit: '8-inch',
    desc: 'Chocolate sponge, cherries and fresh cream, finished with dark chocolate shavings.',
    tone: ['#4A2A22', '#8C2F3C'], featured: true
  },
  {
    id: 'white-forest-cake', name: 'White Forest Cake', category: 'cakes', price: 46, unit: '8-inch',
    desc: 'Vanilla sponge with white chocolate curls and a whisper of cherry.',
    tone: ['#FDF6EC', '#E4D3C0']
  },
  {
    id: 'red-velvet-cake', name: 'Red Velvet Cake', category: 'cakes', price: 48, unit: '8-inch',
    desc: 'Velvety crimson crumb paired with tangy cream cheese frosting.',
    tone: ['#8E2436', '#B9455A'], featured: true, badge: 'Signature'
  },
  {
    id: 'mango-cake', name: 'Mango Cake', category: 'cakes', price: 46, unit: '8-inch',
    desc: 'Ripe mango purée folded through fresh cream over a light golden sponge.',
    tone: ['#F2B33D', '#E08A2B'], seasonal: true, badge: 'Seasonal'
  },
  {
    id: 'rose-milk-cake', name: 'Rose Milk Cake', category: 'cakes', price: 44, unit: '8-inch',
    desc: 'Milk-soaked sponge perfumed with rose — nostalgic, floral and gently sweet.',
    tone: ['#F3C9D3', '#DE9AAC']
  },
  {
    id: 'blueberry-cake', name: 'Blueberry Cake', category: 'cakes', price: 48, unit: '8-inch',
    desc: 'Cream cheese frosting swirled with a thick blueberry compote.',
    tone: ['#5A4A8C', '#8A79BF']
  },
  {
    id: 'coffee-tres-leches', name: 'Coffee Tres Leches Cake', category: 'cakes', price: 52, unit: '8-inch',
    desc: 'Sponge soaked in three milks and cold brew, dusted with cocoa. Our most indulgent bake.',
    tone: ['#6B4A32', '#A9784E'], featured: true, badge: 'Baker’s pick'
  },

  /* ---- Mini cakes ---- */
  {
    id: 'vanilla-bento', name: 'Vanilla Mini Cake', category: 'bento', price: 24, unit: 'per box',
    desc: 'A cake for two, boxed and piped with a short handwritten message.',
    tone: ['#FBF0DC', '#EFD9B6']
  },
  {
    id: 'chocolate-bento', name: 'Chocolate Mini Cake', category: 'bento', price: 26, unit: 'per box',
    desc: 'Rich chocolate in miniature — perfect for surprise deliveries.',
    tone: ['#5B3A28', '#3A2118'], featured: true
  },
  {
    id: 'red-velvet-bento', name: 'Red Velvet Mini Cake', category: 'bento', price: 28, unit: 'per box',
    desc: 'Red velvet and cream cheese, scaled down to a single joyful serving.',
    tone: ['#8E2436', '#C0576B']
  },
  {
    id: 'custom-bento', name: 'Customised Mini Cake', category: 'bento', price: 28, unit: 'onwards',
    desc: 'Your colour, your flavour, your message. Tell us the occasion and we will design it.',
    tone: ['#EBC4CA', '#D68FA2'], badge: 'Made to order', custom: true
  },

  /* ---- Brownies (each) ---- */
  {
    id: 'classic-brownie', name: 'Classic Brownie', category: 'brownies', price: 4.5, unit: 'each',
    desc: 'Fudgy centre, crackled top, pure dark chocolate. Nothing else needed.',
    tone: ['#4A2C1D', '#2E1A11'], featured: true, badge: 'Bestseller'
  },
  {
    id: 'nuts-brownie', name: 'Walnut Brownie', category: 'brownies', price: 5.5, unit: 'each',
    desc: 'Toasted walnuts and almonds folded into the classic batter.',
    tone: ['#5C3A25', '#8A6039']
  },
  {
    id: 'nutella-brownie', name: 'Hazelnut Swirl Brownie', category: 'brownies', price: 6, unit: 'each',
    desc: 'Swirled with hazelnut spread before baking, so every bite finds a ribbon of it.',
    tone: ['#4A2C1D', '#9C6134'], featured: true
  },
  {
    id: 'caramel-brownie', name: 'Salted Caramel Brownie', category: 'brownies', price: 6, unit: 'each',
    desc: 'Topped with a slow-cooked caramel and a pinch of flaked sea salt.',
    tone: ['#6B4326', '#E0B478']
  },

  /* ---- Cookies (per half dozen) ---- */
  {
    id: 'choco-chip-cookies', name: 'Choc Chip Cookies', category: 'cookies', price: 14, unit: 'half dozen',
    desc: 'Brown-butter dough studded with couverture chips. Crisp edge, soft middle.',
    tone: ['#C08A4E', '#8A5A2E'], featured: true
  },
  {
    id: 'double-chocolate-cookies', name: 'Double Chocolate Cookies', category: 'cookies', price: 16, unit: 'half dozen',
    desc: 'Cocoa dough with dark chocolate chunks — for serious chocolate people.',
    tone: ['#4A2C1D', '#6E4429']
  },
  {
    id: 'butter-cookies', name: 'Butter Cookies', category: 'cookies', price: 14, unit: 'half dozen',
    desc: 'Melt-in-mouth shortbread with nothing but butter, sugar and flour.',
    tone: ['#F0DCB4', '#DCC08A']
  },

  /* ---- Loaf cakes & others (per loaf) ---- */
  {
    id: 'loaf-cake-plain', name: 'Vanilla Loaf Cake', category: 'teacakes', price: 18, unit: 'per loaf',
    desc: 'An everyday loaf, lightly sweet — the one that goes with your morning coffee.',
    tone: ['#EAD3A8', '#D2B279']
  },
  {
    id: 'marble-cake', name: 'Marble Cake', category: 'teacakes', price: 22, unit: 'per loaf',
    desc: 'Vanilla and cocoa batters swirled by hand, so no two slices match.',
    tone: ['#E6CBA0', '#6B4326']
  },
  {
    id: 'chocolate-loaf', name: 'Chocolate Loaf Cake', category: 'teacakes', price: 22, unit: 'per loaf',
    desc: 'A moist cocoa loaf that keeps beautifully for a whole week.',
    tone: ['#5B3A28', '#3A2118']
  },
  {
    id: 'dry-fruit-cake', name: 'Fruit & Nut Cake', category: 'teacakes', price: 26, unit: 'per loaf',
    desc: 'Generous with raisins, pecans and candied peel. Festive all year round.',
    tone: ['#B07A42', '#7A4E28'], featured: true
  }
];


/* ==========================================================================
   5.  WHY CHOOSE US  —  the six icon cards on the home page
   ==========================================================================
   `icon` can be: sparkle, wheat, leaf, shield, heart, gift, check, star,
   clock, pin, phone, mail, truck, cake.
   -------------------------------------------------------------------------- */
window.BK_VALUES = [
  { icon: 'sparkle', title: '100% Fresh & Homemade',  text: 'Every order is baked after you place it — never pulled from a freezer or a shelf.' },
  { icon: 'wheat',   title: 'Premium Ingredients',    text: 'Couverture chocolate, real butter, farm eggs and fruit picked in season.' },
  { icon: 'leaf',    title: 'No Preservatives',       text: 'Nothing artificial goes into the batter, which is exactly why it tastes like home.' },
  { icon: 'shield',  title: 'Hygienic Preparation',   text: 'A dedicated kitchen, sanitised surfaces and sealed, tamper-proof packing.' },
  { icon: 'heart',   title: 'Made with Lots of Love', text: 'Small batches, one baker, and the patience that mass production cannot buy.' },
  { icon: 'gift',    title: 'Customised for You',     text: 'Birthdays, anniversaries and every occasion in between, designed to your brief.' }
];


/* ==========================================================================
   6.  REVIEWS
   ==========================================================================
   DEMO CONTENT — replace these with real reviews from your own customers
   before the site goes live.
   -------------------------------------------------------------------------- */
window.BK_TESTIMONIALS = [
  {
    quote: 'The red velvet was the softest I have had in this city — and the cream cheese was not sickly sweet. It disappeared in one evening.',
    name: 'Sarah M.', meta: 'Birthday order'
  },
  {
    quote: 'Ordered forty brownies for an office farewell at short notice. Packed neatly, delivered on time, and three people asked me for the number.',
    name: 'Daniel R.', meta: 'Corporate order'
  },
  {
    quote: 'The mini cake arrived looking exactly like the reference I sent. My sister cried. Worth every penny.',
    name: 'Emily C.', meta: 'Surprise gift'
  }
];


/* ==========================================================================
   7.  HOW WE BAKE  —  the scrolling story on the home page
   ==========================================================================
   `art` picks the illustration: chat, bowl, oven, box.
   Add a photo for any step by filling in step-1 … step-4 in section 2.
   -------------------------------------------------------------------------- */
window.BK_PROCESS = [
  { art: 'chat', title: 'You tell us the occasion', text: 'Send us a message with the flavour, the size and the date. We reply with a quote the same day.' },
  { art: 'bowl', title: 'We shop and mix that day', text: 'Butter, eggs and cream are bought fresh for your order. Batter is mixed by hand, never held overnight.' },
  { art: 'oven', title: 'Baked in small batches',   text: 'One cake at a time, so the bake, the soak and the crumb are all watched closely.' },
  { art: 'box',  title: 'Finished and sealed',      text: 'Frosted, decorated, then boxed and sealed the hour before it reaches you — still fragrant.' }
];


/* ==========================================================================
   8.  FAQ  —  the accordion on the contact page
   ==========================================================================
   Add or remove question/answer pairs freely.
   -------------------------------------------------------------------------- */
window.BK_FAQ = [
  {
    q: 'How much notice do you need for an order?',
    a: 'Cakes, loaf cakes and mini cakes need at least 24 hours. Brownies and cookies can often be arranged same-day if we are not fully booked. For tiered or heavily decorated custom cakes, please give us three to four days.'
  },
  {
    q: 'Do you deliver, and is there a charge?',
    a: 'We deliver across the metro area. Delivery is charged separately based on distance and is confirmed when you place the order. You are also welcome to collect from the bakery at no cost.'
  },
  {
    q: 'Can I get an egg-free version?',
    a: 'Yes — most of our cakes, loaf cakes and brownies can be made egg-free on request. Please mention it when you order, as egg-free bakes need a slightly different schedule.'
  },
  {
    q: 'How should I store what I receive?',
    a: 'Because we use no preservatives, cream cakes must go straight into the refrigerator and are best within 48 hours. Brownies and cookies keep in an airtight box at room temperature for up to five days.'
  },
  {
    q: 'Do you take bulk or corporate orders?',
    a: 'We do — hampers, office celebrations, party favours and holiday boxes. Send us the quantity and the date and we will work out pricing and packing options with you.'
  },
  {
    q: 'How do I pay?',
    a: 'All major cards, Apple Pay, Google Pay or cash on pickup. Custom orders are confirmed with a fifty percent deposit, and the balance is due before delivery.'
  }
];
