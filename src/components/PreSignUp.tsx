import styles from './PreSignUp.module.css'

export default function PreSignUp() {
    return (
        <form action="/presignup" method="post">
            <input className={styles.emailbox} type="email" name="email" id="email" />
            <input className={styles.button} type="submit" value="Sign Up" />
        </form>
    );
}