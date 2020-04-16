module.exports = [
    {
        method: 'GET',
        path: '/',
        handle: () => {
            console.log('/');
        }
    },
    {
        method: 'GET',
        path: '/widget',
        handle: () => {
            console.log('/widget');
        }
    }
]
