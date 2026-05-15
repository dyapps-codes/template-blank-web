import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DypaiProvider } from '@dypai-ai/client-sdk/react'
import { dypai } from '@/lib/dypai'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import NotFound from './pages/NotFound'

// ── Auth pages are SHIPPED but NOT routed by default ──────────────────
// This template is public-first, but `src/pages/Login.tsx`, `ForgotPassword.tsx`
// and `ResetPassword.tsx` are included as ready-to-activate components.
// To enable login later, import them here, add the routes inside <Routes>
// (and wrap any private route with <ProtectedRoute /> from
// '@dypai-ai/client-sdk/react'). Do NOT delete those files — they are an
// intentional escape hatch so adding auth never has to start from scratch.
// import { Login } from './pages/Login'
// import { ForgotPassword } from './pages/ForgotPassword'
// import { ResetPassword } from './pages/ResetPassword'

const queryClient = new QueryClient()

const App = () => (
  <DypaiProvider client={dypai}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* ── Public routes only — auth pages are available but not routed ── */}
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* ADD MORE PUBLIC ROUTES HERE */}

            {/* When activating auth, uncomment and add:
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </DypaiProvider>
)

export default App
