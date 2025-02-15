async function loadNowPlayingMovies() {
    const apiKey = "YOUR_API_KEY"; // Ganti dengan API Key TMDb
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&region=US&page=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results.slice(0, 10); // Ambil 10 film pertama

        let movieHTML = `<div style="font-family: Arial, sans-serif; text-align: center;">
            <h2>🎬 Film Sedang Tayang di Amerika</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">`;

        movies.forEach(movie => {
            movieHTML += `
                <div style="width: 140px;">
                    <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
                        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" style="width:100%; border-radius:5px;">
                        <h3 style="font-size:14px;">${movie.title}</h3>
                    </a>
                </div>`;
        });

        movieHTML += `</div></div>`;
        document.getElementById("now-playing").innerHTML = movieHTML;
    } catch (error) {
        console.error("Gagal mengambil data film:", error);
    }
}

// Panggil fungsi saat halaman dimuat
loadNowPlayingMovies();
