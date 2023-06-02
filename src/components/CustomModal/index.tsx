import { Modal as MuiModal, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import imdb from '../../assets/imdb.svg';
import metascore from '../../assets/metascore.svg';
import rotten from '../../assets/rotten.svg';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
};

interface CustomModalProps {
    handleClose: () => void;
    title: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ handleClose, title }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=3784d7d4`);

                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API.');
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao obter os dados da API:', error);
            }
        };
        fetchData();
    }, [title]);

    const images: any = {
        'Internet Movie Database': imdb,
        'Rotten Tomatoes': rotten,
        'Metacritic': metascore
    }

    const handleButtonClick = () => {
        window.open(`https://www.imdb.com/title/${data.imdbID}/`, "_blank")
    }

    return (
        <MuiModal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {data && (
                    <>
                        <button className="absolute ml-[22rem] mt-[-22px]" onClick={handleClose}>
                            <CloseIcon />
                        </button>
                        <img src={data.Poster} alt="poster" className='w-48' />
                        <Typography id="modal-modal-title" variant="h4" className="text-center">
                            {title}
                        </Typography>
                        <p className="text-center">{data.Runtime} | {data.Released} <br /> {data.Genre}</p>
                        <Typography id="modal-modal-description" className='text-justify'>
                            {data.Plot}
                        </Typography>
                        <div className="flex gap-5">
                            {data.Ratings.map((rating: any, index: number) => (
                                <div className='flex items-center gap-1' key={index}>
                                    <img src={images[rating.Source]} alt={rating.Source} className='w-6' />
                                    <p key={rating.Source}>{rating.Value}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="contained" onClick={handleButtonClick}>
                            Ver no IMDB
                        </Button>
                    </>
                )}
            </Box>
        </MuiModal>
    );
};

export default CustomModal;
