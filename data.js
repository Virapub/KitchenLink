const data = {
  products: [
    {
      id: "inkbird-thermometer",
      name: "INKBIRD Bluetooth Meat Thermometer",
      price: "₹2,090 / $25.18",
      url: "https://amzn.to/3TjlTvu",
      image: "https://m.media-amazon.com/images/I/71UtnkqnYCL._SL1500_.jpg",
      page: "products.html#inkbird-thermometer"
    },
    {
      id: "bbqgo-gloves",
      name: "BBQGO BBQ Grill Gloves",
      price: "₹1,292 / $15.57",
      url: "https://amzn.to/3ZTGlXp",
      image: "https://m.media-amazon.com/images/I/61vMY+WRAZL._SL1500_.jpg",
      page: "products.html#bbqgo-gloves"
    },
    {
      id: "breakfast-maker",
      name: "Electric Breakfast Sandwich Maker",
      price: "₹5,699 / $68.66",
      url: "https://amzn.to/3TRB1Ae",
      image: "https://m.media-amazon.com/images/I/61LUXbVnxjL._SL1500_.jpg",
      page: "products.html#breakfast-maker"
    },
    {
      id: "mini-chopper",
      name: "Mini Food Chopper",
      price: "₹3,700 / $44.58",
      url: "https://amzn.to/3ZXneM8",
      image: "https://m.media-amazon.com/images/I/61UmnOTKVFL._SL1080_.jpg",
      page: "products.html#mini-chopper"
    },
    {
      id: "smart-scale",
      name: "Smart Measuring Spoon/Scale",
      price: "₹1,199 / $14.45",
      url: "https://amzn.to/4l6Z1eD",
      image: "https://m.media-amazon.com/images/I/71yo8PyCRwL._SL1500_.jpg",
      page: "products.html#smart-scale"
    },
    {
      id: "auto-stirrer",
      name: "Automatic Stirring Pot Tool",
      price: "₹13,475.98 / $162.36",
      url: "https://amzn.to/4kljH1o",
      image: "https://m.media-amazon.com/images/I/61YUQzBHRpL._SL1500_.jpg",
      page: "products.html#auto-stirrer"
    },
    {
      id: "spice-rack",
      name: "Magnetic Spice Rack Organizer",
      price: "₹2,299 / $27.70",
      url: "https://amzn.to/40xGaBh",
      image: "https://m.media-amazon.com/images/I/71ILXxzPrnL._SL1500_.jpg",
      page: "products.html#spice-rack"
    },
    {
      id: "veg-slicer",
      name: "Multi-Function Vegetable Slicer",
      price: "₹3,499 / $42.16",
      url: "https://amzn.to/40y9ebL",
      image: "https://m.media-amazon.com/images/I/714KMq8ALwL._SL1500_.jpg",
      page: "products.html#veg-slicer"
    },
    {
      id: "cabinet-light",
      name: "Under Cabinet Lighting (Rechargeable)",
      price: "₹699 / $8.42",
      url: "https://amzn.to/3I92T05",
      image: "https://m.media-amazon.com/images/I/71XvKLC3GgL._SL1500_.jpg",
      page: "products.html#cabinet-light"
    },
    {
      id: "silicone-bags",
      name: "Reusable Silicone Zip Bags",
      price: "₹700 / $8.43",
      url: "https://amzn.to/4keOzR1",
      image: "https://m.media-amazon.com/images/I/81ioPY352VL._SL1500_.jpg",
      page: "products.html#silicone-bags"
    },
    {
      id: "tap-filter",
      name: "Smart Tap Water Filter Dispenser",
      price: "₹299 / $3.60",
      url: "https://amzn.to/4etDQBd",
      image: "https://m.media-amazon.com/images/I/51vG9anK5GL.jpg",
      page: "products.html#tap-filter"
    }
    {
      id: "philips-air-fryer",
      name: "Philips Air Fryer",
      price: "Up to ₹10,000 / $119",
      url: "https://amzn.to/4kgzH4R",
      image: "https://m.media-amazon.com/images/I/414ly0wsjYL._SL1000_.jpg",
      page: "products.html#philips-air-fryer"
    },
    {
      id: "sliding-tray",
      name: "Sliding Tray",
      price: "Under ₹1,000 / $11.99",
      url: "https://amzn.to/3SS1XQ4",
      image: "https://m.media-amazon.com/images/I/61rUIJtyEkL._UF1000,1000_QL80_FMwebp_.jpg",
      page: "products.html#sliding-tray"
    },
    {
      id: "vaccum-sealer",
      name: "Vacuum Sealer",
      price: "Up to ₹3,000 / $35.99",
      url: "https://amzn.to/3SVcs54",
      image: "https://m.media-amazon.com/images/I/71QkgEBOZiL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#vaccum-sealer"
    },
    {
      id: "mini-sealing-machine",
      name: "Mini Sealing Machine",
      price: "Under ₹500 / $3.59",
      url: "https://amzn.to/4k1PTqE",
      image: "https://m.media-amazon.com/images/I/71utCY3f-JL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#mini-sealing-machine"
    },
    {
      id: "kitchen-mat",
      name: "Kitchen Mat",
      price: "Up to ₹1,000 / $8.39",
      url: "https://amzn.to/3HG0ry2",
      image: "https://m.media-amazon.com/images/I/619hMFvYSoL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#kitchen-mat"
    },
    {
      id: "knife-sharpener",
      name: "Knife Sharpener",
      price: "Under ₹500 / $2.99",
      url: "https://amzn.to/45TExRW",
      image: "https://m.media-amazon.com/images/I/610WnGc6kPL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#knife-sharpener"
    },
    {
      id: "breakfast-station",
      name: "3-in-1 Breakfast Maker",
      price: "Up to ₹8,000 / $95.99",
      url: "https://amzn.to/45K1VkQ",
      image: "https://m.media-amazon.com/images/I/619zlfuWKgL._SL1001_.jpg",
      page: "products.html#breakfast-station"
    },
    {
      id: "multi-cooker",
      name: "Prestige Multi-Cooker 1.5L",
      price: "Under ₹2,500 / $29.99",
      url: "https://amzn.to/4kll3ZT",
      image: "https://m.media-amazon.com/images/I/71OHF3Zl0bL._SL1500_.jpg",
      page: "products.html#multi-cooker"
    },
    {
      id: "atomberg-mixer",
      name: "Atomberg Zenova Mixer Grinder",
      price: "Up to ₹7,000 / $84.99",
      url: "https://amzn.to/4ex7lCf",
      image: "https://m.media-amazon.com/images/I/81haDHz+llL._SL1500_.jpg",
      page: "products.html#atomberg-mixer"
    }
  ],
    } 

   


  mealPlans: {
    office: [
      {
        id: "office-monday",
        name: "Banana Smoothie + Oats, Quinoa + Stir-fry Veggies, Chapati + Palak Paneer",
        day: "Monday",
        page: "office-meal-plan.html#office-monday"
      },
      {
        id: "office-tuesday",
        name: "Boiled Eggs + Toast, Rice + Sambar + Curd, Roti + Veg Kurma",
        day: "Tuesday",
        page: "office-meal-plan.html#office-tuesday"
      },
      {
        id: "office-wednesday",
        name: "Upma + Chai, Chickpea Salad + Buttermilk, Lemon Rice + Pickle",
        day: "Wednesday",
        page: "office-meal-plan.html#office-wednesday"
      },
      {
        id: "office-thursday",
        name: "Bread + Avocado Spread, Veg Burrito Bowl + Curd, Dal Khichdi + Ghee",
        day: "Thursday",
        page: "office-meal-plan.html#office-thursday"
      },
      {
        id: "office-friday",
        name: "Poha + Sprouts, Jeera Rice + Rajma, Chapati + Bhindi Fry",
        day: "Friday",
        page: "office-meal-plan.html#office-friday"
      }
    ],
    budget: [
      {
        id: "budget-monday",
        name: "Poha + Tea, Rice + Dal + Veg, Chapati + Mixed Sabzi",
        day: "Monday",
        page: "meal-prep.html#budget-monday"
      },
      {
        id: "budget-tuesday",
        name: "Idli + Chutney, Veg Pulao + Raita, Chapati + Paneer Bhurji",
        day: "Tuesday",
        page: "meal-prep.html#budget-tuesday"
      },
      {
        id: "budget-wednesday",
        name: "Upma + Filter Coffee, Khichdi + Pickle, Rice + Rajma",
        day: "Wednesday",
        page: "meal-prep.html#budget-wednesday"
      },
      {
        id: "budget-thursday",
        name: "Bread + Peanut Butter, Veg Sandwich + Juice, Chapati + Aloo Curry",
        day: "Thursday",
        page: "meal-prep.html#budget-thursday"
      },
      {
        id: "budget-friday",
        name: "Oats + Banana, Lemon Rice + Curd, Roti + Chana Masala",
        day: "Friday",
        page: "meal-prep.html#budget-friday"
      }
    ]
  }
};
