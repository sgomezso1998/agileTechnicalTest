import { SearchResultItem } from "../SearchResult/SearchResult";

export interface ListProps {
    items: SearchResultItem[];
    loading?: boolean;
    mockItems?: number;
    searchQuery?: string | null;
    onClick: (id: string) => void 
}
 