import React from 'react';
import AboutCoreValues from '@/assets/data/AboutData';
import BoardOfDirectives from '@/assets/data/BoardData';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[75px] md:pt-[150px]">
      <section className="container flex flex-col gap-10 max-md:px-5 max-md:py-6 md:min-h-[500px]   lg:min-h-[800px] lg:gap-16">
        <div className="flex w-full flex-col gap-7 sm:w-2/3 lg:w-[915px]">
          <h1 className="font-google text-3xl lg:text-[64px] lg:leading-[84px]">
            Our Commitment to Teamwork,
            <span className="text-secondary"> Trust</span> , and Integrity
          </h1>
          <p className="text-base">
            We believe in the fundamental principles of teamwork, trust, and
            integrity as the cornerstone of our success.
          </p>
        </div>
        <img
          src="/images/Union.png"
          alt="hero"
          className="w-full rounded-[22px]"
        />
      </section>

      <section className="container flex scroll-m-20 items-center justify-between max-md:flex-col-reverse max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-5   lg:min-h-[800px] lg:flex-row-reverse">
        <img
          src="/images/about.png"
          alt="about"
          width={520}
          height={590}
          className="rounded-[22px] sm:w-1/2 lg:w-[518px]"
        />
        <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
          <p className="font-google text-xl font-medium">Teamwork</p>
          <p className="text-base">
            We recognize that the collective strength of our team far surpasses
            individual capabilities. We foster an environment where
            collaboration is not only encouraged but celebrated. By leveraging
            diverse perspectives and skills, we create a dynamic synergy that
            propels us towards innovation and excellence.
          </p>
          <p className="font-google text-xl font-medium">Trust</p>
          <p className="text-base">
            Trust is the bedrock of any successful relationship, and within our
            company, it forms the foundation of every interaction. We trust in
            the competence and commitment of each team member, fostering an
            atmosphere of mutual reliance. This trust extends beyond our
            internal teams to our clients, partners, and stakeholders, building
            enduring relationships based on transparency and reliability.
          </p>
          <p className="font-google text-xl font-medium">Integrity:</p>
          <p className="text-base">
            Integrity is the compass that guides our decisions and actions. We
            uphold the highest ethical standards in all that we do. Honesty,
            transparency, and accountability are non-negotiable values embedded
            in our corporate culture. We believe that integrity is not just a
            commitment to doing what is right but is the essence of who we are
            as a company.
          </p>
          <p className="text-base">
            By championing teamwork, trust, and integrity, we aim not only to
            achieve our business goals but to create a workplace culture where
            every individual thrives, and our collective success becomes a
            testament to the strength of these core values.
          </p>
          <p className="text-base">
            At Tryve technologies, we don&apos;t just work together; we
            collaborate, trust, and act with integrity, ensuring that we not
            only meet but exceed the expectations of our team members, clients,
            and partners alike.
          </p>
        </div>
      </section>
      <section className="container flex scroll-m-20 flex-col items-center justify-between max-md:flex-col-reverse max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-5   lg:min-h-[800px] ">
        <h1 className="font-google text-3xl lg:text-5xl">
          TRYVE <span className="text-secondary"> TECHNOLOGIES</span> NIGERIA
        </h1>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            The Triad of Digital Expertise, Business Insight, and Empowering
            Education
          </h2>
          <p className="text-base">
            In an era dominated by digital landscapes and dynamic market trends,
            choosing the right partner for your business endeavors is paramount.
            Imagine a seamless blend of digital marketing finesse, strategic
            business analysis, and an enriching power class that equips you for
            the challenges ahead. This is the unique proposition offered by
            companies that have mastered the art of harmonizing diverse yet
            interconnected services. Let&apos;s delve into why working with such
            a comprehensive provider is a game-changer for businesses seeking
            not only survival but flourishing in the competitive business arena.
          </p>
          <p className="font-google text-xl font-medium">
            Navigating the Online Horizon
          </p>
          <p className="text-base">
            In the realm of digital marketing, the company brings forth a wealth
            of experience and proficiency. From crafting compelling online
            campaigns to optimizing your digital footprint, their team of
            experts ensures that your brand not only stands out but flourishes
            in the vast online landscape. Through innovative strategies, they
            pave the way for increased visibility, enhanced user engagement,
            and, ultimately, improved conversion rates.
          </p>
          <p className="font-google text-xl font-medium">
            Decoding the Data Universe
          </p>
          <p className="text-base">
            The synergy between digital marketing and business analysis is where
            the magic happens. This company doesn&apos;t just stop at creating a
            buzz; they delve deep into the analytics. Through meticulous
            business analysis, they decode the data universe, offering insights
            that become the cornerstone of informed decision-making. This
            invaluable understanding of market dynamics and consumer behavior
            ensures that every digital move is not just strategic but tailored
            to resonate with your target audience.
          </p>
          <p className="font-google text-xl font-medium">
            The Power Class Advantage
          </p>
          <p className="text-base">
            But the partnership extends beyond service delivery; it&apos;s a
            commitment to empowering clients. Enter the Power Class—an
            educational initiative designed to arm you with the skills and
            knowledge needed to navigate the complexities of the digital age.
            From mastering the latest marketing trends to honing business
            analysis techniques, this class is a gateway to staying ahead in an
            ever-evolving business landscape. It&apos;s not just a class;
            it&apos;s an investment in your continuous growth and success.
          </p>
          <p className="font-google text-xl font-medium">
            The Flow of Variety and Eloquent Harmony
          </p>
          <p className="text-base">
            The beauty of choosing a company offering this triumvirate of
            services lies in the seamless flow of variety. The transition from
            digital marketing strategies to business analysis is not a
            disjointed leap but a smooth continuum. Your business benefits from
            a holistic approach where each facet complements and enhances the
            effectiveness of the other. It&apos;s not just about ticking boxes;
            it&apos;s about crafting an eloquent narrative for your brand—one
            that speaks to your audience in a language they understand.
          </p>
          <p className="font-google text-xl font-medium">
            The Elegance of Comprehensive Solutions
          </p>
          <p className="text-base">
            This integrated approach doesn&apos;t just solve problems; it
            prevents them. It&apos;s not about isolated victories; it&apos;s
            about sustained success. When your digital marketing strategy is
            informed by meticulous business analysis, and your team is armed
            with the knowledge from the Power Class, you&apos;re not just
            tackling challenges; you&apos;re poised to turn them into
            opportunities.
          </p>
          <h1 className="font-google text-3xl lg:text-5xl">
            Why Choose <span className="text-secondary"> Tryve </span>{' '}
            technologies Nigeria as your Digital Marketing partners in Nigeria?
          </h1>
          <p className="text-base">
            We help brands achieve their marketing goals through digital media
            and technologies. Choosing a company that seamlessly integrates
            digital marketing, business analysis, and a Power Class into its
            repertoire is a strategic investment in your business&apos;s
            longevity and success. It&apos;s a journey—a partnership—where the
            destination is not just a thriving business but an empowered and
            informed journey toward excellence in the digital age
          </p>
          <p className="text-base">
            Hiring Us to Handle Your Social Media Marketing Campaigns Gives You
            and Your Team More Time to Focus on Other Aspects of Your Brand.
          </p>
          <p className="text-base">
            Whether You Are a Setup or an Established Brand, We Will Help You
            Develop Your Brand from Scratch or Boost Your Brand Authority to the
            Top Ahead of Your Competitors.
          </p>
          <p className="text-base">
            We at Tryve See Ourselves as an Extension of Your Business, As Your
            Success Is Our Success. One Team. One Goal!!
          </p>
          <p className="text-base">
            In a competitive digital landscape, choosing the right partner for
            your business&apos;s growth is paramount. Tryve Technologies emerges
            as a beacon of comprehensive solutions, seamlessly weaving together
            digital marketing, business analysis, and an educational powerhouse.
            Here&apos;s why discerning customers should opt for this unique
            blend of services.
          </p>
          <p className="font-google text-xl font-medium">
            Holistic Digital Mastery:
          </p>
          <p className="text-base">
            Tryve technologies stands out by offering a multifaceted approach to
            digital marketing. From strategic social media campaigns to SEO
            mastery, the company&apos;s digital marketing expertise ensures that
            your brand not only stands out but thrives in the ever-evolving
            online sphere. The commitment to staying ahead of industry trends
            guarantees that your business harnesses the power of the latest and
            most effective digital strategies.
          </p>
          <p className="font-google text-xl font-medium">
            Strategic Business Insight:
          </p>
          <p className="text-base">
            Business analysis is the cornerstone of informed decision-making,
            and Tryve technologies excels in unraveling the intricate web of
            data. By delving deep into analytics and market trends, the team
            provides actionable insights that pave the way for optimized
            processes, enhanced efficiency, and ultimately, heightened business
            success. The synergy of digital marketing and business analysis
            ensures that strategies are not just effective but strategically
            aligned with overarching business objectives.
          </p>
          <p className="font-google text-xl font-medium">
            Educational Empowerment through Power Class:
          </p>
          <p className="text-base">
            Beyond services, Tryve technologies takes a pioneering step by
            offering a Power Class. This educational arm is designed to equip
            professionals and businesses with the knowledge and skills necessary
            to navigate the complexities of the digital landscape. This
            commitment to education not only sets Tryve technologies apart as a
            thought leader but also ensures that clients are empowered to make
            informed decisions and lead confidently in their respective
            industries.
          </p>
          <p className="font-google text-xl font-medium">
            Customization at Its Core:
          </p>
          <p className="text-base">
            One size does not fit all, and Tryve technologies understands this
            implicitly. The company&apos;s commitment to client-centric
            solutions means that every strategy, analysis, and educational
            offering is tailored to meet the unique needs of each client. This
            personalized approach ensures that clients receive not just a
            service but a partnership crafted for their specific goals and
            challenges.
          </p>{' '}
          <p className="font-google text-xl font-medium">
            Seamless Integration for Maximum Impact:
          </p>
          <p className="text-base">
            What sets Tryve Technologies apart is the seamless integration of
            its services. The flow from digital marketing strategies to business
            analysis insights, all complemented by educational empowerment,
            creates a powerful, synergistic effect. This integrated approach
            ensures that every facet of your business is addressed cohesively,
            resulting in a harmonious and impactful digital transformation.
          </p>{' '}
          <p className="font-google text-xl font-medium">
            Choose the triad; Choose the future.
          </p>
          <p className="text-base">Choose Tryve</p>{' '}
        </div>
      </section>

      <section className="container flex flex-col items-center gap-10 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-10   lg:min-h-[700px]">
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="text-center font-google text-3xl lg:text-[40px] lg:leading-[52px]">
            <span className="text-primary">Meet </span> The
            <span className="text-secondary"> Board</span>
          </h1>
          <p className="text-center text-base">
            Visionary leaders who guide our company towards excellence
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:pt-12 lg:pt-16">
            {BoardOfDirectives.map((board, idx) => (
              <div className="flex flex-col gap-5" key={idx}>
                <img
                  alt={board.name}
                  width={330}
                  height={330}
                  className="h-[330px] rounded-[22px] border-2 border-secondary shadow-round"
                  src={board.image}
                />
                <p className="font-google text-xl font-light">{board.name}</p>
                <p className="text-sm font-light">{board.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
