class Formatter {
  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static sanitize(text) {
    return text.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(text) {
    const alwaysLower = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"];
    // wanted to make this a private field but "npm update" is hanging for many minutes ...
    return this.capitalize(text.split(" ").map(word => alwaysLower.includes(word) ? word : this.capitalize(word)).join(" "));
  }

}