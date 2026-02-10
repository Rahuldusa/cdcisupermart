

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";

// import Index from "./pages/Index";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import Kids from "./pages/Kids";
// import Collections from "./pages/Collectionsold";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// // import AdditionalItemsPage from "./pages/collections/AdditionalItemsPage";
// import BlanketsPage from "./pages/collections/BlanketsPage";
// import BedsheetsPage from "./pages/collections/BedsheetsPage";
// import CushionsSofaCoverPage from "./pages/collections/CushionsSofaCoverPage";
// import PillowCollectionPage from "./pages/collections/PillowCollectionPage";
// import DoormatCollectionPage from "./pages/collections/DoormatCollectionPage";
// import TowelCollectionPage from "./pages/collections/TowelCollectionPage";
// import PardaCollectionPage from "./pages/collections/PardaCollectionPage";
// import CurtainsPage from "./pages/collections/CurtainsPage";

// import ECommerceGalleryPage from "./pages/GalleryPage";

// import ContactTable from "./Admin/ContactTable";
// import CollectionTable from "./Admin/Collections/CollectionTable";
// import AddCollection from "./Admin/Collections/AddCollection";
// import CollectionView from "./Admin/Collections/CollectionView";
// import GalleryTable from "./Admin/Gallery/GalleryTable";
// import Dashboard from "./Admin/Dashboard/Dashboard";
// // ✅ Import WhatsApp & ScrollUp
// import ScrollUp from "./components/ScrollUp/ScrollUp";
// import WhatApp from "./components/WhatsApp/WhatApp";
// import ChangePassword from "./Admin/login/ChangePassword";
// import Login from "./Admin/login/Login";
// import AdditionalItemsPage from "./pages/collections/DynamicCollections";
// import GalleryView from "./Admin/Gallery/GalleryView";
// import ProtectedRoute from "./Admin/ProtectedRoute";
// import OffersPage from "./pages/OffersPage";
// import ChatBot from "./pages/ChatBot";

// const queryClient = new QueryClient();

// const AppRoutes = () => {
//   usePageTracking();
  
//   return (
//     <>
//       <WhatApp />
//       <ScrollUp />

//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/men" element={<Men />} />
//         <Route path="/women" element={<Women />} />
//         <Route path="/kids" element={<Kids />} />

//         <Route path="/gallery" element={<ECommerceGalleryPage />} />
//         <Route path="/offers" element={<OffersPage />} />

//         <Route path="/collections" element={<Collections />} />
//         <Route path="/collections/additional-product" element={<AdditionalItemsPage />} />
//         <Route path="/collections/blankets" element={<BlanketsPage />} />
//         <Route path="/collections/bedsheets" element={<BedsheetsPage />} />
//         <Route path="/collections/cushions-sofa-cover" element={<CushionsSofaCoverPage />} />
//         <Route path="/collections/pillow" element={<PillowCollectionPage />} />
//         <Route path="/collections/doormat" element={<DoormatCollectionPage />} />
//         <Route path="/collections/towel" element={<TowelCollectionPage />} />
//         <Route path="/collections/parda" element={<PardaCollectionPage />} />
//         <Route path="/collections/curtains" element={<CurtainsPage />} />

//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Admin Routes */}
//         <Route path="/login" element={<Login />} />

//         <Route path="/dashboard" element={
//           <ProtectedRoute><Dashboard /></ProtectedRoute>
//         } />

//         <Route path="/contact-table" element={
//           <ProtectedRoute><ContactTable /></ProtectedRoute>
//         } />

//         <Route path="/collection-table" element={
//           <ProtectedRoute><CollectionTable /></ProtectedRoute>
//         } />

//         <Route path="/add-collection" element={
//           <ProtectedRoute><AddCollection /></ProtectedRoute>
//         } />

//         <Route path="/edit-collection/:id" element={
//           <ProtectedRoute><AddCollection /></ProtectedRoute>
//         } />

//         <Route path="/collection-view/:id" element={
//           <ProtectedRoute><CollectionView /></ProtectedRoute>
//         } />

//         <Route path="/gallery-table" element={
//           <ProtectedRoute><GalleryTable /></ProtectedRoute>
//         } />

//         <Route path="/admin/gallery/:id" element={
//           <ProtectedRoute><GalleryView /></ProtectedRoute>
//         } />

//         <Route path="/change-password" element={
//           <ProtectedRoute><ChangePassword /></ProtectedRoute>
//         } />

//         {/* Catch-all */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// };



// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />

//       <BrowserRouter>
//         {/* ✅ Show WhatsApp and ScrollUp on all pages */}
//         {/* <WhatApp /> */}
//         {/* <ScrollUp /> */}
        // <ChatBot />

//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/men" element={<Men />} />
//           <Route path="/women" element={<Women />} />
//           <Route path="/kids" element={<Kids />} />

//           <Route path="/gallery" element={<ECommerceGalleryPage />} />
//           <Route path="/offers" element={<OffersPage />} />

