import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React, { useState } from 'react';
import WatchList from '../../container/WatchList';
import { Badge } from '@mui/material';

interface ListToWatchProps {
    badgeContent: number;
}

const ListToWatch: React.FC<ListToWatchProps> = ({ badgeContent }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div className='w-full px-16 py-4 flex justify-center'>
            <button className='text-white bg-black py-2 px-[75px] rounded-full' onClick={handleOpen}>
                <Badge badgeContent={badgeContent} color="error">
                    <FormatListBulletedIcon /> Minha Lista
                </Badge>         
            </button>
            {open && <WatchList handleClose={handleClose} />}
        </div>
    )
}

export default ListToWatch;