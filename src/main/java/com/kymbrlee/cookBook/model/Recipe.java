package com.kymbrlee.cookBook.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Recipe {
    @Id
    private String id;



    private String ingredients;
    private String directions;
    private String recipeName;
    private String category;
    private String breakfast;
    private String lunch;
    private String dinner;
    private String dessert;


    public Recipe (){}



    public String getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(String breakfast) {
        this.breakfast = breakfast;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }

    public String getDessert() {
        return dessert;
    }

    public void setDessert(String dessert) {
        this.dessert = dessert;
    }

    public Recipe(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

//    public Recipe(String breakfast, String lunch, String dinner, String dessert) {
//        this.breakfast = breakfast;
//        this.lunch = lunch;
//        this.dinner = dinner;
//        this.dessert = dessert;
//    }

//    public Recipe(String id, String ingredients, String directions, String recipeName) {
//        this.id = id;
//        this.ingredients = ingredients;
//        this.directions = directions;
//        this.recipeName = recipeName;
//    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getDirections() {
        return directions;
    }

    public void setDirections(String directions) {
        this.directions = directions;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }
}
