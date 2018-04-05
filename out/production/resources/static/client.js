var hits = [];
var num = 0;


$(document).ready(function(){
    init();
});
function init() {
    enable();
//getByCategory();
//     getBreakfastRecipe();
}


function enable(){
    $("#btnSubmit").on("click", postRecipe);
    $("#btnBreakfast").on("click",getBreakfastRecipe);
    $("#apicall").on("click",apicall);
    $("#nextBtn").on("click",nextRecipe);
    $("#prevBtn").on("click",previousRecipe);
        // $("#prevBtn").on("click", function(){
            // console.log("Prev");
            // --num < 0 && (num = hits.length -1);
            // recipeData();
        // });
        // $("#nextBtn").on("click", function() {
        //     console.log("Next");
            // ++num >= hits.length && (num = 0);
            // recipeData();
        // });
    // $("#btnLunch").on("click",getLunchRecipe);
   // $("#btnDinner").on("click",getDinnerRecipe);
   // $("#btnDessert").on("click",getDessertRecipe);
   // $(".breakfastContainer").on("click", ".deleteBtn", deleteRecipe);
   // $("#makeBtn").on("click", make);
}

function apicall(event){
    event.preventDefault()
   var val = document.getElementById('search_recipe').value
    var appId = '6713ec6c'
    var appkey = '0376234f797f10654ab069bff5078bed'
    $.ajax({
        type: "GET",
        url: "https://api.edamam.com/search?q=${val}&app_id=$" + appId + "&app_key=$" + appkey,
        success: function (response) {
            console.log(response)
            appendData(response.hits)
        }
    });
    document.getElementById('search_recipe').value = ''
}

function appendData(hits) {
    if (hits == 0 || hits == null) {
        alert("nothing found.")
    }
    recipeData(hits)
}

function recipeData(hits,i) {
    var i =0;
    $("#recipeTitle").append(hits[i].recipe.label);
    $("#recipeImage").append('<img src="' + hits[i].recipe.image + '">');
    $("#recipeIngredients").append(hits[i].recipe.ingredientList);
    $("#recipeLink").append("<a href='" + hits[i].recipe.shareAs + "'>Go to Recipe </a>");
}


function nextRecipe() {
    var i= 1;
    if(num > 9){
        num = num++

    }
    $("#recipeTitle").append(hits[i].recipe.label);
    $("#recipeImage").append('<img src="' + hits[i].recipe.image + '">');
    $("#recipeIngredients").append(hits[i].recipe.ingredientList);
    $("#recipeLink").append("<a href='" + hits[i].recipe.shareAs + "'>Go to Recipe </a>");
}

function previousRecipe() {
    if(num <= 0 ){
        return
    } else {
        num = num--
    }
    recipeData()
}


// function appendData(hitsArray) {
//     $("#searchResults").empty();
//
//     for (var i = 0; i < hitsArray.length; i++) {
//         $("#searchResults").append("<img src='" + hitsArray[i].images.fixed_height.url + "'/>");
//     }
// }

function getBreakfastRecipe (){
   event.preventDefault();
    $.ajax({
        type: "GET",
        url: "/getByCategory/breakfast",
        success: function (response) {
            console.log("Let's eat Breakfast");
            console.log(response);
           // appendRecipeBreakfast(response._embedded.breakfast);
        }
    });
}
// function getRecipe(event) {
// event.preventDefault();
// $.ajax({
//     type: "GET",
//     url: "/recipes",
//     success: function (response) {
//         console.log("hi");
// appendRecipe(response._embedded.recipe);
// }
// });
// }
function postRecipe(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/recipes",
        data: JSON.stringify({
            ingredients:$("#txtIngredients").val(),
            directions:$("#txtDirections").val(),
            recipeName:$("#txtRecipeName").val(),
            category: $("#txtCategory").val()
            // ingredients: "",
            // directions: "",
            // recipeName: ""
        }),
        success: function (response) {
            // getRecipe();
            // addRecipe();
            console.log("I've posted it")
        }
    });
    $("#txtIngredients").val("");
    $("#txtDirections").val("");
    $("#txtRecipeName").val("");
    $("#txtCategory").val("");
}
function deleteRecipe(){
    $.ajax({
        type: "DELETE",
        url: "/recipes/" + $(this).data("id"),
        success: function(response){
            getBreakfastRecipe();
        }
    })
}
// function make() {
//
// $.ajax({
//     type: "GET",
//     url: "/recipes/" + $(this).data("id"),
//     data: JSON.stringify({
//         ingredients: $("#txtIngredients").val(),
//         directions: $("#txtDirections").val(),
//         recipeName: $("#txtRecipeName").val(),
//
//         success: function (response) {
//             console.log("hi");
//             appendRecipe(response._embedded.recipes);
// }
// })
// })
// }
// var status =  $(this).data("done");
// $.ajax({
//     type: "PATCH",
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     url: "/recipes/" + $(this).data("id"),
//     data: JSON.stringify({
//         done: !status
//     }),
//     success: function(response){
//         getRecipe();
//     }
// });
// $("#txtIngredients").val("");
// $("#txtDirections").val("");
// $("#txtRecipeName").val("");
//
// }
// $("#txtTodo").val("");
// function tab() {
//     $('.nav-tabs a').on(function () {
//         $(this).tab('show');
//     })
// }
function appendRecipeBreakfast(recipeList) {
    $(".breakfastContainer").empty();
    for (var i = 0; i < recipeList.length; i++) {
        var recipe = recipeList[i];
        $(".breakfastContainer").append("<div class='row task-list'></div>");
        var el = $(".breakfastContainer").children().last();
        // if (!recipe.make) {
        //     make();
        // }
        el.append("<div class='col-md-10 col-md-offset-1'></div>");
        el = el.children().last();
        el.append("<span>" + recipe.recipeName + " " + "</span>" +
            "<span>" + recipe.ingredients + " - </span>" +
            "<span>" + recipe.directions + " </span>");
        el.append("<button class='btn btn-danger deleteBtn'>Delete</button>");
        el.children().last().data("id", recipe.id); //Imprints, data-id="recipe.id" onto the button element
        el.append("<button class='btn btn-warning makeBtn'>Make</button>");
        el.children().last().data("id", recipe.id);
        el.children().last().data("make", recipe.make);
    }
}


