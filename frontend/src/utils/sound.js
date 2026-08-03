export const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime); 
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'alarm') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.15);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.3);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.45);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.6);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.75);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.9);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);
    }
  } catch(e) { console.error("Audio error", e) }
};
