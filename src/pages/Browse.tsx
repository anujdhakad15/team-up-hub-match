
import { useState, useEffect } from 'react';
import { users, User } from '@/data/mockData';
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import SearchFilters, { FilterState } from '@/components/SearchFilters';
import MessageModal from '@/components/MessageModal';

const Browse = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    locations: [],
    hackathons: [],
    onlyOnline: false,
    searchTerm: ""
  });
  const [messageRecipient, setMessageRecipient] = useState<User | null>(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  useEffect(() => {
    let result = [...users];

    // Filter by search term
    if (filters.searchTerm) {
      const searchTermLower = filters.searchTerm.toLowerCase();
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTermLower) || 
        user.bio.toLowerCase().includes(searchTermLower) ||
        user.skills.some(skill => skill.name.toLowerCase().includes(searchTermLower)) ||
        `${user.location.city}, ${user.location.country}`.toLowerCase().includes(searchTermLower)
      );
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      result = result.filter(user => 
        user.skills.some(skill => filters.skills.includes(skill.name))
      );
    }

    // Filter by locations
    if (filters.locations.length > 0) {
      result = result.filter(user => {
        const userLocation = `${user.location.city}, ${user.location.country}`;
        return filters.locations.includes(userLocation);
      });
    }

    // Filter by hackathon interests
    if (filters.hackathons.length > 0) {
      result = result.filter(user =>
        user.hackathonInterests.some(hackathon => 
          filters.hackathons.includes(hackathon.name)
        )
      );
    }

    // Filter by online availability
    if (filters.onlyOnline) {
      result = result.filter(user => user.availableForOnline);
    }

    setFilteredUsers(result);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleMessageUser = (user: User) => {
    setMessageRecipient(user);
    setIsMessageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Find Hackathon Teammates</h1>
          <p className="text-gray-600 mt-2">
            Search for the perfect collaborators for your next hackathon project
          </p>
        </div>

        <SearchFilters onFilterChange={handleFilterChange} />

        {filteredUsers.length > 0 ? (
          <div className="space-y-6">
            {filteredUsers.map(user => (
              <UserProfile key={user.id} user={user} onMessage={handleMessageUser} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search criteria
            </p>
          </div>
        )}
      </main>

      <MessageModal 
        recipient={messageRecipient}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
  );
};

export default Browse;
