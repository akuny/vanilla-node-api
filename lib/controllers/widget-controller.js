module.exports = {
    index: function(req, res) {
        return res.end('Here are all the widgets!');
    },
    show: function(id, req, res) {
        return res.end('Here is one widget with id=' + id);
    },
    store: function(req, res) {
        return res.end('Storing one widget...');
    },
    update: function(id, req, res) {
        return res.end('Updating one widget with id=' + id);
    },
    destroy: function(id, req, res) {
        return res.end('Destroying one widget with id=' + id);
    }
}
