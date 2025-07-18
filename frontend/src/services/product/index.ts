import { productData } from '@/model/Product';

export const create_product = async (productData: productData) => {
    try {
        const response = await fetch(`/api/product`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not create product')
    }
}

export const get_product_by_id = async (productData: productData) => {
    try {
        const response = await fetch(`/api/product/${productData}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return product by id')
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
    } catch {
        console.error('Could not return all products')
    }
}

export const update_product = async (productData: productData, productId: string) => {
    try {
        const response = await fetch(`/api/product/${productId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not update product')
    }
}

export const delete_product = async (productId: string) => {
    try {
        const response = await fetch(`/api/product/delete-product/${productId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not delete product')
    }
}

export const find_by_color = async (color: string) => {
    try {
        const response = await fetch(`/api/product/color/${color}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return products by color')
    }
}

export const find_by_size = async (size: number) => {
    try {
        const response = await fetch(`/api/product/size/${size}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return products by size')
    }
}

export const find_by_product_type = async (productType: string) => {
    try {
        const response = await fetch(`/api/product/productType/${productType}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return products by product type')
    }
}

