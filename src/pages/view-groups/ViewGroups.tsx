import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import MessageDrawer from "@src/components/core/MessageDrawer";
import { GroupedTeamType } from "@src/context/GenerateTeam.context";
import useDrawer from "@src/hooks/useDrawer";
import { useGetGenerateTeams } from "@src/hooks/useGetGenerateTeam";
import Item from "@src/pages/homepage/components/Item";
import ShareLink from "@src/pages/view-groups/components/ShareLink";
import Header from "@src/components/core/Header";


const ViewGroups = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const encodedData = params.get('data');

  const { groupedTeams: generatedTeams, shareableLink, title, setShareableLink } = useGetGenerateTeams();
  const groupedTeams: GroupedTeamType[] = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : generatedTeams;
  const { isDrawerOpen, drawerContent, openDrawer } = useDrawer();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareableLink);
    openDrawer("Link copied to clipboard!");
  };

  const totalParticipants = groupedTeams.reduce((total, team) => total + team.members.length, 0);

  useLayoutEffect(function syncShareableUrl() {
    if (window.location)
      setShareableLink(window.location.href)
  }, [setShareableLink])
  console.log({ generatedTeams }, { groupedTeams })
  return (
    <main className="w-full">
      <Header>
        <div className="grid md:grid-cols-6">
          <span>
            <h1 className="font-bold text-2xl">
              {title || groupedTeams[0].title}
            </h1>
            <p className="text-gray-400">
              {totalParticipants} {totalParticipants === 1 ? "participant" : "participants"} in{" "}
              {groupedTeams.length} {groupedTeams.length === 1 ? "team" : "teams"}
            </p>
          </span>
        </div>
      </Header>

      <div className="flex flex-col md:items-center justify-center md:p-4 p-1">
        <ShareLink
          onCopyLink={copyToClipboard}
          shareableLink={shareableLink}
        />
        <div className="bg-gray-300 lg:w-2/3 grid grid-cols-1 md:grid-cols-2  md:gap-12 gap-8 md:p-4 p-2">
          {groupedTeams?.map(({ totalRating, teamName = "Team", members }, index) => (
            <section key={index} className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-lg font-bold">
                {teamName}
                <span className="text-gray-500 ml-1 font-semibold">({members.length})</span>
              </h2>
              <ul className="my-2 text-sm text-gray-700 relative mb-4">
                {members?.map(({ name, rating }, idx) => (
                  <li key={idx} className="flex justify-between items-center mb-2 gap-4">
                    <Item
                      asLabel
                      name={name}
                      placeholder={`Participant ${index + 1}`}
                      className="flex-1"
                      index={idx + 1}
                      isDisable
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
