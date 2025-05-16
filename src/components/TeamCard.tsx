
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, image }) => {
  // Get initials from name for the avatar fallback
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-3">
          {image ? (
            <AvatarImage src={image} alt={name} />
          ) : (
            <AvatarFallback className="text-2xl bg-mexgreen/10 text-mexgreen">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <p className="text-gray-700">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
