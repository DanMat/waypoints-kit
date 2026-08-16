import { greet } from '@waypoints-kit/core';

/** Greet someone, loudly. */
export function shout(name: string): string {
	return greet(name).toUpperCase();
}
