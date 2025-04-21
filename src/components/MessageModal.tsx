
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { User } from '@/data/mockData';
import { toast } from 'sonner';

interface MessageModalProps {
  recipient: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ recipient, isOpen, onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    // In a real app, we would send the message to an API
    // For now, we just simulate success with a toast
    toast.success(`Message sent to ${recipient?.name}`);
    setMessage('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {recipient && (
              <>
                <img 
                  src={recipient.avatar}
                  alt={`${recipient.name}'s avatar`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>Message {recipient.name}</span>
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <Textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-32"
          />
          <p className="text-xs text-gray-500 mt-2">
            Let {recipient?.name} know why you'd like to team up for a hackathon.
          </p>
        </div>
        
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button 
            onClick={handleSend}
            className="bg-hackathon-purple hover:bg-hackathon-darkPurple"
          >
            Send Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
