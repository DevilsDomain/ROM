import { OrbitControls } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Environment } from '@react-three/drei'

function App() {
  const colorMap = useLoader(TextureLoader, '2k_mars.jpg')

  return (
    <>
    <OrbitControls />
    <Environment files="public/HDR_hazy_nebulae.hdr" background/>
    <directionalLight color="#EF8664" position={[3, 4, 4]} intensity={1} />

    <mesh>
      <sphereGeometry args={[1, 24, 24]}  />
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    </>
  )
}

export default App
