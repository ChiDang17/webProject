import { productData } from '@/model/Product';

export const create_product = async (productData: any) => {
    try {
        const response = await fetch(`/api/product/create-product`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not create product')
    }
}

export const delete_product = async (id: number) => {
    try {
        const response = await fetch(`/api/product/delete-product/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log('Could not delete product')
    }
}

export const get_product_by_category = async (category: string) => {
    try {
        const response = await fetch(`/api/product/get-product-by-category/${category}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return products by category')
    }
}

export const get_product_by_id = async (id: number) => {
    try {
        const response = await fetch(`/api/product/get-product-by-id/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return product by id')
    }
}

export const get_product_by_color = async (color: string) => {
    try {
        const response = await fetch(`/api/product/get-product-by-color/${color}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return products by color')
    }
}

export const get_product_by_size = async (size: number) => {
    try {
        const response = await fetch(`/api/product/get-product-by-size/${size}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return products by size')
    }
}

export const get_all_products = async () => {
    try {
        const response = await fetch(`/api/product`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return all products')
    }
}

export const update_product = async (productData: any, id: number) => {
    try {
        const response = await fetch(`/api/product/update-product/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not update product')
    }
}
