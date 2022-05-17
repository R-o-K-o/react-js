import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrap}>
                <p className={css.text}>
                    <a target="blank" href="https://rickandmortyapi.com/">the rick and morty
                        <span>api</span>
                    </a>
                </p>
            </div>
        </footer>
    );
};
