---
title: "Planner Controller"
date: 2026-02-08
tags: ["posts"]
layout: base.liquid
---


### Planner Controller,  
*what we knows about?*

```
Excellent question. The Planner-Controller architecture is a fundamental concept in robotics, autonomous systems, and AI, describing how high-level decision-making is separated from low-level execution.

Here’s a breakdown of what we know about it, from core principles to modern applications.

Core Concept: Separation of Concerns

The architecture is built on a clear division of labor:

1. Planner: The "brain." It reasons about what to do and when. It operates at a high level of abstraction, considering goals, constraints, and the future.
2. Controller: The "muscle." It determines how to do it. It executes the plan in real-time, dealing with low-level physics, sensor feedback, and immediate disturbances.

---

The Classic Model: A Three-Layer Stack

Often visualized as a hierarchy:

1. Planning Layer (Highest):
   · Function: Long-term goal decomposition, strategy, pathfinding, task sequencing.
   · Input: High-level goals (e.g., "go to room B," "assemble part X").
   · Output: A plan or trajectory (e.g., a sequence of waypoints, a list of actions).
   · Time Horizon: Seconds to hours.
   · Algorithms: A* , Dijkstra, RRT*, Task planners (STRIPS, PDDL), AI planners.
2. Controller Layer (Lowest):
   · Function: Real-time execution and stabilization. It makes the plan happen in the physical world.
   · Input: The desired state from the planner (e.g., "reach waypoint at velocity 2 m/s") + current sensor data.
   · Output: Actuator commands (e.g., voltage to motors, torque to joints).
   · Time Horizon: Milliseconds to seconds.
   · Algorithms: PID control, MPC (Model Predictive Control), LQR (Linear Quadratic Regulator).
3. The Critical Connection: The Trajectory / Reference Signal
   · The planner's output isn't just a goal; it's often a time-parameterized path called a trajectory (desired position, velocity, acceleration over time). The controller's job is to follow this trajectory as closely as possible despite real-world noise.

---

Key Characteristics & Challenges

· Open-Loop vs. Closed-Loop:
  · Pure Planner-Controller (Open-Loop Planning): The planner creates a full plan based on the world model, sends it to the controller, and hopes for the best. Fragile to unexpected obstacles or disturbances.
  · Replanning (Closed-Loop): The modern standard. The controller provides feedback, and the planner continuously re-plans based on new sensor data (e.g., SLAM for robots, new game state in AI).
· The "World Model" Problem: The planner's decisions are only as good as its internal model of the world. Inaccurate models lead to flawed plans.
· Temporal Decoupling: The planner is slow and deliberate; the controller is fast and reactive. This separation allows each to use appropriate algorithms.

Modern Variations & Contexts

1. Robotics & Self-Driving Cars:
   · Planner: Mission planning (route from A to B), behavioral layer (change lanes, overtake), local path/motion planner (generate a smooth, collision-free trajectory).
   · Controller: Lateral control (steering to follow path) and longitudinal control (accelerating/braking to match speed profile).
2. AI & Reinforcement Learning (RL):
   · Planner = "Policy" (in Model-Based RL): A learned or algorithmic model that predicts future states and rewards. It plans a sequence of actions.
   · Controller = "Actor" or low-level policy: Executes the primitive actions. In hierarchical RL, a high-level policy (planner) sets sub-goals for a low-level policy (controller).
3. Game AI:
   · Planner: Strategic AI (e.g., deciding to build a barracks in an RTS, choosing a quest in an RPG).
   · Controller: Tactical or movement AI (e.g., pathfinding to a location, executing combat animations).
4. Model Predictive Control (MPC) - A Hybrid:
   · MPC blurs the line between planner and controller. At each time step, it solves a finite-horizon optimization planning problem, but only executes the first step before re-planning. Thus, it acts as a receding-horizon planner embedded directly in the control loop.

Pros and Cons

Pros Cons
Modular & Understandable: Easy to debug and improve layers independently. Potentially Suboptimal: Separation can lead to inflexible plans. The controller might struggle to follow an unrealistic plan.
Computationally Efficient: Planner isn't burdened with micro-second reactions. Model Dependency: Relies heavily on an accurate world model for planning.
Leverages specialized algorithms for high-level search vs. low-level regulation. Latency: Planning delays can cause slow reactions to new information.

The Future & Integration with AI

The trend is towards tighter integration and learning:

· End-to-End Learning: Neural networks that map sensors directly to actions (e.g., some robot grasping). This bypasses explicit planning but is often a "black box."
· Learning for Planning/Control: Using ML to create better world models for planners, or to tune complex controllers.
· Hybrid Systems: Combining the robustness and interpretability of classical planner-controller stacks with the adaptability of learned components (e.g., a learned "planner" that outputs trajectories for a classical PID controller).

In summary, the Planner-Controller architecture is a powerful, pervasive paradigm for building intelligent systems that must think ahead and act robustly in real time. Its core principle—separating strategic reasoning from tactical execution—remains relevant even as the implementations evolve with modern AI techniques.

```

Планировщик-Контроллер: что мы знаем об этой архитектуре?

Отличный вопрос. Архитектура «Планировщик-Контроллер» — это фундаментальная концепция в робототехнике, автономных системах и ИИ, которая описывает разделение высокоуровневого принятия решений и низкоуровневого исполнения.

Вот подробный разбор, от основных принципов до современных применений.

Основная концепция: Разделение ответственности

Архитектура построена на четком разделении задач:

