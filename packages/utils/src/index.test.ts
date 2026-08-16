import { describe, it, expect } from 'vitest';
import { shout } from './index.js';

describe('example', () => {
	it('works', () => {
		expect(shout('world')).toBe('HELLO, WORLD!');
	});
});
