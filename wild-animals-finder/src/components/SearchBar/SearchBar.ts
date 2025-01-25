export interface SearchBarProps {
    onSearch?: (query: string) => void;
    button: boolean;
    placeHolder?: string;
    height?: number;
    searchText?: string;
}
  