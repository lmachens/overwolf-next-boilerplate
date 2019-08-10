import { useEffect, useState } from "react";

function Launchers() {
  const [launchers, setLaunchers] = useState([]);

  function handleRunningLaunchersInfo(result) {
    console.log("handleRunningLaunchersInfo", result);
    setLaunchers(result.launchers);
  }

  function handleLaunched(launcher) {
    console.log("handleLaunched", launcher);
  }

  function handleUpdated(launcher) {
    console.log("handleUpdated", launcher);
  }

  function handleTerminated(launcher) {
    console.log("handleTerminated", launcher);
  }

  function updateLaunchers() {
    overwolf.games.launchers.getRunningLaunchersInfo(
      handleRunningLaunchersInfo
    );
  }

  useEffect(() => {
    overwolf.games.launchers.onLaunched.addListener(handleLaunched);
    overwolf.games.launchers.onUpdated.addListener(handleUpdated);
    overwolf.games.launchers.onTerminated.addListener(handleTerminated);
    updateLaunchers();

    return () => {
      overwolf.games.launchers.onLaunched.removeListener(handleLaunched);
      overwolf.games.launchers.onUpdated.removeListener(handleUpdated);
      overwolf.games.launchers.onTerminated.removeListener(handleTerminated);
    };
  }, []);

  return (
    <div>
      <h1>Launchers</h1>
      <button onClick={updateLaunchers}>Update</button>
      {launchers.map(launcher => (
        <p key={launcher.id}>{launcher.title}</p>
      ))}
    </div>
  );
}

export default Launchers;
