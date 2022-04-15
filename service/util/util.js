module.exports = {
    formatResult: (res) => {
        return JSON.parse(JSON.stringify(res, null, 4))
    },
    randomInteger: (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}
