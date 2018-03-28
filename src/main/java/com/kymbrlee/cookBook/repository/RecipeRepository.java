package com.kymbrlee.cookBook.repository;
import com.kymbrlee.cookBook.model.Recipe;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<Recipe, String>{
}
