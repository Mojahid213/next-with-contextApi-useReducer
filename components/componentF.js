import { UserContext } from "../pages";

export default function ComponentF() {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <h3>User content value - {user}</h3>
            </div>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}
