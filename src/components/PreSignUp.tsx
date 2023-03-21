export default function PreSignUp() {
    return (
        <form action="/presignup" method="post">
            <input type="email" name="email" id="email" />
            <input type="submit" value="Sign Up" />
        </form>
    );
}