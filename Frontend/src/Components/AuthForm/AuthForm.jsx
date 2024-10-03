import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import "./AuthForm.css";

export default function AuthForm() {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
console.log(isLogin);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  //   console.log(isLogin);
  // }

  return (
    <Form method="post" className="form">
      <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className="actions">
        <Link to={`?mode=${isLogin ? "signUp" : "login"}`}>
          {isLogin ? "Create new user" : "Login"}
        </Link>
        <button>Save</button>
      </div>
    </Form>
  );
}
