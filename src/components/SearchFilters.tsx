
import React, { useState, useEffect } from 'react';
import { allSkills, allLocations, allHackathons } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter } from 'lucide-react';

export type FilterState = {
  skills: string[];
  locations: string[];
  hackathons: string[];
  onlyOnline: boolean;
  searchTerm: string;
};

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    locations: [],
    hackathons: [],
    onlyOnline: false,
    searchTerm: ""
  });

  // Apply filters when they change
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleSkillToggle = (skill: string) => {
    setFilters(prevFilters => {
      if (prevFilters.skills.includes(skill)) {
        return {
          ...prevFilters,
          skills: prevFilters.skills.filter(s => s !== skill)
        };
      } else {
        return {
          ...prevFilters,
          skills: [...prevFilters.skills, skill]
        };
      }
    });
  };

  const handleLocationToggle = (location: string) => {
    setFilters(prevFilters => {
      if (prevFilters.locations.includes(location)) {
        return {
          ...prevFilters,
          locations: prevFilters.locations.filter(l => l !== location)
        };
      } else {
        return {
          ...prevFilters,
          locations: [...prevFilters.locations, location]
        };
      }
    });
  };

  const handleHackathonToggle = (hackathon: string) => {
    setFilters(prevFilters => {
      if (prevFilters.hackathons.includes(hackathon)) {
        return {
          ...prevFilters,
          hackathons: prevFilters.hackathons.filter(h => h !== hackathon)
        };
      } else {
        return {
          ...prevFilters,
          hackathons: [...prevFilters.hackathons, hackathon]
        };
      }
    });
  };

  const handleOnlineChange = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      onlyOnline: !prevFilters.onlyOnline
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchTerm: e.target.value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      skills: [],
      locations: [],
      hackathons: [],
      onlyOnline: false,
      searchTerm: ""
    });
  };

  return (
    <div className="bg-white rounded-lg border p-4 mb-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4 mb-4">
        <div className="flex-grow mb-3 md:mb-0">
          <Input
            type="search"
            placeholder="Search by name, skill, or location..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Filter size={16} />
            <span>Filters</span>
            {(filters.skills.length > 0 || filters.locations.length > 0 || filters.hackathons.length > 0 || filters.onlyOnline) && (
              <span className="bg-hackathon-purple text-white rounded-full text-xs px-1.5 py-0.5 ml-1">
                {filters.skills.length + filters.locations.length + filters.hackathons.length + (filters.onlyOnline ? 1 : 0)}
              </span>
            )}
          </Button>
          {(filters.skills.length > 0 || filters.locations.length > 0 || filters.hackathons.length > 0 || filters.onlyOnline) && (
            <Button variant="ghost" onClick={handleClearFilters} size="sm" className="text-sm">
              Clear all
            </Button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t mt-2 animate-fade-in">
          <div>
            <h3 className="font-medium mb-3 text-gray-900">Skills</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {allSkills.sort().map((skill) => (
                <div key={skill} className="flex items-center">
                  <Checkbox
                    id={`skill-${skill}`}
                    checked={filters.skills.includes(skill)}
                    onCheckedChange={() => handleSkillToggle(skill)}
                  />
                  <Label 
                    htmlFor={`skill-${skill}`}
                    className="ml-2 text-sm font-normal cursor-pointer"
                  >
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-900">Locations</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {allLocations.map((location) => {
                const locationString = `${location.city}, ${location.country}`;
                return (
                  <div key={locationString} className="flex items-center">
                    <Checkbox
                      id={`location-${location.city}`}
                      checked={filters.locations.includes(locationString)}
                      onCheckedChange={() => handleLocationToggle(locationString)}
                    />
                    <Label 
                      htmlFor={`location-${location.city}`}
                      className="ml-2 text-sm font-normal cursor-pointer"
                    >
                      {locationString}
                    </Label>
                  </div>
                );
              })}

              <div className="pt-2 mt-2 border-t">
                <div className="flex items-center">
                  <Checkbox
                    id="onlyOnline"
                    checked={filters.onlyOnline}
                    onCheckedChange={handleOnlineChange}
                  />
                  <Label 
                    htmlFor="onlyOnline"
                    className="ml-2 text-sm font-normal cursor-pointer"
                  >
                    Online only
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-900">Hackathons</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {allHackathons.map((hackathon) => (
                <div key={hackathon.name} className="flex items-center">
                  <Checkbox
                    id={`hackathon-${hackathon.name}`}
                    checked={filters.hackathons.includes(hackathon.name)}
                    onCheckedChange={() => handleHackathonToggle(hackathon.name)}
                  />
                  <Label 
                    htmlFor={`hackathon-${hackathon.name}`}
                    className="ml-2 text-sm font-normal cursor-pointer"
                  >
                    {hackathon.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
