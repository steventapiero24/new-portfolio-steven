import { useRef } from "react";
import { socials } from "../constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Navbar = () => {
  const navRef = useRef(null);
  const LinksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const mediumLineRef = useRef(null);
  const bottomLineRef = useRef(null);

    useGSAP (() => {
        gsap.set(navRef.current, {xPercent: 100});
        gsap.set([LinksRef.current, contactRef.current], {
            autoAlpha: 0,
            x: -20,
        })
        gsap.timeline({ paused:true }).to(navRef.current, {
            xPercent: 0,
            duration: 1,
            ease: "power3.out"
        })
        .to(LinksRef.current, {
            autoAlpha: 0,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        }, 
        "<"
        )
        .to(contactRef.current, {
            autoAlpha: 0,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        })
    });
  return (
    <>
        <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between h-full w-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
        >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
            {["Home", "Servicios", "Projectos", "Work", "Sobre mi"].map(
            (section, index) => (
                <div key={index} ref={(el) => (LinksRef.current[index] = el)}>
                <a className="transition-all duration-300 cursor-pointer hover:text-white">
                    {section}
                </a>
                </div>
            )
            )}
        </div>

        <div
            ref={contactRef}
            className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
            <div className="font-light">
            <p className="tracking-wider text-white/50">Email</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
                bsty24@gmail.com
            </p>
            </div>

            <div className="font-light">
            <p className="text-white/50 tracking-wider">Social Media</p>
            <div className="flex flex-wrap flex-col md:flex-row gap-x-2">
                {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-loose tracking-widest uppercase hover:text-white"
                >
                    {"{"}
                    {social.name}
                    {"}"}
                </a>
                ))}
            </div>
            </div>
        </div>
        </nav>
        <div className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full md:w-20 md:h-20 top-4 right-10">
            <span ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
            <span ref={mediumLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
            <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
        </div>
    </>
  );
};
