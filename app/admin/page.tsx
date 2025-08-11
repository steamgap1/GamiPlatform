"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Trophy, Plus, Edit, Trash2, QrCode, Gift, BarChart3, Settings, Eye, Download } from "lucide-react"

const estudiantes = [
  { id: 1, nombre: "Ana García", email: "ana@email.com", puntos: 1250, nivel: 15, ultimaActividad: "2024-01-28" },
  { id: 2, nombre: "Carlos López", email: "carlos@email.com", puntos: 1180, nivel: 14, ultimaActividad: "2024-01-28" },
  {
    id: 3,
    nombre: "María Rodríguez",
    email: "maria@email.com",
    puntos: 1050,
    nivel: 13,
    ultimaActividad: "2024-01-27",
  },
  { id: 4, nombre: "Alex Estudiante", email: "alex@email.com", puntos: 890, nivel: 12, ultimaActividad: "2024-01-28" },
]

const actividades = [
  {
    id: 1,
    nombre: "Construcción de Robot Básico",
    materia: "robotica",
    puntos: 50,
    codigo: "ROB001",
    activa: true,
    fechaVencimiento: "2024-02-15",
  },
  {
    id: 2,
    nombre: "Algoritmo de Ordenamiento",
    materia: "programacion",
    puntos: 30,
    codigo: "PROG001",
    activa: true,
    fechaVencimiento: "2024-02-10",
  },
  {
    id: 3,
    nombre: "Análisis de Dataset COVID",
    materia: "datos",
    puntos: 40,
    codigo: "DATA001",
    activa: false,
    fechaVencimiento: "2024-01-30",
  },
  {
    id: 4,
    nombre: "Diseño de Interfaz Móvil",
    materia: "diseno",
    puntos: 35,
    codigo: "DIS001",
    activa: true,
    fechaVencimiento: "2024-02-20",
  },
]

