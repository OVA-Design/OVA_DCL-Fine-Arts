import {
  Entity,
  engine,
  Transform,
  TransformType,
  GltfContainer
} from '@dcl/sdk/ecs'

// import glft factory
export function createGLTF(transform: Partial<TransformType>, src: string): Entity {
  const meshEntity = engine.addEntity()
  Transform.create(meshEntity, transform)

  // set gltf
  GltfContainer.create(meshEntity, { src })

  return meshEntity
}

