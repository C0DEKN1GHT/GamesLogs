import React from 'react'
import useAxios from '../hooks/useAxios'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function GameList() {

  const [responseValue] = useAxios()
  const render = responseValue.map((element) => {

    const { id, title, thumbnail, publisher, platform } = element

    if (element.id < 100) {
      return (
        <div class="card" style={{ width: "20%", padding: "10px", backgroundColor: "#003153", border: '1px solid #035096' }} key={id}>
          <img class="card-img-top" src={thumbnail} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title" style={{ color: "white" }}>{title}</h5>
            <p class="card-text" style={{ color: "white" }} >{platform}</p>
          </div>
        </div>
      )
    }

  })

  return (
    <div >
      <p style={{ color: "white", position: "relative", fontFamily:"fantasy", top:"10px",  left: "1%" }}>POPULAR GAMES</p>
      <div className='d-flex flex-wrap'>{render}</div>

    </div>
  )
}
