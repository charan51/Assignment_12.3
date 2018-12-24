function map(arrayData, callback) {
    arrayData.forEach(element => {
        callback(element);
    });
}
map([1,2,3,4], function(num) {
    return num * 2;
});
