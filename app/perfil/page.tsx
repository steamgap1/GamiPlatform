"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, BarChart3, ArrowLeft, Edit, Camera } from "lucide-react"
import Link from "next/link"

const avatares = ["🚀", "👩‍💻", "👨‍🔬", "👩‍🎨", "🤖", "🎮", "📊", "🧠", "⚡", "🔥"]

const logrosCompletos = [
  {
    id: 1,
    nombre: "Primer Paso",
    descripcion: "Completa tu primera actividad",
    materia: "general",
    nivel: "bronce",
    desbloqueado: true,
    puntos: 10,
    fecha: "2024-01-15",
  },
  {
    id: 2,
    nombre: "Código Maestro",
    descripcion: "Resuelve 5 ejercicios de programación",
    materia: "programacion",
    nivel: "plata",
    desbloqueado: true,
    puntos: 50,
    fecha: "2024-01-20",
  },
  {
    id: 3,
    nombre: "Racha Semanal",
    descripcion: "Mantén una racha de 7 días consecutivos",
    materia: "general",
    nivel: "oro",
    desbloqueado: true,
    puntos: 100,
    fecha: "2024-01-25",
  },
  {
    id: 4,
    nombre: "Robot Constructor",
    descripcion: "Construye tu primer robot funcional",
    materia: "robotica",
    nivel: "oro",
    desbloqueado: false,
    puntos: 100,
  },
  {
    id: 5,
    nombre: "Diseñador Creativo",
    descripcion: "Crea 3 prototipos innovadores",
    materia: "diseno",
    nivel: "plata",
    desbloqueado: false,
    puntos: 75,
  },
  {
    id: 6,
    nombre: "Analista de Datos",
    descripcion: "Completa un análisis estadístico completo",
    materia: "datos",
    nivel: "oro",
    desbloqueado: false,
    puntos: 120,
  },
]

const estadisticasMateria = {
  robotica: { puntos: 180, actividades: 12, tiempo: "24h" },
  programacion: { puntos: 250, actividades: 18, tiempo: "32h" },
  diseno: { puntos: 120, actividades: 8, tiempo: "16h" },
  datos: { puntos: 90, actividades: 6, tiempo: "12h" },
  ia: { puntos: 150, actividades: 10, tiempo: "20h" },
  videojuegos: { puntos: 100, actividades: 7, tiempo: "14h" },
}

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "Alex Estudiante",
    avatar: "🚀",
    nivel: 12,
    puntos: 890,
    puntosProximoNivel: 1000,
    racha: 7,
    fechaRegistro: "2024-01-10",
    materiaFavorita: "programacion",
  })

  const [editandoPerfil, setEditandoPerfil] = useState(false)
  const [nuevoNombre, setNuevoNombre] = useState(usuario.nombre)
  const [nuevoAvatar, setNuevoAvatar] = useState(usuario.avatar)

  const logrosDesbloqueados = logrosCompletos.filter((logro) => logro.desbloqueado)
  const totalLogros = logrosCompletos.length
  const porcentajeCompletado = (logrosDesbloqueados.length / totalLogros) * 100

  const guardarPerfil = () => {
    setUsuario({ ...usuario, nombre: nuevoNombre, avatar: nuevoAvatar })
    setEditandoPerfil(false)
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Volver al Dashboard
          </Link>

          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Star className="text-yellow-400" />
            Mi Perfil
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información del Perfil */}
          <div className="lg:col-span-1">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="relative inline-block">
                  <div className="text-6xl mb-4">{usuario.avatar}</div>
                  {editandoPerfil && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 rounded-full bg-transparent"
                      onClick={() => {}}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {editandoPerfil ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={nuevoNombre}
                      onChange={(e) => setNuevoNombre(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center font-bold text-xl"
                    />
                    <div className="grid grid-cols-5 gap-2">
                      {avatares.map((avatar) => (
                        <button
                          key={avatar}
                          onClick={() => setNuevoAvatar(avatar)}
                          className={`text-2xl p-2 rounded-lg border-2 transition-all ${
                            nuevoAvatar === avatar
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={guardarPerfil} className="flex-1">
                        Guardar
                      </Button>
                      <Button variant="outline" onClick={() => setEditandoPerfil(false)} className="flex-1">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <CardTitle className="text-2xl mb-2">{usuario.nombre}</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setEditandoPerfil(true)} className="mb-4">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Perfil
                    </Button>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Nivel {usuario.nivel}</div>
                  <div className="text-gray-600">{usuario.puntos} puntos totales</div>
                  <Progress value={(usuario.puntos / usuario.puntosProximoNivel) * 100} className="mt-2" />
                  <div className="text-sm text-gray-500 mt-1">
                    {usuario.puntosProximoNivel - usuario.puntos} pts para nivel {usuario.nivel + 1}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">🔥 {usuario.racha}</div>
                    <div className="text-sm text-gray-600">Días de racha</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{logrosDesbloqueados.length}</div>
                    <div className="text-sm text-gray-600">Logros obtenidos</div>
                  </div>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Miembro desde</div>
                  <div className="font-semibold">
                    {new Date(usuario.fechaRegistro).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas y Logros */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progreso por Materia */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="text-blue-500" />
                  Progreso por Materia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(estadisticasMateria).map(([key, stats]) => (
                    <div key={key} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
                        <Badge variant="outline">{stats.puntos} pts</Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📚 {stats.actividades} actividades completadas</div>
                        <div>⏱️ {stats.tiempo} de estudio</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Colección de Logros */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  Colección de Logros
                  <Badge variant="secondary" className="ml-auto">
                    {logrosDesbloqueados.length}/{totalLogros} ({Math.round(porcentajeCompletado)}%)
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Progress value={porcentajeCompletado} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {logrosCompletos.map((logro) => (
                    <div
                      key={logro.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        logro.desbloqueado
                          ? "border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50"
                          : "border-gray-200 bg-gray-50 opacity-60"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            logro.desbloqueado
                              ? logro.nivel === "oro"
                                ? "bg-yellow-500"
                                : logro.nivel === "plata"
                                  ? "bg-gray-400"
                                  : "bg-orange-600"
                              : "bg-gray-300"
                          }`}
                        >
                          <Trophy className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{logro.nombre}</h4>
                          <p className="text-sm text-gray-600 mb-2">{logro.descripcion}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              +{logro.puntos} pts
                            </Badge>
                            {logro.desbloqueado && logro.fecha && (
                              <span className="text-xs text-gray-500">
                                {new Date(logro.fecha).toLocaleDateString("es-ES")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
