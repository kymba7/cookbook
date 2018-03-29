$(document).ready(function(){
    init();
});
function init() {
    enable();
getByCategory();
}
function enable(){
    $("#btnSubmit").on("click", postRecipe);
    $("#btnBreakfast").on("click",getBreakfastRecipe);
    $("#btnLunch").on("click",getLunchRecipe);
    $("#btnDinner").on("click",getDinnerRecipe);
    $("#btnDessert").on("click",getDessertRecipe);
    $(".breakfastContainer").on("click", ".deleteBtn", deleteRecipe);
    $("#makeBtn").on("click", make);

}
function getBreakfastRecipe(){
    event.preventDefault();
    $.ajax({
        type: "GET",
        url: "/getByCategory/",
        success: function (response) {
            console.log("Let's eat Breakfast");
            appendRecipeBreakfast(response._embedded.recipes);
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
            // appendRecipe(response._embedded.recipes);
        // }
    // });
// }
    function postRecipe(event) {
    event.preventDefault();

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
            addRecipe();
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
        el.append("<span>" + recipe.recipeName + " " + "</span>"+
            "<span>" + recipe.ingredients + " - </span>" +
             "<span>" + recipe.directions + " </span>");

        el.append("<button class='btn btn-danger deleteBtn'>Delete</button>");
        el.children().last().data("id", recipe.id); //Imprints, data-id="recipe.id" onto the button element

        el.append("<button class='btn btn-warning makeBtn'>Make</button>");
        el.children().last().data("id", recipe.id);
        el.children().last().data("make", recipe.make);


    }
}