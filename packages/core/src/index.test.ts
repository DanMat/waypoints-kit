import { describe, it, expect } from 'vitest';
import { greet } from './index.js';

describe('example', () => {
	it('works', () => {
		expect(greet('world')).toBe('Hello, world!');
	});
});
