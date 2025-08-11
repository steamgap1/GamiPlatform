"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, User, Lock, UserPlus, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Login() {
  const [tipoUsuario, setTipoUsuario] = useState<"estudiante" | "profesor">("estudiante")
  const [modoLogin, setModoLogin] = useState<"login" | "registro">("login")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombre: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Datos del formulario:", formData)

    // Simulamos login exitoso
    if (tipoUsuario === "estudiante") {
      window.location.href = "/"
    } else {
      window.location.href = "/admin"
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
    >
      <div className="w-full max-w-md p-6">
        {/* Logo y Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-full mb-4">
            <Zap className="h-8 w-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">EduGame</h1>
          <p className="text-white/80">Plataforma de Gamificación Educativa</p>
        </div>

        {/* Selector de Tipo de Usuario */}
        <div className="flex mb-6 bg-white/10 backdrop-blur-md rounded-lg p-1">
          <button
            onClick={() => setTipoUsuario("estudiante")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all ${
              tipoUsuario === "estudiante" ? "bg-white text-purple-600 shadow-md" : "text-white hover:bg-white/10"
            }`}
          >
            <User className="h-4 w-4" />
            Estudiante
          </button>
          <button
            onClick={() => setTipoUsuario("profesor")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all ${
              tipoUsuario === "profesor" ? "bg-white text-purple-600 shadow-md" : "text-white hover:bg-white/10"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Profesor
          </button>
        </div>

        {/* Formulario */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{modoLogin === "login" ? "Iniciar Sesión" : "Crear Cuenta"}</CardTitle>
            <p className="text-gray-600">
              {tipoUsuario === "estudiante"
                ? "Accede a tu aventura de aprendizaje"
                : "Panel de administración para profesores"}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {modoLogin === "registro" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <Input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  required
                />
              </div>

              {modoLogin === "registro" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                {modoLogin === "login" ? (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Iniciar Sesión
                  </>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Crear Cuenta
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setModoLogin(modoLogin === "login" ? "registro" : "login")}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                {modoLogin === "login" ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión"}
              </button>
            </div>

            {modoLogin === "login" && (
              <div className="mt-4 text-center">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-white/10 backdrop-blur-md border border-white/20">
          <CardContent className="p-4">
            <h3 className="text-white font-semibold mb-2">🚀 Credenciales de Demo</h3>
            <div className="text-sm text-white/80 space-y-1">
              <p>
                <strong>Estudiante:</strong> estudiante@demo.com / demo123
              </p>
              <p>
                <strong>Profesor:</strong> profesor@demo.com / admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
