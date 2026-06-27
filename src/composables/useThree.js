import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export function useThree(containerId) {
    const scene = ref(null)
    const camera = ref(null)
    const renderer = ref(null)
    const particles = ref(null)

    const init = () => {
        const container = document.getElementById(containerId)
        if (!container) return

        scene.value = new THREE.Scene()
        camera.value = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.value.position.z = 25

        renderer.value = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        })
        renderer.value.setSize(window.innerWidth, window.innerHeight)
        renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        container.appendChild(renderer.value.domElement)

        // Create particles
        const particlesGeo = new THREE.BufferGeometry()
        const count = 1800
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 80
            positions[i+1] = (Math.random() - 0.5) * 80
            positions[i+2] = (Math.random() - 0.5) * 80
            colors[i] = 0.2 + 0.3 * Math.random()
            colors[i+1] = 0.4 + 0.5 * Math.random()
            colors[i+2] = 0.8 + 0.2 * Math.random()
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particleMat = new THREE.PointsMaterial({
            size: 0.18,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
        })

        particles.value = new THREE.Points(particlesGeo, particleMat)
        scene.value.add(particles.value)

        animate()
        handleResize()
    }

    const animate = () => {
        if (!particles.value || !renderer.value || !scene.value || !camera.value) return
        requestAnimationFrame(animate)
        particles.value.rotation.x += 0.00015
        particles.value.rotation.y += 0.0003
        renderer.value.render(scene.value, camera.value)
    }

    const handleResize = () => {
        window.addEventListener('resize', () => {
            if (!camera.value || !renderer.value) return
            camera.value.aspect = window.innerWidth / window.innerHeight
            camera.value.updateProjectionMatrix()
            renderer.value.setSize(window.innerWidth, window.innerHeight)
        })
    }

    const cleanup = () => {
        if (renderer.value) {
            renderer.value.dispose()
        }
    }

    onMounted(() => init())
    onUnmounted(() => cleanup())

    return { scene, camera, renderer, particles }
}