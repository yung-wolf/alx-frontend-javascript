/**
 * Currency
 * @param {string} code
 * @param {string} name
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(line) {
    this._code = line;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
