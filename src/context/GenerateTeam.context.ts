import { ParticipantType } from '@src/pages/homepage/ParticipantList';
import React, { createContext } from 'react';

export type GroupedTeamType = {
  teamName: string;
  members: ParticipantType[];
  totalRating: number;
  title: string;
}

export const GenerateTeamContext = createContext<{
  groupedTeams: GroupedTeamType[];
  setGroupedTeams: React.Dispatch<React.SetStateAction<GroupedTeamType[]>>;
  shareableLink: string;
  setShareableLink: React.Dispatch<React.SetStateAction<string>>
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
} | undefined>(undefined);

