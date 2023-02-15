import styles from './Banner.module.scss';
import logo from '../Assets/turnerscars_logo.png';

const Banner = () => {

    return(
        <main className={styles.banner_container}>
            <img className={styles.logo_image} src={logo} alt="" />          
        </main>
    );
};

export default Banner;