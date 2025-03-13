import Button from "@components/Button";
import Input from "@components/Input";
import ParticipantList from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";
import { useState } from "react";

const TeamGenerator: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <div className="w-full">
      <header className=' bg-[#43464d] p-8 flex gap-4 justify-center'>
        <div className=''>
          <label className="text-white font-semibold">Title</label>
          <Input
            placeholder='Please enter title'
            onChange={(name) => setName(name)}
            value={name}
          />
        </div>
      </header>
      <section className="flex justify-center">
        <div className="w-2/3 text-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <ParticipantList />
            <TeamList />
          </div>
          <Button
            className="w-1/2 my-4"
            label="Generate Teams"
            onClick={() => console.log("Teams Generated!")}
          />
        </div>
      </section>
    </div>
  );
};

export default TeamGenerator;
