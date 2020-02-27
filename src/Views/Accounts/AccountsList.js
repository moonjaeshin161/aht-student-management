import React from 'react'
import AccountsItem from './AccountsItem'

function AccountsList({accounts}) {
    console.log({accounts})
    return (
        <div>
            {
                accounts?.map((account,index) => {
                    return <AccountsItem account = {account} key={index} />
                })
            }
            
        </div>
    )
}

export default AccountsList
