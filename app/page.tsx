"use client"
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    address: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:Contact@speed-sensation.com?subject=${encodeURIComponent(`Prise de Contact - ${formData.name}`)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nAdresse: ${formData.address}\n\nMessage:\n${formData.subject}`
    )}`;

    window.location.href = mailtoLink; // Ouvre le client email
  };

  return (
    <div className="bg-neutral-950/70 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          {/* Left text */}
          <div className="text-left text-sm sm:text-base">
            <span className="text-gray-700">LOCATION SIMULATEURS</span> <br />
            <span className="text-red-600 font-bold">DE PILOTAGE HAUT DE GAMME</span>
          </div>

          {/* Logo */}
          <div className="absolute sm:left-1/2 transform translate-y-14 sm:-translate-x-1/2 sm:translate-y-1/3">
            <img
              className="h-20 sm:h-32 md:h-40 lg:h-60 p-2" // Tailles plus adaptées aux petits écrans
              src="/logo.png"
              alt="Speed Sensation Logo"
              style={{
                zIndex: 1,
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="text-right space-x-4 sm:space-x-8 text-sm sm:text-base">
            <a href="#contact" className="text-gray-700">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-auto flex flex-col items-center justify-center px-4 sm:px-8">
        <img
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/speed-sensation-hero.jpg"
          alt="Speed Sensation Hero"
          style={{
            zIndex: -1, // Assure que l'image reste derrière le texte
          }}
        />

        <img 
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          src="/hero.png"
          alt="Speed Sensation Hero"
          style={{
            zIndex: -1, // Assure que l'image reste derrière le texte
          }}
        />

        <div className="text-center z-10 mt-24 sm:mt-40 lg:mt-52">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            <span className="text-yellow-300">LES FORMULES </span>
            de pilotage
          </h1>
          <p className="mt-2 sm:mt-4 text-lg sm:text-2xl text-white font-bold">
            Animations proposées
          </p>
          <p className="text-lg sm:text-2xl text-white font-bold">
            50 bolides et plus de 100 circuits mondiaux disponibles
          </p>
        </div>

        {/* Formules Section */}
        <div className="container mx-auto mt-10 mb-12 md:mb-20 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mx-4 sm:mx-8">
            {/* Formule Découverte */}
            <a href="#contact" className="bg-neutral-950 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white relative border hover:border-yellow-300">
              <h3 className="text-lg sm:text-2xl">FORMULE</h3>
              <h3 className="text-lg sm:text-2xl font-bold mb-2">DECOUVERTE</h3>
              <p className="text-red-500 font-bold">Session de 5 minutes</p>
              <p className="text-red-500">en découverte d&apos;un circuit et d&apos;une voiture</p>
            </a>

            {/* Formule Warm Up */}
            <a href="#contact" className="bg-neutral-950 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white relative border hover:border-yellow-300">
              <h3 className="text-lg sm:text-2xl">FORMULE</h3>
              <h3 className="text-lg sm:text-2xl font-bold mb-2">WARM UP</h3>
              <p className="text-red-500 font-bold">Course chronométrée</p>
              <p className="text-red-500">avec classement selon chrono</p>
            </a>

            {/* Formule Challenge */}
            <a href="#contact" className="bg-neutral-950 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white relative border hover:border-yellow-300">
              <h3 className="text-lg sm:text-2xl">FORMULE</h3>
              <h3 className="text-lg sm:text-2xl font-bold mb-2">CHALLENGE</h3>
              <p className="text-red-500 font-bold">Duel en réseau</p>
              <p className="text-red-500">sur le même circuit avec les mêmes réglages véhicules</p>
            </a>

            {/* Formule Endurance */}
            <a href="#contact" className="bg-neutral-950 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white relative border hover:border-yellow-300">
              <h3 className="text-lg sm:text-2xl">FORMULE</h3>
              <h3 className="text-lg sm:text-2xl font-bold mb-2">ENDURANCE</h3>
              <p className="text-red-500 font-bold">Course par équipe</p>
              <p className="text-red-500">(Minimum 4 personnes Max 8 personnes équipe/heure d&apos;endurance/simulateur)</p>
            </a>
          </div>
        </div>
      </section>

      {/* Forfaits Animation Section */}
      <section className="bg-gray-100  pt-10 lg:mt-0 sm:pt-16 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-yellow-500 text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            FORFAIT(S) ANIMATION
          </h2>
          <p className="mb-4 sm:mb-6 font-medium">
            Prix indicatifs (hors option(s) supplémentaires et frais de déplacement au-delà d’un trajet de 80 kms compris dans forfait de base). 
            Au-delà 0.85€ du km allé (les frais de retours sont à la charge de Speed Sensation SAS).
          </p>

          {/* Forfaits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-200 p-4 sm:p-6 rounded-lg flex items-center space-x-4">
              <div>
                <h3 className="text-red-500 text-xl sm:text-2xl font-bold">½ JOURNÉE (4H)</h3>
                <p className="font-bold">À partir de 450€ HT + TVA 20%</p>
                <p className="font-medium">(pour mise à disposition d’un simulateur)</p>
              </div>
            </div>

            <div className="bg-gray-200 p-4 sm:p-6 rounded-lg flex items-center space-x-4">
              <div>
                <h3 className="text-red-500 text-xl sm:text-2xl font-bold">1 JOURNÉE (8H)</h3>
                <p className="font-bold">À partir de 800€ HT + TVA 20%</p>
                <p className="font-medium">(pour mise à disposition d’un simulateur)</p>
              </div>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 font-bold">
            Organisation sur mesure selon le nombre de participants et le temps alloué à la manifestation.
          </p>

          <p className="mt-8 sm:mt-12 text-lg sm:text-xl font-semibold">
            Vous souhaitez organiser une animation sur le thème du pilotage extrême, surprendre vos invités, associer le dynamisme de cette activité avec le dynamisme de votre société, 
            cette animation novatrice est faite pour vous.
          </p>
          <p className="mt-2 text-lg sm:text-xl font-semibold">
            Contactez-nous, afin que Speed Sensation SAS vous établisse un devis personnalisé, adapté au mieux à votre évènement.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-900 text-white py-12 sm:py-16" id="contact">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32">
          <h2 className="text-yellow-500 text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Contact</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Nom et prénom */}
            <div>
              <label className="block text-white text-lg font-semibold mb-1" htmlFor="name">
                Votre nom et prénom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-gray-600 text-white py-2 px-4 rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-lg font-semibold mb-1" htmlFor="email">
                Votre e-mail (requis)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-gray-600 text-white py-2 px-4 rounded-md"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white text-lg font-semibold mb-1" htmlFor="email">
                Votre téléphone (requis)
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-gray-600 text-white py-2 px-4 rounded-md"
              />
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-white text-lg font-semibold mb-1" htmlFor="address">
                Votre adresse
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-gray-600 text-white py-2 px-4 rounded-md"
              />
            </div>

            {/* Sujet */}
            <div>
              <label className="block text-white text-lg font-semibold mb-1" htmlFor="subject">
                Sujet de votre demande (requis)
              </label>
              <textarea
                name="subject"
                id="subject"
                rows={4}
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-gray-600 text-white py-2 px-4 rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:px-6 rounded-lg transition duration-300"
            >
              Envoyer
            </button>
          </form>
          <h2 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Téléphone : 06 48 06 14 39</h2>
          <h2 className="text-lg sm:text-xl font-semibold">Mail : Contact@speed-sensation.com</h2>
        </div>  
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-gray-400 py-4 sm:py-6">
        <div className="container mx-auto text-center">
          <p>© 2023 Speed Sensation. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