1. Планировщик: «Мозг». Он определяет, что делать и когда. Работает на высоком уровне абстракции, учитывая цели, ограничения и будущее состояние.
2. Контроллер: «Мышцы». Он определяет, как это сделать. Выполняет план в реальном времени, работая с низкоуровневой физикой, обратной связью от сенсоров и немедленными помехами.

---

Классическая модель: Трехуровневый стек

Часто визуализируется как иерархия:

1. Уровень планирования (Наивысший):
   · Функция: Декомпозиция долгосрочных целей, стратегия, поиск пути, последовательность задач.
   · Вход: Высокоуровневые цели (например, «перейти в комнату B», «собрать деталь X»).
   · Выход: План или траектория (например, последовательность точек пути, список действий).
   · Временной горизонт: От секунд до часов.
   · Алгоритмы: A, Dijkstra, RRT, планировщики задач (STRIPS, PDDL), ИИ-планировщики.
2. Уровень управления / Контроллер (Низший):
   · Функция: Исполнение и стабилизация в реальном времени. Реализует план в физическом мире.
   · Вход: Желаемое состояние от планировщика (например, «достичь точки пути со скоростью 2 м/с») + текущие данные с датчиков.
   · Выход: Команды исполнительным механизмам (например, напряжение на моторы, крутящий момент на сочленения).
   · Временной горизонт: От миллисекунд до секунд.
   · Алгоритмы: PID-регулятор, MPC (Прогнозное управление на модели), LQR (Линейно-квадратичный регулятор).
3. Критическая связь: Траектория / Опорный сигнал
   · Выход планировщика — не просто цель, а часто параметризованный во времени путь, называемый траекторией (желаемые положение, скорость, ускорение во времени). Задача контроллера — следовать этой траектории как можно точнее, несмотря на шумы реального мира.

---

Ключевые характеристики и проблемы

· Разомкнутый vs. Замкнутый контур:
  · Чистый Планировщик-Контроллер (Планирование в разомкнутом контуре): Планировщик создает полный план на основе модели мира, отправляет его контроллеру и надеется на лучшее. Хрупкая система, уязвимая для неожиданных препятствий.
  · Перепланирование (Замкнутый контур): Современный стандарт. Контроллер предоставляет обратную связь, а планировщик постоянно перепланирует на основе новых данных с датчиков (например, SLAM для роботов, новое состояние игры в ИИ).
· Проблема «Модели мира»: Решения планировщика настолько же хороши, насколько хороша его внутренняя модель мира. Неточные модели приводят к ошибочным планам.
· Временное разделение: Планировщик медленный и обдумывающий; контроллер быстрый и реактивный. Это разделение позволяет каждому использовать подходящие алгоритмы.

Современные вариации и контексты

1. Робототехника и беспилотные автомобили:
   · Планировщик: Планирование миссии (маршрут из А в Б), поведенческий уровень (смена полосы, обгон), локальный планировщик пути/движения (создает плавную траекторию без столкновений).
   · Контроллер: Поперечное управление (руление для следования пути) и продольное управление (ускорение/торможение для соответствия профилю скорости).
2. ИИ и Обучение с подкреплением (RL):
   · Планировщик = «Политика» (в Model-Based RL): Обученная или алгоритмическая модель, предсказывающая будущие состояния и вознаграждения. Планирует последовательность действий.
   · Контроллер = «Актор» или низкоуровневая политика: Выполняет примитивные действия. В иерархическом RL высокоуровневая политика (планировщик) ставит подцели для низкоуровневой политики (контроллера).
3. ИИ в играх:
   · Планировщик: Стратегический ИИ (например, решение построить казарму в стратегии в реальном времени, выбор квеста в RPG).
   · Контроллер: Тактический ИИ или ИИ движения (например, поиск пути к локации, исполнение боевых анимаций).
4. Прогнозное управление (MPC) — гибридный подход:
   · MPC стирает границу между планировщиком и контроллером. На каждом шаге по времени он решает задачу планирования с конечным горизонтом оптимизации, но исполняет только первый шаг перед повторным планированием. Таким образом, он действует как планировщик с отступающим горизонтом, встроенный непосредственно в контур управления.

Плюсы и минусы

Плюсы Минусы
Модульность и понятность: Легко отлаживать и улучшать слои независимо. Потенциально неоптимально: Разделение может привести к негибким планам. Контроллеру может быть сложно следовать нереалистичному плану.
Вычислительная эффективность: Планировщик не нагружен микросекундными реакциями. Зависимость от модели: Сильно полагается на точную модель мира для планирования.
Использует специализированные алгоритмы для поиска и регулирования. Задержка: Задержки в планировании могут привести к медленной реакции на новую информацию.

Будущее и интеграция с ИИ

Тренд — в сторону более тесной интеграции и использования обучения:

· Сквозное обучение: Нейронные сети, которые напрямую преобразуют данные с датчиков в действия (например, захват объектов роботом). Это обходит явное планирование, но часто является «черным ящиком».
· Обучение для планирования/управления: Использование машинного обучения для создания лучших моделей мира для планировщиков или настройки сложных контроллеров.
· Гибридные системы: Комбинация устойчивости и интерпретируемости классических стеков «планировщик-контроллер» с адаптивностью обученных компонентов (например, обученный «планировщик», который выдает траектории для классического PID-контроллера).

В итоге, архитектура «Планировщик-Контроллер» — это мощная, повсеместная парадигма для создания интеллектуальных систем, которые должны думать наперед и действовать устойчиво в реальном времени. Её основной принцип — разделение стратегического мышления и тактического исполнения — остается актуальным, даже несмотря на то, что реализации эволюционируют с современными методами ИИ.
