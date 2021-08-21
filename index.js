const standardizeInput = function(collection){
    return (collection instanceof Array) ? collection : Object.values(collection)
}

function myEach(collection,callback){
    const newCollection =standardizeInput(collection);
    for(let a =0 ;a<newCollection.length;a++){
        callback(newCollection[a]);
    }
    return collection
}
const myMap = function(collection,callback){
    const newCollection =standardizeInput(collection);
    const newArray =[];
    for(let a =0 ;a<newCollection.length;a++){
        newArray.push(callback(newCollection[a]));
    }
    return newArray
}
let myFind = function(collection,predicate){
    const newCollection =standardizeInput(collection);
   for(let a=0;a<newCollection.length;a++){
     if(predicate(newCollection[a])) 
     return newCollection[a];
   }
   return undefined

}
const  myFilter = function(collection,predicate){
    const newCollection = standardizeInput(collection);
    const filteredCollection = [];

    for(let a =0 ; a < newCollection.length; a++){
      if(predicate(newCollection[a]))
      filteredCollection.push(newCollection[a]);
    }
    return filteredCollection;
}


const mySize = function(collection){
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}

const myKeys = function(object){
    let retrieve =Object.getOwnPropertyNames(object);
    return retrieve

}
const myValues = function(object){
    let retrieve =Object.values(object);
    return retrieve

}