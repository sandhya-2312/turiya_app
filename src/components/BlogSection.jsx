import { Plus } from 'react-feather'
import ShapesBundle from './ShapesBundle'
import { blogPosts } from '../data/bigDataPage'
import { publicImg } from '../utils/publicUrl'

export default function BlogSection() {
  return (
    <section className="blog-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Story</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div className={post.colClass} key={post.title}>
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <a href="#">
                    <img src={publicImg(post.img)} alt={post.alt} />
                  </a>
                </div>
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>{post.date}</li>
                    </ul>
                  </div>
                  <h3>
                    <a href="#">{post.title}</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                  <a href="#" className="learn-more-btn">
                    Read Story <Plus size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShapesBundle />
    </section>
  )
}
