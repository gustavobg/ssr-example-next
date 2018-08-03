const createBrowserHistory = () => ({
  location: null,
  push: function push(value) {
    this.location = value;
  },
});

export default createBrowserHistory;
