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
}, {}, unknown, {}, {
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
} & {
    defaultClassTransition: string;
    bodyClassEnterTransitonActive: string;
    bodyClassLeaveTransitonActive: string;
} & {
    routeKey?: string | undefined;
}>, {
    defaultClassTransition: string;
    bodyClassEnterTransitonActive: string;
    bodyClassLeaveTransitonActive: string;
}>;
export default _default;
