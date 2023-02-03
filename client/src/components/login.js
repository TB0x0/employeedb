import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        level: "",
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newPerson = { ...form };

        await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ email: "", password: "", level: "" });
        navigate("/");
    }

    // Input form
    return (
        <div>
          <h3>Signup</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <input
                type="submit"
                value="Create person"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );

}