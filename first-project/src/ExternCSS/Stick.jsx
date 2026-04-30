import styles from './stick.module.css'

function stick() {
    const name = "component";
    return(
        <h3 className={styles.retest}>This specific {name} is a part of strict CSS properties.</h3>

    );
}
export default stick;