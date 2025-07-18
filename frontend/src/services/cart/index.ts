import { cartData } from '@/model/Cart';

export const create_cart = async (cartData: cartData) => {
    try {
        const response = await fetch(`/api/cart`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not create new cart');
    }
}

export const delete_by_customer_id = async (customerId: string) => {
    try {
        const response = await fetch(`/api/cart/${customerId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not delerte cart by customer ID');
    }
}

export const find_by_customer_id = async (customerId: string) => {
    try {
        const response = await fetch(`/api/cart/find/${customerId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not find cart by customer ID');
    }
}

export const get_all_cart_items = async (customerId: string) => {
    try {
        const response = await fetch(`/api/cart/items/${customerId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return all cart items');
    }
}

export const update_cart = async (customerId: string, cartData: cartData) => {
    try {
        const response = await fetch(`/api/cart/${customerId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not update cart');
    }
}
