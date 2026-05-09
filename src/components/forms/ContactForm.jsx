import { useState } from "react";
import { contactSubjects, contacts, copy } from "../../data/siteData.js";

const formName = "sg-contact";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
};

export default function ContactForm({ language }) {
  const [form, setForm] = useState(initialForm);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle");
  const content = copy[language].form;

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const buildFormData = (data) => {
    const payload = new FormData();

    payload.append("_subject", `[SG Consultoria] ${data.assunto || "Novo pedido"} — ${data.nome}`);
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("language", language);

    Object.entries(data).forEach(([key, value]) => {
      payload.append(key, value);
    });

    return payload;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setNote(content.sending);

    if (contacts.formEndpoint.includes("REPLACE_WITH_FORM_ID") || !contacts.formEndpoint) {
      setStatus("error");
      setNote(content.missingEndpoint);
      return;
    }

    try {
      const response = await fetch(contacts.formEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: buildFormData(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setForm(initialForm);
      setStatus("success");
      setNote(content.note);
    } catch {
      setStatus("error");
      setNote(content.error);
    }
  };

  return (
    <form
      action={contacts.formEndpoint}
      className="contact-form"
      method="POST"
      name={formName}
      onSubmit={handleSubmit}
      data-reveal
    >
      <input type="hidden" name="language" value={language} />
      <input type="hidden" name="_subject" value="[SG Consultoria] Novo pedido de contacto" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <label>
        {content.name}
        <input name="nome" type="text" autoComplete="name" value={form.nome} onChange={updateField} required />
      </label>
      <label>
        {content.email}
        <input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} required />
      </label>
      <label>
        {content.phone}
        <input name="telefone" type="tel" autoComplete="tel" value={form.telefone} onChange={updateField} required pattern="[0-9+\s\-()]{6,}" />
      </label>
      <label>
        {content.subject}
        <select name="assunto" value={form.assunto} onChange={updateField} required>
          <option value="">{content.subjectPlaceholder}</option>
          {contactSubjects[language].map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <label className="full">
        {content.message}
        <textarea name="mensagem" rows="5" value={form.mensagem} onChange={updateField} required />
      </label>
      <button className="btn btn--primary full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? content.sending : content.submit}
      </button>
      <p className={`form-note ${status !== "idle" ? `is-${status}` : ""}`.trim()} aria-live="polite">
        {note}
      </p>
    </form>
  );
}
