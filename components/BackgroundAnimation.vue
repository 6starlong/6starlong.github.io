<script setup>
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer, animationFrameId, clock
let grid, gridMaterial, starField, glowEffect, meteorSystem
const decorativeObjects = []

// 配置参数
const CONFIG = {
  gridExtent: 1000,
  starCount: 8000,
  maxMeteors: 10,
  decorativeCount: 10,
  fogDensity: 0.0015,
}

// 初始化Three.js场景
function initThree() {
  // 创建场景
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a0e14, 0.001)

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    3000,
  )
  camera.position.set(0, 40, 100)
  camera.lookAt(0, 0, -300)

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x0a0e14, 1)
  container.value.appendChild(renderer.domElement)

  // 初始化时钟
  clock = new THREE.Clock()

  // 创建网格地面
  createGrid()

  // 创建星空背景
  createStarField()

  // 创建光晕效果
  createGlowEffect()

  // 创建流星系统
  createMeteorSystem()

  // 创建装饰性几何体
  createDecorativeObjects()

  // 开始动画循环
  animate()
}

// 创建网格地面
function createGrid() {
  // 创建网格材质
  gridMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      fogColor: { value: new THREE.Color(0x0a0e14) },
      fogDensity: { value: CONFIG.fogDensity },
    },
    vertexShader: `
      varying vec3 vPosition;

      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec2 resolution;
      uniform vec3 fogColor;
      uniform float fogDensity;

      varying vec3 vPosition;

      void main() {
        // 计算网格线
        float cellSize = 50.0;
        vec2 grid = abs(fract(vPosition.xz / cellSize + time * 0.4) - 0.5) / fwidth(vPosition.xz) * cellSize;
        float line = max(1.0 - min(grid.x, 1.0), 1.0 - min(grid.y, 1.0));

        // 根据距离调整亮度
        float dist = length(vPosition.xz);
        float brightness = 1.0 - smoothstep(0.0, 1000.0, dist);

        // 计算颜色
        vec3 lineColor = mix(vec3(0.0, 0.8, 1.0), vec3(1.0, 0.2, 0.8), sin(time * 0.2) * 0.5 + 0.5);
        vec3 color = lineColor * line * brightness;

        // 应用雾效果
        float fogFactor = 1.0 - exp(-fogDensity * dist);
        color = mix(color, fogColor, fogFactor);

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  })

  // 创建网格平面
  const geometry = new THREE.PlaneGeometry(CONFIG.gridExtent * 2, CONFIG.gridExtent * 2, 1, 1)
  geometry.rotateX(-Math.PI / 2)

  grid = new THREE.Mesh(geometry, gridMaterial)
  scene.add(grid)
}

// 创建星空背景
function createStarField() {
  const starGeometry = new THREE.BufferGeometry()
  const starPositions = new Float32Array(CONFIG.starCount * 3)
  const starSizes = new Float32Array(CONFIG.starCount)
  const starColors = new Float32Array(CONFIG.starCount * 3)
  const starBrightness = new Float32Array(CONFIG.starCount)

  for (let i = 0; i < CONFIG.starCount; i++) {
    const i3 = i * 3
    // 使用半球分布算法，限制星星在上半部分
    const theta = 2 * Math.PI * Math.random()
    const phi = Math.acos(Math.random()) // 半球分布
    const r = Math.pow(Math.random(), 0.5) * 2500

    starPositions[i3] = r * Math.sin(phi) * Math.cos(theta)
    starPositions[i3 + 1] = Math.abs(r * Math.cos(phi)) + 50 // 确保星星在地面以上
    starPositions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta)

    // 优化星星大小分布
    starSizes[i] = Math.pow(Math.random(), 1.5) * 2.5 + 0.8
    starBrightness[i] = Math.pow(Math.random(), 0.8)

    // 更丰富的星星颜色分布
    const colorRand = Math.random()
    const color = colorRand > 0.8
      ? new THREE.Color(0x00ffff) // 青色
      : colorRand > 0.6
        ? new THREE.Color(0xff00ff) // 紫色
        : colorRand > 0.3
          ? new THREE.Color(0xffffaa) // 暖白
          : new THREE.Color(0xffffff) // 纯白

    starColors[i3] = color.r
    starColors[i3 + 1] = color.g
    starColors[i3 + 2] = color.b
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
  starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
  starGeometry.setAttribute('brightness', new THREE.BufferAttribute(starBrightness, 1))

  const starMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      attribute float brightness;
      varying vec3 vColor;
      varying float vBrightness;
      uniform float time;

      void main() {
        vColor = color;
        vBrightness = brightness;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float flickerSpeed = position.x * position.y * position.z * 0.0001;
        float flicker = sin(time * (1.0 + flickerSpeed) + flickerSpeed * 100.0) * 0.2 + 0.8;
        gl_PointSize = size * flicker * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vBrightness;

      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        float alpha = (1.0 - smoothstep(0.3, 0.5, dist)) * vBrightness;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  starField = new THREE.Points(starGeometry, starMaterial)
  scene.add(starField)
}

// 创建光晕效果
function createGlowEffect() {
  // 为颜色系统创建随机初始相位
  const phaseOffset1 = Math.random() * Math.PI * 2
  const phaseOffset2 = Math.random() * Math.PI * 2
  const phaseOffset3 = Math.random() * Math.PI * 2
  const phaseOffset4 = Math.random() * Math.PI * 2

  const glowGeometry = new THREE.PlaneGeometry(2000, 2000)
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      phaseOffset1: { value: phaseOffset1 },
      phaseOffset2: { value: phaseOffset2 },
      phaseOffset3: { value: phaseOffset3 },
      phaseOffset4: { value: phaseOffset4 },
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float phaseOffset1;
      uniform float phaseOffset2;
      uniform float phaseOffset3;
      uniform float phaseOffset4;
      varying vec2 vUv;

      // 简单的噪声函数
      float noise(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // 改进的分形噪声函数
      float fbm(vec2 p) {
        float f = 0.0;
        float w = 0.5;
        for (int i = 0; i < 5; i++) {
          f += w * noise(p);
          p *= 2.0;
          w *= 0.5;
        }
        return f;
      }

      // 极光纹理函数
      float auroraPattern(vec2 p, float time) {
        float scale = 8.0;
        float t = time * 0.12;
        float result = 0.0;

        // 多层次的波浪叠加
        result += sin(p.x * scale * 1.0 + t) * 0.5 + 0.5;
        result += sin(p.x * scale * 0.5 + t * 1.1 + 1.0) * 0.25 + 0.25;
        result *= sin(p.x * scale * 0.25 - t * 0.8) * 0.5 + 0.5;

        // 垂直方向的扰动
        float vDisturb = sin(p.x * scale * 0.3 + t * 1.2) * sin(p.y * 2.0);
        result *= smoothstep(0.0, 1.0, vDisturb * 0.5 + 0.5);

        return result;
      }

      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);

        // 创建更自然的径向渐变
        float radialGradient = smoothstep(0.5, 0.12, dist);

        // 更加活跃的脉动效果 - 添加随机相位
        float primaryPulse = (sin(time * 0.23 + phaseOffset1) * 0.5 + 0.5) * 0.18;
        float secondaryPulse = (sin(time * 0.41 + phaseOffset2 + 2.0) * 0.5 + 0.5) * 0.12;
        float tertiaryPulse = (sin(time * 0.11 + phaseOffset3 + 4.0) * 0.5 + 0.5) * 0.08;
        float fastPulse = (sin(time * 0.82 + phaseOffset4 + 1.5) * 0.5 + 0.5) * 0.05;

        // 激活的极光颜色系统 - 保持深沉基础但增加更多变化
        vec3 color1 = vec3(0.04, 0.14, 0.20); // 深青蓝色
        vec3 color2 = vec3(0.06, 0.18, 0.09); // 深青绿色
        vec3 color3 = vec3(0.12, 0.04, 0.20); // 深紫色
        vec3 color4 = vec3(0.16, 0.06, 0.02); // 深红橙色
        vec3 color5 = vec3(0.02, 0.15, 0.15); // 深青色
        vec3 color6 = vec3(0.15, 0.12, 0.02); // 深金色

        // 非线性颜色混合 - 更加活跃的变化 - 添加随机相位
        float t1 = sin(time * 0.13 + phaseOffset1) * 0.5 + 0.5;
        float t2 = sin(time * 0.19 + phaseOffset2 + 1.5) * 0.5 + 0.5;
        float t3 = sin(time * 0.09 + phaseOffset3 + 3.0) * 0.5 + 0.5;
        float t4 = sin(time * 0.15 + phaseOffset4 + 5.0) * 0.5 + 0.5;

        // 更复杂的颜色混合系统
        vec3 colorMix1 = mix(color1, color2, smoothstep(0.0, 1.0, t1));
        vec3 colorMix2 = mix(color3, color4, smoothstep(0.0, 1.0, t2));
        vec3 colorMix3 = mix(color5, color6, smoothstep(0.0, 1.0, t3));

        vec3 colorA = mix(colorMix1, colorMix2, smoothstep(0.2, 0.8, t2));
        vec3 colorB = mix(colorMix2, colorMix3, smoothstep(0.3, 0.7, t3));
        vec3 baseColor = mix(colorA, colorB, smoothstep(0.1, 0.9, t4));

        // 增强的分形噪声
        float noiseScale = 5.0 + sin(time * 0.2 + phaseOffset1) * 1.0;
        float noiseVal = fbm(center * noiseScale + time * 0.05);
        float noiseDetail = fbm(center * 12.0 - time * 0.03) * 0.3;
        noiseVal = noiseVal * 0.7 + noiseDetail;

        // 极光纹理
        float aurora = auroraPattern(center + vec2(0.0, time * 0.05), time + phaseOffset2);

        // 更复杂的颜色层次化
        vec3 color = baseColor;

        // 增加高光区域
        float highlights = smoothstep(0.5, 0.8, noiseVal) * (0.2 + primaryPulse * 0.3);
        color += vec3(0.08, 0.15, 0.1) * highlights * radialGradient;

        // 极光幕布效果
        float curtain = aurora * smoothstep(0.3, 0.0, dist);
        color += vec3(0.07, 0.1, 0.03) * curtain * (0.8 + fastPulse);

        // 颜色强化
        color = mix(color, color * 1.2, noiseVal * (0.4 + tertiaryPulse));

        // 计算透明度
        float alpha = radialGradient * (0.1 + primaryPulse + secondaryPulse + tertiaryPulse + fastPulse * 0.8);

        // 边缘处理
        alpha *= smoothstep(1.0, 0.5, dist);

        // 增加边缘的噪声变化
        alpha *= 0.7 + noiseVal * 0.4 + aurora * 0.2;

        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  glowEffect = new THREE.Mesh(glowGeometry, glowMaterial)
  glowEffect.position.y = 50
  glowEffect.rotation.x = -Math.PI / 2 - 0.06

  scene.add(glowEffect)
}

// 创建流星系统
function createMeteorSystem() {
  meteorSystem = {
    meteors: [],
    lastMeteorTime: 0,
    meteorCycle: 0,

    // 创建新流星
    createMeteor() {
      // 随机生成流星
      const angle = Math.random() * Math.PI * 2
      const distance = 300 + Math.random() * 500
      const height = 100 + Math.random() * 300

      // 起始位置 - 在相机前方上方的半球
      const startX = Math.sin(angle) * distance
      const startY = height
      const startZ = Math.cos(angle) * distance - 300 // 前方偏移

      // 流星长度和方向
      const length = 20 + Math.random() * 100
      const dirX = Math.random() * 0.6 - 0.3
      const dirY = -0.7 - Math.random() * 0.3 // 向下的方向
      const dirZ = Math.random() * 0.6 - 0.3

      // 创建流星几何体 - 使用多点线段创建更自然的尾迹
      const points = []
      const segmentCount = 12 // 增加线段数量创建更平滑的尾迹

      for (let i = 0; i <= segmentCount; i++) {
        const t = i / segmentCount
        points.push(new THREE.Vector3(
          startX - dirX * length * t,
          startY - dirY * length * t,
          startZ - dirZ * length * t,
        ))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      // 为每个顶点添加自定义属性控制渐变
      const alphaValues = new Float32Array(segmentCount + 1)
      for (let i = 0; i <= segmentCount; i++) {
        // 流星头部较亮，尾部渐暗
        alphaValues[i] = 1 - (i / segmentCount) * 0.9
      }
      geometry.setAttribute('alpha', new THREE.BufferAttribute(alphaValues, 1))

      // 创建自定义着色器材质
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(getRandomMeteorColor()) },
          time: { value: 0.0 },
          globalOpacity: { value: 1.0 },
        },
        vertexShader: `
          attribute float alpha;
          varying float vAlpha;
          varying vec2 vUv;

          void main() {
            vAlpha = alpha;
            vUv = position.xy * 0.01;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float globalOpacity;
          uniform float time;
          varying float vAlpha;
          varying vec2 vUv;

          // 扰动函数
          float noise(vec2 p) {
            return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            // 尾迹渐变核心
            float coreGlow = smoothstep(0.0, 0.4, vAlpha) * vAlpha * 2.0;

            // 增加随机扰动效果，模拟大气阻力和微小颗粒
            float distortion = noise(vUv + time * 0.1) * 0.08;

            // 创建更复杂的发光效果
            vec3 baseGlow = mix(color, vec3(1.0), 0.4);

            // 添加颜色渐变 - 头部偏白，尾部保持原色
            vec3 finalColor = mix(baseGlow, vec3(1.0, 0.95, 0.85), coreGlow * 0.7);

            // 添加轻微的蓝色/青色边缘，模拟热效应
            finalColor += vec3(0.0, 0.2, 0.5) * (1.0 - vAlpha) * 0.2;

            // 计算最终不透明度，包含扰动效果
            float opacity = vAlpha * globalOpacity * (1.0 + distortion);

            // 增强尾迹边缘发光感
            float edgeGlow = smoothstep(0.4, 0.0, vAlpha) * 0.3;
            opacity += edgeGlow * globalOpacity;

            gl_FragColor = vec4(finalColor, opacity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      // 创建线条
      const meteor = new THREE.Line(geometry, material)

      // 添加流星属性
      meteor.userData = {
        velocity: new THREE.Vector3(dirX * 1.2, dirY * 1.2, dirZ * 1.2),
        speed: 1.0 + Math.random() * 2.0,
        life: 1.0,
        decay: 0.002 + Math.random() * 0.005, // 降低衰减率，延长流星可见距离
        flickerRate: 0.2 + Math.random() * 0.3,
      }

      scene.add(meteor)
      this.meteors.push(meteor)

      return meteor
    },

    // 更新所有流星
    update() {
      const time = clock.getElapsedTime()

      // 更智能的流星生成逻辑
      this.updateMeteorGeneration(time)

      // 更新现有流星
      for (let i = this.meteors.length - 1; i >= 0; i--) {
        const meteor = this.meteors[i]

        // 移动流星
        meteor.position.x += meteor.userData.velocity.x * meteor.userData.speed
        meteor.position.y += meteor.userData.velocity.y * meteor.userData.speed
        meteor.position.z += meteor.userData.velocity.z * meteor.userData.speed

        // 减少生命值
        meteor.userData.life -= meteor.userData.decay

        // 添加轻微的闪烁效果
        const flicker = Math.sin(time * 5 * meteor.userData.flickerRate) * 0.1 + 0.9

        // 更新流星淡出效果
        meteor.material.uniforms.globalOpacity.value = meteor.userData.life * flicker

        // 如果生命值耗尽，移除流星
        if (meteor.userData.life <= 0) {
          scene.remove(meteor)
          meteor.geometry.dispose()
          meteor.material.dispose()
          this.meteors.splice(i, 1)
        }
      }
    },

    // 智能流星生成系统
    updateMeteorGeneration(time) {
      // 计算自上次生成流星以来的时间
      const timeSinceLastMeteor = time - this.lastMeteorTime

      // 流星雨周期 - 创建周期性的流星密度变化
      this.meteorCycle = (Math.sin(time * 0.05) * 0.5 + 0.5)

      // 基础概率 - 每帧0.005-0.015的概率
      let baseProbability = 0.005 + this.meteorCycle * 0.01

      // 最小保证 - 如果超过5秒没有流星，增加生成概率
      if (timeSinceLastMeteor > 5) {
        baseProbability += (timeSinceLastMeteor - 5) * 0.01 // 每秒增加1%概率
      }

      // 最大数量限制
      if (this.meteors.length >= CONFIG.maxMeteors) {
        baseProbability = 0
      } else if (this.meteors.length > CONFIG.maxMeteors * 0.7) {
        // 如果流星已经较多，降低生成概率
        baseProbability *= 0.5
      }

      // 偶尔的流星雨事件 (约每60-120秒一次)
      const meteorShowerEvent = Math.sin(time * 0.01) > 0.95
      if (meteorShowerEvent && this.meteors.length < CONFIG.maxMeteors * 0.8) {
        baseProbability *= 3 // 流星雨期间大幅提高概率
      }

      // 基于最终概率生成流星
      if (Math.random() < baseProbability) {
        this.createMeteor()
        this.lastMeteorTime = time
      }
    },
  }
}

