import React from 'react'
import NavBar from '../components/Navbar'

function predictor() {
  return (
    <div>
      <NavBar/>
    <iframe className='w-full h-screen' src="https://share.streamlit.io/dasdasdas123-art/early-diabetes/main/diabetes_predictor_streamlit.py" frameBorder="0"></iframe>
    </div>
  )
}

export default predictor