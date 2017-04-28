/*
    Adapted from Thomas Hooper's version:
    Copyright (c) 2017 Thomas Hooper - MIT License
    https://github.com/tdhooper/threejs-slice-geometry

    Slice geometry along a plane

    Note: Operates on THREE.Geometry, not THREE.BufferGeometry.
          Conversion between Geometry and BufferGeometry is possible using
          Geometry.fromBufferGeometry() and BufferGeometry.fromGeometry().
    ---

    geom          THREE.Geometry      Geometry to slice
    plane         THREE.Plane         Plane to slice with

    ---
    Returns       THREE.Geometry      Sliced geometry

*/

import { Geometry, Face3, Line3 } from 'three';

const FRONT = 'front';
const BACK = 'back';
const STRADDLE = 'straddle';
const ON = 'on';

export default function(geom, plane) {
    var sliced = new Geometry();
    var points;
    var position;
    geom.faces.forEach(function(face, faceIndex) {
        points = facePoints(geom, face, faceIndex);
        position = facePosition(plane, points);
        if (position == FRONT || position == ON) {
            addFace(sliced, points);
        } else if (position == STRADDLE) {
            sliceFace(plane, sliced, points);
        }
    });
    return sliced;
}

function sliceFace(plane, geom, points) {
    var i;
    var len = points.length;
    var p1;
    var p2;
    var intersection;
    var position1;
    var position2;
    var slicePoints = [];

    for (i = 0; i < len; i++) {
        p1 = points[i];
        p2 = i + 1 < len ? points[i + 1] : points[0];
        intersection = intersectPlane(p1, p2, plane);
        position1 = vertexPosition(plane, p1.vertex);
        position2 = vertexPosition(plane, p2.vertex);
        if (position1 == FRONT && slicePoints.indexOf(p1) === -1) {
            slicePoints.push(p1);
        }
        if (intersection) {
            slicePoints.push(intersection);
        }
        if (position2 == FRONT && slicePoints.indexOf(p2) === -1) {
            slicePoints.push(p2);
        }
    }

    if (slicePoints.length > 3) {
        addFace(geom, [
            slicePoints[0],
            slicePoints[1],
            slicePoints[2],
        ]);
        addFace(geom, [
            slicePoints[2],
            slicePoints[3],
            slicePoints[0],
        ]);
    } else {
        addFace(geom, slicePoints);
    }
}

function addFace(geom, points) {
    var existingIndex;
    var vertexIndices = [];
    var indexOffset = geom.vertices.length;
    var exists;
    var normals = [];
    var uvs = [];

    points.forEach(function(point) {
        existingIndex = geom.vertices.indexOf(point.vertex);
        if (existingIndex !== -1) {
            vertexIndices.push(existingIndex);
        } else {
            geom.vertices.push(point.vertex);
            vertexIndices.push(indexOffset);
            indexOffset += 1;
        }
        if (point.normal) {
            normals.push(point.normal);
        }
        if (point.uv) {
            uvs.push(point.uv);
        }
        return ! exists;
    });

    var face = new Face3(
        vertexIndices[0],
        vertexIndices[1],
        vertexIndices[2],
        normals
    );
    geom.faces.push(face);
    if (uvs.length) {
        geom.faceVertexUvs[0].push(uvs);
    }
}

function facePoints(geom, face, faceIndex) {
    var uvs = geom.faceVertexUvs[0];
    return ['a', 'b', 'c'].map(function(key, i) {
        return {
            vertex: geom.vertices[face[key]],
            normal: face.vertexNormals[i],
            uv: uvs[faceIndex] ? uvs[faceIndex][i] : undefined,
        };
    });
}

function intersectPlane(p1, p2, plane) {
    var line = new Line3(p1.vertex, p2.vertex);
    var intersection = plane.intersectLine(line);
    if (intersection) {
        var distance = p1.vertex.distanceTo(intersection);
        var alpha = distance / line.distance();
        return {
            vertex: intersection,
            normal: p1.normal.clone().lerp(p2.normal, alpha).normalize(),
            uv: p1.uv && p2.uv ? p1.uv.clone().lerp(p2.uv, alpha) : null
        };
    }
}

function facePosition(plane, points) {
    var a = vertexPosition(plane, points[0].vertex);
    var b = vertexPosition(plane, points[1].vertex);
    var c = vertexPosition(plane, points[2].vertex);
    if (a == BACK || b == BACK || c == BACK) {
        if (a == FRONT || b == FRONT || c == FRONT) {
            return STRADDLE;
        }
        return BACK;
    }
    if (a == FRONT || b == FRONT || c == FRONT) {
        if (a == BACK || b == BACK || c == BACK) {
            return STRADDLE;
        }
        return FRONT;
    }
    return ON;
}

function vertexPosition(plane, vertex) {
    var distance = plane.distanceToPoint(vertex);
    if (distance < 0) {
        return BACK;
    }
    if (distance > 0) {
        return FRONT;
    }
    return ON;
}