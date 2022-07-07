export declare type Transition = {
    name: string | undefined;
    enterClass: string | undefined;
    leaveClass: string | undefined;
};
export declare type RouterMetaTransition = {
    priority: number;
    enter: string | Transition;
    leave: string | Transition;
    selfEnter?: string | Transition;
    selfLeave?: string | Transition;
    transitionID?: string;
};
export declare type RouterHistory = {
    path: string;
    previousRouterScrollPosition: number;
};
