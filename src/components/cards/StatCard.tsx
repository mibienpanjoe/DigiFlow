interface StatCardProps {
    value: string;
    label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
    return (
        <div className="flex flex-col items-center gap-2 pt-6 md:pt-0 border-t border-white/5 md:border-none text-center">
            <div className="relative pb-4">
                <p className="text-[#FF6F00] text-glow text-5xl md:text-6xl font-bold tracking-tight">
                    {value}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#FF6F00]/60 shadow-[0_0_8px_rgba(255,111,0,0.8)]" />
            </div>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest mt-2">
                {label}
            </p>
        </div>
    );
};

export default StatCard;
