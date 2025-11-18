import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home/Home'
import Nosotros from '../pages/Nosotros/Nosotros'
import Testimonios from '../pages/Testimonios/Testimonios'
import Resenas from '../pages/Resenas/Resenas'
import Resena1 from '../pages/Resenas/Resena1'
import Resena2 from '../pages/Resenas/Resena2'
import TrabajaConNosotros from '../pages/TrabajaConNosotros/TrabajaConNosotros'
import DisenoGrafico from '../pages/Vacantes/DisenoGrafico'
import DesarrolloSoftware from '../pages/Vacantes/DesarrolloSoftware'
import EstrategiasMarketing from '../pages/servicios/EstrategiasMarketing'
import GestionCRMERP from '../pages/servicios/GestionCRMERP'
import AutomatizacionMarketing from '../pages/servicios/AutomatizacionMarketing'
import DesarrolloWeb from '../pages/servicios/DesarrolloWeb'
import AnalisisDatos from '../pages/servicios/AnalisisDatos'
import Consultoria from '../pages/servicios/Consultoria'
import MarketingContenidos from '../pages/servicios/MarketingContenidos'
import { pageview } from '../utils/ga'

function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    // Enviar el pageview a GA cuando cambie la ruta
    pageview(location.pathname + location.search)
  }, [location])

  return null
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="testimonios" element={<Testimonios />} />
          <Route path="resenas" element={<Resenas />} />
          <Route path="resenas/resena-1" element={<Resena1 />} />
          <Route path="resenas/resena-2" element={<Resena2 />} />
          <Route path="trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="vacantes/diseno-grafico" element={<DisenoGrafico />} />
          <Route path="vacantes/desarrollo-software" element={<DesarrolloSoftware />} />
          <Route path="servicios/estrategias-marketing" element={<EstrategiasMarketing />} />
          <Route path="servicios/gestion-crm-erp" element={<GestionCRMERP />} />
          <Route path="servicios/automatizacion-marketing" element={<AutomatizacionMarketing />} />
          <Route path="servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="servicios/analisis-datos" element={<AnalisisDatos />} />
          <Route path="servicios/consultoria" element={<Consultoria />} />
          <Route path="servicios/marketing-contenidos" element={<MarketingContenidos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}