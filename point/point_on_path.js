import { distance2d, lerp2d } from '../math'

export default function ( points, alpha ) {

  // At zero alpha return the first point
  if ( alpha === 0 ) return { x: points[ 0 ].x, y: points[ 0 ].y }

  // Calculate total length
  let totalLength = 0

  for ( let i = 0, len = points.length - 1; i < len; i++ ) {
    totalLength += distance2d( points[ i ].x, points[ i ].y, points[ i + 1 ].x, points[ i + 1 ].y )
  }

  // Find closest point at alpha
  let prevPosition = 0
  let position = 0
  let length = 0
  let closestIndex = 0

  for ( let i = 0, len = points.length - 1; i < len; i++ ) {

    length += distance2d( points[ i ].x, points[ i ].y, points[ i + 1 ].x, points[ i + 1 ].y )
    position = length / totalLength

    if ( length / totalLength >= alpha ) {
      closestIndex = i
      break
    }
    else prevPosition = position
  }

  // Calculate point coordinates at alpha
  const lerpAlpha = 1 - ( position - alpha ) / ( position - prevPosition )
  let point = lerp2d( points[ closestIndex ], points[ closestIndex + 1 ], lerpAlpha )

  return point
}
