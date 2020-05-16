exports.sum = (a, b) => {
    return {  x: a.x + b.x, y: a.y + b.y};
}

exports.sub = (a, b) => {
    return { x: a.x - b.x, y: a.y - b.y};
}

exports.escalar = (a,b) => {
    return {x: a.x * b.x, y: a.y * b.y};
}
exports.dot = (a,b) => {
    return {x: (a.x * a.y) + (b.x +b.y), y: 0};
}