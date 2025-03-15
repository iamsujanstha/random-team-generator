import { GroupedTeamType } from "@src/context/GenerateTeam.context";
import { ParticipantType } from "@src/pages/homepage/ParticipantList";

/* Generate Random Teams on basis of Balanced Participant Ratings */
export const generateBalancedTeams = async (
  participants: ParticipantType[],
  teamNames: string[],
  title: string
): Promise<GroupedTeamType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const sortedParticipants = [...participants].sort((a, b) => b.rating - a.rating);

  function createTeam(teamName: string): GroupedTeamType {
    return {
      teamName,
      members: [],
      totalRating: 0,
      title
    };
  }

  const groupedTeams: GroupedTeamType[] = teamNames.map(createTeam);

  sortedParticipants.forEach((participant) => {
    groupedTeams.sort((a, b) => a.totalRating - b.totalRating);
    groupedTeams[0].members.push({ name: participant.name, rating: participant.rating });
    groupedTeams[0].totalRating += participant.rating;
  });

  return groupedTeams;
};