// 获取随机流星颜色
function getRandomMeteorColor() {
  const colors = [
    0xffffff, // 白色
    0xccf2ff, // 淡蓝色
    0xffffcc, // 淡黄色
    0xffddbb, // 淡橙色
    0xddddff, // 淡紫色
  ]

  // 颜色选择偏向白色（更自然）
  const rand = Math.random()
  if (rand < 0.6) {
    return colors[0] // 60%概率为白色
  } else {
    return colors[Math.floor(Math.random() * colors.length)] // 其他颜色
  }
}

// 创建装饰性几何体
function createDecorativeObjects() {
  const shapes = [
    new THREE.TetrahedronGeometry(3),
    new THREE.OctahedronGeometry(3),
    new THREE.IcosahedronGeometry(3),
  ]

  // 分布配置
  const distributions = [
    { prob: 0.25, distance: [100, 200], size: [2.2, 3.2] }, // 近景
    { prob: 0.65, distance: [150, 290], size: [1.8, 2.6] }, // 中景
    { prob: 1.0, distance: [250, 430], size: [1.4, 2.2] }, // 远景
  ]

  for (let i = 0; i < CONFIG.decorativeCount; i++) {
    const rand = Math.random()
    const dist = distributions.find(d => rand < d.prob)

    // 随机参数
    const distance = dist.distance[0] + Math.random() * (dist.distance[1] - dist.distance[0])
    const size = dist.size[0] + Math.random() * (dist.size[1] - dist.size[0])
    const angle = Math.random() * Math.PI * 2

    // 位置计算
    const x = Math.sin(angle) * distance
    const y = Math.random() * 180 - 20 // -20到180，覆盖相机视野的上下范围
    const z = Math.cos(angle) * distance - 80

    // 几何体和材质
    const baseGeometry = shapes[Math.floor(Math.random() * shapes.length)]
    const geometry = baseGeometry.clone().scale(size, size, size)

    const distanceFromCamera = Math.sqrt(x * x + (z + 100) * (z + 100))
    const opacity = Math.max(0.3, 1 - distanceFromCamera / 500) * (0.4 + Math.random() * 0.4)

    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
      wireframe: true,
      transparent: true,
      opacity,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x, y, z)
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

    // 运动参数
    mesh.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      },
      initialPosition: mesh.position.clone(),
      floatOffset: Math.random() * Math.PI * 2,
      floatAmplitude: {
        x: Math.random() * 8 + 2,
        y: Math.random() * 6 + 1,
        z: Math.random() * 8 + 2,
      },
      driftFreq: {
        x: Math.random() * 0.3 + 0.2,
        y: Math.random() * 0.4 + 0.3,
        z: Math.random() * 0.25 + 0.15,
      },
    }

    decorativeObjects.push(mesh)
    scene.add(mesh)
  }
}

