const Widget = require('../model/Widget');

const index = (req, res) => {
    const widget = new Widget();
    widget.findAll((err, widgets) => {
        res.statusCode = 200;
        return res.end(JSON.stringify(widgets));
    });
}

const show = (req, res, query) => {
    const widget = new Widget(query);
    widget.findOne((err, result) => {
        return res.end(JSON.stringify(result));
    });
}

const store = (req, res) => {
    let data = [];

    req.on('data', chunk => {
        data.push(chunk);
    });

    req.on('end', () => {
        const body = JSON.parse(data);
        const newWidget = new Widget({ name: body.name, description: body.description});
        newWidget.create((err, result) => {
            res.statusCode = 200;
            return res.end(JSON.stringify(result));
        });
    });
}

const update = (query, req, res) => {
    return res.end('Updating one widget with id=' + id);
}

const destroy = (query, req, res) => {
    return res.end('Destroying one widget with id=' + id);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}