import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Hero3D - raw Three.js scene inside a React component.
 * - Creates a wireframe geometry with subtle neon edges and slow rotation.
 * - Adds mouse parallax by adjusting camera target.
 * - Clean-up implemented on unmount.
 *
 * Tweak notes (inside this file):
 * - Change geometry to SphereGeometry / TorusKnotGeometry for other looks.
 * - Adjust edge glow by changing line material opacity / color.
 */

export default function Hero3D(){
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    if(!mountRef.current) return
    const container = mountRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    // dark gradient simulated by scene background color
    scene.background = new THREE.Color(0x050506)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)

    // lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, 0.6)
    dir.position.set(5,5,5)
    scene.add(dir)

    // geometry - wireframe + edge glow
    const geom = new THREE.IcosahedronGeometry(1.8, 3)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0b0b0b,
      metalness: 0.6,
      roughness: 0.2,
      side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(geom, mat)
    scene.add(mesh)

    // edges (neon-like)
    const edges = new THREE.EdgesGeometry(geom)
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xecf0f3, transparent: true, opacity: 0.9 }))
    scene.add(line)

    // subtle secondary ring
    const ringGeom = new THREE.TorusKnotGeometry(2.6, 0.02, 200, 32)
    const ring = new THREE.LineSegments(new THREE.WireframeGeometry(ringGeom), new THREE.LineBasicMaterial({ color: 0x2f3436, transparent: true, opacity: 0.06 }))
    scene.add(ring)

    // responsive handling
    function onResize(){
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    let mouseX = 0
    let mouseY = 0
    function onMouseMove(e: MouseEvent){
      const rect = container.getBoundingClientRect()
      mouseX = ( (e.clientX - rect.left) / rect.width - 0.5 ) * 2
      mouseY = ( (e.clientY - rect.top) / rect.height - 0.5 ) * -2
    }

    window.addEventListener('resize', onResize)
    container.addEventListener('mousemove', onMouseMove)

    let frameId: number
    const ease = (a:number, b:number, n=0.05) => a + (b - a) * n

    function animate(){
      // gentle rotation
      mesh.rotation.x += 0.004
      mesh.rotation.y += 0.006
      line.rotation.x = mesh.rotation.x
      line.rotation.y = mesh.rotation.y

      // parallax camera movement
      camera.position.x = ease(camera.position.x, mouseX * 1.2, 0.08)
      camera.position.y = ease(camera.position.y, mouseY * 0.8, 0.08)
      camera.lookAt(scene.position)

      // subtle ring rotate
      ring.rotation.y += 0.0015

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    // cleanup
    return ()=>{
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} className="w-full h-full rounded-xl overflow-hidden relative" style={{filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.6))'}}>
      {/* A tiny overlay to add glow using CSS blur for edges */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
    </div>
  )
}
