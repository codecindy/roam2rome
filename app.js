console.log("JS file loaded");

var Capital = new ParseObjectType("Capital");

Capital.create({title:'My first Item'}, function(){
  Capital.getAll(function(err, results){
    console.log(results)
  })
});

// 1. REST countries - populate list of capital city and country
// 2. click on one to add to see the weather in that country
// 3. adding the capital city and country to the list of places to visit
// 4. click checkbox to update if it's been visited
// 5. click forget it to delete the place from the list
// 6. make 'place' actively link to weather