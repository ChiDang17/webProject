import { cartData } from '@/model/Cart';

export const create_cart = async (cartData: any) => {
    try {
        const response = await fetch(`/api/cart/create-cart`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({cartData})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not create new cart');
    }
}

export const get_cart_by_id = async (id: number) => {
    try {
        const response = await fetch(`/api/cart/view-cart-by-id/${id}`, {
            method: 'GET',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not find cart with that ID');
    }
}

export const get_all_cart_items = async (customerId: string) => {
    try {
        const response = await fetch(`/api/cart/get-all-cart-items/${customerId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return all cart items');
    }
}

export const update_cart = async (cartData: any, id: number) => {
    try {
        const response = await fetch(`/api/cart/update-cart/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not update cart');
    }
}

export const delete_cart = async (id: number) => {
    try {
        const response = await fetch(`/api/cart/delete-cart/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not delete cart');
    }
}
