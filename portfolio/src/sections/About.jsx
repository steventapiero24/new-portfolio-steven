import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Apasionado del frontend y la experiencia de usuario.
  Me gusta convertir ideas en experiencias digitales 
  que se sienten tan bien como se ven.`;
  const aboutText = `Me desconecto para reconectar: leo, dibujo, observo… porque ahí es donde nacen las ideas más frescas:
⚡️ Deportes y aire libre: Amante del fútbol, el gimnasio y estar al aire libre.
🎥 Fotografo aficionado, me encanta el mundo audiovisual, el cine, el video y los vlogs.
🧗 Diseñador no diseñador: Inicié como diseñador gráfico y ahora amo el desarrollo.
🎸 Musica, soy multitarea pero siempre debo tener musica, que bueno que existen los audifonos.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Diseñado con intención, desarrollado con precisión."}
        title={"Sobre mi"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.webp"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
