// app/login/page.tsx
'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import Link from 'next/link' // Importar Link
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner' 

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        toast.error("Error: " + error.message)
        setLoading(false)
        return
      }

      // Consultar el perfil para ver el rol
      const { data: { user } } = await supabase.auth.getUser()
      
      const { data: perfil } = await supabase
        .from('perfiles')
        .select('rol')
        .eq('id', user?.id)
        .single()

      toast.success("¡Bienvenido!")

      if (perfil?.rol === 'admin') {
        router.push('/dashboard')
      } else {
        router.push('/') // O a /mis-reservas cuando la creemos
      }
      
      router.refresh()
      
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error inesperado")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
             <img src="/img/Logo.png" alt="AlToque Logo" className="h-10 w-auto" />
          </div>
          <CardTitle className="text-center text-2xl font-bold text-slate-900">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center">
            Ingresa a tu cuenta para gestionar tus reservas
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Ingresar'}
            </Button>
            <p className="text-sm text-center text-gray-500">
              ¿No tienes cuenta?{' '}
              <Link href="/register" className="text-emerald-600 font-semibold hover:underline">
                Regístrate gratis
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}