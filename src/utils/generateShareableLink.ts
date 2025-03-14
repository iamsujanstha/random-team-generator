import { GroupedTeamType } from '@src/context/GenerateTeam.context';
import { nanoid } from 'nanoid';

export const generateShareableLink = (groupedTeams: GroupedTeamType[]) => {
  if (!groupedTeams || groupedTeams.length === 0) return;

  const randomId = nanoid(16);
  const encodedData = encodeURIComponent(JSON.stringify(groupedTeams));
  const link = `view-groups/${randomId}?data=${encodedData}`;

  return link;
};
