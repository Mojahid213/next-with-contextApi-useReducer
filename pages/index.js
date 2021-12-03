import ComponentC from "../components/componentC";
import { createContext } from "react";

export const UserContext = createContext();

export default function Home() {
  return (
    <>
      <UserContext.Provider value={"Mojahid"}>
        <ComponentC />
      </UserContext.Provider>
    </>
  );
}
