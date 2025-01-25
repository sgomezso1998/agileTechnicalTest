export interface AppBarProps {
    position: 0 | 1; // 0:top / 1:bottom
    title?: string; // bold
    subtitle?: string; // normal
    subtitle2?: string; // text in bottom right AppBar
    searchQuery?: string | null // to search top bar
    onSearch?: (query: string) => void;
}
  