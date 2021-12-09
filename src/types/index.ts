export type Transition = {
    name: string | undefined;
    enterClass: string | undefined;
    leaveClass: string | undefined;
}

export type RouterMetaTransition = {
    priority: number;
    enter: string | Transition;
    leave: string | Transition;
}

export type RouterHistory = {
    path: string
    previousRouterScrollPosition: number
}