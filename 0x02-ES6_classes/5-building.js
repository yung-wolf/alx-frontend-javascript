/**
 * Building
 * @param {Number} sqft
 */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
