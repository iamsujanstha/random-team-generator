
import { GenerateTeamContext } from "@src/context/GenerateTeam.context";
import { useContext } from "react";

export const useGetGenerateTeams = () => {
  const context = useContext(GenerateTeamContext);
  if (!context) {
    throw new Error('useGetGenerateTeams must be used within a TeamGenerateProvider');
  }
  return context;
};