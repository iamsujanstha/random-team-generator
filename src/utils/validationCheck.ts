import { ParticipantType } from "@src/pages/homepage/ParticipantList";

export const validationCheck = (participants: ParticipantType[], teams: string[], title: string, onHandleMessage: (message: string) => void,) => {
  const errors = [
    { condition: !title.trim(), message: 'Please enter the title' },
    { condition: teams.length === 0 || teams.some(team => team.trim() === ''), message: 'Please Enter listed Team names' },
    { condition: participants.length === 0 || participants.some(p => !p.name.trim() || p.rating <= 0), message: 'Please Enter Listed Participant Name with Rating' },
  ];

  const error = errors.find(error => error.condition);
  if (error) {
    onHandleMessage(error.message);
    return false;
  }
  else {
    return true;
  }
};
