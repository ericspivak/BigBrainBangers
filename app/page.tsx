"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * VELVET_ROPE // MARCH_2026_BETA_V3
 * Senior-Level Implementation: Self-Contained Styles
 */

export default function VelvetRopeBeta() {
  const [stage, setStage] = useState('LOADING');

  useEffect(() => {
    const timer = setTimeout(() => setStage('DISCOVERY'), 2000);
    return () => clearTimeout(timer);
  }, []);

  // UI STYLES (Embedded for 100% Reliability)
  const styles = {
    container: {
      height: '100vh', width: '100vw', backgroundColor: '#000', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif', overflow: 'hidden', margin: 0
    },
    card: {
      width: '320px', padding: '40px', backgroundColor: '#050505',
      border: '1px solid #222', borderRadius: '40px', textAlign: 'center' as const,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },
    imageBox: {
      height: '220px', backgroundColor: '#111', borderRadius: '24px', 
      marginBottom: '40px', display: 'flex', alignItems: 'flex-end', 
      padding: '24px', textAlign: 'left' as const,
      backgroundImage: 'linear-gradient(to top, #000, transparent)'
    },
    button: {
      width: '100%', padding: '20px', backgroundColor: '#fff', color: '#000',
      border: 'none', fontWeight: '900', fontStyle: 'italic', 
      cursor: 'pointer', borderRadius: '12px', letterSpacing: '1px'
    }
  };

  return (
    <div style={styles.container}>
      <AnimatePresence mode="wait">
        {stage === 'LOADING' && (
          <motion.div key="loader" exit={{ opacity: 0, scale: 0.9 }}>
            <p style={{ letterSpacing: '6px', fontSize: '10px', color: '#00FFFF', fontWeight: 'bold' }}>
              AUDITING_IDENTITY...
            </p>
          </motion.div>
        )}

        {stage === 'DISCOVERY' && (
          <motion.div 
            key="disc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            style={styles.card}
          >
            <p style={{ fontSize: '9px', opacity: 0.3, letterSpacing: '4px', marginBottom: '40px', textTransform: 'uppercase' }}>
              Genesis_Node_Detected
            </p>
            <div style={styles.imageBox}>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: '900', fontStyle: 'italic', margin: 0, letterSpacing: '-1px' }}>
                  ALEX_K
                </h2>
                <p style={{ color: '#00FFFF', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', margin: '4px 0 0' }}>
                  BRIDGE: @GARYVEE
                </p>
              </div>
            </div>
            <button onClick={() => setStage('SUCCESS')} style={styles.button}>
              INITIATE_HANDSHAKE
            </button>
          </motion.div>
        )}

        {stage === 'SUCCESS' && (
          <motion.div 
            key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
            style={{ textAlign: 'center' }}
          >
            <div style={{ 
              width: '160px', height: '160px', border: '1px solid #00FFFF', borderRadius: '50%', 
              margin: '0 auto 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              position: 'relative' 
            }}>
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} 
                style={{ position: 'absolute', inset: 0, borderTop: '2px solid #00FFFF', borderRadius: '50%' }} 
              />
              <span style={{ color: '#00FFFF', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>CLOSED</span>
            </div>
            <h1 style={{ fontStyle: 'italic', fontWeight: '900', fontSize: '24px' }}>HANDSHAKE_VERIFIED</h1>
            <button 
              onClick={() => setStage('DISCOVERY')} 
              style={{ background: 'none', border: 'none', color: '#444', fontSize: '10px', marginTop: '40px', cursor: 'pointer', letterSpacing: '2px' }}
            >
              RETURN_TO_CORE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
