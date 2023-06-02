interface ApiError {
  message: string;
}

export async function Api(movie: string, page: number): Promise<any[] | ApiError> {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=3784d7d4&s=${movie}&type=movie&page=${page}`);

    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API.');
    }

    const data = await response.json();
    return data.Search;
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error);
    return { message: 'Erro ao obter os dados da API.' };
  }
}
