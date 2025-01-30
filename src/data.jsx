// alternative store for render prices, would consider this a better direction in future.

export const prices = [
  {
    type: "arcade",
    priceMY: {
      monthly: 10,
      yearly: 90,
    },
  },
  {
    type: "advanced",
    priceMY: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    type: "pro",
    priceMY: {
      monthly: 15,
      yearly: 150,
    },
  },
  {
    type: "hasService",
    title: "Online Service",
    priceMY: {
      monthly: 1,
      yearly: 10,
    },
    tagline: "Access to multiplayer games",
  },
  {
    type: "hasStorage",
    title: "Additional Storage",
    priceMY: {
      monthly: 2,
      yearly: 20,
    },
    tagline: "Extra 1TB of cloud save",
  },
  {
    type: "hasProfile",
    title: "Customizable Profile",
    priceMY: {
      monthly: 2,
      yearly: 20,
    },
    tagline: "Custom theme on your profile",
  },
];
