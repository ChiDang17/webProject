// chargeCard
export async function POST(req: Request) {
    const chargeDataResponse = await fetch(`http://localhost:8080/api/payment/charge`);
    const chargeData = await chargeDataResponse.json();
    const charge = {
        amount: chargeData.amount,
        token: chargeData.token,
        customerId: chargeData.customerId ?? undefined // optional since it's only for returning customers with card info saved
    };
    return new Response(JSON.stringify(charge));
}