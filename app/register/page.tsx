'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Crear usuario en Auth
      // Pasamos los datos extra en 'options.data' para que el Trigger de SQL los capture
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phone, // Esto se pasará a la tabla perfiles si el trigger está bien hecho
          },
        },
      })

      if (error) {
        toast.error("Error al registrarse: " + error.message)
        setLoading(false)
        return
      }

      // Opcional: Si el trigger falló o no existe, forzamos la actualización en perfiles
      if (data.user) {
         await supabase.from('perfiles').upsert({
             id: data.user.id,
             email: email,
             nombre: fullName,
             telefono: phone,
             rol: 'usuario' // Por defecto todos son usuarios
         })
      }

      toast.success("Cuenta creada exitosamente")
      router.push('/') 
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
          <CardTitle className="text-center text-2xl font-bold text-slate-900">Crear Cuenta</CardTitle>
          <CardDescription className="text-center">
            Únete para reservar las mejores canchas
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input 
                    id="name" 
                    placeholder="Juan Pérez" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                    id="phone" 
                    placeholder="11 1234 5678" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                </div>
            </div>

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
                minLength={6}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Registrarse'}
            </Button>
            <p className="text-sm text-center text-gray-500">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="text-emerald-600 font-semibold hover:underline">
                Inicia sesión
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}