package com.kymbrlee.cookBook.controllers;

import com.kymbrlee.cookBook.model.Recipe;
import com.kymbrlee.cookBook.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller

public class BaseController {
    @Autowired
    @RequestMapping("/breakfast")
    public String breakfast(){
        return "breakfast";
    }
    @RequestMapping("/lunch")
    public String lunch(){
        return "lunch";
    }
    @RequestMapping("/dinner")
    public String dinner(){
        return "dinner";
    }
    @RequestMapping("/dessert")
    public String dessert(){
        return "dessert";
    }
    @RequestMapping("/addRecipe")
    public String addRecipe(){
        return "addRecipe";
    }

    @RequestMapping("/")
    public String baseRoute(){
        return "index";
    }

}
