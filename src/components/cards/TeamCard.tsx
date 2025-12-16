import { Briefcase, MessageCircle } from 'lucide-react';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    whatsapp?: string;
}

interface TeamCardProps {
    member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
    return (
        <div className="group relative flex flex-col justify-end overflow-hidden rounded-[24px] bg-[#001529] aspect-[3/4] transition-all duration-300 transform hover:scale-[1.02]">
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={400}
                    height={533}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#FF6F00] font-medium text-xs uppercase tracking-widest mb-4">
                    {member.role}
                </p>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <Briefcase className="w-5 h-5" />
                        </a>
                    )}
                    {member.whatsapp && (
                        <a
                            href={member.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-[#25D366] transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none group-hover:border-[#FF6F00]/50 transition-colors duration-300" />
        </div>
    );
};

export default TeamCard;
