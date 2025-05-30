const Interactive3DCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`group perspective-1000 ${className}`}>
      <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform translate-z-4 group-hover:translate-z-8 transition-transform duration-500"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Interactive3DCard;
