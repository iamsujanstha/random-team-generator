import { GroupedTeamType } from "@src/context/GenerateTeam.context";
import { ParticipantType } from "@src/pages/homepage/ParticipantList";

export const generateRandomTeams = async (participants: ParticipantType[], teamNames: string[], title: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  participants.sort((a, b) => b.rating - a.rating);

  const groupedTeams: GroupedTeamType[] = teamNames.map(name => ({
    teamName: name,
    members: [],
    totalRating: 0,
    title
  }));

  participants.forEach(participant => {
    groupedTeams.sort((a, b) => a.totalRating - b.totalRating);
    groupedTeams[0].members.push({ name: participant.name, rating: participant.rating });
    groupedTeams[0].totalRating += participant.rating;
  });

  return groupedTeams;
};