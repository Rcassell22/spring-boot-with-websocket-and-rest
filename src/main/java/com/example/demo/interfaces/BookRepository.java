package com.example.demo.interfaces;

import com.example.demo.classes.Book;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long>{

}
