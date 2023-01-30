// Record creation page

import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        emp_name: "",
        position: "",
        level: "",
        join_date: "",
        hourly_rate:""
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

        await fetch("http://localhost:5000/record/add", {
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

        setForm({ emp_name: "", position: "", level: "", join_date: "", hourly_rate: "" });
        navigate("/");
    }

    // Input form
    return (
        <div>
          <h3>Create New Record</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="emp_name"
                value={form.emp_name}
                onChange={(e) => updateForm({ emp_name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                className="form-control"
                id="position"
                value={form.position}
                onChange={(e) => updateForm({ position: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="join_date">Join Date</label>
              <input
                type="text"
                className="form-control"
                id="join_date"
                value={form.join_date}
                onChange={(e) => updateForm({ join_date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hourly_rate">Hourly Rate</label>
              <input
                type="text"
                className="form-control"
                id="hourly_rate"
                value={form.hourly_rate}
                onChange={(e) => updateForm({ hourly_rate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionIntern"
                  value="Intern"
                  checked={form.level === "Intern"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionIntern" className="form-check-label">Intern</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionJunior"
                  value="Junior"
                  checked={form.level === "Junior"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionJunior" className="form-check-label">Junior</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionSenior"
                  value="Senior"
                  checked={form.level === "Senior"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionSenior" className="form-check-label">Senior</label>
              </div>
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