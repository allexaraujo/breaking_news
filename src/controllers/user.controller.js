const sum = (req, res) => {
    const sum = 100 + 1;
    res.send({ sum: sum })

}

module.exports = { sum };