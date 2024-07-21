const useAllProducts = () => {
  const allProducts = [
    {
      productId: "001",
      ProductName: "Hydrating Facial Cleanser",
      ProductPrice: 25.99,
      ProductImage:
        "https://i.pinimg.com/474x/7e/f8/d7/7ef8d7b50853f179610f6ee24260885a.jpg",
      ProductDescription:
        "A gentle cleanser that hydrates and refreshes your skin while removing impurities.",
      ProductCategory: "skincare",
      ProductQuantity: 20,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Alice",
          review:
            "Love this cleanser! It leaves my skin feeling clean and moisturized.",
        },
      ],
      productReviewCount: 5,
      productTags: [
        "hydrating",
        "facial cleanser",
        "moisturizer",
        "skin care",
        "gentle",
        "refreshing",
      ],
    },
    {
      productId: "002",
      ProductName: "Anti-Aging Serum",
      ProductPrice: 42.5,
      ProductImage:
        "https://i.pinimg.com/474x/50/00/93/500093193f983e1e73b1f648be24c50b.jpg",
      ProductDescription:
        "An advanced serum designed to reduce the appearance of fine lines and wrinkles.",
      ProductCategory: "skincare",
      ProductQuantity: 15,
      stock: true,
      ProductRating: 4.6,
      ProductReviews: [
        {
          user: "Bob",
          review:
            "Effective serum that makes my skin look younger and smoother.",
        },
      ],
      productReviewCount: 12,
      productTags: [
        "anti-aging",
        "serum",
        "wrinkle reduction",
        "fine lines",
        "skin care",
        "youthful",
      ],
    },
    {
      productId: "003",
      ProductName: "Mattifying Primer",
      ProductPrice: 18.75,
      ProductImage:
        "https://i.pinimg.com/474x/9d/aa/29/9daa299d89da0406fb145fcd9ec8c245.jpg",
      ProductDescription:
        "A primer that controls oil and keeps your makeup looking fresh all day.",
      ProductCategory: "makeup",
      ProductQuantity: 30,
      stock: true,
      ProductRating: 4.3,
      ProductReviews: [
        {
          user: "Carol",
          review:
            "Great primer for oily skin. Keeps my makeup in place and matte.",
        },
      ],
      productReviewCount: 8,
      productTags: [
        "mattifying",
        "primer",
        "oil control",
        "makeup",
        "long-lasting",
        "fresh look",
      ],
    },
    {
      productId: "004",
      ProductName: "Volumizing Mascara",
      ProductPrice: 22.0,
      ProductImage:
        "https://i.pinimg.com/474x/c1/0b/f8/c10bf86513bf5cc2ef5a0cf19a782383.jpg",
      ProductDescription:
        "Mascara that adds volume and length to your lashes for a dramatic look.",
      ProductCategory: "makeup",
      ProductQuantity: 25,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Diana",
          review: "The best mascara I've used! My lashes look full and long.",
        },
      ],
      productReviewCount: 20,
      productTags: [
        "volumizing",
        "mascara",
        "dramatic lashes",
        "lengthening",
        "makeup",
        "eye makeup",
      ],
    },
    {
      productId: "005",
      ProductName: "Hydrating Face Mask",
      ProductPrice: 29.99,
      ProductImage:
        "https://i.pinimg.com/474x/31/c2/52/31c2528fd84debe2fee61804716de5cb.jpg",
      ProductDescription:
        "A face mask that provides deep hydration and revitalizes tired skin.",
      ProductCategory: "skincare",
      ProductQuantity: 18,
      stock: true,
      ProductRating: 4.5,
      ProductReviews: [
        {
          user: "Ella",
          review:
            "This mask is perfect for dry skin. It leaves my face feeling soft and hydrated.",
        },
      ],
      productReviewCount: 10,
      productTags: [
        "hydrating",
        "face mask",
        "deep hydration",
        "revitalizing",
        "skin care",
        "moisturizing",
      ],
    },
    {
      productId: "006",
      ProductName: "Nourishing Lip Balm",
      ProductPrice: 8.5,
      ProductImage:
        "https://i.pinimg.com/474x/e6/8c/bf/e68cbf7d6be71394f6ce57b908146ed7.jpg",
      ProductDescription:
        "A lip balm that provides long-lasting hydration and protection for your lips.",
      ProductCategory: "makeup",
      ProductQuantity: 50,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Frank",
          review:
            "My go-to lip balm. It keeps my lips soft and protected all day.",
        },
      ],
      productReviewCount: 25,
      productTags: [
        "nourishing",
        "lip balm",
        "hydration",
        "protection",
        "makeup",
        "moisturizing",
      ],
    },
    {
      productId: "007",
      ProductName: "Exfoliating Scrub",
      ProductPrice: 19.99,
      ProductImage:
        "https://i.pinimg.com/474x/79/a4/c1/79a4c151b2591072a3ac478442d1dc60.jpg",
      ProductDescription:
        "An exfoliating scrub that removes dead skin cells and smooths your complexion.",
      ProductCategory: "skincare",
      ProductQuantity: 22,
      stock: true,
      ProductRating: 4.6,
      ProductReviews: [
        {
          user: "Grace",
          review: "This scrub makes my skin feel so smooth and clean. Love it!",
        },
      ],
      productReviewCount: 14,
      productTags: [
        "exfoliating",
        "scrub",
        "dead skin removal",
        "smooth complexion",
        "skin care",
        "clean",
      ],
    },
    {
      productId: "008",
      ProductName: "Soothing Eye Cream",
      ProductPrice: 34.99,
      ProductImage:
        "https://i.pinimg.com/474x/f8/b9/f0/f8b9f0898b2a137c71e26a486018481c.jpg",
      ProductDescription:
        "An eye cream that soothes and reduces puffiness around the eyes.",
      ProductCategory: "skincare",
      ProductQuantity: 16,
      stock: true,
      ProductRating: 4.4,
      ProductReviews: [
        {
          user: "Hannah",
          review:
            "Great for reducing puffiness and dark circles. Feels very soothing.",
        },
      ],
      productReviewCount: 9,
      productTags: [
        "soothing",
        "eye cream",
        "puffiness reduction",
        "dark circles",
        "skin care",
        "hydrating",
      ],
    },
    {
      productId: "009",
      ProductName: "Blush Palette",
      ProductPrice: 32.0,
      ProductImage:
        "https://i.pinimg.com/474x/9f/af/11/9faf117b216f2aa8a897e41ca3e870ea.jpg",
      ProductDescription:
        "A palette with a variety of blush shades to complement any skin tone.",
      ProductCategory: "makeup",
      ProductQuantity: 28,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Ivy",
          review:
            "This blush palette has the perfect shades for every occasion. Highly recommend!",
        },
      ],
      productReviewCount: 18,
      productTags: [
        "blush",
        "palette",
        "variety",
        "makeup",
        "complement",
        "skin tone",
      ],
    },
    {
      productId: "010",
      ProductName: "Hydrating Facial Cleanser",
      ProductPrice: 25.99,
      ProductImage:
        "https://i.pinimg.com/474x/7e/f8/d7/7ef8d7b50853f179610f6ee24260885a.jpg",
      ProductDescription:
        "A gentle cleanser that hydrates and refreshes your skin while removing impurities.",
      ProductCategory: "skincare",
      ProductQuantity: 20,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Alice",
          review:
            "Love this cleanser! It leaves my skin feeling clean and moisturized.",
        },
      ],
      productReviewCount: 5,
      productTags: [
        "hydrating",
        "facial cleanser",
        "moisturizer",
        "skin care",
        "gentle",
        "refreshing",
      ],
    },
    {
      productId: "011",
      ProductName: "Anti-Aging Serum",
      ProductPrice: 42.5,
      ProductImage:
        "https://i.pinimg.com/474x/50/00/93/500093193f983e1e73b1f648be24c50b.jpg",
      ProductDescription:
        "An advanced serum designed to reduce the appearance of fine lines and wrinkles.",
      ProductCategory: "skincare",
      ProductQuantity: 15,
      stock: true,
      ProductRating: 4.6,
      ProductReviews: [
        {
          user: "Bob",
          review:
            "Effective serum that makes my skin look younger and smoother.",
        },
      ],
      productReviewCount: 12,
      productTags: [
        "anti-aging",
        "serum",
        "wrinkle reduction",
        "fine lines",
        "skin care",
        "youthful",
      ],
    },
    {
      productId: "012",
      ProductName: "Mattifying Primer",
      ProductPrice: 18.75,
      ProductImage:
        "https://i.pinimg.com/474x/9d/aa/29/9daa299d89da0406fb145fcd9ec8c245.jpg",
      ProductDescription:
        "A primer that controls oil and keeps your makeup looking fresh all day.",
      ProductCategory: "makeup",
      ProductQuantity: 30,
      stock: true,
      ProductRating: 4.3,
      ProductReviews: [
        {
          user: "Carol",
          review:
            "Great primer for oily skin. Keeps my makeup in place and matte.",
        },
      ],
      productReviewCount: 8,
      productTags: [
        "mattifying",
        "primer",
        "oil control",
        "makeup",
        "long-lasting",
        "fresh look",
      ],
    },
    {
      productId: "013",
      ProductName: "Volumizing Mascara",
      ProductPrice: 22.0,
      ProductImage:
        "https://i.pinimg.com/474x/c1/0b/f8/c10bf86513bf5cc2ef5a0cf19a782383.jpg",
      ProductDescription:
        "Mascara that adds volume and length to your lashes for a dramatic look.",
      ProductCategory: "makeup",
      ProductQuantity: 25,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Diana",
          review: "The best mascara I've used! My lashes look full and long.",
        },
      ],
      productReviewCount: 20,
      productTags: [
        "volumizing",
        "mascara",
        "dramatic lashes",
        "lengthening",
        "makeup",
        "eye makeup",
      ],
    },
    {
      productId: "014",
      ProductName: "Hydrating Face Mask",
      ProductPrice: 29.99,
      ProductImage:
        "https://i.pinimg.com/474x/31/c2/52/31c2528fd84debe2fee61804716de5cb.jpg",
      ProductDescription:
        "A face mask that provides deep hydration and revitalizes tired skin.",
      ProductCategory: "skincare",
      ProductQuantity: 18,
      stock: true,
      ProductRating: 4.5,
      ProductReviews: [
        {
          user: "Ella",
          review:
            "This mask is perfect for dry skin. It leaves my face feeling soft and hydrated.",
        },
      ],
      productReviewCount: 10,
      productTags: [
        "hydrating",
        "face mask",
        "deep hydration",
        "revitalizing",
        "skin care",
        "moisturizing",
      ],
    },
    {
      productId: "015",
      ProductName: "Nourishing Lip Balm",
      ProductPrice: 8.5,
      ProductImage:
        "https://i.pinimg.com/474x/e6/8c/bf/e68cbf7d6be71394f6ce57b908146ed7.jpg",
      ProductDescription:
        "A lip balm that provides long-lasting hydration and protection for your lips.",
      ProductCategory: "makeup",
      ProductQuantity: 50,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Frank",
          review:
            "My go-to lip balm. It keeps my lips soft and protected all day.",
        },
      ],
      productReviewCount: 25,
      productTags: [
        "nourishing",
        "lip balm",
        "hydration",
        "protection",
        "makeup",
        "moisturizing",
      ],
    },
    {
      productId: "016",
      ProductName: "Exfoliating Scrub",
      ProductPrice: 19.99,
      ProductImage:
        "https://i.pinimg.com/474x/79/a4/c1/79a4c151b2591072a3ac478442d1dc60.jpg",
      ProductDescription:
        "An exfoliating scrub that removes dead skin cells and smooths your complexion.",
      ProductCategory: "skincare",
      ProductQuantity: 22,
      stock: true,
      ProductRating: 4.6,
      ProductReviews: [
        {
          user: "Grace",
          review: "This scrub makes my skin feel so smooth and clean. Love it!",
        },
      ],
      productReviewCount: 14,
      productTags: [
        "exfoliating",
        "scrub",
        "dead skin removal",
        "smooth complexion",
        "skin care",
        "clean",
      ],
    },
    {
      productId: "017",
      ProductName: "Soothing Eye Cream",
      ProductPrice: 34.99,
      ProductImage:
        "https://i.pinimg.com/474x/f8/b9/f0/f8b9f0898b2a137c71e26a486018481c.jpg",
      ProductDescription:
        "An eye cream that soothes and reduces puffiness around the eyes.",
      ProductCategory: "skincare",
      ProductQuantity: 16,
      stock: true,
      ProductRating: 4.4,
      ProductReviews: [
        {
          user: "Hannah",
          review:
            "Great for reducing puffiness and dark circles. Feels very soothing.",
        },
      ],
      productReviewCount: 9,
      productTags: [
        "soothing",
        "eye cream",
        "puffiness reduction",
        "dark circles",
        "skin care",
        "hydrating",
      ],
    },
    {
      productId: "018",
      ProductName: "Blush Palette",
      ProductPrice: 32.0,
      ProductImage:
        "https://i.pinimg.com/474x/9f/af/11/9faf117b216f2aa8a897e41ca3e870ea.jpg",
      ProductDescription:
        "A palette with a variety of blush shades to complement any skin tone.",
      ProductCategory: "makeup",
      ProductQuantity: 28,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Ivy",
          review:
            "This blush palette has the perfect shades for every occasion. Highly recommend!",
        },
      ],
      productReviewCount: 18,
      productTags: [
        "blush",
        "palette",
        "variety",
        "makeup",
        "complement",
        "skin tone",
      ],
    },
    {
      productId: "019",
      ProductName: "Blush Palette",
      ProductPrice: 32.0,
      ProductImage:
        "https://i.pinimg.com/474x/9f/af/11/9faf117b216f2aa8a897e41ca3e870ea.jpg",
      ProductDescription:
        "A palette with a variety of blush shades to complement any skin tone.",
      ProductCategory: "makeup",
      ProductQuantity: 28,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Ivy",
          review:
            "This blush palette has the perfect shades for every occasion. Highly recommend!",
        },
      ],
      productReviewCount: 18,
      productTags: [
        "blush",
        "palette",
        "variety",
        "makeup",
        "complement",
        "skin tone",
      ],
    },
    {
      productId: "020",
      ProductName: "Hydrating Facial Cleanser",
      ProductPrice: 25.99,
      ProductImage:
        "https://i.pinimg.com/474x/7e/f8/d7/7ef8d7b50853f179610f6ee24260885a.jpg",
      ProductDescription:
        "A gentle cleanser that hydrates and refreshes your skin while removing impurities.",
      ProductCategory: "skincare",
      ProductQuantity: 20,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Alice",
          review:
            "Love this cleanser! It leaves my skin feeling clean and moisturized.",
        },
      ],
      productReviewCount: 5,
      productTags: [
        "hydrating",
        "facial cleanser",
        "moisturizer",
        "skin care",
        "gentle",
        "refreshing",
      ],
    },
    {
      productId: "021",
      ProductName: "Anti-Aging Serum",
      ProductPrice: 42.5,
      ProductImage:
        "https://i.pinimg.com/474x/50/00/93/500093193f983e1e73b1f648be24c50b.jpg",
      ProductDescription:
        "An advanced serum designed to reduce the appearance of fine lines and wrinkles.",
      ProductCategory: "skincare",
      ProductQuantity: 15,
      stock: true,
      ProductRating: 4.6,
      ProductReviews: [
        {
          user: "Bob",
          review:
            "Effective serum that makes my skin look younger and smoother.",
        },
      ],
      productReviewCount: 12,
      productTags: [
        "anti-aging",
        "serum",
        "wrinkle reduction",
        "fine lines",
        "skin care",
        "youthful",
      ],
    },
    {
      productId: "022",
      ProductName: "Mattifying Primer",
      ProductPrice: 18.75,
      ProductImage:
        "https://i.pinimg.com/474x/9d/aa/29/9daa299d89da0406fb145fcd9ec8c245.jpg",
      ProductDescription:
        "A primer that controls oil and keeps your makeup looking fresh all day.",
      ProductCategory: "makeup",
      ProductQuantity: 30,
      stock: true,
      ProductRating: 4.3,
      ProductReviews: [
        {
          user: "Carol",
          review:
            "Great primer for oily skin. Keeps my makeup in place and matte.",
        },
      ],
      productReviewCount: 8,
      productTags: [
        "mattifying",
        "primer",
        "oil control",
        "makeup",
        "long-lasting",
        "fresh look",
      ],
    },
    {
      productId: "023",
      ProductName: "Volumizing Mascara",
      ProductPrice: 22.0,
      ProductImage:
        "https://i.pinimg.com/474x/c1/0b/f8/c10bf86513bf5cc2ef5a0cf19a782383.jpg",
      ProductDescription:
        "Mascara that adds volume and length to your lashes for a dramatic look.",
      ProductCategory: "makeup",
      ProductQuantity: 25,
      stock: true,
      ProductRating: 4.8,
      ProductReviews: [
        {
          user: "Diana",
          review: "The best mascara I've used! My lashes look full and long.",
        },
      ],
      productReviewCount: 20,
      productTags: [
        "volumizing",
        "mascara",
        "dramatic lashes",
        "lengthening",
        "makeup",
        "eye makeup",
      ],
    },
    {
      productId: "024",
      ProductName: "Hydrating Face Mask",
      ProductPrice: 29.99,
      ProductImage:
        "https://i.pinimg.com/474x/31/c2/52/31c2528fd84debe2fee61804716de5cb.jpg",
      ProductDescription:
        "A face mask that provides deep hydration and revitalizes tired skin.",
      ProductCategory: "skincare",
      ProductQuantity: 18,
      stock: true,
      ProductRating: 4.5,
      ProductReviews: [
        {
          user: "Ella",
          review:
            "This mask is perfect for dry skin. It leaves my face feeling soft and hydrated.",
        },
      ],
      productReviewCount: 10,
      productTags: [
        "hydrating",
        "face mask",
        "deep hydration",
        "revitalizing",
        "skin care",
        "moisturizing",
      ],
    },
    {
      productId: "025",
      ProductName: "Nourishing Lip Balm",
      ProductPrice: 8.5,
      ProductImage:
        "https://i.pinimg.com/474x/e6/8c/bf/e68cbf7d6be71394f6ce57b908146ed7.jpg",
      ProductDescription:
        "A lip balm that provides long-lasting hydration and protection for your lips.",
      ProductCategory: "makeup",
      ProductQuantity: 50,
      stock: true,
      ProductRating: 4.7,
      ProductReviews: [
        {
          user: "Frank",
          review:
            "My go-to lip balm. It keeps my lips soft and protected all day.",
        },
      ],
      productReviewCount: 25,
      productTags: [
        "nourishing",
        "lip balm",
        "hydration",
        "protection",
        "makeup",
        "moisturizing",
      ],
    },
  ];
  return allProducts;
};

export default useAllProducts;
