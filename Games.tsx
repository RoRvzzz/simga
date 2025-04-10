import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Star, Clock, ThumbsUp } from 'lucide-react';
import { usePageView } from '../hooks/usePageView';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  playTime: string;
  isFeatured?: boolean;
  path: string;
}

const games: Game[] = [
  {
    id: 'henry-stickmin',
    title: 'Henry Stickmin Collection',
    description: 'Choose your own adventure with Henry Stickmin in this hilarious stick figure game series',
    image: 'https://images.unsplash.com/photo-1614295635486-9750d6a4bf89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Adventure',
    rating: 4.8,
    playTime: '30+ mins',
    isFeatured: true,
    path: '/games/henry-stickmin'
  },
  {
    id: 'snake',
    title: 'Snake Classic',
    description: 'The classic snake game with a modern twist',
    image: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Arcade',
    rating: 4.5,
    playTime: '5+ mins',
    path: '/games/snake'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    description: 'The timeless puzzle game that never gets old',
    image: 'https://images.unsplash.com/photo-1590666027616-38e0ec7d6c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Puzzle',
    rating: 4.7,
    playTime: '10+ mins',
    isFeatured: true,
    path: '/games/tetris'
  },
  {
    id: '2048',
    title: '2048',
    description: 'Merge tiles and reach 2048 in this addictive puzzle game',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Puzzle',
    rating: 4.6,
    playTime: '15+ mins',
    path: '/games/2048'
  },
  {
    id: 'pacman',
    title: 'Pac-Man',
    description: 'Guide Pac-Man through the maze while avoiding ghosts',
    image: 'https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Arcade',
    rating: 4.9,
    playTime: '10+ mins',
    isFeatured: true,
    path: '/games/pacman'
  },
  {
    id: 'dino',
    title: 'Chrome Dino Game',
    description: 'Help the dinosaur jump over cacti and avoid obstacles',
    image: 'https://images.unsplash.com/photo-1590256518627-cced59d11da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Arcade',
    rating: 4.4,
    playTime: '∞',
    path: '/games/dino'
  }
];

function Games() {
  const [shootingStars, setShootingStars] = useState<{id: number, top: string, left: string, delay: string}[]>([]);
  const [cosmicDust, setCosmicDust] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  usePageView();

  useEffect(() => {
    // Create shooting stars
    const createShootingStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 15}s`
        });
      }
      setShootingStars(stars);
    };

    // Create cosmic dust particles
    const createCosmicDust = () => {
      const dust = [];
      for (let i = 0; i < 30; i++) {
        dust.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          delay: `${Math.random() * 15}s`
        });
      }
      setCosmicDust(dust);
    };

    createShootingStars();
    createCosmicDust();
    const starsInterval = setInterval(createShootingStars, 15000);
    const dustInterval = setInterval(createCosmicDust, 30000);

    return () => {
      clearInterval(starsInterval);
      clearInterval(dustInterval);
    };
  }, []);

  const categories = Array.from(new Set(games.map(game => game.category)));
  const featuredGames = games.filter(game => game.isFeatured);
  const filteredGames = selectedCategory 
    ? games.filter(game => game.category === selectedCategory)
    : games;

  return (
    <div className="min-h-screen starry-bg relative overflow-hidden">
      {/* Cosmic dust particles */}
      {cosmicDust.map(dust => (
        <div
          key={dust.id}
          className="cosmic-dust"
          style={{
            top: dust.top,
            left: dust.left,
            width: dust.size,
            height: dust.size,
            animationDelay: dust.delay
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div 
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay
          }}
        />
      ))}

      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="link-item">
            <ArrowLeft className="link-icon" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold neon-text glow-text">Built-in Games</h1>
        </div>

        {/* Featured Games */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 neon-text-orange">
            <Star className="w-6 h-6" />
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map(game => (
              <Link
                key={game.id}
                to={game.path}
                className="neon-glass group hover:neon-border-orange transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold neon-text-orange">{game.title}</h3>
                    <p className="text-sm text-gray-300">{game.description}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400">{game.playTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              !selectedCategory 
                ? 'bg-purple-600 text-white neon-border-blue' 
                : 'bg-black/30 hover:bg-purple-900/50'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Games
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-purple-600 text-white neon-border-blue' 
                  : 'bg-black/30 hover:bg-purple-900/50'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map(game => (
            <Link
              key={game.id}
              to={game.path}
              className="neon-glass group hover:neon-border-blue transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-black/50 border border-purple-500/30">
                    {game.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 neon-text-blue">{game.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{game.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400">{game.playTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;