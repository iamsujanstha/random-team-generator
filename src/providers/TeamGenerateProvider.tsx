import { ReactNode, useState } from "react";
import { GroupedTeamType, GenerateTeamContext } from "@src/context/GenerateTeam.context";

interface TeamProviderProps {
  children: ReactNode;
}

export const TeamGenerateProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [groupedTeams, setGroupedTeams] = useState<GroupedTeamType[]>([]);
  const [shareableLink, setShareableLink] = useState('');
  const [title, setTitle] = useState('')

  return (
    <GenerateTeamContext value={{ groupedTeams, setGroupedTeams, shareableLink, setShareableLink, title, setTitle }}>
      {children}
    </GenerateTeamContext>
  );
};
