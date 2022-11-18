import styles from './pages.module.css';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';

export function IngredientInfo() {

    return (
        <div className={styles.ingredient_info}>
            <IngredientDetails />
        </div>
    )
}
