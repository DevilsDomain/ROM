import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <>
    <OrbitControls />
    <mesh>
      <boxGeometry args={ [2,2,2] } />
      <meshBasicMaterial color={"pink"}/>
    </mesh>
    </>
  )
}

export default App
