function Router() {
    this.routes = [],
    this.register = arr => {
        for (let i = 0; i < arr.length; i++) {
            this.routes.push(i);
        }
        return this;
    }
    this.handle = (req, res) => {
        console.log(req.method, req.url);
    }
}

module.exports = Router;