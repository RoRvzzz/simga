import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageView } from '../hooks/usePageView';

function Resume() {
  usePageView();

  return (
    <div className="min-h-screen starry-bg relative overflow-hidden">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="link-item">
            <ArrowLeft className="link-icon" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold neon-text glow-text">Resume</h1>
        </div>

        <div className="neon-glass p-8">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <p className="text-gray-400">This section is under development.</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;