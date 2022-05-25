import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async(req, res) => {
  const keyword = req.query.keyword ? 
  {
    name: { $regex: req.query.keyword,
            $options: 'i'
          }
  } : {}
  
  const products = await Product.find({...keyword})
    res.json(products);
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createProductReview = asyncHandler(async(req, res) => {
  console.log(req.user)
  const {rating, comment} = req.body
  const product = await Product.findById(req.params.id);

  if (product){
    const alreadyReviewd = product.reviews.find(r=>r.user.toString()=== req.user.id.toString())
    
    if(alreadyReviewd){
      res.status(400)
      throw new Error ('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    }
    
    product.reviews.push(review);
    product.numReviews = product.reviews.length
    product.rating = product.reviews.reduce((acc, item)=>item.rating + acc,0)/product.reviews.length
    await product.save();
    res.status(201).json({message:'Review added'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {getProducts, getProductById, createProductReview}
