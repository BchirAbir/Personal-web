import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { sendEmail } from "../../services/emailService";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormulaireG6 = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    priorité: "moyenne",
  });

  const [touched, setTouched] = useState({
    nom: false,
    email: false,
    message: false,
  });

  const [formValid, setFormValid] = useState({
    nom: false,
    email: false,
    message: false,
    send: false,
    sending: false,
    sended: false,
  });

  // ✅ Validation automatique
  useEffect(() => {
    const nomValid = formData.nom.length >= 3;
    const emailValid = emailRegex.test(formData.email);
    const messageValid = formData.message.length >= 10;

    setFormValid((prev) => ({
      ...prev,
      nom: nomValid,
      email: emailValid,
      message: messageValid,
      send: nomValid && emailValid && messageValid,
    }));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid.send) return;

    setFormValid((prev) => ({ ...prev, sending: true }));

    const success = await sendEmail(formData);

    if (success) {
      setFormValid({
        nom: false,
        email: false,
        message: false,
        send: false,
        sending: false,
        sended: true,
      });

      setFormData({
        nom: "",
        email: "",
        message: "",
        priorité: "moyenne",
      });

      setTouched({
        nom: false,
        email: false,
        message: false,
      });

      setTimeout(() => {
        setFormValid((prev) => ({ ...prev, sended: false }));
      }, 5000);
    } else {
      alert("Erreur lors de l’envoi du message");
      setFormValid((prev) => ({ ...prev, sending: false }));
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">

        {formValid.sended && (
          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
            <div className="flex items-center gap-2 text-green-700">
              <FaCheckCircle />
              <span>Message envoyé avec succès</span>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* NOM */}
          <div>
            <label className="flex gap-2 font-semibold mb-1">
              <FaUser /> Nom
            </label>
            <input
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              onBlur={() => handleBlur("nom")}
              className="w-full p-3 border rounded"
            />
            {touched.nom && !formValid.nom && (
              <p className="text-red-600 text-sm flex gap-1 mt-1">
                <FaExclamationTriangle /> Minimum 3 caractères
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="flex gap-2 font-semibold mb-1">
              <FaEnvelope /> Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className="w-full p-3 border rounded"
            />
            {touched.email && !formValid.email && (
              <p className="text-red-600 text-sm flex gap-1 mt-1">
                <FaExclamationTriangle /> Email invalide
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="flex gap-2 font-semibold mb-1">
              <FaCommentDots /> Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              className="w-full p-3 border rounded"
            />
            {touched.message && !formValid.message && (
              <p className="text-red-600 text-sm flex gap-1 mt-1">
                <FaExclamationTriangle /> Minimum 10 caractères
              </p>
            )}
          </div>

          {/* PRIORITÉ */}
          <select
            name="priorité"
            value={formData.priorité}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            <option value="haute">🔴 Haute</option>
            <option value="moyenne">🟡 Moyenne</option>
            <option value="basse">🟢 Basse</option>
          </select>

          {/* BOUTON */}
          <button
            type="submit"
            disabled={!formValid.send || formValid.sending}
            className={`w-full py-3 rounded font-bold flex justify-center gap-2 ${
              formValid.send
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <FaPaperPlane />
            {formValid.sending ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormulaireG6;
