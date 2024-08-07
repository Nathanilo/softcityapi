import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const {userId} = req.userId;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      createdBy: userId,
    });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
