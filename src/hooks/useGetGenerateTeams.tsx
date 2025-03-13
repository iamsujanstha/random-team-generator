
import { GroupTeamContext } from "@src/context/TeamGenerateContext";
import { useContext } from "react";

export const useGetGenerateTeams = () => {
  const context = useContext(GroupTeamContext);
  if (!context) {
    throw new Error('useGetGenerateTeams must be used within a TeamGenerateProvider');
  }
  return context;
};