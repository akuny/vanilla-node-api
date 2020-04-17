module.exports = [
    {
        method: 'GET',
        path: '/',
        action: (req, res) => {
            return res.end('This is the home page!');
        }
    }
]
    