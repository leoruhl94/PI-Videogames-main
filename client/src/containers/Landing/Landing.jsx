import { Link } from 'react-router-dom';
import './Landing.css'

export const Landing = () =>{
    const signs = document.querySelectorAll('x-sign')
    const randomIn = (min, max) => (
        Math.floor(Math.random() * (max - min + 1) + min)
    )

    const mixupInterval = el => { 
    const ms = randomIn(2000, 4000)
         el.style.setProperty('--interval', `${ms}ms`)
    }

    signs.forEach(el => {
        mixupInterval(el)
        el.addEventListener('webkitAnimationIteration', () => {
            mixupInterval(el)
        })
    })


    return (
        <div className="landing">
            <Link to='/home'>
                <x-sign>
                    START
                </x-sign> 
            </Link>
        </div>
    )
}