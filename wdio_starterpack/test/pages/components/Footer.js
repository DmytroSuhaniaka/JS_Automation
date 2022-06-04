//const { default: $ } = require('webdriverio/build/commands/browser/$');  - из-за этого была ошибка

class Footer {
  constructor() {}

  get container() {
    return $("#footer");
  }

  get socialBlock() {
    return this.container.$("#social_block");
  }

  get newsletterBlock() {
    const $block = this.container.$("#newsletter_block_left");
    return {
      header: $block.$("h4"),
      input: $block.$('[name="email"]'),
    };
  }

  // new BLOCK
  get myAccountBlock() {
    const $accountBlock = this.container.$(".footer-block.col-xs-12.col-sm-4");
    return {
      myOrder: $accountBlock.$('[title="My orders"]'),
      myCreditSlips: $accountBlock.$('[title="My credit slips"]'),
      myAdresses: $accountBlock.$('[title="My addresses"]'),
      myPersonalInfo: $accountBlock.$(
        '[title="Manage my personal information"]'
      ),
    };
  }

  get myOrders() {
    return this.container.$('[title="My orders"]');
  }
}
module.exports = new Footer();
