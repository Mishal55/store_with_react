import React, { useState, useEffect } from 'react';
import { Search, Clock, TrendingUp } from 'lucide-react';

interface SearchSuggestionsProps {
  searchQuery: string;
  onSuggestionClick: (suggestion: string) => void;
  isVisible: boolean;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  searchQuery,
  onSuggestionClick,
  isVisible
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches] = useState(['silk dress', 'cashmere sweater', 'designer handbag']);
  const [trendingSearches] = useState(['summer collection', 'work blazer', 'gold jewelry']);

  const allSuggestions = [
    'silk midi dress',
    'cashmere sweater',
    'leather handbag',
    'wool blazer', 
    'gold necklace',
    'designer sneakers',
    'summer dress',
    'winter coat',
    'evening gown',
    'casual wear',
    'business attire',
    'accessories',
    'jewelry collection',
    'footwear',
    'luxury items'
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = allSuggestions
        .filter(item => 
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 6);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-card border border-border rounded-lg shadow-glow mt-2 z-50 overflow-hidden animate-fade-in-up">
      {searchQuery.length > 0 ? (
        <div className="max-h-64 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3 border-b border-border last:border-b-0"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">
                  {suggestion.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => (
                    <span
                      key={i}
                      className={
                        part.toLowerCase() === searchQuery.toLowerCase()
                          ? 'font-semibold text-primary'
                          : ''
                      }
                    >
                      {part}
                    </span>
                  ))}
                </span>
              </button>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-muted-foreground">
              No suggestions found for "{searchQuery}"
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-3 border-b border-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Recent</span>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => onSuggestionClick(search)}
                    className="block w-full text-left px-2 py-1 text-sm text-foreground hover:bg-muted/50 rounded transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Trending</span>
            </div>
            <div className="space-y-1">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => onSuggestionClick(search)}
                  className="block w-full text-left px-2 py-1 text-sm text-foreground hover:bg-muted/50 rounded transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;