import styles from './SearchTile.module.scss'

const SearchTile = (props) => {

    return(
        <div className={styles.searchtile_container}>
        <a className={styles.blocklink} href={props.link}>
            <h2 className={styles.tile_heading}>{props.name}</h2>
            <p className={styles.tile_paragraph}>{props.text}</p>
        </a>
        </div>
    )
}

export default SearchTile;