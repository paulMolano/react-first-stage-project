import CategoryProvider from "./context/CategoryContext";
import { DrinksProvider } from "./context/DrinksContext";
import { ModalProvider } from "./context/ModalContext";
import UsersProvider from "./context/UsersContext";
import { PrincipalRouter } from "./route/PrincipalRouter";

function App() {
  return (
    <>
      <UsersProvider>
        <CategoryProvider>
          <DrinksProvider>
            <ModalProvider>
              <PrincipalRouter />
            </ModalProvider>
          </DrinksProvider>
        </CategoryProvider>
      </UsersProvider>
    </>
  );
}

export default App;
