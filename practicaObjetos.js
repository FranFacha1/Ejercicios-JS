const episodioIV = { 
    title: "A New Hope",
    episode_id: 4,
    release_date: "1977-05-25",
    director: "George Lucas"
  };
  
  const episodioV = {
    title: "The Empire Strikes Back",
    episode_id: 5,
    release_date: "1983-05-25",
    director: "Irvin Kershner"
  };
  
  const episodioVI = {
    title: "Return of the Jedi",
    episode_id: 6,
    release_date: "1977-05-25",
    director: "Richard Marquand"
  };

class Pelicula {
    constructor(nombre, director, AñoLanzamiento) {
        this.nombre = nombre;
        this.director = director;
        this.AñoLanzamiento = AñoLanzamiento;
    }
}


const nuevoEpisodio = new Pelicula("A New Hope", "George Lucas", "1977-05-25");

console.log(nuevoEpisodio);

const nuevoEpisodio1 = new Pelicula("The Empire Strikes Back", "Irvin Kershner", "1983-05-25");

console.log(nuevoEpisodio1);

const nuevoEpisodio2 = new Pelicula("El mundo marino", "Francisco Bellotti", "1983-05-25");

console.log(nuevoEpisodio2);


// > MAYOR QUE 9 > 7
// < MENOR QUE 7 < 9


// for(let i = 0; i >= 0; i++) {
//     console.log(i)
// }


