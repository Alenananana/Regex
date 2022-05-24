export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (/\d{4,}/.test(this.name) || !/^[a-z][\w-]*[a-z]$/i.test(this.name)) {
      return 'Invalid name format!!!';
    } else {
      return this.name;
    }
  }
}