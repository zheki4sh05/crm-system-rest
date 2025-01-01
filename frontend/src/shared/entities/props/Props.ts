import { ReactNode } from "react"

export type ChildrenJsx = JSX.Element | JSX.Element[] | (() => JSX.Element)


export type ChildrenNode = ReactNode

export interface ContextData{
    [key: string]: any;
}