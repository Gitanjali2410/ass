const express = require("express");
const router = express.Router();
const Book = require("../Models/book");

// GET all books
router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// GET single book
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// POST create book
router.post("/", async (req, res) => {
    const book = new Book({
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        publishedyear: req.body.publishedyear
    });

    const savedBook = await book.save();
    res.json(savedBook);
});

// PUT update book
router.put("/:id", async (req, res) => {
    const updated = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updated);
});

// DELETE book
router.delete("/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
});

module.exports = router;