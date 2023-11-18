import { Routes, Route } from "react-router";

import loadable from "@loadable/component";

//load pages lazily
const LayoutLazyComponent = loadable(() => import("./layout/Layout"));
const LoadingLazyComponent = loadable(() => import("./Loader/PageLoader"));
const HomeLazyComponent = loadable(() => import("./home/Home"));
const OwnersLazyComponent = loadable(() => import("./owners/Owners"));
const Page404LazyComponent = loadable(() =>
  import("./page404/page404")
);

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LayoutLazyComponent fallback={<LoadingLazyComponent />} />}
        >

        {/* This component will render when there is no match with child/nested routes */}
        <Route index element={<HomeLazyComponent />} />

        <Route
          path="/owners"
          element={<OwnersLazyComponent fallback={<LoadingLazyComponent />} />} 
        />

        <Route
          path="*"
          element={<Page404LazyComponent fallback={<LoadingLazyComponent />} />}
        />

        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
