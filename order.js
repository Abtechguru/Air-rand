document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, name: "Asaro", price: 1500, image: "/images/asaro.jpg" },
        { id: 2, name: "Fufu", price: 1800, image: "/images/fufu.jpg" },
        { id: 3, name: "Ofe Akwu", price: 2000, image: "/images/ofeakwu.png" },
        { id: 4, name: "Gizdodo", price: 1500, image: "/images/gizdodo.jpg" },
        { id: 5, name: "Egusi Soup", price: 4500, image: "/images/egusi.jpg" },
        { id: 6, name: "Moi Moi", price: 3500, image: "/images/moi.jpeg" },
        { id: 7, name: "Afang", price: 3500, image: "/images/afang.jpg" },
        { id: 8, name: "Fura da Nono", price: 3500, image: "/images/fura.jpg" },
        { id: 1, name: "Asaro", price: 3000, image: "/images/food/asaro.jpg" },
        { id: 2, name: "Fufu", price: 1200, image: "/images/food/fufu.jpg" },
        { id: 3, name: "Ofe Akwu", price: 2000, image: "/images/food/ofeakwu.png"},
        { id: 4, name: "Waina", price: 1500, image: "/images/food/waina.jpg" },
        { id: 5, name: "Afang Soup", price: 3500, image:"/images/food/afang.jpg" },
        { id: 6, name: "Gizdodo", price: 1500, image: "/images/food/gizdodo.jpg" },
        { id: 7, name: "Akpoya-ee", price: 1800, image: "images/food/akpoya-ee.jpeg"},
        { id: 8, name: "Ofe Onugbo", price: 2000, image: "images/food/ofe-onugbo.png"},
        { id: 9, name: "Tuwo Shinkafa", price: 2500, image: "images/food/tuwo.jpg"},
        { id: 10, name: "Okro", price: 3000, image: "/images/food/okro.jpg"},
        { id: 11, name: "Grilled Giwa Ruwa", price: 9900, image: "images/food/giwa-ruwa.jpg"},
        { id: 12, name: "Efo Riro", price: 5000, image: "images/food/efo-riro.jpg"},
        { id: 13, name: "Egusi", price: 4500, image: "images/food/egusi.jpg"},
        { id: 14, name: "Fura da Nono", price: 3500, image: "images/food/fura.jpg"},
        { id: 15, name: "Ewa Agoyin & Plantain", price: 3500, image: "images/food/ewa.jpg"},
    ];
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    @@ -178,10 +185,24 @@ document.addEventListener("DOMContentLoaded", () => {
    });
    });
    
      const orderNowButtons = document.querySelectorAll(".order-now");
      orderNowButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const itemId = parseInt(button.getAttribute("data-item-id"));
          const item = menuItems.find((menuItem) => menuItem.id === itemId);
          if (item) {
            addToCart(item);
            window.location.href = "order.html";
          }
        });
      });
    
    if (orderForm) {
    orderForm.addEventListener("submit", submitOrder);
    orderForm.addEventListener("input", handleInputChange);
    }
    renderMenuItems();
    renderCart();
    });
      