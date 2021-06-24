package com.example.demo.controllers;

import com.example.demo.classes.Book;
import com.example.demo.interfaces.BookRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"}) // Could be set to an environment variable for dev/qa/regression/prod
public class BookController {

    BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books/") // Get all
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}") // Get by ID
    public Book getBook(@PathVariable("id") Long id) {
        return bookRepository.findById(id).get();
    }

    @PostMapping("/books/") // Add
    public HttpStatus addBook(@RequestBody Book book){
        bookRepository.save(book);

        return HttpStatus.CREATED;
    }


}
