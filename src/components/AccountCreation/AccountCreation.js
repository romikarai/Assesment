import { useState } from "react";
import { SuccessFormSubmission } from "./SuccessFormSubmission";

const Form = (props) => {
  const [credentials, setCredentials] = useState({ user: "", password: "" });
  const [isValidCredentials, setIsValidCredentials] = useState({
    user: true,
    password: true,
  });

  const userNameHandler = (event) => {
    const username = event.target.value;
    const isValid = username.length >= 3 && /^[a-zA-Z0-9]+$/.test(username);

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      user: username,
    }));

    setIsValidCredentials((prevIsValid) => ({
      ...prevIsValid,
      user: isValid,
    }));
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    const isValid =
      password.length >= 6 && /^[a-zA-Z0-9@_-]+$/.test(password);

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: password,
    }));

    setIsValidCredentials((prevIsValid) => ({
      ...prevIsValid,
      password: isValid,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { user, password } = isValidCredentials;
    props.onsubmit(user === true && password === true);
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="block mb-2">
        Username:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={credentials.user}
        onChange={userNameHandler}
        className={`w-full px-3 py-2 border ${
          !isValidCredentials.user ? "border-red-500" : "border-gray-300"
        } rounded`}
      />
      {!isValidCredentials.user && (
        <p className="text-red-500 mt-2">Username is invalid</p>
      )}

      <label htmlFor="password" className="block mt-4 mb-2">
        Password:
      </label>
      <input
        type="text"
        id="password"
        name="password"
        value={credentials.password}
        onChange={passwordHandler}
        className={`w-full px-3 py-2 border ${
          !isValidCredentials.password ? "border-red-500" : "border-gray-300"
        } rounded`}
      />
      {!isValidCredentials.password && (
        <p className="text-red-500 mt-2">Password is invalid</p>
      )}

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sign In
      </button>
    </form>
  );
};

const AccountForm = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);

  return isSuccessful ? (
    <SuccessFormSubmission />
  ) : (
    <Form onsubmit={setIsSuccessful} />
  );
};

export default AccountForm;