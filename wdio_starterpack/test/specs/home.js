//const { myAccountBlock, myOrders } = require("../pages/components/Footer");
const HomePage = require("../pages/Home"); //new Home from Home.js file

describe("Home Page", () => {
  before(async () => {
    require("expect-webdriverio").setOptions({ wait: 200 });
    await HomePage.open();
    this.Footer = HomePage.Footer;
    this.keys = Object.keys(this.Footer.socialBlock.links);
  });

  //   it('newsletter email placeholder', async () => {
  //     const { Footer } = HomePage;
  //     const email = await Footer.newsletterBlock.input;
  //     await expect(email).toHaveValue('Enter your e-mail', { message: 'ololo', wait: 500, containing: true });
  //   });

  //   it('newsletter email placeholder vanishes on click', async () => {
  //     const emailInput = await HomePage.Footer.newsletterBlock.input;
  //     await emailInput.click();
  //     await expect(emailInput).toHaveValue('');
  //   });

  //   it('search placeholder is correct', async () => {
  //     await expect(HomePage.searchInput).toHaveAttr('placeholder', 'Search');
  //   });
  // });

  // describe("header", () => {
  //   it('header test', async () => {
  //     await browser.url('/');
  //     const contactLink = await HomePage.Header.navBar.contactLink; //await $('#header #contact-link a');
  //     await expect(contactLink).toHaveText('Contact us');
  //   });
  // });

  // NEW tests FOOTER
  // describe("footer", () => {
  // it("account block", async () => {
  //   await browser.url("/");
  //   const block = await HomePage.Footer.myAccountBlock;
  //   await expect(block).toBeExisting;
  // });
  // it("my orders", async () => {
  //   await browser.url("/");
  //   const orders = await HomePage.Footer.myOrders;
  //   await expect(orders).toBeDisplayed;
  // });
  // it("my сredit slips", async () => {
  //   await browser.url("/");
  //   const credits = await HomePage.Footer.myAccountBlock.myCreditSlips;
  //   await expect(credits).toHaveTextContaining('My credit');
  // });
  // it("my address", async () => {
  //   await browser.url("/");
  //   const address = await HomePage.Footer.myAccountBlock.myAdresses;
  //   await expect(address).toHaveText("My addresses");
  // });
  // it("my personal info", async () => {
  //   await browser.url("/");
  //   const info = await HomePage.Footer.myAccountBlock.myPersonalInfo;
  //   await expect(info).toBeClickable;
  // });

  //NEW HOME FEATURED
  describe("featured", () => {
    it("my beloved T-shirt exists?", async () => {
      await browser.url("/");
      const shirt = await HomePage.Featured.someShirt;
      await expect(shirt).toBeExisting;
    });

    // it("my T-shirt to Cart", async () => {
    //   await browser.url("/");
    //   const { shirtToCart, moreActions } = await HomePage.Featured.someShirt;
    //   await expect(shirtToCart).toBeExisting;
    //   await expect(moreActions).toBeExisting;

    // });

    it("T-shirt to Cart", async () => {
      await browser.url("/");
      const shirtToCart = await HomePage.Featured.someShirt.shirtToCart;
      const { proceedCheckout } = await HomePage.Featured.proceedCheckout;
      const price = await HomePage.Featured.someShirt.price;
      //console.log(`!!! PRICE !!! : `, price);
      await expect(shirtToCart).toBeDisplayed;

      //await shirtToCart.click();

      // await proceedCheckout.toBeDisplayed;
      // await proceedCheckout.click();
    });
  });
});
