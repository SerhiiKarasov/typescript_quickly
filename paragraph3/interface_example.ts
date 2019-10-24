interface Product {
	id: number;
	description: string;
}

interface IProductService {
	getProducts(): Product[];
	getProductById(id: number): Product;
}

class ProductService implements IProductService {
	getProducts(): Product[] {
		// the code for getting products
		// from a real data source goes here

		return [];
	}

	getProductById(id: number): Product {
		// the code for getting a product by id goes here
		return { id: 123, description: 'Good product' };
	}
}

class MockProductService implements IProductService {
	getProducts(): Product[] {
		// the code for getting hard-coded
		// products goes here

		return [];
	}

	getProductById(id: number): Product {
		return { id: 456, description: 'Not a real product' };
	}
}
