import { Linkedin, Facebook } from 'lucide-react';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    facebook?: string;
    whatsapp?: string;
}

interface TeamCardProps {
    member: TeamMember;
}

const WhatsAppIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const SocialButton = ({ href, icon, colorClass }: { href: string; icon: React.ReactNode; colorClass?: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white hover:border-white hover:-translate-y-1 ${colorClass}`}
    >
        {icon}
    </a>
);

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
                    {member.facebook && (
                        <SocialButton
                            href={member.facebook}
                            icon={<Facebook className="w-5 h-5" />}
                            colorClass="hover:text-[#1877F2]"
                        />
                    )}
                    {member.linkedin && (
                        <SocialButton
                            href={member.linkedin}
                            icon={<Linkedin className="w-5 h-5" />}
                            colorClass="hover:text-[#0A66C2]"
                        />
                    )}
                    {member.whatsapp && (
                        <SocialButton
                            href={member.whatsapp}
                            icon={<WhatsAppIcon />}
                            colorClass="hover:text-[#25D366]"
                        />
                    )}
                </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none group-hover:border-[#FF6F00]/50 transition-colors duration-300" />
        </div>
    );
};

export default TeamCard;
