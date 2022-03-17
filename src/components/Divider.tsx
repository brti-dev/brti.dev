export type DividerProps = {}

const styles = {
  border: 'none',
  height: '1px',
  margin: 0,
  flexShrink: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.12)',
}

export default function Divider(props: DividerProps) {
  return <hr style={styles} />
}
