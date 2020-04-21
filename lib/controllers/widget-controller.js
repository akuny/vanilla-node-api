const Widget = require('../model/Widget');

module.exports = {
    index: function(req, res) {
        let test = new Widget();
        test.findAll((err, widgets) => {
            return res.end('Here are all the widgets!');
        });
    },
    show: function(id, req, res) {
        return res.end('Here is one widget with id=' + id);
    },
    store: function(req, res) {
        let data = [];
        req.on('data', chunk => {
          data.push(chunk)
        })
        req.on('end', () => {
          const body = JSON.parse(data);
          let test = new Widget({ name: body.name, description: body.description});
          test.create((err, result) => {
              return res.end('Storing one widget...');
          });
        });

    },
    update: function(id, req, res) {
        return res.end('Updating one widget with id=' + id);
    },
    destroy: function(id, req, res) {
        return res.end('Destroying one widget with id=' + id);
    }
}
