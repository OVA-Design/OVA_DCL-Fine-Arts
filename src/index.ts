// We define the empty imports so the auto-complete feature works as expected.
import { Color3, Quaternion, Vector3 } from '@dcl/sdk/math'
import {
  Animator,
  AudioSource,
  AvatarAttach,
  Billboard,
  BillboardMode,
  CameraModeArea,
  CameraType,
  Font,
  GltfContainer,
  Material,
  MeshRenderer,
  TextShape,
  Transform,
  VisibilityComponent,
  engine,
  pointerEventsSystem
} from '@dcl/sdk/ecs'
import { createGLTF, createImage, createText } from './factory'

export function main() {
  // import exterior model
  createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/exterior.glb')
  // import interior model
  createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/interior.glb')
  // first-person Camera modifiers
  const CameraModeAreaEntity = engine.addEntity()
  CameraModeArea.create(CameraModeAreaEntity, {
    area: Vector3.create(32, 3, 16),
    mode: CameraType.CT_FIRST_PERSON
  })
  Transform.create(CameraModeAreaEntity, {
    position: Vector3.create(16, 0, 8)
  })

  // add text shapes for gallery description
  const signBig = engine.addEntity()
  Transform.create(signBig, {
    position: Vector3.create(9, 0.85, 7.98),
    rotation: Quaternion.fromEulerDegrees(0, 0, 90)
  })
  TextShape.createOrReplace(signBig, {
    text: 'Fine Arts\nCurated by\nOVA.design',
    textColor: { r: 0, g: 0, b: 1, a: 0.8 },
    fontSize: 5,
    font: Font.F_MONOSPACE,
    textAlign: 3,
    lineSpacing: -20,
    shadowBlur: 0.2,
    shadowColor: { r: 1, g: 1, b: 1 },
    shadowOffsetY: -1,
    shadowOffsetX: 1
  })
  const signBig2 = engine.addEntity()
  Transform.create(signBig2, {
    position: Vector3.create(23, 0.85, 8.02),
    rotation: Quaternion.fromEulerDegrees(0, 180, 90)
  })
  TextShape.createOrReplace(signBig2, {
    text: 'Fine Arts\nCurated by\nOVA.design',
    textColor: { r: 0, g: 0, b: 1, a: 0.8 },
    fontSize: 5,
    font: Font.F_MONOSPACE,
    textAlign: 3,
    lineSpacing: -20,
    shadowBlur: 0.2,
    shadowColor: { r: 1, g: 1, b: 1 },
    shadowOffsetY: -1,
    shadowOffsetX: 1
  })

  ////// Fine Arts
  //// import art 1
  const TableauBox = createGLTF(
    { position: { x: 12.6, y: 0.5, z: 12.5 }, scale: { x: 0.75, y: 0.75, z: 0.75 } },
    'models/TableauBox.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(11.5, 1.9, 8.7),
      scale: { x: 1, y: 1.03, z: 0.05 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Tableau_I_by_Piet_Mondriaan.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(15, 1, 1.65), rotation: Quaternion.fromEulerDegrees(0, 180, 0) },
    "Mona Lisa by Da Vinci\nThe Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, and the most parodied work of art in the world'. The painting's novel qualities include the subject's enigmatic expression, monumentality of the composition, the subtle modeling of forms, and the atmospheric illusionism."
  )

  //// import art 2
  const WaveofKanagawa = createGLTF(
    { position: { x: 21, y: 1, z: 2 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },
    'models/WaveofKanagawa.glb'
  )
  // Billboard.create(WaveofKanagawa, { billboardMode: BillboardMode.BM_Y })
  //import painting image
  createImage(
    {
      position: Vector3.create(20.5, 1.78, 7.3),
      scale: { x: 1.488 / 3.9, y: 1.01 / 3.9, z: 0.001 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Tsunami_by_hokusai.jpg'
  )

  //// import art 3
  //import 3d asset
  const BustofNefertiti = createGLTF(
    { position: { x: 27, y: 1.38, z: 2 }, scale: { x: 1, y: 1, z: 1 } },
    'models/BustofNefertiti.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(30.25, 1.75, 6.5375),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-1.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 1.75, 6.5375-1.375),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-2.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 1.75, 3.1+0.6875),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-3.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 1.75, 3.1-0.6875),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-4.jpg'
  )

  //// import art 4
  //import 3d asset
  const MonaLisa = createGLTF(
    {
      position: { x: 12.7, y: 0.4, z: 7.2 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'models/MonaLisa.glb'
  )
  // Billboard.create(MonaLisa, { billboardMode: BillboardMode.BM_Y })
  //import painting image
  createImage(
    {
      position: Vector3.create(12.625, 1.6, 1.72),
      scale: { x: 1 / 1.85, y: 1.492 / 1.85, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Mona_Lisa%2C_by_Leonardo_da_Vinci.jpg'
  )

  //// import art 5
  const Convergence = createGLTF(
    { position: { x: 20, y: 0, z: 9 }, scale: { x: 1.5, y: 1.3, z: 1.5 } },
    'models/Convergence.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(18.5, 2, 14.35),
      scale: { x: 1.646 * 2.4, y: 1 * 2.4, z: 0.08 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Convergence_AI.png'
  )

  //// import art 6
  const SunriseImpression = createGLTF(
    {
      position: { x: 2, y: 0.75, z: 5 },
      scale: { x: 1.3, y: 1.3, z: 1.3 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'models/SunriseImpression.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(4.5, 1.7, 1.72),
      scale: { x: 1.29 / 1.85, y: 1 / 1.85, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Monet_Impression_Sunrise.jpg'
  )

  //// import art 7
  const LaDance = createGLTF(
    {
      position: { x: 28.5, y: 0.1, z: 10.5 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: Quaternion.fromEulerDegrees(0, 270, 0)
    },
    'models/LaDance.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(27.5, 2.1, 14.35),
      scale: { x: 1.504 * 2.7, y: 1 * 2.7, z: 0.08 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/henri-matisse-dance-painting.jpg'
  )

  //// import art 8
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
