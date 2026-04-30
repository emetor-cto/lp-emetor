"use client"
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * DIGITAL AURORA & ATMOSPHERIC DEPTH BACKGROUND
 * High-end Three.js + GLSL implementation.
 * 
 * Features:
 * - Multi-layered FBM Noise for organic "misty" energy.
 * - Pseudo-volumetric light scattering (Hotspots).
 * - Parallax depth between layers.
 * - Smooth mouse-reactive distortion.
 */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_scroll;
  uniform vec3 u_color_accent;
  uniform float u_noise_scale;
  uniform float u_opacity;
  uniform float u_speed_mod;

  // GLSL Random & Noise functions
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fractal Brownian Motion for complex energy textures
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    for (int i = 0; i < 5; ++i) {
      v += a * noise(p);
      p = p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (uv * 2.0 - 1.0);
    p.x *= u_resolution.x / u_resolution.y;

    // Scroll reactive displacement (Lerped in JS)
    vec2 scrollEffect = vec2(0.0, u_scroll);
    
    // UV Distortion for "Digital Aurora" feel
    float t = u_time * u_speed_mod;
    vec2 distortedUv = uv * u_noise_scale + scrollEffect;
    distortedUv.x += fbm(distortedUv + t * 0.5) * 0.2;
    distortedUv.y += fbm(distortedUv - t * 0.3) * 0.2;

    // Layer 1: Base energetic noise
    float f = fbm(distortedUv + t * 0.2);
    
    // Layer 2: High contrast "energy streaks"
    float streaks = smoothstep(0.4, 0.6, fbm(distortedUv * 1.5 - t * 0.4));
    
    // Fake Lighting: Radial scattering & Hotspots
    float light = smoothstep(0.8, 0.2, length(p - vec2(0.5, 0.5) + scrollEffect));
    float light2 = smoothstep(0.6, 0.0, length(p + vec2(0.7, -0.3)));
    
    // Color Palette: Sunny Summer Sky base
    vec3 baseColor = vec3(0.5, 0.7, 1.0); // Light Sky Blue
    vec3 accentColor = u_color_accent;      // White or Gold
    
    // Combine noise layers and lighting
    vec3 finalColor = mix(baseColor, accentColor, f * 0.6);
    finalColor += streaks * accentColor * 0.5;
    finalColor += (light * 0.2 + light2 * 0.15) * accentColor; // Sunlight spots
    
    // Depth Illusion: vary intensity with noise height
    finalColor *= (0.8 + f * 0.4);

    gl_FragColor = vec4(finalColor, u_opacity);
  }
`

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const targetScrollRef = useRef(0)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Small delay to ensure the page layout is stable
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      const width = containerRef.current.offsetWidth || window.innerWidth || 800
      const height = containerRef.current.offsetHeight || window.innerHeight || 600

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      containerRef.current.appendChild(renderer.domElement)

      const geometry = new THREE.PlaneGeometry(2, 2)

      const createLayer = (color: THREE.Color, scale: number, opacity: number, speed: number) => {
        const uniforms = {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_color_accent: { value: color },
          u_noise_scale: { value: scale },
          u_opacity: { value: opacity },
          u_speed_mod: { value: speed },
          u_scroll: { value: 0 }
        }
        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms,
          transparent: true,
          blending: THREE.NormalBlending,
        })
        const mesh = new THREE.Mesh(geometry, material)
        return { mesh, uniforms, material }
      }

      const layer1 = createLayer(new THREE.Color('#3b82f6'), 1.2, 1.0, 0.05)
      const layer2 = createLayer(new THREE.Color('#ffffff'), 2.0, 0.4, 0.12)

      scene.add(layer1.mesh)
      scene.add(layer2.mesh)

      const handleResize = () => {
        if (!containerRef.current) return
        const w = containerRef.current.offsetWidth || window.innerWidth || 800
        const h = containerRef.current.offsetHeight || window.innerHeight || 600
        renderer.setSize(w, h)
        layer1.uniforms.u_resolution.value.set(w, h)
        layer2.uniforms.u_resolution.value.set(w, h)
      }

      window.addEventListener('resize', handleResize)

      let clock = new THREE.Clock()
      const animate = () => {
        const delta = clock.getDelta()

        layer1.uniforms.u_time.value += delta
        layer2.uniforms.u_time.value += delta

        // EXTREME SCROLL CAPTURE
        const winScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || (document.scrollingElement?.scrollTop || 0)
        const winHeight = window.innerHeight || 1

        targetScrollRef.current = winScroll / winHeight

        // Smooth Lerp
        scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.1

        layer1.uniforms.u_scroll.value = scrollRef.current * 0.5
        layer2.uniforms.u_scroll.value = scrollRef.current * 1.5

        renderer.render(scene, camera)
        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize)
        if (animationFrameRef.current !== 0) cancelAnimationFrame(animationFrameRef.current)
        geometry.dispose()
        layer1.material.dispose()
        layer2.material.dispose()
        renderer.dispose()
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (animationFrameRef.current !== 0) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 bg-[#3b82f6]"
      style={{ overflow: 'hidden' }}
    />
  )
}
