import axios from 'axios';

const ROOT_URL = 'http://localhost:3007/transfer';

export const SEND_MONEY = 'SEND_MONEY';

export default function txSubmit(data){
    const request = axios.post('/transfer',{
        from: data.from,
        to: data.to,
        amount: data.amount,
        date: data.date,
        memo: data.memo
    })

    return {
              type: SEND_MONEY,
            };
}
