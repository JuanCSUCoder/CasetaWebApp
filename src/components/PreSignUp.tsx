import Button from './Button';
import styles from './PreSignUp.module.css'

export default function PreSignUp() {
    return (
        <form action="/success" method="post">
            <input className={styles.emailbox} type="email" name="email" id="email" placeholder='email@example.com' />
            <Button value="Subscribe" submit className={styles.button} />
        </form>
    );
}