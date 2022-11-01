import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <div className={styles.columns}>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <a href="#" className={styles.link}>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default">Конструктор</p>
                            </a>
                        </li>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <a href="#" className={styles.link}>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                            </a>
                        </li>
                    </div>
                    <li className={styles.logo}>
                        <a href="#" className={styles.link}>
                            <Logo />
                        </a>
                    </li>
                    <li className={styles.personal_account}>
                        <a href="#" className={`${styles.link} pl-5 pr-5 pt-4 pb-4`}>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}