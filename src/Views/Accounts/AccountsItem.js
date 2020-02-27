import React from 'react'

function AccountsItem({account}) {
    return (
        <div>
            
            <h1>{account._id}</h1>
            <h1>{account.username}</h1>
            
        </div>
    )
}

export default AccountsItem
