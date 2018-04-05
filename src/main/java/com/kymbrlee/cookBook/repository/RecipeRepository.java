package com.kymbrlee.cookBook.repository;
import com.kymbrlee.cookBook.model.Recipe;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public interface RecipeRepository extends MongoRepository<Recipe, String> {
    List<Recipe> findByCategory(String category);
}