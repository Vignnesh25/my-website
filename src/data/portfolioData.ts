import { Project, SkillItem, CredentialItem } from '../types';

export const PERSONAL_INFO = {
  name: 'JS VIGNNESH',
  role: 'HARDWARE & AI ENGINEER',
  status: 'AVAILABLE FOR 2025/2026 ROLES',
  statusShort: 'Available for Roles',
  institution: 'B.Tech in Artificial Intelligence & Data Science • REVA University',
  location: 'Bengaluru, Karnataka, India',
  gradClass: 'Class of 2025 - 2029',
  photoUrl:
    'https://lh3.googleusercontent.com/aida/AEtjO1UnR4roq05ISLcXjABapxuN4MvsXdtvHGA5k53GQ3OYpl4uuTXvS8YtoACwyBNbfh4EUzJ90VEjAXo2WYYI3q-ZsPf4KMFChyslL4ut_tIawpX1kxLkGW3tROfLXZJ4P7qHk6YgjkS7EUBIRSpvEvODp46YJG2W-X4DBW5-rGHloVIcew-Ile3_AuE3KouFbt1UCd3m4_kGF50j_bKlAJ8p5mthV8rYlvdiRvp_cQeKiIT2ncK8y2_Jlgo',
  bio: 'I’m an AI & Data Science student passionate about software development, problem-solving, and emerging technologies. I enjoy building practical projects, exploring new ideas, and continuously improving my skills through hands-on learning and experimentation.',
  phone: '+91 91089XXXXX',
  email: 'vignneshjs2527@gmail.com',
  altEmail: 'vignneshjs2527@gmail.com',
  githubUrl: 'https://github.com/Vignnesh25',
  linkedinUrl: 'https://www.linkedin.com/in/vignnesh-j-s-870578386/',
  systemInfo: {
    board: 'ESP32-WROOM-32',
    lab: 'REVA AI LAB',
    baud: '115200',
    link: 'SERIAL LINK STABLE',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'prj-01',
    code: 'PRJ-01 // EDGE-AI',
    category: '• SENSOR TELEMETRY',
    statusBadge: 'HARDWARE TESTED',
    statusType: 'orange',
    title: 'IoT Object Detection System',
    subtitle: 'AUTONOMOUS EDGE SENSOR PIPELINE',
    compatibility: 'ESP32 • RTOS COMPATIBLE',
    description:
      'Engineered an ultra-low-latency sensor classification pipeline for industrial warehouse automation. Achieved microsecond IR/ultrasonic polling intervals with automated edge state machine triggers.',
    metrics: [
      { label: 'RESPONSE LATENCY', value: '< 15ms' },
      { label: 'TRIGGER ACCURACY', value: '99.2%' },
      { label: 'UART / SPI STREAM', value: 'Live', highlight: true },
    ],
    tags: [
      'Arduino',
      'Ultrasonic / IR',
      'IoT Telemetry',
      'Embedded C++',
      'Edge AI',
    ],
    footerIndicator: {
      icon: 'sensors',
      text: 'ESP32 SPI Pinout Active',
    },
    actionText: 'SOURCE CODE →',
    schematics: {
      microcontroller: 'ESP32 Dual-Core Xtensa LX6 @ 240MHz',
      sensors: ['HC-SR04 Ultrasonic Module', 'Infrared Obstacle Sensor Array', 'DHT22 Telemetry'],
      protocols: ['SPI Bus (VSPI/HSPI)', 'UART @ 115200 Baud', 'MQTT Edge Bridge'],
      firmwareLang: 'Embedded C++ / FreeRTOS',
      sampleCode: `// ESP32 Microsecond Polling Loop
#include <Arduino.h>
#include <SPI.h>

#define TRIGGER_PIN 5
#define ECHO_PIN 18
#define SENSOR_THRESHOLD_CM 20.0

volatile uint32_t echoStart = 0;
volatile uint32_t echoEnd = 0;

void IRAM_ATTR echoISR() {
  if (digitalRead(ECHO_PIN) == HIGH) {
    echoStart = micros();
  } else {
    echoEnd = micros();
    portBASE_TYPE xHigherPriorityTaskWoken = pdFALSE;
    vTaskNotifyGiveFromISR(xEdgeClassificationTask, &xHigherPriorityTaskWoken);
  }
}`,
      pinoutTable: [
        { pin: 'GPIO 5', function: 'TRIG_OUT', note: 'Hardware Pulse generation' },
        { pin: 'GPIO 18', function: 'ECHO_IN', note: 'Interrupt Service Routine (ISR)' },
        { pin: 'GPIO 21', function: 'I2C_SDA', note: 'OLED diagnostic telemetry' },
        { pin: 'GPIO 22', function: 'I2C_SCL', note: 'OLED sync clock @ 400kHz' },
      ],
    },
  },
  {
    id: 'prj-02',
    code: 'PRJ-02 // ROBOTICS',
    category: '• COLLISION AVOIDANCE',
    statusBadge: 'PROTOTYPE VALIDATED',
    statusType: 'black',
    title: 'Accident Prevention Smart Car',
    subtitle: 'AUTONOMOUS OBSTACLE COLLISION AVOIDANCE SYSTEM',
    compatibility: 'DUAL MOTOR SHIELD',
    description:
      'Autonomous robotic vehicle prototype featuring multi-directional ultrasonic echo analysis, high-current L298N motor driver PWM calibration, and instantaneous fail-safe emergency braking routines.',
    metrics: [
      { label: 'SENSOR SWEEP', value: '360°' },
      { label: 'EMERGENCY BRAKING', value: '0.08s' },
      { label: 'PWM CALIBRATED', value: '100%', highlight: true },
    ],
    tags: [
      'Arduino Uno',
      'HC-SR04',
      'L298N Driver',
      'Embedded C',
      'PWM Motor Control',
    ],
    footerIndicator: {
      icon: 'build',
      text: 'PWM Calibration 100%',
    },
    actionText: 'SCHEMATICS →',
    schematics: {
      microcontroller: 'ATmega328P @ 16MHz (Arduino Uno Architecture)',
      sensors: ['HC-SR04 Front Rangefinder', 'SG90 Micro Servo (Pan-Tilt Radar)'],
      protocols: ['Direct Timer-based PWM (Pins 9, 10, 11)', 'Analog Read Diagnostics'],
      firmwareLang: 'Embedded C (AVR Toolchain)',
      sampleCode: `// L298N High-Precision Braking Vector
void engageEmergencyBraking(float distanceMm) {
  if (distanceMm < CRITICAL_DISTANCE_MM) {
    // Reverse polarity dampening for 80ms
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    delay(80);
    // Complete hard stop
    analogWrite(ENA, 0);
    analogWrite(ENB, 0);
    triggerCollisionAlarm();
  }
}`,
      pinoutTable: [
        { pin: 'Pin 9 (PWM)', function: 'ENA', note: 'Left Motor PWM speed control' },
        { pin: 'Pin 10 (PWM)', function: 'ENB', note: 'Right Motor PWM speed control' },
        { pin: 'Pin 4, 5', function: 'IN1 / IN2', note: 'Directional bridge polarity' },
        { pin: 'Pin 6, 7', function: 'IN3 / IN4', note: 'Directional bridge polarity' },
      ],
    },
  },
];

