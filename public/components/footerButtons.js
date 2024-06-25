import React from 'react'

export default function FooterButtons(props) {
  return (
    <>
    <form className="inline text-lg pr-12" action="">
        <h1 className='inline'><a href="#">{props.val}</a></h1>
    </form>
    </>
  )
}
