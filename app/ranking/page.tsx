"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Crown, ArrowLeft, Filter, Calendar } from "lucide-react"
import Link from "next/link"

const rankingGeneral = [
  { posicion: 1, nombre: "Ana García", puntos: 1250, avatar: "👩‍💻", nivel: 15, racha: 12, materiaFuerte: "IA" },
  { posicion: 2, nombre: "Carlos López", puntos: 1180, avatar: "👨‍🔬", nivel: 14, racha: 8, materiaFuerte: "Robótica" },
  {
    posicion: 3,
    nombre: "María Rodríguez",
    puntos: 1050,
    avatar: "👩‍🎨",
    nivel: 13,
    racha: 15,
    materiaFuerte: "Diseño",
  },
  {
    posicion: 4,
    nombre: "Alex Estudiante",
    puntos: 890,
    avatar: "🚀",
    nivel: 12,
    racha: 7,
    materiaFuerte: "Programación",
  },
  { posicion: 5, nombre: "Diego Martín", puntos: 820, avatar: "👨‍💻", nivel: 11, racha: 5, materiaFuerte: "Datos" },
  { posicion: 6, nombre: "Sofia Chen", puntos: 780, avatar: "🤖", nivel: 11, racha: 9, materiaFuerte: "IA" },
  { posicion: 7, nombre: "Luis Morales", puntos: 750, avatar: "🎮", nivel: 10, racha: 6, materiaFuerte: "Videojuegos" },
  { posicion: 8, nombre: "Emma Wilson", puntos: 720, avatar: "📊", nivel: 10, racha: 4, materiaFuerte: "Datos" },
  { posicion: 9, nombre: "Javier Ruiz", puntos: 680, avatar: "⚡", nivel: 9, racha: 11, materiaFuerte: "Robótica" },
  { posicion: 10, nombre: "Isabella Torres", puntos: 650, avatar: "🔥", nivel: 9, racha: 3, materiaFuerte: "Diseño" },
]

const rankingPorMateria = {
  programacion: [
    { posicion: 1, nombre: "Alex Estudiante", puntos: 250, avatar: "🚀" },
    { posicion: 2, nombre: "Carlos López", puntos: 230, avatar: "👨‍🔬" },
    { posicion: 3, nombre: "Ana García", puntos: 220, avatar: "👩‍💻" },
  ],
  robotica: [
    { posicion: 1, nombre: "Carlos López", puntos: 280, avatar: "👨‍🔬" },
    { posicion: 2, nombre: "Javier Ruiz", puntos: 240, avatar: "⚡" },
    { posicion: 3, nombre: "Alex Estudiante", puntos: 180, avatar: "🚀" },
  ],
  ia: [
    { posicion: 1, nombre: "Ana García", puntos: 300, avatar: "👩‍💻" },
    { posicion: 2, nombre: "Sofia Chen", puntos: 280, avatar: "🤖" },
    { posicion: 3, nombre: "Alex Estudiante", puntos: 150, avatar: "🚀" },
  ],
}

