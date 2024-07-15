const card=[
  {
    bgimage:"mirza7.PNG",
    desc:"Nike Landing Page.",
    box:"Proj. - 2",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://nikeclonemirza.netlify.app'
  },
  {
    bgimage:"mirza18.PNG",
    desc:"Disney Clone.",
    box:"Proj. - 3",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://disneyclonemirza.netlify.app'
  },
  {
    bgimage:"mirza17.PNG",
    desc:"eBook-landing-page.",
    box:"Proj. - 4",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://ebookmirza.netlify.app'
  },
  {
    bgimage:"mirza4.PNG",
    desc:"veggy_landingpage.",
    box:"Proj. - 5",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://veggymirza.netlify.app'
  },
  {
    bgimage:"mirza6.PNG",
    desc:"Nike Landing Page.",
    box:"Proj. - 7",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://nikeclonemirza.netlify.app'
  },
  {
    bgimage:"mirza5.PNG",
    desc:"veggy_landingpage.",
    box:"Proj. - 6",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
      link:'https://veggymirza.netlify.app'
  },
  {
    bgimage:"mirza16.PNG",
    desc:"MusicApp.",
    box:"Proj. - 8",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://musiclandingpagemirza.netlify.app'
  },
  {
    bgimage:"mirza15.PNG",
    desc:"onlineFood_web",
    box:"Proj. - 9",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://foodwebsitemirza.netlify.app'
  },
  {
    bgimage:"mirza.PNG",
    desc:"Netflix-page",
    box:"Proj. - 1",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://netflixpagemirza.netlify.app'
  },
  {
    bgimage:"mirza9.PNG",
    desc:"Lorem ipsum dolor sit.",
    box:"Proj. - 10",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>
  },
  {
    bgimage:"mirza13.PNG",
    desc:"Shopify LAndingPage.",
    box:"Proj. - 11",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
     link:'https://shopifylandingpagemirza.netlify.app'
  },
  {
    bgimage:"mirza12.PNG",
    desc:"onlin Food_web.",
    box:"Proj. - 12",
    icon1:<LuZoomIn/>,
    icon2:<IoIosLink/>,
    link:'https://foodwebsitemirza.netlify.app'
  }
  
]

import React from 'react'
import { LuZoomIn } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import Card from './Card';
export default function ALLPortfolio() {
  return (
    <main className='   md:ml-72 ml-0  lg:pl-8  sm:flex sm:flex-col sm:justify-center sm:p-4 sm:items-center  py-8 md:p-8 pl-2 flex-1 bg-[#e3f1f7]'>
    <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-2 lg:gap-14   gap-8'>
      {card.map((items, index) => (
        <Card key={index} items={items} />
      ))}
    </div>
  </main>
  
  )
}
