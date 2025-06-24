import React from 'react'
import gsap from 'gsap'
import { openingHours } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(()=>{
        const titleSplit=SplitText.create('#contact h2',{type:'words'});
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
            ease:'power1.inOut'

        })
        timeline
        .from(titleSplit.words,{
            opacity:0,yPercent:100,stagger:0.02
        })
        .from('#contact h3,#contact p',{
            opacity:0,yPercent:100,stagger:0.02
        })
        .to('#f-right-leaf',{
            y:'-50',duration:1,ease:'power1.inOut'
        }).to('#f-left-leaf',{
             y:'-50',duration:1,ease:'power1.inOut'
        },'<')
    })
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="right-leaf" id='f-left-leaf' />
        <div className='content'>
            <h2>where to find us</h2>
            <div>
                <h3>visit our store</h3>
                <p>574202 puttur main road</p>

            </div>
            <h3>contact us</h3>
            <p>7338612637</p>
            <p>kamathvishal26@gmail.com</p>
        </div>
        <div>
            <h3>Open Every day</h3>
            {openingHours.map((time)=>(
                <p key={time.day}>
                    {time.day}:{time.time} </p>
            ))}
        </div>
        <div>
            <h3>
                thankyou
            </h3>
        </div>
    </footer>
  )
}

export default Contact