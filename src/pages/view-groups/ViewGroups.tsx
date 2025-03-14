import { useLocation } from "react-router";
import MessageDrawer from "@src/components/core/MessageDrawer";
import { GroupedTeamType } from "@src/context/GenerateTeam.context";
import useDrawer from "@src/hooks/useDrawer";
import { useGetGenerateTeams } from "@src/hooks/useGetGenerateTeam";


const ViewGroups = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const encodedData = params.get('data');

  const { groupedTeams: generatedTeams, shareableLink, title } = useGetGenerateTeams();
  const { isDrawerOpen, drawerContent, openDrawer } = useDrawer();

  const groupedTeams: GroupedTeamType[] = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : generatedTeams;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareableLink);
    openDrawer("Link copied to clipboard!");
  };

  const totalParticipants = groupedTeams.reduce((total, team) => total + team.members.length, 0);

  return (
    <main className="w-full">
      <header className="bg-[#43464d] p-8 text-white">
        <div className="md:ml-76">
          <h1 className="font-bold text-2xl">
            {title || groupedTeams[0].title}
          </h1>
          <p className="text-gray-400">
            {totalParticipants} {totalParticipants === 1 ? "participant" : "participants"} in{" "}
            {groupedTeams.length} {groupedTeams.length === 1 ? "team" : "teams"}
          </p>
        </div>
        <div></div>
      </header>

      <div className="flex flex-col md:items-center justify-center p-4">
        <section className="mb-4">
          <label className="font-semibold text-gray-500 text-sm">Share Link <span className="font-light">(public draw)</span>
            <a href={shareableLink} target="_blank">
              <i className="fa fa-external-link ml-2 cursor-pointer" aria-label="New Tab" title="New tab" />
            </a>
          </label>
          <div className="flex items-center border border-gray-300 my-2">
            <input
              className="px-4 py-2 w-[600px] focus:outline-none bg-white h-11 text-md"
              readOnly
              value={shareableLink}
              aria-label="Shareable Link"
            />
            <button
              className=" bg-gray-300 p-[10px] text-gray-600 cursor-pointer"
              onClick={copyToClipboard}
              aria-label="Copy to clipboard"
              title="Copy to clipboard"
            >
              <i className="fa fa-clipboard" />
            </button>
          </div>
        </section>
        <div className="bg-gray-300 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
          {groupedTeams?.map(({ totalRating, teamName = "Team", members }, index) => (
            <section key={index} className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-lg font-bold">
                {teamName}
                <span className="text-gray-500 ml-1 font-semibold">({members.length})</span>
              </h2>

              <ul className="my-2 text-sm text-gray-700 relative mb-4">
                {members?.map(({ name, rating }, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <span className="w-12 bg-gray-200 p-3 text-center font-semibold text-gray-400">
                      {idx + 1}
                    </span>
                    <input
                      className="px-4 py-2 w-full focus:outline-none bg-white border border-gray-300 h-11 text-md"
                      readOnly
                      value={name}
                    />
                    <span className="px-4 py-1 ml-4 bg-amber-700 text-white">
                      {rating}
                    </span>
                  </li>
                ))}
                <span className="absolute right-4 text-gray-500 font-semibold">{totalRating}</span>
              </ul>
            </section>
          ))}
        </div>
      </div>
      {isDrawerOpen && (
        <MessageDrawer isOpen={isDrawerOpen} content={drawerContent} type='success' />
      )}
    </main>
  );
};

export default ViewGroups;
