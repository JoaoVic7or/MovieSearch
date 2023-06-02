import { useEffect, useState } from 'react';
import CardMovie from '../../components/CardMovie';
import { Api } from '../../components/Api';
import { Pagination } from '@mui/material';

interface MovieContainerProps {
    movieData: any[];
    setMovieData: (data: any[]) => void;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movieData, setMovieData }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Api('movie', currentPage);

            if ('message' in data) {
                console.error('Erro ao obter os dados da API:', data.message);
            } else {
                setMovieData(data);
            }
        };

        fetchData();
    }, [setMovieData, currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
                {movieData.map((movie) => (
                    <CardMovie key={movie.imdbID} movieData={movie} />
                ))}
            </div>
            <div className='flex justify-center py-4'>
                <Pagination
                    count={200}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: '#fff',
                        },
                        '& .MuiPaginationItem-page.Mui-selected': {
                            backgroundColor: '#fff',
                            color: '#000',
                        },
                    }}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default MovieContainer;
