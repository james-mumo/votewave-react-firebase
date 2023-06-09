import React from "react"
import { Link } from "react-router-dom"

const UnAuthHeader = () => {
  return (
    <nav
      className="bg-gradient-to-r from-blue-400 to-blue-600 flex justify-between items-center py-4 px-8 sticky top-0 z-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <Link to="/" className="text-white hover:text-gray-300">
        <div className="text-lg font-bold text-white">CSP TimeTabler</div>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </Link>
        <Link to="/view-elections" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Election
          </button>
        </Link>
        <Link to="/create" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create New
          </button>
        </Link>
        <Link to="/create-election" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Election
          </button>
        </Link>
        <Link to="/create-poll" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Poll
          </button>
        </Link>
        <Link to="/view-as-voter" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View As Voter
          </button>
        </Link>
        <Link to="/auth" className="text-white hover:text-gray-300">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login/Signup
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default UnAuthHeader
