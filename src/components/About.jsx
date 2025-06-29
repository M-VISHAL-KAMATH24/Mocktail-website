import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {
    useGSAP(()=>{
        const titleSplit=SplitText.create('#about h2',{
            type:'words'
        })
        const scrollTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center'
            }
        })
        scrollTimeline
        .from(titleSplit.words,{
            opacity:0,duration:1,yPercent:100,ease:'expo.out',stagger:0.02
        })
        .from('.top-grid div,.bottom-grid div',{
            opacity:0,duration:1,ease:'power1.inOut',stagger:0.04,
        },"-=0.5")
    })
  return (
    <div id='about'>
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>best cocktails</p>
                    <h2>where ever details matters <span className='text-white'>-</span>from muddle to garnish</h2>
                </div>
                <div className='sub-content'>
                    <p>
                        every cocktail we serve is the refelction of detail-from the first muddle to the final garnish.the care is what turns a simple drink into something truly memorable.
                    </p>
                
                <div>
                <p className='md:text-3xl text-xl font-bold'>
                    <span>4.5 /5</span>
                </p>
                <p className='text-sm text-white-100'>
                    more than +12000 customers
                </p>
            </div>
            </div>
        </div>
    </div>
    <div className='top-grid'>
        <div className='md:col-span-3'>
            <div className='noisy'/>
            <img src="/Mocktail-website/images/abt1.png" alt="grid-image-1" />
        </div>
        <div className='md:col-span-6'>
            <div className='noisy'/>
            <img src="/Mocktail-website/images/abt2.png" alt="grid-image-2" />
        </div>
        <div className='md:col-span-3'>
            <div className='noisy'/>
            <img src="/Mocktail-website/images/abt5.png" alt="grid-image-5" />
        </div>

    </div>
    <div className='bottom-grid'>
        <div className='md:col-span-8'>
            <div className='noisy'/>
            <img src="/Mocktail-website/images/abt3.png" alt="grid-image-3" />
        </div>
        <div className='md:col-span-4'>
            <div className='noisy'/>
            <img src="/Mocktail-website/images/abt4.png" alt="grid-image-4" />
        </div>
    </div>
    </div>
  )
}

export default About