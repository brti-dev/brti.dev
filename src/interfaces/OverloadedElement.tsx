import { DistributiveOmit } from './generic'

/**
 * Elements that accept no children
 */
type VoidElement =
  | 'area'
  | 'base'
  | 'br'
  | 'col'
  | 'hr'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'param'
  | 'command'
  | 'keygen'
  | 'source'

type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
  ? Omit<React.ComponentPropsWithRef<C>, 'children'>
  : React.ComponentPropsWithRef<C>

export interface OverloadedElement<P> {
  <C extends React.ElementType>(
    props: { as: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>
  ): JSX.Element
  (
    props: P & DistributiveOmit<React.ComponentPropsWithRef<'div'>, keyof P>
  ): JSX.Element
}

export type OverloadedElementProps = {
  as?: string | React.ElementType
}
