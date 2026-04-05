const express = require("express");
const router = express.Router();
const Student = require("../Models/student");

// GET all students
router.get("/", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// GET single student
router.get("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// POST create student
router.post("/", async (req, res) => {
    const student = new Student({
        name: req.body.name,
        course: req.body.course,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city
    });

    const savedStudent = await student.save();
    res.json(savedStudent);
});

// PUT update student
router.put("/:id", async (req, res) => {
    const updated = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updated);
});

// DELETE student
router.delete("/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

module.exports = router;