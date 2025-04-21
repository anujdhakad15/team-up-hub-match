
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { allSkills, allLocations, allHackathons } from '@/data/mockData';
import { Combobox } from '@/components/ui/combobox';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { User } from '@/data/mockData';

const ProfileForm = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Partial<User>>({
    name: '',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: '',
    location: {
      city: '',
      country: ''
    },
    skills: [],
    hackathonInterests: [],
    availableForOnline: true,
    email: '',
    githubUrl: '',
    linkedinUrl: ''
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedHackathons, setSelectedHackathons] = useState<string[]>([]);

  const handleAddSkill = () => {
    if (selectedSkill && !selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
      setProfile(prev => ({
        ...prev,
        skills: [...(prev.skills || []), { name: selectedSkill, level: skillLevel }]
      }));
      setSelectedSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
    setProfile(prev => ({
      ...prev,
      skills: (prev.skills || []).filter(s => s.name !== skill)
    }));
  };

  const handleLocationChange = (location: string) => {
    const [city, country] = location.split(', ');
    setSelectedLocation(location);
    setProfile(prev => ({
      ...prev,
      location: { city, country }
    }));
  };

  const handleHackathonChange = (hackathon: string) => {
    const isSelected = selectedHackathons.includes(hackathon);
    const newSelectedHackathons = isSelected
      ? selectedHackathons.filter(h => h !== hackathon)
      : [...selectedHackathons, hackathon];
    
    setSelectedHackathons(newSelectedHackathons);
    
    const hackathonDetails = allHackathons.find(h => h.name === hackathon);
    if (hackathonDetails) {
      setProfile(prev => ({
        ...prev,
        hackathonInterests: isSelected
          ? (prev.hackathonInterests || []).filter(h => h.name !== hackathon)
          : [...(prev.hackathonInterests || []), hackathonDetails]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!profile.name || !profile.bio || !profile.email) {
      toast.error("Please fill out all required fields");
      return;
    }

    if ((profile.skills || []).length === 0) {
      toast.error("Please add at least one skill");
      return;
    }

    if (!profile.location?.city) {
      toast.error("Please select your location");
      return;
    }

    // In a real app, we would save the profile to a database
    toast.success("Profile created successfully!");
    navigate("/browse");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <Label htmlFor="name" className="text-base">Name *</Label>
        <Input 
          id="name" 
          value={profile.name} 
          onChange={e => setProfile({...profile, name: e.target.value})}
          placeholder="Enter your full name"
          className="mt-1"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-base">Email *</Label>
        <Input 
          id="email" 
          type="email"
          value={profile.email} 
          onChange={e => setProfile({...profile, email: e.target.value})}
          placeholder="your.email@example.com"
          className="mt-1"
          required
        />
      </div>

      <div>
        <Label htmlFor="bio" className="text-base">Bio *</Label>
        <Textarea 
          id="bio" 
          value={profile.bio} 
          onChange={e => setProfile({...profile, bio: e.target.value})}
          placeholder="Tell others about yourself, your experience, and what you're looking for in a hackathon team..."
          className="mt-1 h-24"
          required
        />
      </div>

      <div className="space-y-4">
        <Label className="text-base">Skills *</Label>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedSkills.map(skill => {
            const skillObj = profile.skills?.find(s => s.name === skill);
            return (
              <div 
                key={skill} 
                className="skill-tag flex items-center"
              >
                {skill}
                <span className="mx-1 opacity-60">•</span>
                <span className="capitalize">{skillObj?.level}</span>
                <button 
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-hackathon-darkPurple hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-grow">
            <Combobox
              items={allSkills.filter(skill => !selectedSkills.includes(skill)).map(skill => ({
                value: skill,
                label: skill
              }))}
              value={selectedSkill}
              onChange={setSelectedSkill}
              placeholder="Select a skill"
            />
          </div>

          <div className="w-full md:w-48">
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value as 'beginner' | 'intermediate' | 'advanced')}
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <Button 
            type="button" 
            onClick={handleAddSkill}
            className="bg-hackathon-purple hover:bg-hackathon-darkPurple"
            disabled={!selectedSkill}
          >
            Add Skill
          </Button>
        </div>
      </div>

      <div>
        <Label className="text-base">Location *</Label>
        <Combobox
          items={allLocations.map(location => ({
            value: `${location.city}, ${location.country}`,
            label: `${location.city}, ${location.country}`
          }))}
          value={selectedLocation}
          onChange={handleLocationChange}
          placeholder="Select your location"
          className="mt-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="availableForOnline"
          checked={profile.availableForOnline}
          onCheckedChange={(checked) => setProfile({...profile, availableForOnline: checked})}
        />
        <Label htmlFor="availableForOnline">Available for online hackathons</Label>
      </div>

      <div>
        <Label className="text-base block mb-2">Hackathon Interests</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allHackathons.map(hackathon => (
            <div key={hackathon.name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`hackathon-${hackathon.name}`}
                checked={selectedHackathons.includes(hackathon.name)}
                onChange={() => handleHackathonChange(hackathon.name)}
                className="rounded text-hackathon-purple focus:ring-hackathon-purple h-4 w-4"
              />
              <label 
                htmlFor={`hackathon-${hackathon.name}`}
                className="text-sm flex flex-col"
              >
                <span>{hackathon.name}</span>
                <span className="text-xs text-gray-500">
                  {hackathon.location === 'online' ? 'Online' : hackathon.location} • {hackathon.date}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="github" className="text-base">GitHub URL (optional)</Label>
          <Input 
            id="github" 
            value={profile.githubUrl} 
            onChange={e => setProfile({...profile, githubUrl: e.target.value})}
            placeholder="https://github.com/yourusername"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="linkedin" className="text-base">LinkedIn URL (optional)</Label>
          <Input 
            id="linkedin" 
            value={profile.linkedinUrl} 
            onChange={e => setProfile({...profile, linkedinUrl: e.target.value})}
            placeholder="https://linkedin.com/in/yourusername"
            className="mt-1"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button 
          type="submit"
          className="w-full md:w-auto bg-hackathon-purple hover:bg-hackathon-darkPurple text-lg py-6"
        >
          Create Profile
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
