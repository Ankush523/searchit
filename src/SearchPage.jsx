import { Description, Image, LocalOffer, More, MoreVert, PlayArrow, PlayArrowOutlined, PlayCircleFilledOutlined, Search, VideoCall, VideoCameraBack } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Searching from './components/Searching'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    console.log(data)
  return (
    <div className='searchpage'>
        <div className='searchpage_header'>
            <Link to="/">
                <img className='searchpage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
            </Link>

            <div className='searchpage_headerbody'>
                <Searching hideButtons/>

                <div className='searchpage_options'>
                    <div className='searchpage_optionsleft'>
                        <div className='searchpage_option'>
                            <Search/>
                            <Link to="/all">All</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Description/>
                            <Link to="/news">News</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Image/>
                            <Link to="/images">Images</Link>
                        </div>

                        <div className='searchpage_option'>
                            <LocalOffer/>
                            <Link to="/shopping">Shopping</Link>
                        </div>

                        <div className='searchpage_option'>
                            <MoreVert/>
                            <Link to="/more">More</Link>
                        </div>
                    </div>

                    <div className='searchpage_optionsright'>
                        <div className='searchpage_option'>
                            <Link to="/settings">Settings</Link>
                        </div>

                        <div className='searchpage_option'>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {term && (
            <div className='searchpage_results'>
                <p className='searchpage_resultcount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                </p>
                {data?.items.map(item => (
                    <div className='searchpage_result'>
                        <a href={item.link}>

                            {item.displayLink}
                        </a>
                        <a className='searchpage_resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className='searchpage_resultsnippet'>
                            {item.snippet}
                        </p>

                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default SearchPage