import { Mic } from '@mui/icons-material'
import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import "./Search.css"
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

const Searching = ({hideButtons = false}) => {
    const[{},dispatch] = useStateValue();
    const[input,setInput] = useState('')
    const navigate = useNavigate()
    const search = e => {
        e.preventDefault()
        console.log("Hit search")
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate('/search')
    }
  return (
    <form className='search'>
        <div className='search_input'>
          <Search className="search_inputIcon"/>
          <input value={input} onChange={e => setInput(e.target.value)}/>
          <Mic/>
        </div>

        {!hideButtons ? (
        <div className='search_buttons'>
            <Button type='submit' onClick={search} variant="outlined">
                Google Search
            </Button>
        </div>
        ) : (
            <div className='search_buttons'>
            <Button className='search_buttonHidden' type='submit' onClick={search} variant="outlined">
                Google Search
            </Button>
        </div>
        )}
    </form>
  )
}

export default Searching