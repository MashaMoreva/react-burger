import styles from './pages.module.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';

export const Main = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.content}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    )
}
