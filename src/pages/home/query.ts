export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTc1NWEzZWQ1NTUyZGE0YjczZDRlYmFiM2FiN2QwZCIsInN1YiI6IjY1ZWRmNGUyZTkzZTk1MDE2MWUwZGEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqIlKoWodBjfKuFvGjxX6LjO_wlZrUR9-OFRU6cfdxw'
            },
        }
    );
    const data = await res.json();
    return data;
}

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTc1NWEzZWQ1NTUyZGE0YjczZDRlYmFiM2FiN2QwZCIsInN1YiI6IjY1ZWRmNGUyZTkzZTk1MDE2MWUwZGEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqIlKoWodBjfKuFvGjxX6LjO_wlZrUR9-OFRU6cfdxw'
            },
        }
    );
    const data = await res.json();
    return data;
}