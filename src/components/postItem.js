import React, { useState, useEffect, useRef } from "react";

// importamos Microlink para los thumbnails
import Microlink from "@microlink/react";

// importamos animateHeight para animacion del div del thum a mostrar
import AnimateHeight from "react-animate-height";

// importamos el icono de react-icons
import { FaUserPen, FaLink } from "react-icons/fa6";

const PostItem = ({ post }) => {
  //incializamos el estado del height del thumb de la url a mostrar
  const [square, setSquare] = useState(0);

  // para saber cuando empezamos a cargar
  const [shouldLoad, setShouldLoad] = useState(false);

  // creamos la ref para la card
  const cardRef = useRef(null);

  // cerramos la tarjeta al salir de viewport
  useEffect(() => {
    //si el navegador no lo soporta no hacemos nada
    if (!window.IntersectionObserver) return;

    // creamos el observador
    const observer = new IntersectionObserver(
      ([entry]) => {
        //entry.isIntersecting true -> se ve la card
        if (!entry.isIntersecting && square !== 0) {
          setSquare(0);
        }
      },
      {
        root: null, // null es el viewPOrt del navegador
        threshold: 0.1, //se dispara cuando queda menos del 10%
      }
    );

    // empezamos a vigilar el elemento
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // limpiamos cuando el componente se desmonte o actualice
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [square]);

  return (
    <div
      key={post.objectID}
      className="result-post-card"
      onMouseEnter={() => setShouldLoad(true)}
      ref={cardRef}
    >
      {/* Línea superior: Autor e Info */}
      <div className="result-post-card__meta">
        <div className="result-post-card__author">
          <FaUserPen className="icon-author" />
          {/* Usamos fallback para el autor por si la API cambia el campo */}
          <span>{post.author || post.by || "Anónimo"}</span>
        </div>

        <div className="result-post-card__stats">
          <span>{post.num_comments || 0} comments</span>
          <span className="divider">|</span>
          <span>{post.points || 0} points</span>
        </div>
      </div>

      {/* Línea inferior: Título */}
      <div className="result-post-card__title">
        <span
          onClick={() => setSquare(square === 0 ? 300 : 0)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.title || post.story_title || "Ver historia"}
        </span>
      </div>
      <AnimateHeight duration={500} height={square}>
        <div className="result-post-card__thumb">
          {/* solo mostramos si mouseOver sobre la tarjeta */}
          {shouldLoad && (
            <Microlink
              url={post.url}
              size="large"
              media="screenshot" // Indica al componente que muestre la captura
              screenshot={true} // Ordena a la API tomar la captura
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "400px", // El ancho que tú prefieras
                height: "250px", // Altura controlada para que no sea gigante
                borderRadius: "5px",
                border: "1px solid #e1e4e8",
              }}
            />
          )}
          <div className="card__url">
            <a href={post.url} target="blank">
              visit
              <FaLink />
            </a>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};
export default PostItem;