//           <Route path="/collections" element={<Collections />} />
//           <Route path="/collections/additional-product" element={<AdditionalItemsPage />} />
//           <Route path="/collections/blankets" element={<BlanketsPage />} />
//           <Route path="/collections/bedsheets" element={<BedsheetsPage />} />
//           <Route path="/collections/cushions-sofa-cover" element={<CushionsSofaCoverPage />} />
//           <Route path="/collections/pillow" element={<PillowCollectionPage />} />
//           <Route path="/collections/doormat" element={<DoormatCollectionPage />} />
//           <Route path="/collections/towel" element={<TowelCollectionPage />} />
//           <Route path="/collections/parda" element={<PardaCollectionPage />} />
//           <Route path="/collections/curtains" element={<CurtainsPage />} />

//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Admin Routes */}
         
//           <Route path="/login" element={<Login />} />
//          <Route
//   path="/dashboard"
//   element={
//     <ProtectedRoute>
//       <Dashboard />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/contact-table"
//   element={
//     <ProtectedRoute>
//       <ContactTable />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/collection-table"
//   element={
//     <ProtectedRoute>
//       <CollectionTable />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/add-collection"
//   element={
//     <ProtectedRoute>
//       <AddCollection />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/edit-collection/:id"
//   element={
//     <ProtectedRoute>
//       <AddCollection />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/collection-view/:id"
//   element={
//     <ProtectedRoute>
//       <CollectionView />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/gallery-table"
//   element={
//     <ProtectedRoute>
//       <GalleryTable />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/admin/gallery/:id"
//   element={
//     <ProtectedRoute>
//       <GalleryView />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/change-password"
//   element={
//     <ProtectedRoute>
//       <ChangePassword />
//     </ProtectedRoute>
//   }
// />

          

//           {/* Catch All */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>

//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
// function usePageTracking() {
//   throw new Error("Function not implemented.");
// }






import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Collections from "./pages/Collectionsold";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// import AdditionalItemsPage from "./pages/collections/AdditionalItemsPage";
import BlanketsPage from "./pages/collections/BlanketsPage";
import BedsheetsPage from "./pages/collections/BedsheetsPage";
import CushionsSofaCoverPage from "./pages/collections/CushionsSofaCoverPage";
import PillowCollectionPage from "./pages/collections/PillowCollectionPage";
import DoormatCollectionPage from "./pages/collections/DoormatCollectionPage";
import TowelCollectionPage from "./pages/collections/TowelCollectionPage";
import PardaCollectionPage from "./pages/collections/PardaCollectionPage";
import CurtainsPage from "./pages/collections/CurtainsPage";

import ECommerceGalleryPage from "./pages/GalleryPage";

import ContactTable from "./Admin/ContactTable";
import CollectionTable from "./Admin/Collections/CollectionTable";
import AddCollection from "./Admin/Collections/AddCollection";
import CollectionView from "./Admin/Collections/CollectionView";
import GalleryTable from "./Admin/Gallery/GalleryTable";
import Dashboard from "./Admin/Dashboard/Dashboard";
// ✅ Import WhatsApp & ScrollUp
import ScrollUp from "./components/ScrollUp/ScrollUp";
import WhatApp from "./components/WhatsApp/WhatApp";
import ChangePassword from "./Admin/login/ChangePassword";
import Login from "./Admin/login/Login";
import AdditionalItemsPage from "./pages/collections/DynamicCollections";
import GalleryView from "./Admin/Gallery/GalleryView";
import ProtectedRoute from "./Admin/ProtectedRoute";
import OffersPage from "./pages/OffersPage";
import usePageTracking from "./usePageTracking";
import ChatBot from "./pages/ChatBot";

const queryClient = new QueryClient();

const AppRoutes = () => {
  usePageTracking();
  
  return (
    <>
      {/* <WhatApp />
      <ScrollUp /> */}
      <ChatBot />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />

        <Route path="/gallery" element={<ECommerceGalleryPage />} />
        <Route path="/offers" element={<OffersPage />} />

        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/additional-product" element={<AdditionalItemsPage />} />
        <Route path="/collections/blankets" element={<BlanketsPage />} />
        <Route path="/collections/bedsheets" element={<BedsheetsPage />} />
        <Route path="/collections/cushions-sofa-cover" element={<CushionsSofaCoverPage />} />
        <Route path="/collections/pillow" element={<PillowCollectionPage />} />
        <Route path="/collections/doormat" element={<DoormatCollectionPage />} />
        <Route path="/collections/towel" element={<TowelCollectionPage />} />
        <Route path="/collections/parda" element={<PardaCollectionPage />} />
        <Route path="/collections/curtains" element={<CurtainsPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        <Route path="/contact-table" element={
          <ProtectedRoute><ContactTable /></ProtectedRoute>
        } />

        <Route path="/collection-table" element={
          <ProtectedRoute><CollectionTable /></ProtectedRoute>
        } />

        <Route path="/add-collection" element={
          <ProtectedRoute><AddCollection /></ProtectedRoute>
        } />

        <Route path="/edit-collection/:id" element={
          <ProtectedRoute><AddCollection /></ProtectedRoute>
        } />

        <Route path="/collection-view/:id" element={
          <ProtectedRoute><CollectionView /></ProtectedRoute>
        } />

        <Route path="/gallery-table" element={
          <ProtectedRoute><GalleryTable /></ProtectedRoute>
        } />

        <Route path="/admin/gallery/:id" element={
          <ProtectedRoute><GalleryView /></ProtectedRoute>
        } />

        <Route path="/change-password" element={
          <ProtectedRoute><ChangePassword /></ProtectedRoute>
        } />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
