import React, { useReducer, useEffect } from 'react'
import { AccountsReducer } from './AccountsReducer';
import AccountsList from './AccountsList';
import { url } from '../../configs';

function AccountsDashboard() {
    const [accounts, dispatch] = useReducer(AccountsReducer, [
        {
            id: 1,
            username: "nhat",

        }
    ])
    const getAccount = async () => {
        const config = {
            method: "POST",
            start: 0,
            length: 10
        }
        const res = await fetch(`${url}/qltk`, config)
        const json = await res.json();
        const data = json.data;
        console.log(data);
        dispatch({type:"GET_ACCOUNTS", payload: data })
    }
    useEffect(() => {
        getAccount();
    },[])
    return (
        <div>
            {console.log(accounts)}
                <AccountsList accounts={accounts} />
        </div>
    )
}

export default AccountsDashboard;
