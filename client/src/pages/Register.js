
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (password !== confirmPassword) {
        toast.error("Password and Confirm Password do not match");
        setLoading(false);
        return;
      }

      const { data } = await axios.post(`/pre-register`, { email, password });

      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success("Please open your email to activate the account");
        setLoading(false);
        navigate("/");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Register</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onClick={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control mb-4"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="form-control mb-4"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm your password"
                className="form-control mb-4"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-4"
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
