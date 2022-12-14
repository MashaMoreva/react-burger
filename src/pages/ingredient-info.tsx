import styles from './pages.module.css';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';

export const IngredientInfo = () => {

    return (
        <div className={styles.info}>
            <IngredientDetails />
        </div>
    )
}
