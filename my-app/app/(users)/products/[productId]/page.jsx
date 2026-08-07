import React from 'react'

const page = async (props) => {
  const product = await props.params
  return (
    <div>
      {product.productId}
    </div>
  )
}

export default page
