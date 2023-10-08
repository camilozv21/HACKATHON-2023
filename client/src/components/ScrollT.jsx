import gsap from "gsap";
import {useRef,useEffect, useState} from "react";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Step 1', 
    subtitle: 'Go to NASA EathData website and select the folder data type. We recommend you the NET CDF format.'
  },
  {
    title: 'Step 2', 
    subtitle: 'Download the database on your PC.'
  },
  {
    title: 'Step 3', 
    subtitle: "Choose the analysis type of your preference. Don't know what to choose?. Correlations: Obtain all possible combinatios between the variables in the dataset such as temperature, altitude, wind velocity among others. This type of analysis will also provide you statistical correlation between the variables through 3 methods: Pearson, Seaborn and Kendal."
  },
  {
    title: 'Step 4', 
    subtitle: 'Upload the file by clicking the Choose File button.'
  },
  {
    title: 'Step 5', 
    subtitle: 'Download clean and orginized data for your future analysis by clicking the Download your Charts button.'
  },
  {
    title: 'Good Research! :)',
  },
];

export default function ScrollT(){

  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== '#262626' ? '#262626' : '#1b4943';
    setBackground(color);
  }

  useEffect(() => {

    gsap.to(headerRef.current, { backgroundColor: background, duration: 1,  ease: 'none' });

  }, [background]);

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  return (
    <div className="Scroll">
      Scroll Down
      <svg className="arrows">
      <path className="a1" d="M0 0 L30 32 L60 0"></path>
      <path className="a2" d="M0 20 L30 52 L60 20"></path>
      <path className="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>
      <header ref={headerRef} className="Scroll-header">
      </header>
      <main className="Scroll-main" id="Description">
        {
          sections.map(({title, subtitle}) => (
            <div className="Scroll-section" key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          ))
        }
      </main>
      
    </div>
  );
}




