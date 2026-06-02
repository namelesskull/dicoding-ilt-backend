import prisma from "../../prisma/libs/prisma.js";

export async function getProducts(_req, res) {
  try {
    const products = await prisma.products.findMany();

    return res
      .status(200)
      .json({ message: "Products retrieved successfully!", data: products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await prisma.products.findUnique({ where: { id } });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product retrieved successfully!", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function createProduct(req, res) {
  try {
    const { title, description, sku, price } = req.body;

    const product = await prisma.products.create({
      data: {
        title,
        description,
        sku,
        price,
      },
    });

    return res
      .status(201)
      .json({ message: "Product created successfully!", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { title, description, sku, price } = req.body;

    const existing = await prisma.products.findUnique({ where: { id } });

    if (!existing) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = await prisma.products.update({
      where: { id },
      data: {
        title,
        description,
        sku,
        price,
      },
    });

    return res
      .status(200)
      .json({ message: "Product updated successfully!", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const existing = await prisma.products.findUnique({ where: { id } });

    if (!existing) {
      return res.status(404).json({ message: "Product not found" });
    }

    await prisma.products.delete({ where: { id } });

    return res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
