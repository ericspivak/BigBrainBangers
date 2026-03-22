"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VelvetRopeDemo() {
const [stage, setStage] = useState('DISCOVERY');

return (
<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>

{stage === 'DISCOVERY' ? (
<motion.div
key="disc"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
style={{ width: '320px', padding: '40px', border: '1px solid #333', borderRadius: '40px', background: '#050505', textAlign: 'center' }}
>
<div style={{ marginBottom: '30px', opacity: 0.3, fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase' }}>Gravity_Detected: 98%
<div style={{ height: '240px', background: '#111', borderRadius: '20px', marginBottom: '30px', display: 'flex', alignItems: 'flex-end', padding: '20px', textAlign: 'left' }}>

<h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>ALEX_K
<p style={{ color: '#00FFFF', fontSize: '10px', fontWeight: 'bold', margin: 0, textTransform: 'uppercase' }}>Bridge: @GaryVee


<button
onClick={() => setStage('SUCCESS')}
style={{ width: '100%', background: 'white', color: 'black', padding: '20px', fontSize: '12px', fontWeight: '900', fontStyle: 'italic', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
>
Initiate_Handshake

</motion.div>
) : (
<motion.div
key="succ"
initial={{ opacity: 0, scale: 1.1 }}
animate={{ opacity: 1, scale: 1 }}
style={{ textAlign: 'center' }}
>
<div style={{ width: '180px', height: '180px', border: '1px solid #00FFFF', borderRadius: '50%', margin: '0 auto 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
<motion.div
animate={{ rotate: 360 }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
style={{ position: 'absolute', inset: 0, borderTop: '2px solid #00FFFF', borderRadius: '50%' }}
/>
<span style={{ color: '#00FFFF', fontSize: '10px', fontWeight: 'bold', letterSpacing: '4px' }}>CLOSED

<h1 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>Handshake_Verified
<button
onClick={() => setStage('DISCOVERY')}
style={{ background: 'none', border: 'none', color: '#444', fontSize: '10px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '40px' }}
>
Return_to_Stack

</motion.div>
)}


);
}
