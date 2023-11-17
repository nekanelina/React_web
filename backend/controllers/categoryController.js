const uuid = require("uuid");
const CategoryModel = require("../models/categoryModel");

const categories = () => CategoryModel;

// Get All services
const getCategories = (req, res) => {
  categories()
    .find({})
    .then((categories) => {
      res.json(categories);
      console.log("getCategories");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
};

// Get Single service by ID
const getCategory = (req, res) => {
  categories()
    .find({})
    .then((categories) => {
      console.log("getCategory");
      const found = categories.some(
        (category) => category.id === parseInt(req.params.id)
      );

      if (found) {
        res.json(
          categories.filter(
            (category) => category.id === parseInt(req.params.id)
          )
        );
      } else {
        res
          .status(400)
          .json({ msg: `No category with the id of ${req.params.id}` });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
};

// Create a New category
const createCategory = (req, res) => {
  categories()
    .find({})
    .then((categories) => {
      console.log("createCategory");
      const newCategory = {
        id: uuid.v4(),
        Title: req.body.Title,
        ...req.body,
      };

      if (!newCategory.Title) {
        return res
          .status(400)
          .json({ msg: "Please include a name and description" });
      }

      categories.push(newCategory);
      res.json(categories);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
};

// Delete category by ID
const deleteCategory = (req, res) => {
  categories()
    .find({})
    .then((categories) => {
      console.log("deleteCategory");
      const found = categories.some(
        (category) => category.id === parseInt(req.params.id)
      );

      if (found) {
        res.json({
          msg: "category deleted",
          categories: categories.filter(
            (category) => category.id !== parseInt(req.params.id)
          ),
        });
      } else {
        res
          .status(400)
          .json({ msg: `No category with the id of ${req.params.id}` });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
};

module.exports = {
  getCategory,
  getCategories,
  createCategory,
  deleteCategory,
};
