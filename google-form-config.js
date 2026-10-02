/* =====================================================================
   GOOGLE FORM CONFIGURATION — PASTE YOUR REAL VALUES HERE
   =====================================================================

   This is the ONLY file you need to edit to connect the landing-page
   form to your Google Form / Google Sheet. See README.md for the steps.

   1) formActionUrl
      Your Google Form's response URL. It must end in /formResponse:
      https://docs.google.com/forms/d/e/<YOUR_FORM_ID>/formResponse

   2) fields
      The entry ID of each question in your Google Form
      (looks like "entry.1234567890").

   Until these placeholders are replaced, the form will NOT send leads
   and will show an error message instead.

   This file contains no passwords or secrets — only the public address
   of the form. Never paste your Google Sheet link here.
   ===================================================================== */

const GOOGLE_FORM_CONFIG = {
  formActionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdWKCICPR3w1Il3sO3Y5Wd50tQ_Q8ELueC7-Fcw6CxMQ38Qcw/formResponse",

  fields: {
    businessName: "entry.631324932", // Nombre del negocio
    businessType: "entry.610833966",  // Tipo de negocio
    address:      "entry.721679300",  // Dirección
    whatsapp:     "entry.488470047",  // WhatsApp
    email:        "entry.1045170921"   // Email
  },

  // Sent as the "Dirección" answer when the visitor checks
  // "Mi negocio opera desde mi casa" (so the required question is answered).
  homeBasedAddressText: "Negocio desde casa"
};
