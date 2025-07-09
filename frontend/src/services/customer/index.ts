import { customerData } from '@/model/Customer';

// email, id, phone, update

export const create_customer = async (customerData: any) => {
    try {
        const response = await fetch(`/api/customer`, {
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

export const get_customer_by_id = async (customerId: string) => {
    try {
        const response = await fetch(`/api/customer/${customerId}`, {
            method: 'GET'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not get customer by ID')
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

export const update_customer = async (customerData: any, customerId: string) => {
    try {
        const response = await fetch(`/api/customer/${customerId}`, {
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

export const delete_customer = async (customerId: string) => {
    try {
        const response = await fetch(`/api/customer/${customerId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not delete customer')
    }
}

export const find_by_email = async (email: string) => {
    try {
        const response = await fetch(`/api/customer/email/${email}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return customer by email')
    }
}

export const find_by_phone_number = async (phoneNumber: number) => {
    try {
        const response = await fetch(`/api/customer/phoneNumber/${phoneNumber}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not return customer by phone numnber')
    }
}