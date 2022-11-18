import styles from './burger-ingredients-sets.module.css';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerIngredientsSet } from '../burger-ingredients-set/burger-ingredients-set';
import { setActiveTab } from '../../services/actions/burger-ingredients-scroll';

export function BurgerIngredientsSets() {

    const dispatch = useDispatch()
    const scroll = useSelector(state => state.scrollIngredients.scroll)

    const bunRef = useRef();
    const sauceRef = useRef();
    const mainRef = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        if (scroll === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (scroll === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (scroll === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [scroll])

    useEffect(() => {
        const headings = [
            mainRef.current,
            sauceRef.current,
            bunRef.current
        ]
        const observer = new IntersectionObserver((headings) => {
            headings.forEach((heading) => {
                if (heading.target === bunRef.current) {
                    dispatch(setActiveTab('bun'))
                }
                if (heading.target === sauceRef.current) {
                    dispatch(setActiveTab('sauce'))
                }
                if (heading.target === mainRef.current) {
                    dispatch(setActiveTab('main'))
                }
            })

        },
            {
                root: scrollRef.current,
                rootMargin: '0px 0px -90% 0px'
            })
        headings.forEach((heading) => observer.observe(heading))

    }, [dispatch])


    return (
        <div className={`${styles.scroll_left} mt-10 pr-2`} ref={scrollRef}>
            <div>
                <h3 className="text text_type_main-medium mb-6" ref={bunRef}>Булки</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='bun' />
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>Соусы</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='sauce' />
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>Начинки</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='main' />
                </ul>
            </div>
        </div>
    )
}
