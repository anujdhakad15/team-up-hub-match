
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hackathon-purple to-hackathon-darkPurple text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find Your Perfect Hackathon Teammates
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Connect with developers, designers, and innovators who share your passion. Form dream teams for your next hackathon.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/profile">
                  <Button size="lg" className="bg-white text-hackathon-darkPurple hover:bg-gray-100 hover:text-hackathon-darkPurple">
                    Create Profile
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Browse Teammates
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                alt="Teammates collaborating" 
                className="rounded-lg shadow-xl max-w-full md:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How TeamUpHub Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-hackathon-lightPurple p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hackathon-darkPurple"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Profile</h3>
                <p className="text-gray-600">
                  Build your developer profile showcasing your skills, experience, and hackathon interests.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-hackathon-lightPurple p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hackathon-darkPurple"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-gray-600">
                  Search for teammates with complementary skills and shared hackathon interests.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-hackathon-lightPurple p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hackathon-darkPurple"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Win Together</h3>
                <p className="text-gray-600">
                  Form the perfect team and collaborate to build amazing projects at hackathons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&auto=format&fit=crop&q=60" 
                    alt="User" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">Full-stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I found the perfect UI/UX designer through TeamUpHub. We ended up winning first place at TechCrunch Disrupt! Couldn't have done it without this platform."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" 
                    alt="User" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sophia Chen</h4>
                    <p className="text-sm text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a designer, I was looking for technical teammates who could bring my ideas to life. TeamUpHub connected me with amazing developers who made it happen!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-hackathon-purple py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to find your dream team?</h2>
            <p className="text-xl mb-8 max-w-xl mx-auto">
              Join TeamUpHub today and connect with talented developers, designers, and innovators for your next hackathon.
            </p>
            <Link to="/profile">
              <Button size="lg" className="bg-white text-hackathon-darkPurple hover:bg-gray-100 hover:text-hackathon-darkPurple">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center md:flex md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">TeamUpHub</h3>
              <p className="text-gray-400">Find your perfect hackathon teammates</p>
            </div>
            
            <div>
              <p className="text-gray-400">© 2025 TeamUpHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
