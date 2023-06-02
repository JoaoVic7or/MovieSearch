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
}

const CardMovie: React.FC<CardMovieProps> = ({ movieData }) => {
    const { Poster, Title, Year } = movieData;
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

                    <Button variant="contained" className="w-full" onClick={handleOpen}>
                            Detalhes
                    </Button>
                </CardContent>
            </Card>
            {open && <CustomModal handleClose={handleClose} title={Title} />}
        </>
    );
};

export default CardMovie;
