// import React from 'react'

function Card({username, btnText = "visit me"}) {
  console.log({username});
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
      <img src="" alt="card" />
      <div class="">{username}</div>
      <h1>Hi</h1>
      <button>{btnText}</button>
    </div>

  )
}

export default Card