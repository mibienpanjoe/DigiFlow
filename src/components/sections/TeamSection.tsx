import TeamCard from '../cards/TeamCard';
import { team } from '../../data/team';
import Reveal from '../ui/Reveal';

const TeamSection = () => {
    return (
        <section id="team" className="relative py-12 lg:py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1500px] mx-auto">
                <Reveal width="100%">
                    <div className="w-full max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-white tracking-tight text-4xl md:text-5xl font-extrabold leading-tight px-4 pb-4">
                            Rencontrez notre incroyable équipe.
                        </h2>
                        <p className="text-[#9E9E9E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Des experts passionnés par l'innovation numérique à Ouagadougou, dévoués à propulser votre croissance.
                        </p>
                    </div>
                </Reveal>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-6 sm:pb-0 sm:mx-0 sm:px-0 scrollbar-hide">
                    {team.map((member, index) => (
                        <div key={member.id} className="min-w-[85vw] sm:min-w-0 snap-center">
                            <Reveal delay={index * 0.1} variant="fade-up" width="100%">
                                <TeamCard member={member} />
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
