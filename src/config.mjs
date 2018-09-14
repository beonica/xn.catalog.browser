const mode = 0;

export default {
  get backend() {
    switch (mode) {
      case 1:
        return "https://beon-api-catalog-dev.mybluemix.net/";
      default:
        return "http://localhost:10002/";
    }
  }
};
