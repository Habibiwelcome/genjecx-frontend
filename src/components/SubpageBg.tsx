'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Def = {
  g: THREE.BufferGeometry;
  x: number; y: number; z: number;
  rx: number; ry: number;
  col: number; op: number;
  depth: number;
};

function makeShapes(v: number): Def[] {
  const c: Array<() => Def[]> = [
    // 0 — process: purple spiral + icosahedron + torus ring + teal oct
    () => [
      { g: new THREE.TorusKnotGeometry(2.0, 0.28, 72, 8),      x:  3.0, y:  0.2, z: -2.2, rx:.0004, ry:.0006, col:0x7c3aed, op:.17, depth:.18 },
      { g: new THREE.IcosahedronGeometry(1.8, 1),               x: -3.2, y: -0.2, z: -1.8, rx:.0007, ry:.0007, col:0xa78bfa, op:.13, depth:.11 },
      { g: new THREE.TorusGeometry(1.8, 0.024, 6, 44),          x: -0.3, y:  0.5, z: -3.8, rx:.0004, ry:.001,  col:0x7c3aed, op:.09, depth:.06 },
      { g: new THREE.OctahedronGeometry(1.0, 0),                x: -1.8, y:  2.0, z: -1.4, rx:.001,  ry:.0009, col:0x2dd4bf, op:.14, depth:.22 },
    ],
    // 1 — research: gold spiral + small purple spiral + icosahedron + teal ring
    () => [
      { g: new THREE.TorusKnotGeometry(1.9, 0.26, 68, 8),      x:  2.8, y:  0.4, z: -2.0, rx:.0005, ry:.0007, col:0xc9943a, op:.16, depth:.20 },
      { g: new THREE.TorusKnotGeometry(1.0, 0.16, 52, 7),      x: -2.6, y:  1.0, z: -1.8, rx:.0009, ry:.0007, col:0x7c3aed, op:.13, depth:.14 },
      { g: new THREE.IcosahedronGeometry(1.5, 1),               x:  3.2, y: -1.0, z: -1.5, rx:.0011, ry:.001,  col:0xa78bfa, op:.11, depth:.09 },
      { g: new THREE.TorusGeometry(1.4, 0.02, 6, 38),           x: -0.8, y: -0.6, z: -3.6, rx:.0004, ry:.0008, col:0x2dd4bf, op:.09, depth:.05 },
    ],
    // 2 — founders: twisted gold spiral (p2,q3) + icosahedron + gold oct
    () => [
      { g: new THREE.TorusKnotGeometry(1.8, 0.28, 68, 8, 2, 3), x: 2.6, y:  0.6, z: -2.1, rx:.0005, ry:.0007, col:0xc9943a, op:.18, depth:.18 },
      { g: new THREE.IcosahedronGeometry(1.7, 1),                x:-3.0, y: -0.1, z: -1.7, rx:.0007, ry:.0008, col:0xa78bfa, op:.12, depth:.10 },
      { g: new THREE.OctahedronGeometry(1.1, 0),                 x: 3.3, y: -1.5, z: -2.4, rx:.0011, ry:.0012, col:0xc9943a, op:.15, depth:.22 },
      { g: new THREE.IcosahedronGeometry(0.8, 0),                x:-1.3, y:  2.2, z: -1.6, rx:.001,  ry:.001,  col:0xa78bfa, op:.11, depth:.16 },
    ],
    // 3 — case-studies: teal spiral + purple oct + icosahedron + gold oct
    () => [
      { g: new THREE.TorusKnotGeometry(1.8, 0.24, 64, 8),      x:  2.7, y:  0.3, z: -2.1, rx:.0004, ry:.0006, col:0x2dd4bf, op:.15, depth:.18 },
      { g: new THREE.OctahedronGeometry(1.3, 0),               x: -3.0, y: -0.3, z: -1.7, rx:.0009, ry:.0008, col:0x7c3aed, op:.14, depth:.12 },
      { g: new THREE.IcosahedronGeometry(1.3, 1),              x:  3.1, y:  1.4, z: -1.5, rx:.0011, ry:.001,  col:0xa78bfa, op:.11, depth:.09 },
      { g: new THREE.OctahedronGeometry(0.85, 0),              x: -0.6, y: -1.0, z: -3.6, rx:.0006, ry:.0009, col:0xc9943a, op:.13, depth:.06 },
    ],
    // 4 — studio: large spiral + torus ring + gold icosa + oct
    () => [
      { g: new THREE.TorusKnotGeometry(2.3, 0.34, 80, 10),    x:  2.4, y:  0.4, z: -2.3, rx:.0003, ry:.0005, col:0x7c3aed, op:.18, depth:.20 },
      { g: new THREE.TorusGeometry(2.0, 0.026, 6, 48),         x: -0.5, y:  0.5, z: -4.0, rx:.0004, ry:.001,  col:0x7c3aed, op:.09, depth:.06 },
      { g: new THREE.IcosahedronGeometry(1.4, 0),             x: -2.8, y: -0.4, z: -1.7, rx:.0009, ry:.0008, col:0xc9943a, op:.13, depth:.12 },
      { g: new THREE.OctahedronGeometry(0.8, 0),              x:  3.2, y:  1.8, z: -1.4, rx:.0012, ry:.0011, col:0xa78bfa, op:.13, depth:.24 },
    ],
    // 5 — audit: purple spiral + oct + teal icosa + gold oct
    () => [
      { g: new THREE.TorusKnotGeometry(1.9, 0.28, 68, 8),     x:  2.8, y:  0.5, z: -2.1, rx:.0005, ry:.0006, col:0x7c3aed, op:.17, depth:.18 },
      { g: new THREE.OctahedronGeometry(1.3, 0),              x: -2.8, y: -0.2, z: -1.7, rx:.0009, ry:.0008, col:0xa78bfa, op:.13, depth:.12 },
      { g: new THREE.IcosahedronGeometry(1.5, 1),             x:  0.8, y:  1.8, z: -1.5, rx:.0011, ry:.001,  col:0x2dd4bf, op:.14, depth:.18 },
      { g: new THREE.OctahedronGeometry(0.7, 0),              x: -1.8, y:  1.1, z: -3.0, rx:.0007, ry:.0012, col:0xc9943a, op:.12, depth:.09 },
    ],
  ];
  return (c[v] ?? c[0])();
}

