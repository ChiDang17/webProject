export const create_order = async (orderData: any) => {
    try {
        const response = await fetch(`/api/orders/create-order`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({orderData})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not craete new order')
    }
}

export const view_order_by_id = async (id: number) => {
    try {
        const response = await fetch(`/api/orders/view-order-by-id/${id}`, {
            method: 'GET',
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not find order with that ID')
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
    } catch (error) {
        console.log('Could not return all orders')
    }
}

export const update_order = async (orderData: any, id: number) => {
    try {
        const response = await fetch(`/api/orders/update-order/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not update order')
    }
}

export const delete_order = async (id: number) => {
    try {
        const response = await fetch(`/api/orders/delete-order/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log('Could not delete order')
    }
}