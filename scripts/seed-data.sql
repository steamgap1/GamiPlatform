-- Insertar datos de ejemplo para EduGame

-- Insertar materias
INSERT INTO materias (nombre, codigo, color, icono, descripcion) VALUES
('Robótica', 'ROB', '#00D4FF', 'Cpu', 'Construcción y programación de robots'),
('Programación', 'PROG', '#00FF88', 'Code', 'Desarrollo de software y algoritmos'),
('Diseño e Innovación', 'DIS', '#FF6B35', 'Wrench', 'Diseño de productos y prototipado'),
('Análisis de Datos', 'DATA', '#FFD23F', 'BarChart3', 'Estadística y ciencia de datos'),
('Inteligencia Artificial', 'IA', '#B19CD9', 'Brain', 'Machine Learning y AI'),
('Desarrollo de Videojuegos', 'GAMES', '#FF1744', 'Gamepad2', 'Creación de videojuegos');

-- Insertar usuarios de ejemplo (profesores)
INSERT INTO usuarios (nombre, email, password_hash, tipo, avatar) VALUES
('Juan Pérez', 'profesor@demo.com', '$2b$10$example_hash_admin123', 'profesor', '👨‍🏫'),
('María González', 'maria.prof@demo.com', '$2b$10$example_hash_password', 'profesor', '👩‍🏫');

-- Insertar usuarios de ejemplo (estudiantes)
INSERT INTO usuarios (nombre, email, password_hash, tipo, avatar) VALUES
('Ana García', 'ana@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '👩‍💻'),
('Carlos López', 'carlos@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '👨‍🔬'),
('María Rodríguez', 'maria@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '👩‍🎨'),
('Alex Estudiante', 'estudiante@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '🚀'),
('Diego Martín', 'diego@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '👨‍💻'),
('Sofia Chen', 'sofia@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '🤖'),
('Luis Morales', 'luis@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '🎮'),
('Emma Wilson', 'emma@demo.com', '$2b$10$example_hash_demo123', 'estudiante', '📊');

-- Insertar información de estudiantes
INSERT INTO estudiantes (usuario_id, puntos_totales, nivel, racha_dias, ultima_actividad, materia_favorita) VALUES
(3, 1250, 15, 12, '2024-01-28', 'ia'),
(4, 1180, 14, 8, '2024-01-28', 'robotica'),
(5, 1050, 13, 15, '2024-01-27', 'diseno'),
(6, 890, 12, 7, '2024-01-28', 'programacion'),
(7, 820, 11, 5, '2024-01-27', 'datos'),
(8, 780, 11, 9, '2024-01-26', 'ia'),
(9, 750, 10, 6, '2024-01-25', 'videojuegos'),
(10, 720, 10, 4, '2024-01-24', 'datos');

-- Insertar actividades de ejemplo
INSERT INTO actividades (nombre, descripcion, materia_id, puntos, codigo_secreto, fecha_vencimiento, profesor_id) VALUES
('Construcción de Robot Básico', 'Construye un robot que pueda moverse y evitar obstáculos', 1, 50, 'ROB001', '2024-02-15', 1),
('Algoritmo de Ordenamiento', 'Implementa y compara diferentes algoritmos de ordenamiento', 2, 30, 'PROG001', '2024-02-10', 1),
('Análisis de Dataset COVID', 'Analiza datos estadísticos de la pandemia COVID-19', 4, 40, 'DATA001', '2024-01-30', 1),
('Diseño de Interfaz Móvil', 'Diseña una interfaz de usuario para aplicación móvil', 3, 35, 'DIS001', '2024-02-20', 1),
('Red Neuronal Simple', 'Crea una red neuronal básica para clasificación', 5, 60, 'IA001', '2024-02-25', 1),
('Juego 2D en Unity', 'Desarrolla un juego 2D básico usando Unity', 6, 55, 'GAME001', '2024-03-01', 1);

-- Insertar logros del sistema
INSERT INTO logros (nombre, descripcion, materia_id, nivel, puntos_requeridos, puntos_otorgados, condiciones) VALUES
('Primer Paso', 'Completa tu primera actividad', NULL, 'bronce', 0, 10, '{"actividades_completadas": 1}'),
('Explorador', 'Completa actividades en 3 materias diferentes', NULL, 'plata', 0, 50, '{"materias_diferentes": 3}'),
('Dedicado', 'Mantén una racha de 7 días consecutivos', NULL, 'oro', 0, 100, '{"racha_dias": 7}'),
('Código Maestro', 'Completa 5 actividades de programación', 2, 'plata', 0, 50, '{"actividades_materia": 5}'),
('Robot Constructor', 'Construye 3 robots funcionales', 1, 'oro', 0, 100, '{"actividades_materia": 3}'),
('Diseñador Creativo', 'Crea 3 prototipos innovadores', 3, 'plata', 0, 75, '{"actividades_materia": 3}'),
('Analista de Datos', 'Completa 5 análisis estadísticos', 4, 'oro', 0, 120, '{"actividades_materia": 5}'),
('IA Pionero', 'Entrena 3 modelos de inteligencia artificial', 5, 'oro', 0, 150, '{"actividades_materia": 3}'),
('Game Developer', 'Desarrolla 2 videojuegos completos', 6, 'oro', 0, 130, '{"actividades_materia": 2}'),
('Nivel Experto', 'Alcanza el nivel 15', NULL, 'oro', 0, 200, '{"nivel_minimo": 15}');

-- Insertar progreso por materias (ejemplos)
INSERT INTO progreso_materias (estudiante_id, materia_id, puntos, actividades_completadas, tiempo_estudiado) VALUES
-- Ana García (estudiante_id = 1)
(1, 1, 180, 4, 240), -- Robótica
(1, 2, 220, 6, 300), -- Programación  
(1, 5, 300, 8, 400), -- IA
-- Carlos López (estudiante_id = 2)
(2, 1, 280, 7, 350), -- Robótica
(2, 2, 230, 5, 280), -- Programación
(2, 4, 150, 3, 180), -- Datos
-- Alex Estudiante (estudiante_id = 4)
(4, 2, 250, 5, 320), -- Programación
(4, 1, 180, 3, 240), -- Robótica
(4, 5, 150, 2, 200); -- IA

-- Insertar algunas actividades completadas
INSERT INTO actividades_completadas (estudiante_id, actividad_id, puntos_obtenidos, tiempo_empleado) VALUES
(1, 1, 50, 120), -- Ana completó Robot Básico
(1, 2, 30, 90),  -- Ana completó Algoritmo
(2, 1, 50, 110), -- Carlos completó Robot Básico
(4, 2, 30, 95),  -- Alex completó Algoritmo
(4, 4, 35, 85);  -- Alex completó Diseño UI

-- Insertar algunos logros desbloqueados
INSERT INTO logros_desbloqueados (estudiante_id, logro_id, puntos_obtenidos) VALUES
(1, 1, 10), -- Ana: Primer Paso
(1, 4, 50), -- Ana: Código Maestro
(1, 3, 100), -- Ana: Dedicado
(2, 1, 10), -- Carlos: Primer Paso
(2, 5, 100), -- Carlos: Robot Constructor
(4, 1, 10), -- Alex: Primer Paso
(4, 4, 50); -- Alex: Código Maestro
