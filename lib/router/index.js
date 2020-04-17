function Router(routes) {
    this.routes = routes;   
}

Router.prototype.processRequest = function(req, cb) {

    let requestedRoute = {
        method: req.method,
        hasId: false
    }
    
    const lastCharacter = req.url.slice(req.url.length - 1);
    
    if (lastCharacter === '/') {
        requestedRoute.path = req.url.slice(0, -1); 
    } else {
        requestedRoute.path = req.url; 
    }

    const filteredId = requestedRoute.path.split('/').filter(i => {
        if (i === '' || isNaN(i)) {
            return false;
        }
        return true;
    });

    if (filteredId.length > 0) {
        requestedRoute.hasId = true;
        requestedRoute.id = parseInt(filteredId[0]);
        requestedRoute.path = requestedRoute.path.replace(filteredId[0], ':id');
    }

    // TODO handle exceptions, TODO use anything but cb for async
    cb(requestedRoute);
}

Router.prototype.handle = function(req, res) {

    // TODO avoid this if possible
    let self = this;

    // TODO handle exceptions in cb
    this.processRequest(req, function(result) {       
        const match = self.routes.filter(obj => {       
            for (var key in result) {
                if (key === 'method' || key === 'path') {
                    if (obj[key] === undefined || obj[key] !== result[key]) {
                        return false;
                    }
                }
            }
            return true;
        });   
    
        if (match.length <= 0) {
            res.statusCode = 404;
            return res.end('404');
        }

        const matchingRoute = match[0];
    
        res.statusCode = 200;   
    
        if (result.hasId) {
            return matchingRoute.action(result.id, req, res);
        }
    
        return matchingRoute.action(req, res);    
    });
}

module.exports = Router;