export default function AdminPanel() {
  const [vistaActual, setVistaActual] = useState<"dashboard" | "estudiantes" | "actividades" | "logros">("dashboard")
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [nuevaActividad, setNuevaActividad] = useState({
    nombre: "",
    materia: "programacion",
    puntos: 0,
    descripcion: "",
    fechaVencimiento: "",
  })

  const crearActividad = () => {
    // Aquí iría la lógica para crear la actividad
    console.log("Creando actividad:", nuevaActividad)
    setMostrarFormulario(false)
    setNuevaActividad({ nombre: "", materia: "programacion", puntos: 0, descripcion: "", fechaVencimiento: "" })
  }

  const asignarPuntos = (estudianteId: number, puntos: number) => {
    // Aquí iría la lógica para asignar puntos
    console.log(`Asignando ${puntos} puntos al estudiante ${estudianteId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Settings className="text-blue-500" />
                Panel de Administración
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">Profesor: Juan Pérez</span>
              <Button variant="outline" size="sm">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 space-y-2">
            <Button
              variant={vistaActual === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setVistaActual("dashboard")}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={vistaActual === "estudiantes" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setVistaActual("estudiantes")}
            >
              <Users className="h-4 w-4 mr-2" />
              Estudiantes
            </Button>
            <Button
              variant={vistaActual === "actividades" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setVistaActual("actividades")}
            >
              <Gift className="h-4 w-4 mr-2" />
              Actividades
            </Button>
            <Button
              variant={vistaActual === "logros" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setVistaActual("logros")}
            >
              <Trophy className="h-4 w-4 mr-2" />
              Logros
            </Button>
          </div>

          {/* Contenido Principal */}
          <div className="flex-1">
            {vistaActual === "dashboard" && (
              <div className="space-y-6">
                {/* Estadísticas Generales */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Estudiantes</p>
                          <p className="text-3xl font-bold text-blue-600">{estudiantes.length}</p>
                        </div>
                        <Users className="h-8 w-8 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Actividades Activas</p>
                          <p className="text-3xl font-bold text-green-600">
                            {actividades.filter((a) => a.activa).length}
                          </p>
                        </div>
                        <Gift className="h-8 w-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Puntos Totales</p>
                          <p className="text-3xl font-bold text-purple-600">
                            {estudiantes.reduce((sum, e) => sum + e.puntos, 0)}
                          </p>
                        </div>
                        <Trophy className="h-8 w-8 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Promedio Nivel</p>
                          <p className="text-3xl font-bold text-orange-600">
                            {Math.round(estudiantes.reduce((sum, e) => sum + e.nivel, 0) / estudiantes.length)}
                          </p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-orange-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Actividad Reciente */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actividad Reciente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold">Ana García completó "Algoritmo de Ordenamiento"</p>
                          <p className="text-sm text-gray-600">Hace 2 horas • +30 puntos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold">Carlos López desbloqueó logro "Robot Constructor"</p>
                          <p className="text-sm text-gray-600">Hace 4 horas • +100 puntos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold">María Rodríguez subió al nivel 13</p>
                          <p className="text-sm text-gray-600">Ayer • Nuevo nivel alcanzado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {vistaActual === "estudiantes" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Gestión de Estudiantes</h2>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Agregar Estudiante
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Estudiante
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Puntos
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nivel
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Última Actividad
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Acciones
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {estudiantes.map((estudiante) => (
                            <tr key={estudiante.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{estudiante.nombre}</div>
                                  <div className="text-sm text-gray-500">{estudiante.email}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold">{estudiante.puntos}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const puntos = prompt("Puntos a asignar:")
                                      if (puntos) asignarPuntos(estudiante.id, Number.parseInt(puntos))
                                    }}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Badge variant="secondary">Nivel {estudiante.nivel}</Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(estudiante.ultimaActividad).toLocaleDateString("es-ES")}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {vistaActual === "actividades" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Gestión de Actividades</h2>
                  <Button onClick={() => setMostrarFormulario(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Nueva Actividad
                  </Button>
                </div>

                {mostrarFormulario && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Crear Nueva Actividad</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Actividad</label>
                          <Input
                            value={nuevaActividad.nombre}
                            onChange={(e) => setNuevaActividad({ ...nuevaActividad, nombre: e.target.value })}
                            placeholder="Ej: Construcción de Robot Básico"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Materia</label>
                          <select
                            value={nuevaActividad.materia}
                            onChange={(e) => setNuevaActividad({ ...nuevaActividad, materia: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="programacion">Programación</option>
                            <option value="robotica">Robótica</option>
                            <option value="diseno">Diseño e Innovación</option>
                            <option value="datos">Análisis de Datos</option>
                            <option value="ia">Inteligencia Artificial</option>
                            <option value="videojuegos">Desarrollo de Videojuegos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Puntos a Otorgar</label>
                          <Input
                            type="number"
                            value={nuevaActividad.puntos}
                            onChange={(e) =>
                              setNuevaActividad({ ...nuevaActividad, puntos: Number.parseInt(e.target.value) || 0 })
                            }
                            placeholder="50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Vencimiento</label>
                          <Input
                            type="date"
                            value={nuevaActividad.fechaVencimiento}
                            onChange={(e) => setNuevaActividad({ ...nuevaActividad, fechaVencimiento: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                        <Textarea
                          value={nuevaActividad.descripcion}
                          onChange={(e) => setNuevaActividad({ ...nuevaActividad, descripcion: e.target.value })}
                          placeholder="Describe los objetivos y requisitos de la actividad..."
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={crearActividad}>Crear Actividad</Button>
                        <Button variant="outline" onClick={() => setMostrarFormulario(false)}>
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Actividades Existentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {actividades.map((actividad) => (
                        <div
                          key={actividad.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{actividad.nombre}</h3>
                              <Badge variant={actividad.activa ? "default" : "secondary"}>
                                {actividad.activa ? "Activa" : "Inactiva"}
                              </Badge>
                              <Badge variant="outline" className="capitalize">
                                {actividad.materia}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>Código: {actividad.codigo}</span>
                              <span>Puntos: {actividad.puntos}</span>
                              <span>Vence: {new Date(actividad.fechaVencimiento).toLocaleDateString("es-ES")}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <QrCode className="h-4 w-4 mr-2" />
                              QR
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {vistaActual === "logros" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Gestión de Logros</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nuevo Logro
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Logros del Sistema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          nombre: "Primer Paso",
                          descripcion: "Completa tu primera actividad",
                          nivel: "bronce",
                          puntos: 10,
                        },
                        {
                          nombre: "Código Maestro",
                          descripcion: "Resuelve 5 ejercicios de programación",
                          nivel: "plata",
                          puntos: 50,
                        },
                        {
                          nombre: "Robot Constructor",
                          descripcion: "Construye tu primer robot funcional",
                          nivel: "oro",
                          puntos: 100,
                        },
                        {
                          nombre: "Diseñador Creativo",
                          descripcion: "Crea 3 prototipos innovadores",
                          nivel: "plata",
                          puntos: 75,
                        },
                        {
                          nombre: "Analista de Datos",
                          descripcion: "Completa un análisis estadístico completo",
                          nivel: "oro",
                          puntos: 120,
                        },
                        {
                          nombre: "IA Pionero",
                          descripcion: "Entrena tu primer modelo de IA",
                          nivel: "oro",
                          puntos: 150,
                        },
                      ].map((logro, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
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
                            <h3 className="font-semibold">{logro.nombre}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{logro.descripcion}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">+{logro.puntos} pts</Badge>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