// 更新场景
function updateScene() {
  const time = clock.getElapsedTime()

  // 更新所有材质的time uniform
  const materials = [gridMaterial, starField?.material, glowEffect?.material]
  materials.forEach(mat => mat && (mat.uniforms.time.value = time))

  // 更新流星系统
  meteorSystem?.update()

  // 更新装饰性几何体
  decorativeObjects.forEach((obj) => {
    const { rotationSpeed, initialPosition, floatOffset, floatAmplitude, driftFreq } = obj.userData
    const timeOffset = time + floatOffset

    // 旋转
    obj.rotation.x += rotationSpeed.x
    obj.rotation.y += rotationSpeed.y
    obj.rotation.z += rotationSpeed.z

    // 三维漂浮运动
    obj.position.x = initialPosition.x + Math.sin(timeOffset * driftFreq.x) * floatAmplitude.x
    obj.position.y = initialPosition.y + Math.sin(timeOffset * driftFreq.y) * floatAmplitude.y
    obj.position.z = initialPosition.z + Math.cos(timeOffset * driftFreq.z) * floatAmplitude.z
  })

  // 相机运动
  camera.position.y = 40 + Math.sin(time * 0.3) * 3
  camera.position.x = Math.sin(time * 0.1) * 15
  camera.position.z = 100 + Math.cos(time * 0.07) * 10
}

// 动画循环
function animate() {
  animationFrameId = requestAnimationFrame(animate)
  updateScene()
  renderer.render(scene, camera)
}

// 窗口大小调整处理
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  gridMaterial?.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)

  // 清理资源
  const cleanupMesh = (mesh, material) => {
    if (mesh) {
      scene.remove(mesh)
      mesh.geometry.dispose()
      if (material) material.dispose()
    }
  }

  cleanupMesh(grid, gridMaterial)
  cleanupMesh(starField, starField?.material)
  cleanupMesh(glowEffect, glowEffect?.material)

  meteorSystem?.meteors.forEach((meteor) => {
    cleanupMesh(meteor, meteor.material)
  })

  decorativeObjects.forEach((obj) => {
    cleanupMesh(obj, obj.material)
  })

  if (renderer) {
    renderer.dispose()
    container.value.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="background-animation" />
</template>

<style scoped>
.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
</style>
