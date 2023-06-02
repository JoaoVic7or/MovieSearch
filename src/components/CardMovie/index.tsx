import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import CustomModal from "../CustomModal";

interface CardMovieProps {
    movieData: {
        Poster: string;
        Title: string;
        imdbID: string;
        Year: string;
    };
    setBadgeContent: (value: number | ((prevCount: number) => number)) => void;
}

const CardMovie: React.FC<CardMovieProps> = ({ movieData, setBadgeContent }) => {
    const { Poster, Title, Year } = movieData;
    const [isAddedToList, setIsAddedToList] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddToList = () => {
        setBadgeContent((prevCount: number) => prevCount + 1);
        setIsAddedToList(true);
    };

    return (
        <>
            <Card
                sx={{ width: 250, height: 530, backgroundColor: 'rgb(30, 30, 30)' }}
                className="flex flex-col justify-between"
            >
                <div className="text-white absolute bg-neutral-800/[.75] py-1 px-2 rounded-lg mt-1 ml-1 text-sm font-bold">
                    {Year}
                </div>
                <CardMedia component="img" image={Poster} alt="poster indisponível" className="h-4/5 text-white" />
                <CardContent className="h-1/5 flex flex-col gap-2">
                    <Typography className="text-white text-center" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {Title}
                    </Typography>

                    <div className="flex gap-2 ">
                        <Button variant="contained" className="w-1/2" onClick={handleOpen}>
                            Detalhes
                        </Button>
                        <Button
                            variant="contained"
                            className="w-1/2"
                            color="success"
                            onClick={handleAddToList}
                            disabled={isAddedToList}
                        >
                            {isAddedToList ? "Adicionado" : "+ Lista"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
            {open && <CustomModal handleClose={handleClose} title={Title} />}
        </>
    );
};

export default CardMovie;
