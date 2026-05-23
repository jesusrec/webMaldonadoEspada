import { useState } from 'react';
import { Shield, PhoneCall, Mail, Clock, CheckCircle, Menu, X } from 'lucide-react';
import IntroAnimation from './IntroAnimation';

export default function App() {
  const [introPlay, setIntroPlay] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para el formulario de urgencia
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar el envío de correos o API. 
    // Por ahora, simulamos el éxito de la captación de la emergencia.
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
    }
  };

  // Función para redirigir a llamada o WhatsApp de urgencia inmediato
  const handleEmergencyCall = () => {
    window.open("https://wa.me/5215500000000?text=URGENCIA%20LEGAL:%20Necesito%20un%20abogado%20defensor%20de%20inmediato.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0B1325] text-white font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B1325]">

      {/* 1. ANIMACIÓN DE ENTRADA INTRO */}
      {introPlay && <IntroAnimation onComplete={() => setIntroPlay(false)} />}

      {/* CONTENIDO PRINCIPAL: Se desvanece de forma fluida cuando termina la intro */}
      <div className={`transition-opacity duration-1000 ease-out ${introPlay ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>

        {/* ENCABEZADO / NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-40 bg-[#0B1325]/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">

            {/* Contenedor Flex para alinear M y E en la misma línea horizontal */}
            <div className="flex items-center font-serif text-2xl font-bold tracking-normal">
              {/* M - Azul Sólido Corporativo */}
              <span className="bg-gradient-to-r from-[#EBB813] to-[#C49200] bg-clip-text text-transparent ml-0.5">
                M
              </span>
              {/* E - Degradado Dorado Premium */}
              <span className="text-[#003B7A]" >
                E
              </span>
            </div>

            <span className="text-[9px] text-gray-400 font-sans tracking-[0.15em] uppercase hidden sm:inline mt-1">
              Maldonado, Espada & Abogados
            </span>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-sans tracking-widest text-gray-300 uppercase">
            <a href="#inicio" className="hover:text-[#EBB813] transition-colors">Inicio</a>
            <a href="#emergencia" className="hover:text-[#EBB813] transition-colors">Casos Urgentes</a>
            <a href="tel:+5215500000000" className="flex items-center gap-2 border border-[#EBB813] px-4 py-2 rounded text-[#EBB813] hover:bg-[#EBB813] hover:text-[#0B1325] transition-all duration-300">
              <PhoneCall size={12} />
              Defensa 24/7
            </a>
          </nav>

          {/* Botón Menú Móvil */}
          <button className="md:hidden text-gray-300 hover:text-[#EBB813]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0B1325] z-30 pt-24 px-8 flex flex-col space-y-6 text-lg font-serif tracking-wider">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-2">Inicio</a>
            <a href="#emergencia" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-2">Casos Urgentes</a>
            <button onClick={() => { setMobileMenuOpen(false); handleEmergencyCall(); }} className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0B1325] font-sans font-bold py-3 rounded text-sm uppercase tracking-widest mt-4">
              <PhoneCall size={16} /> Llamar a un Abogado
            </button>
          </div>
        )}

        {/* 2. SECCIÓN HERO (INICIO PRINCIPAL) */}
        <section id="inicio" className="relative min-h-screen pt-20 flex items-center overflow-hidden">

          {/* 1. Imagen de Fondo - Ahora con z-0 para asegurar que no quede detrás de capas invisibles */}
          <div className="absolute inset-0 z-0 opacity-25 md:opacity-45 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center bg-no-repeat" />

          {/* 2. Filtro de degradado premium - Ajustado a z-10 para fusionarse a la perfección sin tapar la imagen */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1325] via-[#0B1325]/80 to-transparent md:w-2/3 pointer-events-none" />

          {/* 3. Contenedor de Texto y Contenido - Elevado a z-20 para quedar al frente de todo */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center w-full py-12">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-800/60 text-red-400 text-xs uppercase font-sans tracking-widest px-3 py-1.5 rounded-full">
                <Clock size={12} className="animate-pulse" /> Especialistas en Derecho Penal
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
                Transformamos la Ley en tu <span className="bg-gradient-to-r from-[#EBB813] to-[#C49200] bg-clip-text text-transparent">Mejor Defensa</span>
              </h1>

              <p className="text-gray-300 font-sans text-base md:text-lg font-light leading-relaxed">
                Salvaguardamos tu libertad y patrimonio con estrategias penales sólidas y de alta litigación. Si enfrentas una acusación o detención arbitraria, necesitas intervención experta inmediata.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="#emergencia" className="bg-gradient-to-r from-[#EBB813] to-[#C49200] text-[#0B1325] font-sans font-semibold px-8 py-4 rounded shadow-lg shadow-[#EBB813]/10 hover:shadow-[#EBB813]/20 transition-all text-center uppercase tracking-widest text-xs">
                  Consultar un Especialista
                </a>
              </div>

              {/* Badges de confianza */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-800 text-center sm:text-left">
                <div>
                  <h4 className="text-[#EBB813] font-serif text-xl font-bold">100%</h4>
                  <p className="text-xs text-gray-400 font-sans">Confidencialidad</p>
                </div>
                <div>
                  <h4 className="text-[#EBB813] font-serif text-xl font-bold">24/7</h4>
                  <p className="text-xs text-gray-400 font-sans">Atención Penal</p>
                </div>
                <div>
                  <h4 className="text-[#EBB813] font-serif text-xl font-bold">Alta</h4>
                  <p className="text-xs text-gray-400 font-sans">Efectividad Lítica</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: TRAYECTORIA, ESPECIALIDAD EN AMPAROS Y SERVICIOS */}
        <section id="servicios" className="py-24 bg-[#070C18] px-6 md:px-12 relative overflow-hidden border-t border-gray-900">
          {/* Elemento decorativo de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#003B7A]/5 rounded-full blur-[120px] -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Bloque Izquierdo: Perfil del Director General y Especialidad */}
              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[#EBB813] font-sans text-xs uppercase tracking-[0.3em] font-bold">
                      Dirección General
                    </span>
                    <span className="bg-amber-500/10 border border-amber-500/30 text-[#EBB813] text-[10px] uppercase font-sans tracking-widest px-2.5 py-0.5 rounded font-semibold animate-pulse">
                      🎯 Especialista en Juicios de Amparo
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                    Ricardo Javier Vladimir <br />
                    <span className="bg-gradient-to-r from-[#EBB813] to-[#C49200] bg-clip-text text-transparent">
                      Maldonado Espada
                    </span>
                  </h3>
                  <p className="text-gray-400 font-sans text-sm mt-2 italic">
                    Abogado Postulante en Materia Penal | Cédula Profesional: 7657964
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 font-sans leading-relaxed text-sm font-light">
                  <p>
                    Egresado de la <strong className="text-white">UNAM (FES Aragón)</strong> y con Maestría en Juicio Oral y Proceso Penal por el <strong className="text-white">INACIPE</strong>, el Lic. Maldonado cuenta con una formation internacional que incluye especializaciones en la Universidad de Ferrara, Italia, y en el sistema de justicia en Castilla-La Mancha, España.
                  </p>
                  <p>
                    Con más de <strong className="text-white">13 años de experiencia</strong> en el litigio penal, se ha consolidado como un riguroso <strong className="text-[#EBB813] font-semibold">Especialista en el Juicio de Amparo</strong>, diseñando suspensiones estratégicas contra órdenes de aprehensión, actos de tortura, incomunicación y la aplicación de la prisión preventiva justificada u oficiosa.
                  </p>
                  <p>
                    Su práctica combina la dogmática penal avanzada con una destreza técnica inquebrantable en la protección constitucional, enfocada siempre en el respeto absoluto a los Derechos Humanos y la obtención de la libertad para sus representados.
                  </p>
                  <div className="p-6 bg-[#0B1325] border-l-4 border-[#003B7A] rounded-r-lg">
                    <p className="text-gray-300 italic text-xs">
                      "El amparo no es solo un recurso; es la última y más poderosa línea de defensa constitucional para salvaguardar la libertad de un ciudadano frente a los excesos del poder ministerial o judicial."
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloque Derecho: Grid de Servicios Ofrecidos */}
              <div className="bg-[#0B1325]/50 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <Shield size={24} className="text-[#EBB813]" />
                  <h3 className="text-2xl font-serif font-bold text-white">Servicios Especializados</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Asistencia 24 horas a detenidos",
                    "Amparo contra orden de aprehensión",
                    "Defensa audiencia control de detención",
                    "Amparo contra prisión preventiva",
                    "Defensa vinculación a proceso",
                    "Audiencia intermedia",
                    "Audiencias de juicio oral",
                    "Apelación y Amparo Directo",
                    "Amparo contra desaparición forzada",
                    "Defensa medidas cautelares",
                    "Procedimiento abreviado",
                    "Beneficios penitenciarios",
                    "Acuerdos reparatorios",
                    "Suspensión condicional del proceso",
                    "Amparo contra tortura y malos tratos",
                    "Investigación complementaria"
                  ].map((servicio, index) => (
                    <div key={index} className="flex items-start gap-2 group">
                      <CheckCircle size={14} className="text-[#003B7A] mt-1 group-hover:text-[#EBB813] transition-colors" />
                      <span className="text-gray-400 text-[13px] font-sans group-hover:text-white transition-colors">
                        {servicio}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-[11px] text-gray-500 font-sans leading-snug">
                    * La firma cuenta con capacidad técnica para intervenir en cualquier etapa del procedimiento penal nacional, desde la sede ministerial hasta instancias federales.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECCIÓN DE UBICACIÓN Y MAPA EN TEMA OSCURO */}
        <section id="ubicacion" className="py-20 bg-[#0B1325] border-t border-gray-800 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

            {/* Panel de Información de la Oficina */}
            <div className="space-y-6 md:col-span-1">
              <div className="inline-flex items-center gap-2 bg-[#003B7A]/20 border border-[#003B7A]/40 text-blue-400 text-xs uppercase font-sans tracking-widest px-3 py-1.5 rounded-full">
                Oficinas Centrales
              </div>

              <h3 className="text-3xl font-serif font-bold text-white">
                Visítanos en la <span className="bg-gradient-to-r from-[#EBB813] to-[#C49200] bg-clip-text text-transparent">Firma Legal</span>
              </h3>

              <p className="text-gray-300 font-sans text-sm font-light leading-relaxed">
                Nuestras instalaciones cuentan con la infraestructura y privacidad necesarias para atender las sesiones de consultoría y diseñar tu estrategia de defensa de manera 100% confidencial.
              </p>

              {/* Datos de contacto estructurados */}
              <div className="space-y-4 pt-4 border-t border-gray-800 text-sm font-sans">
                <div className="flex items-start gap-3">
                  <div className="text-[#EBB813] mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <p className="text-gray-300 leading-snug">
                    <strong className="text-white block font-semibold mb-0.5">Dirección:</strong>
                    Torre Corporativa, Av. Paseo de la Reforma 450, Piso 12, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#EBB813] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white font-semibold">Contacto:</strong> contacto@maldonadoespada.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#EBB813] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white font-semibold">Horario:</strong> Abierto 24 Horas (Urgencias Penales)
                  </p>
                </div>
              </div>

              {/* Botón de cómo llegar rápido */}
              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Av.+Paseo+de+la+Reforma+450,+Ciudad+de+México"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-700 hover:border-[#EBB813] text-gray-300 hover:text-white px-5 py-2.5 rounded text-xs uppercase tracking-widest font-sans transition-all duration-300 bg-gray-900/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                  Trazar Ruta en GPS
                </a>
              </div>
            </div>

            {/* Contenedor del Mapa con Filtro Oscuro Inteligente */}
            <div className="md:col-span-2 w-full h-[450px] rounded-lg overflow-hidden border border-gray-800 shadow-2xl relative group bg-[#070C18]">
              {/* Filtro de superposición decorativo en las esquinas */}
              <div className="absolute inset-0 border border-[#EBB813]/10 pointer-events-none z-10 rounded-lg group-hover:border-[#EBB813]/30 transition-colors duration-500" />

              {/* Iframe con coordenadas reales fijas para testing de desarrollo */}
              {/* Iframe con buscador universal para evitar errores de codificación */}
              <iframe
                title="Ubicación de Maldonado, Espada & Abogados"
                src="https://maps.google.com/maps?q=Paseo%20de%20la%20Reforma%20450,%20Juarez,%20Ciudad%20de%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale invert-[92%] hue-rotate-180 contrast-125 opacity-80 group-hover:opacity-95 transition-opacity duration-500"
              />
            </div>

          </div>
        </section>

        {/* 3. SECCIÓN DE CAPTACIÓN / FORMULARIO DE URGENCIA */}
        <section id="emergencia" className="py-20 bg-[#070C18] border-t border-gray-800 px-6 md:px-12">
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-black/50 grid md:grid-cols-2 border border-gray-800">

            {/* Panel Izquierdo: Mensaje de Impacto */}
            <div className="bg-[#0B1325] p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-800">
              <div className="space-y-4">
                <Shield className="text-[#D4AF37]" size={40} />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug">
                  ¿Enfrentas una Emergencia Jurídica?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-sans font-light">
                  Un Abogado Penalista Titular de la firma se pondrá en contacto directo contigo en menos de 15 minutos para tomar el control de la situación.
                </p>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3 text-xs text-gray-400 font-sans">
                  <CheckCircle size={14} className="text-[#D4AF37]" /> Asesoría directa sin intermediarios.
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 font-sans">
                  <CheckCircle size={14} className="text-[#D4AF37]" /> Protección absoluta de tus derechos constitucionales.
                </div>
              </div>
            </div>

            {/* Panel Derecho: Formulario */}
            <div className="bg-white p-8 md:p-12 text-gray-900 flex flex-col justify-center">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-sans uppercase font-semibold tracking-wider text-gray-600 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#003366] font-sans"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase font-semibold tracking-wider text-gray-600 mb-2">
                      Teléfono Urgente (Móvil)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+52 55..."
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#003366] font-sans"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase font-semibold tracking-wider text-gray-600 mb-2">
                      Correo Electrónica
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan.p@email.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#003366] font-sans"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#003366] hover:bg-[#0B1325] text-white font-sans font-bold py-4 rounded text-xs uppercase tracking-widest transition-colors shadow-md mt-2"
                  >
                    Solicitar Llamada Urgente
                  </button>

                  <p className="text-[10px] text-gray-500 text-center font-sans mt-3">
                    Al enviar, confirmas nuestra estricta política de confidencialidad y secreto profesional legal.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-4 py-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900">Solicitud Recibida</h4>
                  <p className="text-sm text-gray-600 font-sans max-w-xs mx-auto">
                    {formData.name}, un especialista penalista está revisando tu caso. Te marcaremos al <span className="font-semibold text-gray-900">{formData.phone}</span> de inmediato.
                  </p>
                  <button
                    onClick={handleEmergencyCall}
                    className="mt-4 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow"
                  >
                    <PhoneCall size={14} /> Contactar Vía WhatsApp Ahora
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* PIE DE PÁGINA (FOOTER SIMPLE) */}
        <footer className="bg-[#0B1325] border-t border-gray-800 py-8 text-center text-xs text-gray-500 font-sans">
          <p>© 2026 MALDONADO, ESPADA & ABOGADOS. Todos los derechos reservados.</p>
          <p className="mt-1 text-gray-600">Firma Legal de Defensa Penal y Alta Litigación. Ciudad de México.</p>
          {/* BOTÓN FLOTANTE DE WHATSAPP PARA EMERGENCIAS PENALES */}
          <a
            href="https://wa.me/5215500000000?text=URGENCIA%20LEGAL:%20Necesito%20un%20abogado%20defensor%20de%20inmediato."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#003B7A] hover:bg-[#EBB813] text-white hover:text-[#0B1325] p-4 rounded-full shadow-2xl shadow-black/80 flex items-center justify-center border border-[#EBB813]/40 hover:border-[#003B7A] transition-all duration-300 group hover:scale-110 animate-bounce [animation-duration:3s]"
            title="Contacto Urgente WhatsApp"
          >
            {/* Icono de Teléfono / WhatsApp usando lucide-react */}
            <PhoneCall size={24} className="group-hover:rotate-12 transition-transform duration-300" />

            {/* Efecto de pulso de radar en el fondo para denotar urgencia 24/7 */}
            <span className="absolute inset-0 rounded-full bg-[#EBB813]/20 animate-ping pointer-events-none [animation-duration:2s]" />

            {/* Etiqueta flotante que aparece en pantallas grandes al pasar el cursor */}
            <span className="absolute right-14 bg-[#0B1325] text-xs font-sans tracking-widest text-white px-3 py-1.5 rounded border border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase pointer-events-none hidden md:inline">
              Urgencia Penal 24/7
            </span>
          </a>
        </footer>

      </div>
    </div>
  );
}