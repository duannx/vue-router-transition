export type Transition = {
    name: string | undefined;
    enterClass: string | undefined;
    leaveClass: string | undefined;
}

export type RouterMetaTransition = {
    priority: number;
    enter: string | Transition;
    leave: string | Transition;
    selfEnter?: string | Transition;
    selfLeave?: string | Transition;
    transitionID?: string;
}

export type RouterHistory = {
    path: string
    previousRouterScrollPosition: number
}