export default function SubpageBg({ variant = 0 }: { variant?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.offsetWidth, H = mount.offsetHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 0, 7);

    const SHAPES = makeShapes(variant);
    const meshes = SHAPES.map(s => {
      const m = new THREE.Mesh(
        s.g,
        new THREE.MeshBasicMaterial({ color: s.col, wireframe: true, transparent: true, opacity: s.op })
      );
      m.position.set(s.x, s.y, s.z);
      (m as any)._s = s;
      scene.add(m);
      return m;
    });

    /* Purple particles — reduced for performance */
    const N = 72;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3]   = (Math.random() - .5) * 22;
      pos[i*3+1] = (Math.random() - .5) * 13;
      pos[i*3+2] = (Math.random() - .5) * 9 - 2;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x7c3aed, size: .028, transparent: true, opacity: .65 })));

    /* Teal particles */
    const N2 = 28;
    const pos2 = new Float32Array(N2 * 3);
    for (let i = 0; i < N2; i++) {
      pos2[i*3]   = (Math.random() - .5) * 16;
      pos2[i*3+1] = (Math.random() - .5) * 10;
      pos2[i*3+2] = (Math.random() - .5) * 7;
    }
    const pGeo2 = new THREE.BufferGeometry();
    pGeo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
    scene.add(new THREE.Points(pGeo2, new THREE.PointsMaterial({ color: 0x2dd4bf, size: .02, transparent: true, opacity: .45 })));

    /* Mouse + per-mesh depth parallax */
    let mx = 0, my = 0, lxS = 0, lyS = 0, lastMouse = 0;
    const onMouse = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouse < 30) return;
      lastMouse = now;
      mx = (e.clientX / window.innerWidth  - .5) * 2;
      my = (e.clientY / window.innerHeight - .5) * -2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const onResize = () => {
      const nw = mount.offsetWidth, nh = mount.offsetHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    /* Pause RAF when section is off-screen — big perf win */
    let paused = false;
    const vis = new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, { threshold: 0 });
    vis.observe(mount);

    let t = 0, raf: number;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (paused) return;

      t += .003;
      lxS += (mx - lxS) * .05;
      lyS += (my - lyS) * .05;

      meshes.forEach(m => {
        const s = (m as any)._s as Def;
        m.rotation.x += s.rx;
        m.rotation.y += s.ry;
        m.position.x  = s.x + lxS * s.depth * 1.2;
        m.position.y  = s.y + Math.sin(t + s.x * .5) * .08 + lyS * s.depth * .8;
      });

      camera.position.x += (mx * .45 - camera.position.x) * .04;
      camera.position.y += (my * .28 - camera.position.y) * .04;

      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      vis.disconnect();
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      SHAPES.forEach(s => s.g.dispose());
      pGeo.dispose(); pGeo2.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode)
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, [variant]);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />;
}
