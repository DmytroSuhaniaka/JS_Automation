//NEW
class Featured {
  constructor() {}

  get container() {
    return $("#homefeatured");
  }

  get someShirt() {
    const block = this.container.$("li:nth-of-type(2)");
    return {
      shirtToCart: block.$(".button.ajax_add_to_cart_button"),
      moreActions: block.$(".button.lnk_view"),
      price: block.$('.content-price')
    };
  }

  get proceedCheckout() {
    return $(".btn.btn-default.button.button-medium");
  }
}

module.exports = new Featured();
