import { customerData } from '@/model/Customer';

// email, id, phone, update

export const create_customer = async (customerData: any) => {
    try {
        const response = await fetch(`/api/customer/create-customer`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not create new customer')
    }
}

export const delete_customer = async (id: number) => {
    try {
        const response = await fetch(`/api/customer/delete-customer/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log('Could not delete customer')
    }
}

export const get_all_customers = async () => {
    try {
        const response = await fetch(`/api/customer`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return all customers')
    }
}

export const get_customer_by_email = async (email: string) => {
    try {
        const response = await fetch(`/api/customer/get-customer-by-email/${email}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return customer by email')
    }
}

export const get_customer_by_phone = async (phoneNumber: number) => {
    try {
        const response = await fetch(`/api/customer/get-customer-by-phone/${phoneNumber}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return customer by phone numnber')
    }
}

export const get_customer_by_id = async (id: number) => {
    try {
        const response = await fetch(`/api/customer/get-customer-by-id/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return customer by id')
    }
}

export const update_customer = async (customerData: any, id: number) => {
    try {
        const response = await fetch(`/api/customer/update-customer/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not update customer')
    }
}