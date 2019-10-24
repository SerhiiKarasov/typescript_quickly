class Product {
	id: number;
	description: string;
}

class ProductService {
	getProducts(): Product[] {
		// the code for getting products
		// from a real data source should go here

		return [];
	}

	getProductById(id: number): Product {
		// the code for getting products
		// from a real data source should go here

		return { id: 123, description: 'Good product' };
	}
}

const productService = new ProductService();
const products = productService.getProducts();

class MockProductService implements ProductService {
	getProducts(): Product[] {
		// the code for getting hard-coded
		// products goes here

		return [];
	}

	getProductById(id: number): Product {
		return { id: 456, description: 'Not a real product' };
	}
}
