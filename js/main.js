
  const misCanciones = [
  
  { titulo: "The Marshall Mathers LP", artista: "Eminem", genero: "Hip hop" },
  { titulo: "Recovery", artista: "Eminem", genero: "Hip hop" },
  { titulo: "The Slim Shady LP", artista: "Eminem", genero: "Hip hop" },
  { titulo: "Kamikaze", artista: "Eminem", genero: "Hip hop" },
  { titulo: "Encore", artista: "Eminem", genero: "Hip hop" },
  { titulo: "To Pimp a Butterfly", artista: "Kendrick Lamar", genero: "Hip hop" },
  { titulo: "good kid, m.A.A.d city", artista: "Kendrick Lamar", genero: "Hip hop" },
  { titulo: "DAMN.", artista: "Kendrick Lamar", genero: "Hip hop" },
  { titulo: "Section.80", artista: "Kendrick Lamar", genero: "Hip hop" },
  { titulo: "Untitled Unmastered", artista: "Kendrick Lamar", genero: "Hip hop" },
  { titulo: "Astroworld", artista: "Travis Scott", genero: "Trap" },
  { titulo: "Huncho Jack, Jack Huncho", artista: "Travis Scott", genero: "Trap" },
  { titulo: "Birds in the Trap Sing McKnight", artista: "Travis Scott", genero: "Trap" },
  { titulo: "Sigo Fresh", artista: "Duki", genero: "Trap" },
  { titulo: "Melodía Callejera", artista: "C.R.O", genero: "Trap" },
  { titulo: "Hablame Baby", artista: "YSY A", genero: "Trap" },
  { titulo: "El Menor", artista: "Neo Pistea", genero: "Trap" },
  { titulo: "Buenos Aires Trap Club", artista: "Khea", genero: "Trap" },
  { titulo: "Modo Diablo", artista: "Duki", genero: "Trap" },
  { titulo: "Euforia", artista: "C.R.O", genero: "Trap" },
  { titulo: "Desde El Bloque", artista: "YSY A", genero: "Trap" },
  { titulo: "Años Luz", artista: "Neo Pistea", genero: "Trap" },
  { titulo: "Soy El Diablo", artista: "Khea", genero: "Trap" },
  { titulo: "Culture", artista: "Migos", genero: "Trap" },
  { titulo: "Energía", artista: "J Balvin", genero: "Reggaetón" },
  { titulo: "Colores", artista: "J Balvin", genero: "Reguetón" },
  { titulo: "YHLQMDLG", artista: "Bad Bunny", genero: "Reguetón" },
  { titulo: "Barrio Fino", artista: "Daddy Yankee", genero: "Reguetón" },
  { titulo: "Love & Sex", artista: "Plan B", genero: "Reguetón" },
  { titulo: "Pretty Boy, Dirty Boy", artista: "Maluma", genero: "Reguetón" },
  { titulo: "Vibras", artista: "J Balvin", genero: "Reguetón" },
  { titulo: "X 100pre", artista: "Bad Bunny", genero: "Reguetón" },
  { titulo: "Talento de Barrio", artista: "Daddy Yankee", genero: "Reguetón" },
  { titulo: "Love and Sex", artista: "Plan B", genero: "Reguetón" },
  { titulo: "11:11", artista: "Maluma", genero: "Reguetón" },
  { titulo: "1989", artista: "Taylor Swift", genero: "Pop" },
  { titulo: "Scorpion", artista: "Drake", genero: "Pop" },
  { titulo: "Purpose", artista: "Justin Bieber", genero: "Pop" },
  { titulo: "Fine Line", artista: "Harry Styles", genero: "Pop" },
  { titulo: "÷ (Divide)", artista: "Ed Sheeran", genero: "Pop" },
  { titulo: "Lover", artista: "Taylor Swift", genero: "Pop" },
  { titulo: "Views", artista: "Drake", genero: "Pop" },
  { titulo: "Believe", artista: "Justin Bieber", genero: "Pop" },
  { titulo: "Harry Styles", artista: "Harry Styles", genero: "Pop" },
  { titulo: "x (Multiply)", artista: "Ed Sheeran", genero: "Pop" },
  { titulo: "Back in Black", artista: "AC/DC", genero: "Rock" },
  { titulo: "Dark Side of the Moon", artista: "Pink Floyd", genero: "Rock" },
  { titulo: "Elvis Presley", artista: "Elvis Presley", genero: "Rock" },
  { titulo: "Abbey Road", artista: "The Beatles", genero: "Rock" },
  { titulo: "A Night at the Opera", artista: "Queen", genero: "Rock" },
  { titulo: "Metallica (The Black Album)", artista: "Metallica", genero: "Rock" },
  { titulo: "Sticky Fingers", artista: "The Rolling Stones", genero: "Rock" },
  { titulo: "Love Me Tender", artista: "Elvis Presley", genero: "Rock" },
  { titulo: "Let It Be", artista: "The Beatles", genero: "Rock" },
  { titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock" },
  { titulo: "Master of Puppets", artista: "Metallica", genero: "Rock" },
  { titulo: "Exile on Main St.", artista: "The Rolling Stones", genero: "Rock" }
  ];
  

  function buscarPorTitulo(titulo) {
    const resultado = misCanciones.find(cancion => cancion.titulo.toLowerCase() === titulo.toLowerCase());
  
    if (resultado) {
      console.log("Canciónes encontradas:");
      console.table(resultado);
    }else{
      console.log("No se encontraron canciones con ese nombre.");
    }
  }
  

  function buscarPorArtista(artista) {
    const resultados = misCanciones.filter(cancion => cancion.artista.toLowerCase().includes(artista.toLowerCase()));
  
    if (resultados.length >=  1) {
        console.log("Canciones encontradas de " + artista + ":");
        resultados.forEach(cancion => console.table(cancion));
    }else{
        console.log("No se encontraron canciones de " + artista + ".");
    }
  }
  

  function buscarPorGenero(genero) {
    const resultados = misCanciones.filter(cancion => cancion.genero.toLowerCase() === genero.toLowerCase());
  
    if (resultados.length >= 1) {
        console.log("Canciones en el género " + genero + ":");
        resultados.forEach(cancion => console.table(cancion));
    }else{
        console.log("Canciones en el género " + genero + " no encontrados.");
    }
  }



  alert("¡Bienvenido/a a mi biblioteca de la Música!");
  
  let opcion = prompt(
    "Seleccione una opción: \n" +
    "1. Buscar canción por título \n" +
    "2. Buscar canción por artista \n" +
    "3. Buscar canción por género"
  );
  
  switch (opcion) {
    case "1":
      let busquedaPorTitulo = prompt("Ingrese el nombre de la canción:");
      buscarPorTitulo(busquedaPorTitulo);
      break;
    case "2":
      let busquedaPorArtista = prompt("Ingrese el nombre del artista:");
      buscarPorArtista(busquedaPorArtista);
      break;
    case "3":
      let busquedaPorGenero = prompt("Ingrese el género a buscar:");
      buscarPorGenero(busquedaPorGenero);
      break;
    default:
      console.log("La opción ingresada no es válida.");
  }