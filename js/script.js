import peliculas from './peliculas.js'

const peliculasPorGenero = (genreId, generoContainerId) => {
    const generoContainer = document.getElementById (generoContainerId);
    const peliculasGenero = peliculas.filter (pelicula => pelicula.genre_ids.includes(genreId));

    peliculasGenero.forEach(pelicula => {
        const divPeli = document.createElement ('div');
        divPeli.className = 'pelicula';

        const imagen = document.createElement ('img');
        imagen.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
        imagen.alt = pelicula.title;
        imagen.className = 'cartel';

        const titulo = document.createElement('h4');
        titulo.textContent = pelicula.title;

        divPeli.appendChild(imagen);
        divPeli.appendChild(titulo);

        generoContainer.appendChild(divPeli)
    })
}

peliculasPorGenero(28, 'genero-28')
peliculasPorGenero(53, 'genero-53')
peliculasPorGenero(12, 'genero-12')
