import styles from './styles.module.css'
const Avatar = ({alt, src, text, withText}) => (
    <div className={styles.container} >
        <img className={styles.avatar} src={src} alt= {alt}  title={alt} />
        {withText && <strong>{text||alt}</strong>}
    </div>
);

export default Avatar;