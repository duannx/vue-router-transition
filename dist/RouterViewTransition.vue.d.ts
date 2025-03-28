declare const _default: import("vue").DefineComponent<{
    defaultClassTransition: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bodyClassEnterTransitonActive: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bodyClassLeaveTransitonActive: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    routeKey: {
        type: StringConstructor;
        requried: boolean;
    };
    ignoreFirstLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepAlive: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepAliveAttrs: {
        type: ObjectConstructor;
        default: {};
    };
}, void, unknown, {}, {
    beforeEnter(el: HTMLElement, previousRouterScrollPosition: number): void;
    afterEnter(el: HTMLElement, previousRouterScrollPosition: number): void;
    enterCancelled(el: HTMLElement): void;
    beforeLeave(): void;
    afterLeave(): void;
    leaveCancelled(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    defaultClassTransition?: unknown;
    bodyClassEnterTransitonActive?: unknown;
    bodyClassLeaveTransitonActive?: unknown;
    routeKey?: unknown;
    ignoreFirstLoad?: unknown;
    keepAlive?: unknown;
    keepAliveAttrs?: unknown;
} & {
    defaultClassTransition: string;
    bodyClassEnterTransitonActive: string;
    bodyClassLeaveTransitonActive: string;
    ignoreFirstLoad: boolean;
    keepAlive: boolean;
    keepAliveAttrs: Record<string, any>;
} & {
    routeKey?: string | undefined;
}>, {
    defaultClassTransition: string;
    bodyClassEnterTransitonActive: string;
    bodyClassLeaveTransitonActive: string;
    ignoreFirstLoad: boolean;
    keepAlive: boolean;
    keepAliveAttrs: Record<string, any>;
}>;
export default _default;
