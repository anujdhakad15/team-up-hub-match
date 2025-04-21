
import React from 'react';
import { User } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { MapPin, User as UserIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UserProfileProps {
  user: User;
  onMessage: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onMessage }) => {
  const isMobile = useIsMobile();

  return (
    <div className="profile-card animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-shrink-0">
          <img 
            src={user.avatar} 
            alt={`${user.name}'s profile`} 
            className="w-20 h-20 rounded-full object-cover border-2 border-hackathon-purple"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          
          <div className="flex items-center mt-1 mb-2">
            <div className="location-tag">
              <MapPin size={14} />
              <span>{user.location.city}, {user.location.country}</span>
            </div>
            {user.availableForOnline && (
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Available for online
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {user.bio.length > 150 && !isMobile ? `${user.bio.substring(0, 150)}...` : user.bio}
          </p>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 mb-1.5">Skills</h4>
            <div className="flex flex-wrap gap-1.5">
              {user.skills.slice(0, 5).map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill.name}
                  <span className="ml-1 opacity-60">•</span>
                  <span className="ml-1 capitalize">{skill.level}</span>
                </span>
              ))}
              {user.skills.length > 5 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  +{user.skills.length - 5} more
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1.5">Interested in Hackathons</h4>
            <div className="flex flex-wrap gap-1.5">
              {user.hackathonInterests.map((hackathon, index) => (
                <span key={index} className="hackathon-tag">
                  {hackathon.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {user.githubUrl && (
                <a 
                  href={user.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-hackathon-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              )}
              {user.linkedinUrl && (
                <a 
                  href={user.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-hackathon-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              )}
            </div>
            
            <Button 
              onClick={() => onMessage(user)} 
              variant="outline"
              className="border-hackathon-purple text-hackathon-purple hover:bg-hackathon-lightPurple flex items-center gap-1.5"
            >
              <UserIcon size={16} />
              <span>Message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
