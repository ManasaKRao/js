var array = [
    "KA",
    "KL",
    1222,
    "MH"
];

// for(let i=0;i<array.length;i++){
//     if(typeof array[i] !== "string")
//         continue;
//     console.log(array[i]);
// }


for(let i=0;i<array.length;i++){
    if(typeof array[i] === "string")
        continue;
    console.log(array[i]);
}