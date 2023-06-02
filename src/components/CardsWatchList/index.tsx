import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


const CardsWatchList = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            className="bg-headerColor text-white rounded-md shadow-xl relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
                <DeleteIcon className="absolute text-red-600 ml-[133px] mt-[1px] cursor-pointer" />
            )}
            <img src="https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg" alt="foto" className="w-40 rounded-b-md" />
            <div className="p-1 text-center flex flex-col justify-between absolute bg-black/[.7] mt-[-80px] h-20 rounded-b-md">
                <Typography>The Simpsons Movie</Typography>
            </div>
        </Box>
    );
};

export default CardsWatchList;
