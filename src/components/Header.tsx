
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-hackathon-purple flex items-center">
          <span className="mr-2">👥</span>
          TeamUpHub
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/browse" className="text-gray-600 hover:text-hackathon-purple transition-colors">
                Find Teammates
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-600 hover:text-hackathon-purple transition-colors">
                My Profile
              </Link>
            </li>
            <li>
              <Button className="bg-hackathon-purple hover:bg-hackathon-darkPurple text-white">
                Create Profile
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
