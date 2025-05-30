const FloatingElements = () => {
  return (
    <>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200 opacity-30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-200 opacity-40 rounded-full animate-float-medium"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-blue-300 opacity-50 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-purple-300 opacity-30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/2 w-6 h-6 bg-blue-400 opacity-40 rounded-full animate-float-medium"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-32 right-1/4 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 rotate-45 animate-float-rotate"></div>
        <div className="absolute bottom-60 left-20 w-7 h-7 bg-gradient-to-r from-purple-400 to-blue-400 opacity-25 rotate-45 animate-float-rotate-reverse"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-80 right-10 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-300 opacity-30 animate-float-triangle"></div>
        <div className="absolute bottom-80 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-purple-300 opacity-35 animate-float-triangle-reverse"></div>
      </div>

      {/* 3D Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-br-full animate-pulse-3d"></div>
      </div>
      
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-bl from-purple-100 to-transparent opacity-50 rounded-bl-full animate-pulse-3d-delayed"></div>
      </div>
      
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-tr from-blue-100 to-transparent opacity-50 rounded-tr-full animate-pulse-3d"></div>
      </div>
      
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-tl from-purple-100 to-transparent opacity-50 rounded-tl-full animate-pulse-3d-delayed"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-grid-move-x"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-grid-move-y"></div>
      </div>
    </>
  );
};

export default FloatingElements;