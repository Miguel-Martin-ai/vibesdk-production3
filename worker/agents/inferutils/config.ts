import { AgentConfig, AIModels } from "./config.types";

/*
Use these configs instead for better performance, less bugs and costs:

    blueprint: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'medium',
        max_tokens: 16000,
        fallbackModel: AIModels.OPENAI_O3,
        temperature: 1,
    },
    projectSetup: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'medium',
        max_tokens: 10000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    phaseGeneration: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'medium',
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    codeReview: {
        name: AIModels.OPENAI_5,
        reasoning_effort: 'medium',
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_SONNET,
    },
    fileRegeneration: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_SONNET,
    },
    realtimeCodeFixer: {
        name: AIModels.OPENAI_5_MINI,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_4_SONNET,
    },

For real time code fixer, here are some alternatives: 
    realtimeCodeFixer: {
        name: AIModels.CEREBRAS_QWEN_3_CODER,
        reasoning_effort: undefined,
        max_tokens: 10000,
        temperature: 0.0,
        fallbackModel: AIModels.CLAUDE_4_SONNET,
    },
*/


export const AGENT_CONFIG: AgentConfig = {
    templateSelection: {
        name: AIModels.CLAUDE_3_5_SONNET_LATEST,
        max_tokens: 2000,
        fallbackModel: AIModels.OPENAI_CHATGPT_4O_LATEST,
        temperature: 0.6,
    },
    blueprint: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'medium',
        max_tokens: 64000,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
        temperature: 0.7,
    },
    projectSetup: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'low',
        max_tokens: 10000,
        temperature: 0.2,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    phaseGeneration: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 0.2,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    firstPhaseImplementation: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'low',
        max_tokens: 64000,
        temperature: 0.2,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    phaseImplementation: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'low',
        max_tokens: 64000,
        temperature: 0.2,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    realtimeCodeFixer: {
        name: AIModels.DISABLED,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 1,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    // Not used right now
    fastCodeFixer: {
        name: AIModels.DISABLED,
        reasoning_effort: undefined,
        max_tokens: 64000,
        temperature: 0.0,
        fallbackModel: AIModels.CLAUDE_4_SONNET,
    },
    conversationalResponse: {
        name: AIModels.CLAUDE_3_5_SONNET_LATEST,
        reasoning_effort: 'low',
        max_tokens: 4000,
        temperature: 0,
        fallbackModel: AIModels.OPENAI_CHATGPT_4O_LATEST,
    },
    deepDebugger: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'high',
        max_tokens: 8000,
        temperature: 0.5,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    codeReview: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'medium',
        max_tokens: 32000,
        temperature: 0.1,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    fileRegeneration: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'low',
        max_tokens: 32000,
        temperature: 0,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
    // Not used right now
    screenshotAnalysis: {
        name: AIModels.CLAUDE_4_SONNET,
        reasoning_effort: 'medium',
        max_tokens: 8000,
        temperature: 0.1,
        fallbackModel: AIModels.CLAUDE_3_5_SONNET_LATEST,
    },
};


// Model validation utilities
export const ALL_AI_MODELS: readonly AIModels[] = Object.values(AIModels);
export type AIModelType = AIModels;

// Create tuple type for Zod enum validation
export const AI_MODELS_TUPLE = Object.values(AIModels) as [AIModels, ...AIModels[]];

export function isValidAIModel(model: string): model is AIModels {
    return Object.values(AIModels).includes(model as AIModels);
}

export function getValidAIModelsArray(): readonly AIModels[] {
    return ALL_AI_MODELS;
}
