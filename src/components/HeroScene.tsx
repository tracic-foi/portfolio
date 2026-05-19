import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTheme } from '../theme/ThemeContext'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
varying vec2 vUv;

// Classic 2D noise
vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash(i + vec2(0,0)), f - vec2(0,0)),
                 dot(hash(i + vec2(1,0)), f - vec2(1,0)), u.x),
             mix(dot(hash(i + vec2(0,1)), f - vec2(0,1)),
                 dot(hash(i + vec2(1,1)), f - vec2(1,1)), u.x), u.y);
}

void main() {
  vec2 uv = vUv;

  // Mouse distortion
  float mouseDist = length(uv - uMouse * 0.5 - 0.5);
  float mouseWave = 0.015 * sin(mouseDist * 20.0 - uTime * 2.0) * (1.0 - smoothstep(0.0, 0.4, mouseDist));
  uv += mouseWave;

  // Layered noise
  float n = 0.0;
  n += 0.50 * noise(uv * 2.0 + uTime * 0.08);
  n += 0.25 * noise(uv * 4.0 - uTime * 0.12);
  n += 0.12 * noise(uv * 8.0 + uTime * 0.05);
  n = n * 0.5 + 0.5;

  // Directional gradient (stronger top-right)
  float grad = 1.0 - length(uv - vec2(0.85, 0.2)) * 0.7;
  grad = clamp(grad, 0.0, 1.0);

  // Mix three colours
  vec3 col = mix(uColor3, uColor1, n * grad);
  col = mix(col, uColor2, smoothstep(0.4, 0.7, n) * 0.5 * grad);

  // Vignette
  float vignette = 1.0 - smoothstep(0.4, 1.2, length(uv - 0.5) * 1.5);
  col *= vignette;

  gl_FragColor = vec4(col, 0.85 * grad * vignette);
}
`

function ShaderPlane({ isDark }: { isDark: boolean }) {
  const mesh = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const mouse = useRef(new THREE.Vector2(0, 0))

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: mouse.current },
    uColor1: { value: new THREE.Color(isDark ? '#64ffda' : '#0891b2') },
    uColor2: { value: new THREE.Color(isDark ? '#a78bfa' : '#7c3aed') },
    uColor3: { value: new THREE.Color(isDark ? '#0a192f' : '#f0f9ff') },
  })

  // Update colors when theme changes
  uniforms.current.uColor1.value.set(isDark ? '#64ffda' : '#0891b2')
  uniforms.current.uColor2.value.set(isDark ? '#a78bfa' : '#7c3aed')
  uniforms.current.uColor3.value.set(isDark ? '#0a192f' : '#f0f9ff')

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime
    const p = state.pointer
    mouse.current.x += (p.x - mouse.current.x) * 0.04
    mouse.current.y += (p.y - mouse.current.y) * 0.04
    uniforms.current.uMouse.value.copy(mouse.current)
  })

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function HeroScene() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <ShaderPlane isDark={isDark} />
    </Canvas>
  )
}
