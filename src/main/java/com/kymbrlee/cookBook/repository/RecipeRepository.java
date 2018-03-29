package com.kymbrlee.cookBook.repository;
import com.kymbrlee.cookBook.model.Recipe;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public interface RecipeRepository extends MongoRepository<Recipe, String> {
      List<Recipe> recipeList = new ArrayList<>();

    public List<Recipe> getByCategory(String category) {
        List<Recipe> foundRecipes = new ArrayList<>();

        for (Recipe recipe : recipeList) {
            switch(recipe.getCategory().equals(category)) {

                case "breakfast":

            }
        }

        return foundRecipes;
    }

}