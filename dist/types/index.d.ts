export declare type Transition = {
    name: string | undefined;
    enterClass: string | undefined;
    leaveClass: string | undefined;
};
export declare type RouterMetaTransition = {
    priority: number;
    enter: string | Transition;
    leave: string | Transition;
};
export declare type RouterHistory = {
    path: string;
    previousRouterScrollPosition: number;
};
