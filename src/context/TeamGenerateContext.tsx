import { ParticipantType } from '@src/pages/homepage/ParticipantList';
import React, { createContext, useState, ReactNode } from 'react';

export type GroupedTeamType = {
  teamName: string;
  members: ParticipantType[];
  totalRating: number;
}

export const GroupTeamContext = createContext<{
  groupedTeams: GroupedTeamType[];
  setGroupedTeams: React.Dispatch<React.SetStateAction<GroupedTeamType[]>>;
  shareableLink: string;
  setShareableLink: React.Dispatch<React.SetStateAction<string>>
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
} | undefined>(undefined);

interface TeamProviderProps {
  children: ReactNode;
}

export const TeamGenerateProvider: React.FC<TeamProviderProps> = ({ children }) => {
  // Initialize the groupedTeams state
  const [groupedTeams, setGroupedTeams] = useState<GroupedTeamType[]>([]);
  const [shareableLink, setShareableLink] = useState('');
  const [title, setTitle] = useState('')

  return (
    <GroupTeamContext.Provider value={{ groupedTeams, setGroupedTeams, shareableLink, setShareableLink, title, setTitle }}>
      {children}
    </GroupTeamContext.Provider>
  );
};

