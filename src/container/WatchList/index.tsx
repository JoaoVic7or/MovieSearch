import { Box, Modal as MuiModal } from '@mui/material';
import React from 'react';
import CardsWatchList from '../../components/CardsWatchList';

interface WatchListProps {
    handleClose: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 569,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    overflowX: 'scroll',
};

const WatchList: React.FC<WatchListProps> = ({ handleClose }) => {
    return (
        <MuiModal open={true} onClose={handleClose}>
            <Box sx={style}>
                <h4 className="text-center text-2xl border-b-2 w-full">Minha Lista</h4>
                <div className="flex gap-2 flex-wrap justify-center">
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                    <CardsWatchList />
                </div>
            </Box>
        </MuiModal>
    );
};

export default WatchList;
