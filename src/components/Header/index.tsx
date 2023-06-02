import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { Api } from "../Api";

interface HeaderProps {
    setMovieData: (data: any[]) => void;
}
  
  const Header: React.FC<HeaderProps> = ({ setMovieData }) => {
    const [movie, setMovie] = useState('');

    const handleGetName = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await Api(movie, 1);
            if ('message' in data) {
                console.error(data.message);
            } else {
                setMovieData(data);
            }
        } catch (error) {
            console.error("Erro: filme não encontrado. Verifique se o titulo está escrito em inglês e se não possui nenhum erro ortográfico");
        }
    };

    return (
        <div className="flex flex-col gap-2 lg:flex-row justify-between items-center bg-headerColor p-4">
            <h1 className="text-white text-2xl">MovieSearch</h1>

            <form onSubmit={handleGetName} className="flex gap-2">
                <input
                    type="text"
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                    className="rounded-md px-2 out outline-none"
                    placeholder="Buscar Filme (inglês)"
                />
                <Button type="submit" variant="contained" color="success" >
                    Buscar
                </Button>
            </form>
        </div>
    );
};

export default Header;
