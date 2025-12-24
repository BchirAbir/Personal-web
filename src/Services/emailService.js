export const sendEmail = async (formData) => {
  try {
    const response = await fetch("https://formspree.io/f/xvzpnygq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.nom,
        email: formData.email,
        message: formData.message,
        priority: formData.priorité,
        _honeypot: "", // anti-spam
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Erreur Formspree :", error);
    return false;
  }
};
