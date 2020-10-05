// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return typeof matrix === undefined
        ? []
        : matrix
              .map((element, i) => (i % 2 !== 0 ? element.reverse() : element))
              .flat();
};
