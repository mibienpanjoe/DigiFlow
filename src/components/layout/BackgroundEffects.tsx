const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full" />

            <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6F00]/20 rounded-full blur-[80px] animate-float-slow" />

            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px] animate-float-medium" />

            <div className="hidden lg:block absolute top-32 left-[10%] w-24 h-24 border-4 border-[#FF6F00]/30 rounded-full animate-float-medium border-dashed" />

            <div className="hidden lg:block absolute bottom-32 right-[10%] w-16 h-16 bg-gradient-to-tr from-[#FF6F00] to-blue-500 rounded-xl rotate-12 animate-float-slow opacity-60 blur-sm" />
        </div>
    );
};

export default BackgroundEffects;
