// We define the empty imports so the auto-complete feature works as expected.
import { Color3, Quaternion, Vector3 } from '@dcl/sdk/math'
import {
  Animator,
  AudioSource,
  AvatarAttach,
  Billboard,
  BillboardMode,
  GltfContainer,
  Material,
  MeshRenderer,
  Transform,
  VisibilityComponent,
  engine,
  pointerEventsSystem
} from '@dcl/sdk/ecs'
import { createGLTF } from './factory'

// You can remove this if you don't use any asset packs
// initAssetPacks(engine, pointerEventsSystem, {
//   Animator,
//   AudioSource,
//   AvatarAttach,
//   Transform,
//   VisibilityComponent,
//   GltfContainer
// })

export function main() {
  // import exterior model
  createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/exterior.glb')
  // import interior model
  createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/interior.glb')
  // createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/OutterExterior.glb')

  // import art 1
  // billboard face the player
  const TableauBox = createGLTF(
    { position: { x: 12.6, y: 0.5, z: 12.5 }, scale: { x: 0.75, y: 0.75, z: 0.75 } },
    'models/TableauBox.glb'
  )
  // Billboard.create(TableauBox, { billboardMode: BillboardMode.BM_Y })

  // import art 2
  const WaveofKanagawa = createGLTF(
    { position: { x: 21, y: 1, z: 2 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },
    'models/WaveofKanagawa.glb'
  )
  // Billboard.create(WaveofKanagawa, { billboardMode: BillboardMode.BM_Y })

  // import art 3
  const BustofNefertiti = createGLTF(
    { position: { x: 27, y: 1.38, z: 2 }, scale: { x: 1, y: 1, z: 1 } },
    'models/BustofNefertiti.glb'
  )
  // //import painting image
  // const PaintingEntity = engine.addEntity()
  // Transform.create(PaintingEntity, {
  //   position: Vector3.create(30.25, 1.7, 4.5),
  //   scale: { x: 5.5, y: 0.4, z: 2 },
  //   rotation: Quaternion.fromEulerDegrees(0, 90, 0)
  // })
  // MeshRenderer.setPlane(PaintingEntity)
  // Material.setBasicMaterial(PaintingEntity, {
  //   texture: Material.Texture.Common({
  //     src: 'images/Papyrus-Hunefer-half.jpg'
  //   })
  // })
  // Billboard.create(BustofNefertiti, { billboardMode: BillboardMode.BM_Y })

  // import art 4
  const MonaLisa = createGLTF(
    { position: { x: 13, y: 0.4, z: 7 }, scale: { x: 0.5, y: 0.5, z: 0.5 }, rotation: Quaternion.fromEulerDegrees(0, 180, 0) },
    'models/MonaLisa.glb'
  )
    // Billboard.create(MonaLisa, { billboardMode: BillboardMode.BM_Y })


  // import art 5
  const Convergence = createGLTF(
    { position: { x: 20, y: 0, z: 9 }, scale: { x: 1.5, y: 1.5, z: 1.5 } },
    'models/Convergence.glb'
  )

  // import art 6
  const SunriseImpression = createGLTF(
    { position: { x: 2, y: 0.75, z: 5 }, scale: { x: 1.3, y: 1.3, z: 1.3 }, rotation: Quaternion.fromEulerDegrees(0, 90, 0) },
    'models/SunriseImpression.glb'
  )

  // import art 7
  const LaDance = createGLTF(
    { position: { x: 28.5, y: 0, z: 10.5 }, scale: { x: 1, y: 1, z: 1 }, rotation: Quaternion.fromEulerDegrees(0, 270, 0) },
    'models/LaDance.glb'
  )

  // import art 8
  const CampbellSoupCans = createGLTF(
    { position: { x: 5, y: 0, z: 9 }, scale: { x: 2, y: 2, z: 2 } },
    'models/CampbellSoupCans.glb'
  )

  // Defining behavior. See `src/systems.ts` file.
  // engine.addSystem(circularSystem)
  // engine.addSystem(changeColorSystem)

  // draw UI. Here is the logic to spawn cubes.
  // setupUi()
}
