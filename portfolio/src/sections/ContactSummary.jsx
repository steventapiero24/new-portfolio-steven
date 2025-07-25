import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovaciòn",
    "Precision",
    "Confianza",
    "Collaboraciòn",
    "Excelencia",
  ];
  const items2 = [
    "contactame",
    "contactame",
    "contactame",
    "contactame",
    "contactame",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Construyamos 
          <span className="text-gold"> juntos</span> <br />
          una aplicacion <br />
          <span className="font-normal">memorable</span> e{" "}
          <span className="italic">inspiradora</span>“
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:arrow-downward"
      />
    </section>
  );
};

export default ContactSummary;
