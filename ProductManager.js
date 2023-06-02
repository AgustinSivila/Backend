// Desafio 1

class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('todos los campos son obligatorios');
      return;
    }

    if (this.isCodeDuplicate(code)) {
      console.error('Code debe ser unico');
      return;
    }

    const product = {
      id: this.nextId++,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock
    };

    this.products.push(product);
  }

 

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      console.error('Not found');
      return null;
    }
  }

  getProducts() {
    return this.products;
  }

  isCodeDuplicate(code) {
    return this.products.some(product => product.code === code);
  }
}


const productManager = new ProductManager();

// Agregar productos
productManager.addProduct("Camiseta", "Camiseta de algodón", 20.0, "/path/to/thumbnail1.jpg", "P001", 10);
productManager.addProduct("Pantalón", "Pantalón vaquero", 30.0, "/path/to/thumbnail2.jpg", "P002", 5);

// Obtener todos los productos
const products = productManager.getProducts();
console.log(products);

// Obtener un producto por su id
const product = productManager.getProductById(1);
console.log(product);


