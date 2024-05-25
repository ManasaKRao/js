

var ele = (e) =>{
    return e % 2 === 0;
};
/* if you use {} then you need to use return keyword */




var res = [2,4,6,8].every(e);
console.log(res);


/*callback*/
var res = [2,4,6,8].every((e) =>{
    return e % 2 === 0;
});
console.log(res);

/*to avoid return keyword */
/*callback*/
var res = [2,4,6,8].every((e) =>
     e % 2 === 0);
console.log(res);




