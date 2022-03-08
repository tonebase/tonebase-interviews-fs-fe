import React from 'react'

export const CounterButton = ({ increment, ...props}) => <button {...props} className={`bgColor-${increment ? 'positive' : 'negative'}--main w-25 textAlign-center borderRadius-lg`} />
