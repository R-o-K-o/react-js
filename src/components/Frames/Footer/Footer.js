import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrap}>
                <p className={css.text}>rick and morty <span>api</span></p>
            </div>
        </footer>
    );
};