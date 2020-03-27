// http://stackoverflow.com/a/34060479/6512315
export default function pointRotate3d(
    x, y, z,
    thetaX = 0,
    thetaY = 0,
    thetaZ = 0
) {
    const thetaXx = Math.cos( thetaZ ) * Math.cos( thetaY )
    const thetaXy = Math.cos( thetaZ ) * Math.sin( thetaY ) * Math.sin( thetaX ) - Math.sin( thetaZ ) * Math.cos( thetaX )
    const thetaXz = Math.cos( thetaZ ) * Math.sin( thetaY ) * Math.cos( thetaX ) + Math.sin( thetaZ ) * Math.sin( thetaX )
    const thetaYx = Math.sin( thetaZ ) * Math.cos( thetaY )
    const thetaYy = Math.sin( thetaZ ) * Math.sin( thetaY ) * Math.sin( thetaX ) + Math.cos( thetaZ ) * Math.cos( thetaX )
    const thetaYz = Math.sin( thetaZ ) * Math.sin( thetaY ) * Math.cos( thetaX ) - Math.cos( thetaZ ) * Math.sin( thetaX )
    const thetaZx = -Math.sin( thetaY )
    const thetaZy = Math.cos( thetaY ) * Math.sin( thetaX )
    const thetaZz = Math.cos( thetaY ) * Math.cos( thetaX )

    return {
      x: thetaXx * x + thetaXy * y + thetaXz * z,
      y: thetaYx * x + thetaYy * y + thetaYz * z,
      z: thetaZx * x + thetaZy * y + thetaZz * z
    }
  }