import React from 'react'
import gsap from 'gsap'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
    useGSAP(()=>{
        const parallaxTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true,

            }
        })
        parallaxTimeline
        .from('#c-left-leaf',{
            x:-100,y:100
        })
        .from('#c-right-leaf',{
            x:100,y:100
        })

    })
    return(
        <section id="cocktails" className="noisy">
      <img src="/Mocktail-website/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/Mocktail-website/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>most popular cocktails</h2>
          <ul>
            {cocktailLists && cocktailLists.length > 0 ? (
              cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>-{price}</span>
                </li>
              ))
            ) : (
              <p>No cocktails available</p>
            )}
          </ul>
        </div>

         <div className="loved">
          <h2>most loved mocktails:</h2>
          <ul>
            {mockTailLists && mockTailLists.length > 0 ? (
              mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>-{price}</span>
                </li>
              ))
            ) : (
              <p>No mocktails available</p>
            )}
          </ul>
        </div>
      </div>
    </section>
            
  )
}

export default Cocktails