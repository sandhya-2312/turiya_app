import TeamMemberCard from './TeamMemberCard'

const TEAM_MEMBERS = [
  {
    name: 'Josh Buttler',
    role: 'CEO & Founder',
    img: 'team-image/1.png',
    contact: true,
  },
  { name: 'Alex Maxwel', role: 'Marketing Manager', img: 'team-image/2.png' },
  { name: 'Janny Cotller', role: 'Web Developer', img: 'team-image/3.png' },
  { name: 'Jason Statham', role: 'UX/UI Designer', img: 'team-image/4.png' },
]

export default function TeamSection() {
  return (
    <section className="team-area ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>Our Awesome Team</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
