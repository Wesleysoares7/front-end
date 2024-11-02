import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route.tsx";
import UserProvider from "./context/userProvider.tsx";
import FavoritesProvider from "./context/favoritesProvider.tsx";
import RecipesProvider from "./context/recipesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RecipesProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </RecipesProvider>
    </UserProvider>
  </StrictMode>
);
