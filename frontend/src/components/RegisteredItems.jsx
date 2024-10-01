import React from 'react'

const RegisteredItems = ({ registeredCustomerPosition, registeredCustomerReferralID }) => {

    return (
        <>

            <div className="bg-gradient-to-r from-brightRedLight via-red-600 to-brightRed p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-lg font-semibold text-white mb-2">You're Already Registered!</h2>
                <p className="text-xl font-bold text-white">Position: <span className="text-yellow-300">{registeredCustomerPosition}</span></p>
                <p className="text-sm text-white mt-2">Thank you for joining the waitlist. Share your referral link to climb up the list! -- {registeredCustomerReferralID}</p>
            </div>

        </>
    )
}

export default RegisteredItems