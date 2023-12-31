const express=require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReviews, getProductReviews, delReviews, deleteReview, getAdminProducts, getProductDetail } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../meddleware/auth");

const router=express.Router();

router.route('/products').get(getAllProducts)

router.route('/admin/products').get(isAuthenticatedUser,authorizeRoles("admin"),getAdminProducts)

router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)

router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)

router.route("/product/:id").get(isAuthenticatedUser,getProductDetails)

router.route("/productDetails/:id").get(getProductDetail)


router.route("/review").put(isAuthenticatedUser, createProductReviews)

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

module.exports = router