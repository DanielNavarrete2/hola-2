const albums = {
    albumTronAres: {
        titulo: "TRON: Ares",
        imagen: "assets/img/d1.jpg",
        descripcion: "'TRON: Ares' de Nine Inch Nails combina electrónica oscura con rock industrial, creando atmósferas intensas y futuristas. Cada pista mezcla sintetizadores envolventes con guitarras agresivas, llevando al oyente a un viaje sonoro lleno de tensión y energía. El álbum destaca por sus ritmos pulsantes, texturas experimentales y letras introspectivas que reflejan un mundo distópico, perfecto para los amantes de la innovación musical y los sonidos alternativos.",
        link: "https://open.spotify.com/intl-es/album/47pjW3XDPW99NShtkeewxl?si=gZ0DkLxyQpiYp5x-B1F-tQ"
    },
    albumBreach: {
        titulo: "Breach",
        imagen: "assets/img/d2.jpg",
        descripcion: "'Breach' de Twenty One Pilots mezcla pop alternativo y rap, destacando por sus letras introspectivas y sonidos innovadores. El álbum combina melodías pegajosas con ritmos urbanos y elementos electrónicos, explorando temas de identidad, ansiedad y resiliencia. Cada canción presenta cambios dinámicos sorprendentes y capas sonoras que mantienen al oyente atento, mientras las letras invitan a la reflexión sobre la vida contemporánea y las emociones personales.",
        link: "https://open.spotify.com/intl-es/album/1El3k8dU3sKyoGUeuyrolH?si=GCFcq29NTPC5wBAU05wFzg"
    },
    albumStarcatcher: {
        titulo: "Starcatcher",
        imagen: "assets/img/d3.jpg",
        descripcion: "'Starcatcher' de Greta Van Fleet continúa el legado del rock clásico, con riffs potentes y vocales inspiradas en Led Zeppelin. El álbum combina energía juvenil con un sonido vintage, mezclando guitarras eléctricas, baterías contundentes y armonías vocales que evocan la era dorada del rock. Las letras exploran temas de sueños, aventuras y la búsqueda de la libertad, ofreciendo una experiencia musical envolvente que conecta con los amantes del rock clásico y moderno por igual.",
        link: "https://open.spotify.com/intl-es/album/7i1NJXQNNFZPyjE0W3GPgE?si=X79BvJQhS_i8JATxprCeng"
    },
    albumInvincibleShield: {
        titulo: "Invincible Shield",
        imagen: "assets/img/d4.jpg", 
        descripcion: "'Invincible Shield' de Judas Priest es un poderoso lanzamiento de heavy metal que combina riffs clásicos, baterías contundentes y la inconfundible voz de Rob Halford. El álbum explora temas de lucha, resiliencia y épica metalera, reafirmando el legado de la banda como referente del metal contemporáneo y clásico.",
        link: "https://open.spotify.com/intl-es/album/0SgF4c7VeFBoATEdpTvgG8?si=eXt90ISAQJqZ0vtG8iNpLw"
    },
    albumSenjutsu: {
        titulo: "Senjutsu",
        imagen: "assets/img/d5.jpg",
        descripcion: "'Senjutsu' de Iron Maiden es un viaje épico por el heavy metal clásico, con riffs potentes, melodías dramáticas y letras que exploran temas históricos y fantásticos. Cada pista combina virtuosismo instrumental con narrativa intensa, creando una experiencia musical cinematográfica. El álbum destaca por su producción impecable, sus solos de guitarra memorables y la voz inconfundible de Bruce Dickinson, reafirmando a Iron Maiden como leyenda del metal.",
        link: "https://open.spotify.com/intl-es/album/3TymcPWXqsCRA5oSL0TkPU?si=npiZKeJmTey7NohsaCikIg"
    },
    album72Season: {
        titulo: "72 Seasons",
        imagen: "assets/img/d6.jpg",
        descripcion: "'72 Seasons' de Metallica mezcla la agresividad del thrash metal con momentos melódicos y letras introspectivas. El álbum combina riffs rápidos, baterías contundentes y la voz característica de James Hetfield para explorar temas de crecimiento personal, desafíos y reflexiones sobre la vida. Cada canción ofrece intensidad y dinamismo, mostrando a Metallica en plena madurez creativa y conectando con nuevas y viejas generaciones de fans del metal.",
        link: "https://open.spotify.com/intl-es/album/6UwjRSX9RQyNgJ3LwYhr9i?si=LHXRvIFUTuKLtFhYKEaZpA"
    }


};

const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

function abrirModal(album) {
    const data = albums[album];
    document.getElementById("titulo").textContent = data.titulo;
    document.getElementById("imagen").src = data.imagen;
    document.getElementById("descripcion").textContent = data.descripcion;
    document.getElementById("extra").href = data.link;

    modal.classList.remove("hidden");
    setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
}

function cerrarModal() {
    modalContent.classList.add("scale-95", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 150);
}

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener('click', (e) => {
    if(e.target === modal) cerrarModal();
});