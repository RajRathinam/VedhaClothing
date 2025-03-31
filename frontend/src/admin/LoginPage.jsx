import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../config/config.js";

const LoginPage = ({ getAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const api=baseUrl;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(`${api}/api/auth/login`, { email, password });
      localStorage.setItem("adminToken", data.token);
     toast.success("Login Successed!!!")
      getAdmin();
    } catch (error) {
  toast.error("Login failed");
    }
  };

  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content gap-11 sm:px-48 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-secondary font-extrabold font-breathney">
            Only Admin Use!
          </h1>
          <p className="py-6 text-accent text-lg text-justify font-merienda">
          "Welcome to the Vedha Clothing Admin Panel! Manage products, update contact information, and oversee customer feedback—all in one place. Streamline operations, keep your catalog fresh, and ensure seamless customer satisfaction. Your control center for a better shopping experience!"
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset gap-3">
              <h1 className="text-4xl font-oxygen text-black text-center font-bold mb-5">
                Log in!
              </h1>

            

              <label className="fieldset-label text-lg">Email</label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="fieldset-label text-lg">Password</label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-neutral bg-primary/80 hover:bg-primary border-none mt-4"
                onClick={handleLogin}
              >
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

