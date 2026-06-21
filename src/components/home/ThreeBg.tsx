'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBg() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.offsetWidth, H = mount.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 0, 7);

    /* ── Wireframe shapes (torus knot is the showpiece) ── */
    const SHAPES = [
      // Torus knot — sci-fi centerpiece, slow rotation, off-center
      { g: new THREE.TorusKnotGeometry(1.5, 0.22, 64, 8), x:  2.4, y:  0.2, z: -3.5, rx: .0003, ry: .0005, col: 0x7c3aed, op: .34  },
      // Large icosahedron — left background
      { g: new THREE.IcosahedronGeometry(1.5, 1),          x: -2.8, y: -0.3, z: -2.5, rx: .0007, ry: .0006, col: 0xa78bfa, op: .36  },
      // Small gold octahedron — right
      { g: new THREE.OctahedronGeometry(0.75, 0),          x:  3.0, y: -1.3, z: -3.2, rx: .001,  ry: .0011, col: 0xc9943a, op: .40  },
      // Teal octahedron — upper left
      { g: new THREE.OctahedronGeometry(0.5, 0),           x: -1.5, y:  1.6, z: -2.5, rx: .0009, ry: .0007, col: 0x2dd4bf, op: .38  },
      // Torus ring — depth layer
      { g: new THREE.TorusGeometry(1.4, 0.02, 4, 36),      x: -0.5, y:  0.3, z: -4.5, rx: .0003, ry: .0008, col: 0x7c3aed, op: .28  },
      // Small purple icosahedron — upper area
      { g: new THREE.IcosahedronGeometry(0.55, 0),          x:  0.7, y:  2.3, z: -2.0, rx: .0012, ry: .001,  col: 0xa78bfa, op: .38  },
    ];

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

    /* ── Purple main particle field (connection lines computed here) ── */
    const N = 180;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3]   = (Math.random() - .5) * 22;
      pos[i*3+1] = (Math.random() - .5) * 14;
      pos[i*3+2] = (Math.random() - .5) * 10 - 2;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(pGeo,
      new THREE.PointsMaterial({ color: 0x7c3aed, size: .036, transparent: true, opacity: .92 })
    ));

    /* ── Teal secondary particles (no connections = cheap) ── */
    const N2 = 55;
    const pos2 = new Float32Array(N2 * 3);
    for (let i = 0; i < N2; i++) {
      pos2[i*3]   = (Math.random() - .5) * 18;
      pos2[i*3+1] = (Math.random() - .5) * 12;
      pos2[i*3+2] = (Math.random() - .5) * 8;
    }
    const pGeo2 = new THREE.BufferGeometry();
    pGeo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
    scene.add(new THREE.Points(pGeo2,
      new THREE.PointsMaterial({ color: 0x2dd4bf, size: .028, transparent: true, opacity: .72 })
    ));

    /* ── Gold accent particles ── */
    const N3 = 28;
    const pos3 = new Float32Array(N3 * 3);
    for (let i = 0; i < N3; i++) {
      pos3[i*3]   = (Math.random() - .5) * 14;
      pos3[i*3+1] = (Math.random() - .5) * 10;
      pos3[i*3+2] = (Math.random() - .5) * 6;
    }
    const pGeo3 = new THREE.BufferGeometry();
    pGeo3.setAttribute('position', new THREE.BufferAttribute(pos3, 3));
    scene.add(new THREE.Points(pGeo3,
      new THREE.PointsMaterial({ color: 0xc9943a, size: .026, transparent: true, opacity: .68 })
    ));

    /* ── Connection lines (sparse — main field only) ── */
    const lv: number[] = [];
    const DIST_SQ = 1.8;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
        if (dx*dx + dy*dy + dz*dz < DIST_SQ)
          lv.push(pos[i*3],pos[i*3+1],pos[i*3+2], pos[j*3],pos[j*3+1],pos[j*3+2]);
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lv), 3));
    scene.add(new THREE.LineSegments(lGeo,
      new THREE.LineBasicMaterial({ color: 0x5b21b6, transparent: true, opacity: .30 })
    ));

    /* ── Mouse parallax (throttled to ~30fps) ── */
    let mx = 0, my = 0, lastMouse = 0;
    const onMouse = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouse < 32) return;
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

    /* ── Pause when hero scrolled out of view ── */
    let paused = false;
    const vis = new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, { threshold: 0 });
    vis.observe(mount);

    /* ── Render loop ── */
    let t = 0, raf: number;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (paused) return;
      t += .004;
      meshes.forEach(m => {
        const s = (m as any)._s;
        m.rotation.x += s.rx;
        m.rotation.y += s.ry;
        m.position.y += Math.sin(t + m.position.x * 0.7) * .0006;
      });
      camera.position.x += (mx * .65 - camera.position.x) * .045;
      camera.position.y += (my * .40 - camera.position.y) * .045;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      vis.disconnect();
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      SHAPES.forEach(s => s.g.dispose());
      pGeo.dispose(); pGeo2.dispose(); pGeo3.dispose(); lGeo.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode)
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />;
}
