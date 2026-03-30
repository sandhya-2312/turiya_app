import { Facebook, Twitter, Linkedin, Gitlab } from 'react-feather'
import { publicUrl } from '../utils/publicUrl'

const img = (path) => publicUrl(`img/${path.replace(/^img\//, '')}`)

export default function TeamMemberCard({ member }) {
  const { name, role, img: imgPath, contact } = member

  return (
    <div className="single-team">
      <div className="team-image">
        <img src={img(imgPath)} alt={name} />
      </div>
      <div className="team-content">
        <div className="team-info">
          <h3>{name}</h3>
          <span>{role}</span>
        </div>
        <ul>
          <li>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} className="feather" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <Twitter size={16} className="feather" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={16} className="feather" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="GitLab">
              <Gitlab size={16} className="feather" />
            </a>
          </li>
        </ul>
        <p>
          {contact ? (
            <>
              <a href="#">Contact</a>
              <br />
            </>
          ) : null}
          Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.
        </p>
      </div>
    </div>
  )
}
