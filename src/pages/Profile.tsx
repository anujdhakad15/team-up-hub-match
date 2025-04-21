
import Header from '@/components/Header';
import ProfileForm from '@/components/ProfileForm';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Your Profile</h1>
          <p className="text-gray-600 mt-2">
            Set up your profile to find the perfect hackathon teammates
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ProfileForm />
        </div>
      </main>
    </div>
  );
};

export default Profile;
