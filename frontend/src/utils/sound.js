/**
 * Sound Utility wrapper
 * Delegating to soundService singleton
 */
import { soundService } from '../services/soundService';

export const playSound = (type) => soundService.play(type);
