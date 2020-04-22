const url = require('url');
const { isEmpty, getSubset } = require('../helpers');
const routes = require('./routes');

const processRequest = async req => {
    let requestedRoute = {
        method: req.method,
        hasParams: false
    }
    
    const lastCharacter = req.url.slice(req.url.length - 1);
    
    if (lastCharacter === '/' && req.url.length > 1) {
        requestedRoute.path = req.url.slice(0, -1); 
    } else {
        requestedRoute.path = req.url; 
    }

    const urlParts = url.parse(req.url, true);
    const query = urlParts.query;

    if (!isEmpty(query)) {
        if ('name' in query) {
            const { name, ...rest } = query;
            requestedRoute.params = { name };
            requestedRoute.hasParams = true;
            requestedRoute.path = `${url.parse(req.url,true).pathname}?name`;  
        }
    }

    return requestedRoute;
}

const handle = async (req, res) => {

    const processedRequest = await processRequest(req);

    const match = routes.filter(obj => {       
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

    if (processedRequest.hasParams) {
        return matchingRoute.action(req, res, processedRequest.params);
    }

    return matchingRoute.action(req, res);    
}

module.exports = {
    handle
};
