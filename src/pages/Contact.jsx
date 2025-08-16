import { useState } from "react";

const initial = { name: "", email: "", title: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [sending, setSending] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const validate = () => {
        if (!form.name.trim() || !form.email.trim() || !form.title.trim() || !form.message.trim()) {
        return "Completa todos los campos.";
    }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        return "Correo inálido.";
        }
        return "";
    };


    const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError(""); setSending(true);
    setTimeout(()=>{
        setSending(false); setDone(true); setForm(initial);
    }, 800);
    };



    return (
    <>
        <main className="container">
        <h2 style={{ marginTop: 10 }}>Sugerir una película</h2>

        {done && (
            <div className="empty" style={{ borderStyle: "solid" }}>
            <h3>Gracias por tu sugerencia!</h3>
            <p>Se envio correctamente.</p>
            </div>
        )}

        {error && (
            <div className="empty" style={{ borderColor: "rgba(244,63,94,.6)" }}>
            <h3>Faltan  datos</h3>
            <p>{error}</p>
            </div>
          )}

        <form onSubmit={onSubmit} style={{ display:"grid", gap:12, marginTop:16, maxWidth:640 }}>
            <input className="input" name="name" placeholder="Tu nombre"
                    value={form.name} onChange={onChange} />
            <input className="input" name="email" placeholder="Tu correo"
                    value={form.email} onChange={onChange} />
            <input className="input" name="title" placeholder="Título de la película"
                    value={form.title} onChange={onChange} />
            <textarea className="input" name="message" placeholder="¿Por qué la recomiendas?"
                    rows={4} value={form.message} onChange={onChange} />
            <div style={{ display:"flex", gap:10 }}>
            <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? "Enviando..." : "Enviar sugerencia"}
            </button>
            </div>
        </form>
        </main>
    </>
    );
}
