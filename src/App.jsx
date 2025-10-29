import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">What's in your kitchen?</h1>
        <p className="text-xl text-gray-600 mb-8">
          Find delicious recipes based on the ingredients you have at home.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 mb-6">
            Start by entering an ingredient you have, and we'll find recipes you can make!
          </p>
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-blue-700">
              The application is working! More features coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Taylor's Kitchen Helper</h2>
        <p className="text-gray-700 mb-4">
          Taylor's Kitchen Helper is designed to help busy professionals like you find 
          delicious recipes based on the ingredients you have at home.
        </p>
        <p className="text-gray-700">
          Whether you're looking to cook with specific ingredients, need quick meal ideas, 
          or want to try something new, our app makes it easy to discover recipes that 
          fit your needs.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
