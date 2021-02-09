import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Badge, InputAdornment, InputBase } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ListIcon from '@material-ui/icons/List'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import GavelIcon from '@material-ui/icons/Gavel'

const Navbar1 = () => {
    return (
        <div className='d-f m-0 p-0'>
            <div className='m-15'>
                <p className='mt-3'>Dashboard</p>
            </div>
            <div className='m-15'>
                <InputBase
                    className='mt-3'
                    placeholder='Search'
                    id='search'
                    startAdornment={
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </div>
            <div className='d-f ml-auto'>
                <div className='d-f m-15'>
                    <TrendingUpIcon />
                    <p className='mt-3'>Stats</p>
                </div>
                <div className='m-15'>
                    <GavelIcon />
                </div>
                <div className='m-15'>
                    <Badge badgeContent={4} color='primary'>
                        <NotificationsIcon />
                    </Badge>
                </div>
                <div className='m-15'>
                    <ListIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar1
