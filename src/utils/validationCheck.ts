import { ParticipantType } from "@src/pages/homepage/ParticipantList";

export const validationCheck = (
  participants: ParticipantType[], teams: string[], title: string, onHandleMessage: (message: string) => void
) => {
  const errors = [
    {
      condition: !title.trim(),
      message: 'Please enter a title.'
    },
    {
      condition: teams.length === 0 || teams.some(team => team.trim() === ''),
      message: 'Please enter names for all listed teams.'
    },
    {
      condition: participants.length === 0 || participants.some(p => !p.name.trim() || p.rating <= 0),
      message: 'Please enter a name and a valid rating for each participant.'
    },
    {
      condition: participants.length < teams.length,
      message: 'The number of participants cannot be less than the number of teams.'
    },
  ];

  const error = errors.find(error => error.condition);
  if (error) {
    return onHandleMessage(error.message);
  }

  return true;
};
