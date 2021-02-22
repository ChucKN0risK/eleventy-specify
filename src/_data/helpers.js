const tinycolor = require('tinycolor2');

module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {color} color The color rgba object returned by Specify
   * @param {format} format The requested end format
   * @returns {String} The converted color
   */
  getFormattedColor(color, format) {
    const formattedColor = tinycolor(color.value).toString(format);

    console.log(formattedColor);

    return formattedColor;
  }
};
