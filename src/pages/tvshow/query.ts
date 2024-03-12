export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTc1NWEzZWQ1NTUyZGE0YjczZDRlYmFiM2FiN2QwZCIsInN1YiI6IjY1ZWRmNGUyZTkzZTk1MDE2MWUwZGEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqIlKoWodBjfKuFvGjxX6LjO_wlZrUR9-OFRU6cfdxw'
            },
        }
    );
    const data = await res.json();
    return data;
}
