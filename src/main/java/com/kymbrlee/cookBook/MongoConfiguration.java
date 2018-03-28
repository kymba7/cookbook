package com.kymbrlee.cookBook;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.kymbrlee.cookBook.repository")

public class MongoConfiguration extends AbstractMongoConfiguration {
    @Override
    protected String getDatabaseName(){
        return "cookbookdb";
    }
    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient("127.0.0.1",27017);
    }
}
