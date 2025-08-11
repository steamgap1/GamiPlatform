"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Star,
  Zap,
  Code,
  Cpu,
  Gamepad2,
  BarChart3,
  Brain,
  Wrench,
  User,
  Settings,
  QrCode,
  Gift,
} from "lucide-react"
import Link from "next/link"

const materias = {
  robotica: { name: "Robótica", icon: Cpu, color: "#00D4FF", bgColor: "bg-cyan-500" },
  programacion: { name: "Programación", icon: Code, color: "#00FF88", bgColor: "bg-green-500" },
  diseno: { name: "Diseño e Innovación", icon: Wrench, color: "#FF6B35", bgColor: "bg-orange-500" },
  datos: { name: "Análisis de Datos", icon: BarChart3, color: "#FFD23F", bgColor: "bg-yellow-500" },
  ia: { name: "Inteligencia Artificial", icon: Brain, color: "#B19CD9", bgColor: "bg-purple-500" },
  videojuegos: { name: "Desarrollo de Videojuegos", icon: Gamepad2, color: "#FF1744", bgColor: "bg-red-500" },
}

const logrosEjemplo = [
  {
    id: 1,
    nombre: "Primer Paso",
    descripcion: "Completa tu primera actividad",
    materia: "general",
    nivel: "bronce",
    desbloqueado: true,
    puntos: 10,
  },
  {
    id: 2,
    nombre: "Código Maestro",
    descripcion: "Resuelve 5 ejercicios de programación",
    materia: "programacion",
    nivel: "plata",
    desbloqueado: true,
    puntos: 50,
  },
  {
    id: 3,
    nombre: "Robot Constructor",
    descripcion: "Construye tu primer robot funcional",
    materia: "robotica",
    nivel: "oro",
    desbloqueado: false,
    puntos: 100,
  },
  {
    id: 4,
    nombre: "Diseñador Creativo",
    descripcion: "Crea 3 prototipos innovadores",
    materia: "diseno",
    nivel: "plata",
    desbloqueado: false,
    puntos: 75,
  },
  {
    id: 5,
    nombre: "Analista de Datos",
    descripcion: "Completa un análisis estadístico completo",
    materia: "datos",
    nivel: "oro",
    desbloqueado: false,
    puntos: 120,
  },
  {
    id: 6,
    nombre: "IA Pionero",
    descripcion: "Entrena tu primer modelo de IA",
    materia: "ia",
    nivel: "oro",
    desbloqueado: false,
    puntos: 150,
  },
]

const rankingEjemplo = [
  { posicion: 1, nombre: "Ana García", puntos: 1250, avatar: "👩‍💻" },
  { posicion: 2, nombre: "Carlos López", puntos: 1180, avatar: "👨‍🔬" },
  { posicion: 3, nombre: "María Rodríguez", puntos: 1050, avatar: "👩‍🎨" },
  { posicion: 4, nombre: "Tú", puntos: 890, avatar: "🚀" },
  { posicion: 5, nombre: "Diego Martín", puntos: 820, avatar: "👨‍💻" },
]

export default function Dashboard() {
  const [usuario] = useState({
    nombre: "Alex Estudiante",
    avatar: "🚀",
    nivel: 12,
    puntos: 890,
    puntosProximoNivel: 1000,
    racha: 7,
  })

  const [mostrarCodigo, setMostrarCodigo] = useState(false)
  const [codigoSecreto, setCodigoSecreto] = useState("")

  const progresoNivel = (usuario.puntos / usuario.puntosProximoNivel) * 100

  const logrosDesbloqueados = logrosEjemplo.filter((logro) => logro.desbloqueado)
  const proximosLogros = logrosEjemplo.filter((logro) => !logro.desbloqueado).slice(0, 3)

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="text-yellow-400" />
              EduGame
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-white text-right">
              <div className="font-semibold">{usuario.nombre}</div>
              <div className="text-sm opacity-80">
                Nivel {usuario.nivel} • {usuario.puntos} pts
              </div>
            </div>
            <div className="text-3xl">{usuario.avatar}</div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progreso del Usuario */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Star className="text-yellow-500" />
                  Tu Progreso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Nivel {usuario.nivel}</span>
                  <span className="text-sm text-gray-600">
                    {usuario.puntos} / {usuario.puntosProximoNivel} pts
                  </span>
                </div>
                <Progress value={progresoNivel} className="h-3" />
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    🔥 Racha de {usuario.racha} días
                  </Badge>
                  <span className="text-sm text-gray-600">
                    {usuario.puntosProximoNivel - usuario.puntos} pts para el siguiente nivel
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Materias */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-blue-500" />
                  Tus Materias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(materias).map(([key, materia]) => {
                    const IconComponent = materia.icon
                    return (
                      <div
                        key={key}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all cursor-pointer hover:scale-105"
                        style={{ borderColor: materia.color + "40", backgroundColor: materia.color + "10" }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: materia.color + "20" }}>
                            <IconComponent className="h-6 w-6" style={{ color: materia.color }} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{materia.name}</h3>
                            <p className="text-sm text-gray-600">{Math.floor(Math.random() * 200) + 50} pts</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Logros Recientes */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  Logros Desbloqueados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {logrosDesbloqueados.map((logro) => (
                    <div
                      key={logro.id}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                    >
                      <div
                        className={`p-2 rounded-full ${
                          logro.nivel === "oro"
                            ? "bg-yellow-500"
                            : logro.nivel === "plata"
                              ? "bg-gray-400"
                              : "bg-orange-600"
                        }`}
                      >
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{logro.nombre}</h4>
                        <p className="text-sm text-gray-600">{logro.descripcion}</p>
                        <Badge variant="outline" className="mt-1">
                          +{logro.puntos} pts
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Acciones Rápidas */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="text-purple-500" />
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => setMostrarCodigo(!mostrarCodigo)}
                >
                  <QrCode className="h-4 w-4 mr-2" />
                  Escanear QR / Código
                </Button>

                {mostrarCodigo && (
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Ingresa el código secreto"
                      value={codigoSecreto}
                      onChange={(e) => setCodigoSecreto(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button size="sm" className="w-full">
                      Validar Código
                    </Button>
                  </div>
                )}

                <Link href="/perfil" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    <User className="h-4 w-4 mr-2" />
                    Mi Perfil
                  </Button>
                </Link>

                <Link href="/ranking" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Trophy className="h-4 w-4 mr-2" />
                    Rankings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ranking Semanal */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  Ranking Semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rankingEjemplo.slice(0, 5).map((estudiante) => (
                    <div
                      key={estudiante.posicion}
                      className={`flex items-center gap-3 p-2 rounded-lg ${
                        estudiante.nombre === "Tú" ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          estudiante.posicion === 1
                            ? "bg-yellow-500 text-white"
                            : estudiante.posicion === 2
                              ? "bg-gray-400 text-white"
                              : estudiante.posicion === 3
                                ? "bg-orange-600 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {estudiante.posicion}
                      </div>
                      <div className="text-lg">{estudiante.avatar}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{estudiante.nombre}</div>
                        <div className="text-xs text-gray-600">{estudiante.puntos} pts</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/ranking" className="block mt-4">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Ver Ranking Completo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Próximos Logros */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="text-green-500" />
                  Próximos Logros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {proximosLogros.map((logro) => (
                    <div key={logro.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-75">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                          <Trophy className="h-3 w-3 text-gray-500" />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-700">{logro.nombre}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{logro.descripcion}</p>
                      <Badge variant="secondary" className="text-xs">
                        +{logro.puntos} pts
                      </Badge>
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
