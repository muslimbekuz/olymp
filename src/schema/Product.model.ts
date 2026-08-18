import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductEdition,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productEdition: {
      type: String,
      enum: ProductEdition,
      default: ProductEdition.NEW,
    },

    productVolume: {
      type: String,
      enum: ProductVolume,
      default: ProductVolume.CHILD,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, // createdAt, updatedAt
);

productSchema.index(
  { productName: 1, productEdition: 1, productVolume: 1 },
  { unique: true },
);
export default mongoose.model("Product", productSchema);