export default function Ranking() {
  const [vistaActual, setVistaActual] = useState<"general" | "semanal" | "materia">("general")
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("programacion")

  const obtenerIconoPosicion = (posicion: number) => {
    if (posicion === 1) return <Crown className="h-6 w-6 text-yellow-500" />
    if (posicion === 2) return <Medal className="h-6 w-6 text-gray-400" />
    if (posicion === 3) return <Trophy className="h-6 w-6 text-orange-600" />
    return (
      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
        {posicion}
      </div>
    )
  }

  const obtenerColorPosicion = (posicion: number) => {
    if (posicion === 1) return "bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300"
    if (posicion === 2) return "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300"
    if (posicion === 3) return "bg-gradient-to-r from-orange-100 to-orange-200 border-orange-300"
    return "bg-white border-gray-200"
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
            <Trophy className="text-yellow-400" />
            Rankings
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filtros */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Ver:</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={vistaActual === "general" ? "default" : "outline"}
                  onClick={() => setVistaActual("general")}
                  size="sm"
                >
                  Ranking General
                </Button>
                <Button
                  variant={vistaActual === "semanal" ? "default" : "outline"}
                  onClick={() => setVistaActual("semanal")}
                  size="sm"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Esta Semana
                </Button>
                <Button
                  variant={vistaActual === "materia" ? "default" : "outline"}
                  onClick={() => setVistaActual("materia")}
                  size="sm"
                >
                  Por Materia
                </Button>
              </div>

              {vistaActual === "materia" && (
                <select
                  value={materiaSeleccionada}
                  onChange={(e) => setMateriaSeleccionada(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="programacion">Programación</option>
                  <option value="robotica">Robótica</option>
                  <option value="ia">Inteligencia Artificial</option>
                  <option value="diseno">Diseño e Innovación</option>
                  <option value="datos">Análisis de Datos</option>
                  <option value="videojuegos">Desarrollo de Videojuegos</option>
                </select>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Podio Top 3 */}
        {vistaActual !== "materia" && (
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex justify-center items-end gap-8 mb-8">
                {/* Segundo lugar */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="text-3xl">{rankingGeneral[1].avatar}</div>
                  </div>
                  <div className="bg-gradient-to-t from-gray-300 to-gray-100 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <div className="font-bold text-gray-800">{rankingGeneral[1].nombre}</div>
                    <div className="text-sm text-gray-600">{rankingGeneral[1].puntos} pts</div>
                    <Badge variant="secondary" className="mt-1">
                      2°
                    </Badge>
                  </div>
                </div>

                {/* Primer lugar */}
                <div className="text-center">
                  <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="w-24 h-24 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto ring-4 ring-yellow-200">
                    <div className="text-4xl">{rankingGeneral[0].avatar}</div>
                  </div>
                  <div className="bg-gradient-to-t from-yellow-300 to-yellow-100 p-4 rounded-lg h-32 flex flex-col justify-center">
                    <div className="font-bold text-yellow-800 text-lg">{rankingGeneral[0].nombre}</div>
                    <div className="text-yellow-700">{rankingGeneral[0].puntos} pts</div>
                    <Badge className="mt-2 bg-yellow-500">👑 1°</Badge>
                  </div>
                </div>

                {/* Tercer lugar */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-b from-orange-300 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="text-3xl">{rankingGeneral[2].avatar}</div>
                  </div>
                  <div className="bg-gradient-to-t from-orange-300 to-orange-100 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <div className="font-bold text-orange-800">{rankingGeneral[2].nombre}</div>
                    <div className="text-sm text-orange-600">{rankingGeneral[2].puntos} pts</div>
                    <Badge variant="secondary" className="mt-1 bg-orange-200">
                      3°
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lista de Rankings */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              {vistaActual === "general" && "Ranking General"}
              {vistaActual === "semanal" && "Ranking Semanal"}
              {vistaActual === "materia" &&
                `Ranking - ${materiaSeleccionada.charAt(0).toUpperCase() + materiaSeleccionada.slice(1)}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(vistaActual === "materia"
                ? rankingPorMateria[materiaSeleccionada as keyof typeof rankingPorMateria] || []
                : rankingGeneral
              ).map((estudiante, index) => (
                <div
                  key={estudiante.posicion}
                  className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:scale-[1.02] ${obtenerColorPosicion(
                    estudiante.posicion,
                  )} ${estudiante.nombre === "Alex Estudiante" ? "ring-2 ring-blue-400" : ""}`}
                >
                  <div className="flex items-center justify-center">{obtenerIconoPosicion(estudiante.posicion)}</div>

                  <div className="text-4xl">{estudiante.avatar}</div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-gray-800">{estudiante.nombre}</h3>
                      {estudiante.nombre === "Alex Estudiante" && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Tú
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-semibold">{estudiante.puntos} puntos</span>
                      {vistaActual !== "materia" && "nivel" in estudiante && (
                        <>
                          <span>Nivel {estudiante.nivel}</span>
                          <span className="flex items-center gap-1">🔥 {estudiante.racha} días</span>
                          <Badge variant="outline" className="text-xs">
                            {estudiante.materiaFuerte}
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-700">#{estudiante.posicion}</div>
                    {estudiante.posicion <= 3 && (
                      <div className="text-xs text-gray-500">
                        {estudiante.posicion === 1
                          ? "🏆 Campeón"
                          : estudiante.posicion === 2
                            ? "🥈 Subcampeón"
                            : "🥉 Tercer lugar"}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
