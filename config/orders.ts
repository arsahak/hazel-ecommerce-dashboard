export const orders = [
    {
      id: "123456",
      orderNumber: "#123456",
      product: {
        image: "/assets/products/8834.jpg_wh860.jpg",
        sku: "123456FR"
      },
      category: {
        name: "Electronics",
        type: "electronics"
      },
      payment: {
        amount: "$600",
        status: "Fully paid"
      },
      orderStatus: "COMPLETED",
      rating: 3.5
    },
    {
      id: "154844",
      orderNumber: "#154844",
      product: {
        image: "/assets/products/8834.jpg_wh860.jpg",
        sku: "598741FR"
      },
      category: {
        name: "Fashion",
        type: "fashion"
      },
      payment: {
        amount: "$180",
        totalAmount: "$4000",
        status: "Partially paid"
      },
      orderStatus: "CONFIRMED",
      rating: 4.5
    },
    {
      id: "202587",
      orderNumber: "#202587",
      product: {
        image: "/assets/products/8834.jpg_wh860.jpg",
        sku: "485912TY"
      },
      category: {
        name: "Electronics",
        type: "electronics"
      },
      payment: {
        amount: "$0",
        totalAmount: "$200",
        status: "Unpaid"
      },
      orderStatus: "CANCELLED",
      rating: 4.5
    },
    {
      id: "300411",
      orderNumber: "#300411",
      product: {
        image: "/assets/products/8834.jpg_wh860.jpg",
        sku: "365487RT"
      },
      category: {
        name: "Services",
        type: "services"
      },
      payment: {
        amount: "$9.99",
        status: "Fully paid"
      },
      orderStatus: "CONFIRMED",
      rating: 4.5
    }
  ];