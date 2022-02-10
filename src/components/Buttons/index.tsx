import { ReactElement, useCallback } from "react";
import { useCroct, useEvaluation } from "@croct/plug-react";
import { Link } from "react-router-dom";
import "./style.css";
export function PersonaBadge(): ReactElement {
  const persona = useEvaluation<string>("user's persona or else 'unknown'", {
    fallback: "unknown",
  });

  return <span>{persona}</span>;
}

export function TogglePersona(): ReactElement {
  const croct = useCroct();
  const setPersonaDev = useCallback(
    () => croct.user.edit().set("custom.persona", "developer").save(),
    [croct]
  );
  const setPersonaMark = useCallback(
    () => croct.user.edit().set("custom.persona", "marketer").save(),
    [croct]
  );
  const setPersonaHack = useCallback(
    () => croct.user.edit().set("custom.persona", "growth-hacker").save(),
    [croct]
  );
  const setPersonaUnk = useCallback(
    () => croct.user.edit().set("custom.persona", "").save(),
    [croct]
  );

  return (
    <div className="container">
      <Link to="/banner" reloadDocument>
        <button onClick={setPersonaDev}>I'm a developer</button>
      </Link>
      <Link to="/banner" reloadDocument>
        <button onClick={setPersonaMark}>I'm a marketer</button>
      </Link>
      <Link to="/banner" reloadDocument>
        <button onClick={setPersonaHack}>I'm a growth hack</button>
      </Link>
      <Link to="/banner" reloadDocument>
        <button onClick={setPersonaUnk}>Other</button>
      </Link>
    </div>
  );
}
