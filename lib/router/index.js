const routes = require('./routes');

function Router() {
    this.routes = routes;   
}

Router.prototype.processRequest = function(req, cb) {
    return new Promise(resolve => {
        let requestedRoute = {
            method: req.method,
            hasId: false
        }
        
        const lastCharacter = req.url.slice(req.url.length - 1);
        
        if (lastCharacter === '/' && req.url.length > 1) {
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
    
        // TODO handle exceptions
        resolve(requestedRoute);
    });
}

Router.prototype.handle =  async function(req, res) {

    const processedRequest = await this.processRequest(req);

    const match = this.routes.filter(obj => {       
        for (var key in processedRequest) {
            if (key === 'method' || key === 'path') {
                if (obj[key] === undefined || obj[key] !== processedRequest[key]) {
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

    if (processedRequest.hasId) {
        return matchingRoute.action(processedRequest.id, req, res);
    }

    return matchingRoute.action(req, res);    
}

module.exports = Router;
