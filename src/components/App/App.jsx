import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout';

// import { NotFound } from 'pages/NotFound';

import { SharedLayout } from 'components/SharedLayout';

const About = lazy(() => import('pages/About'));
const Home = lazy(() => import('pages/Home'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));
const Products = lazy(() => import('pages/Products'));
const Mission = lazy(() => import('components/Mission'));
const Team = lazy(() => import('components/Team'));
const Reviews = lazy(() => import('components/Reviews'));
console.log(Home);

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Layout>
  );
};
