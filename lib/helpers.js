const isEmpty = obj =>{

    if (obj === null) {
        return true;
    }

    if (obj.length > 0) {
        return false;
    }

    if (obj.length === 0) {
        return true;
    }

    if (typeof obj !== 'object') {
        return true;
    }

    for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }

    return true;
}

const getSubset = (obj, key) => {
    const x = key;
    (({ x }) => ({ x }))(obj);
}

module.exports = {
    isEmpty,
    getSubset
}
