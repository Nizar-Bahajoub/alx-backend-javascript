import { TestWatcher } from 'jest';
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (typeof currency !== 'number') {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
