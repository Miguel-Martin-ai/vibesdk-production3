import { getPlatformEnabledProviders } from './byokHelper';

describe('byokHelper', () => {
	describe('getPlatformEnabledProviders', () => {
		test('should include openrouter when OPENROUTER_API_KEY is valid', () => {
			const env = {
				OPENROUTER_API_KEY: 'sk-or-valid-key-123456',
			} as Env;

			const providers = getPlatformEnabledProviders(env);
			expect(providers).toContain('openrouter');
		});

		test('should not include openrouter when OPENROUTER_API_KEY is missing', () => {
			const env = {} as Env;

			const providers = getPlatformEnabledProviders(env);
			expect(providers).not.toContain('openrouter');
		});

		test('should not include openrouter when OPENROUTER_API_KEY is invalid (too short)', () => {
			const env = {
				OPENROUTER_API_KEY: 'short',
			} as Env;

			const providers = getPlatformEnabledProviders(env);
			expect(providers).not.toContain('openrouter');
		});

		test('should not include openrouter when OPENROUTER_API_KEY is "default"', () => {
			const env = {
				OPENROUTER_API_KEY: 'default',
			} as Env;

			const providers = getPlatformEnabledProviders(env);
			expect(providers).not.toContain('openrouter');
		});

		test('should include multiple providers when all have valid keys', () => {
			const env = {
				ANTHROPIC_API_KEY: 'sk-ant-valid-key-1234567890',
				OPENAI_API_KEY: 'sk-valid-key-1234567890',
				GOOGLE_AI_STUDIO_API_KEY: 'AIzaSy-valid-key-12345',
				CEREBRAS_API_KEY: 'csk-valid-key-1234567890',
				GROQ_API_KEY: 'gsk-valid-key-1234567890',
				OPENROUTER_API_KEY: 'sk-or-valid-key-1234567890',
			} as Env;

			const providers = getPlatformEnabledProviders(env);
			expect(providers).toContain('anthropic');
			expect(providers).toContain('openai');
			expect(providers).toContain('google-ai-studio');
			expect(providers).toContain('cerebras');
			expect(providers).toContain('groq');
			expect(providers).toContain('openrouter');
			expect(providers).toHaveLength(6);
		});
	});
});
