import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form , setForm] = useState({
        name: "",
        position: "",
        level: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();
}