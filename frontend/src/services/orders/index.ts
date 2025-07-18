import { orderData } from '@/model/Orders';

export const create_order = async (orderData: orderData) => {
    try {
        const response = await fetch(`/api/orders/create-order`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not craete new order')
    }
}

export const get_order_by_id = async (customerId: string) => {
    try {
        const response = await fetch(`/api/orders/customer/${customerId}`, {
            method: 'GET',
        })
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not find order with that ID')
    }
} 

export const get_all_orders = async () => {
    try {
        const response = await fetch(`/api/orders/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not return all orders')
    }
}

export const update_order = async (orderData: orderData, orderId: string) => {
    try {
        const response = await fetch(`/api/orders/${orderId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not update order')
    }
}

export const delete_order = async (orderId: string) => {
    try {
        const response = await fetch(`/api/orders/${orderId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Could not delete order')
    }
}