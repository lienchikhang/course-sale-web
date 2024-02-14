export interface IDrawer {
    isOpen: boolean,
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}