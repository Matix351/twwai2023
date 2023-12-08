function isEven (tab){
    return tab.filter(function (x) { return x%2 !==0;})
}


module.exports = {
    isEven: isEven
}


