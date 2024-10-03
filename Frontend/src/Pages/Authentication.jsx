import { redirect } from "react-router-dom";
import AuthForm from "../Components/AuthForm/AuthForm.jsx";

function Authentication() {
  return <AuthForm />;
}

export default Authentication;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signup";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  try {
    const response = await fetch("http://localhost:8080/" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    const responseData = await response.json();
    console.log("Response Data:", responseData);

    if (response.status === 442 || response.status === 401) {
      const responseData = await response.json();
      return json(
        {
          errors: responseData.errors || {},
          message: responseData.message || "Authentication failed.",
        },
        { status: response.status }
      );
    }

    if (!response.ok) {
      console.log("Response not OK");
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }

    return redirect("/");
  } catch (error) {
    //   console.error("Error in action function:", error);
  }
}
