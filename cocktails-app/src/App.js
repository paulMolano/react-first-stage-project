import CategoryProvider from "./context/CategoryContext";
import { DrinksProvider } from "./context/DrinksContext";
import { ModalProvider } from "./context/ModalContext";
import UsersProvider from "./context/UsersContext";
import { PrincipalRouter } from "./route/PrincipalRouter";

function App() {
  return (
    <>
      <CategoryProvider>
        <DrinksProvider>
          <ModalProvider>
            <UsersProvider>
              <PrincipalRouter />
            </UsersProvider>
          </ModalProvider>
        </DrinksProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
