export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20 mx-auto mb-6 animate-pulse">
              <svg className="w-20 h-20 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            {/* Rotating Ring Around Icon */}
            <div className="absolute inset-0 w-32 h-32 border-2 border-transparent border-t-white border-r-white rounded-full animate-spin mx-auto opacity-30"></div>
            <div
              className="absolute inset-2 w-28 h-28 border border-transparent border-b-purple-400 border-l-blue-400 rounded-full animate-spin mx-auto opacity-50"
              style={{ animationDirection: "reverse" }}
            ></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          🚀 Work in Progress
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Hey there! I’m polishing up this site to make it even better.
          Hang tight, it’ll be back online soon!
        </p>

        <div className="text-gray-500 text-sm">robby | See you soon 👋</div>
      </div>
    </div>
  );
}