export const SKILLS_MATRIX: SkillItem[] = [
  {
    id: 'c-cpp',
    name: 'C & C++',
    subtitle: 'Embedded firmware & low-level system logic',
    iconName: 'code',
    category: 'embedded',
    tools: ['Embedded C', 'C++17', 'Direct Register Access', 'Interrupts', 'Memory Optimization'],
    level: 'Advanced / Core',
  },
  {
    id: 'python-ai',
    name: 'PYTHON & AI',
    subtitle: 'Data science, NumPy, Pandas, Model training',
    iconName: 'smart_toy',
    category: 'ai',
    tools: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch Basics', 'Edge AI Quantization'],
    level: 'Proficient',
  },
  {
    id: 'iot-sensors',
    name: 'IOT & SENSORS',
    subtitle: 'Arduino, ESP32, RFID, Ultrasonic, I2C/SPI',
    iconName: 'developer_board',
    category: 'iot',
    tools: ['ESP32', 'Arduino IDE', 'UART / SPI / I2C', 'FreeRTOS Tasks', 'Sensor Telemetry'],
    level: 'Hardware Tested',
  },
  {
    id: 'js-web',
    name: 'JAVASCRIPT & WEB',
    subtitle: 'HTML5, Tailwind, Modern APIs, Telemetry UI',
    iconName: 'data_object',
    category: 'web',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Real-time WebSockets'],
    level: 'Full-Stack Telemetry',
  },
  {
    id: 'git-workflow',
    name: 'GIT & WORKFLOW ARCHITECTURE',
    subtitle: 'Repository lifecycle, GitHub actions, modular code structure',
    iconName: 'fork_right',
    category: 'workflow',
    tools: ['Git CLI', 'GitHub Actions', 'Branch Strategies', 'Documentation', 'System Testing'],
    level: 'Production Ready',
    colSpan: true,
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'reva-btech',
    type: 'degree',
    title: 'Artificial Intelligence & Data Science',
    issuer: 'REVA University, Bengaluru',
    issuerBadge: 'DEGREE CANDIDATE // B.TECH',
    period: '2023 - 2027',
    status: 'ACTIVE CANDIDATE',
    emphasis: 'Emphasis: Embedded Systems, Machine Learning Foundations & Algorithms',
    skillsAcquired: [
      'Data Structures & Algorithms',
      'Artificial Intelligence Foundations',
      'Embedded Computing & Microcontrollers',
      'Object Oriented Programming',
      'Discrete Mathematics & Linear Algebra',
    ],
  },
  {
    id: 'ibm-cert',
    type: 'certification',
    title: 'Data & AI Fundamentals',
    issuer: 'IBM Official Certification',
    issuerBadge: 'IBM',
    period: 'Verified Credential',
    status: 'VERIFIED',
    verificationId: 'IBM-DAI-2024-9812A',
    skillsAcquired: [
      'Data Analysis Pipelines',
      'AI & Machine Learning Concepts',
      'Model Evaluation & Data Ethics',
      'Cloud AI Workloads',
    ],
  },
  {
    id: 'wf-cert',
    type: 'certification',
    title: 'Business & Entrepreneurship',
    issuer: 'Wadhwani Foundation Course',
    issuerBadge: 'WF',
    period: 'Professional Course',
    status: 'COMPLETED',
    verificationId: 'WF-ENT-7734-IN',
    skillsAcquired: [
      'Product Feasibility & Prototyping',
      'Technical Communication',
      'Engineering Project Leadership',
      'Go-to-Market Strategy',
    ],
  },
];
