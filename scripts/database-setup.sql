-- Crear base de datos para EduGame
CREATE DATABASE IF NOT EXISTS edugame;
USE edugame;

-- Tabla de usuarios (estudiantes y profesores)
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    tipo ENUM('estudiante', 'profesor') NOT NULL,
    avatar VARCHAR(10) DEFAULT '🚀',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla de estudiantes (información adicional)
CREATE TABLE estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    puntos_totales INT DEFAULT 0,
    nivel INT DEFAULT 1,
    racha_dias INT DEFAULT 0,
    ultima_actividad DATE,
    materia_favorita VARCHAR(50),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de materias
CREATE TABLE materias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    color VARCHAR(7) NOT NULL,
    icono VARCHAR(50) NOT NULL,
    descripcion TEXT
);

-- Tabla de actividades
CREATE TABLE actividades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    materia_id INT NOT NULL,
    puntos INT NOT NULL,
    codigo_secreto VARCHAR(20) UNIQUE NOT NULL,
    qr_code TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_vencimiento DATE,
    activa BOOLEAN DEFAULT TRUE,
    profesor_id INT NOT NULL,
    FOREIGN KEY (materia_id) REFERENCES materias(id),
    FOREIGN KEY (profesor_id) REFERENCES usuarios(id)
);

-- Tabla de logros
CREATE TABLE logros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    materia_id INT,
    nivel ENUM('bronce', 'plata', 'oro') NOT NULL,
    puntos_requeridos INT NOT NULL,
    puntos_otorgados INT NOT NULL,
    icono VARCHAR(100),
    condiciones JSON,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (materia_id) REFERENCES materias(id)
);

-- Tabla de progreso de estudiantes por materia
CREATE TABLE progreso_materias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    materia_id INT NOT NULL,
    puntos INT DEFAULT 0,
    actividades_completadas INT DEFAULT 0,
    tiempo_estudiado INT DEFAULT 0, -- en minutos
    ultima_actividad TIMESTAMP,
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (materia_id) REFERENCES materias(id),
    UNIQUE KEY unique_estudiante_materia (estudiante_id, materia_id)
);

-- Tabla de actividades completadas
CREATE TABLE actividades_completadas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    actividad_id INT NOT NULL,
    puntos_obtenidos INT NOT NULL,
    fecha_completada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tiempo_empleado INT, -- en minutos
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (actividad_id) REFERENCES actividades(id),
    UNIQUE KEY unique_estudiante_actividad (estudiante_id, actividad_id)
);

-- Tabla de logros desbloqueados
CREATE TABLE logros_desbloqueados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    logro_id INT NOT NULL,
    fecha_desbloqueado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    puntos_obtenidos INT NOT NULL,
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (logro_id) REFERENCES logros(id),
    UNIQUE KEY unique_estudiante_logro (estudiante_id, logro_id)
);

-- Tabla de rankings históricos
CREATE TABLE rankings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    posicion INT NOT NULL,
    puntos INT NOT NULL,
    tipo ENUM('semanal', 'mensual', 'general') NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE
);

-- Tabla de códigos QR generados
CREATE TABLE codigos_qr (
    id INT PRIMARY KEY AUTO_INCREMENT,
    actividad_id INT NOT NULL,
    codigo VARCHAR(100) UNIQUE NOT NULL,
    fecha_generacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_expiracion TIMESTAMP,
    usos_maximos INT DEFAULT 1,
    usos_actuales INT DEFAULT 0,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (actividad_id) REFERENCES actividades(id)
);

-- Índices para mejorar rendimiento
CREATE INDEX idx_estudiantes_puntos ON estudiantes(puntos_totales DESC);
CREATE INDEX idx_actividades_fecha ON actividades_completadas(fecha_completada DESC);
CREATE INDEX idx_logros_fecha ON logros_desbloqueados(fecha_desbloqueado DESC);
CREATE INDEX idx_progreso_materia ON progreso_materias(estudiante_id, materia_id);
