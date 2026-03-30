import { publicImg } from '../utils/publicUrl'

export default function ShapesBundle() {
  return (
    <>
      <div className="shape1">
        <img src={publicImg('shape1.png')} alt="" />
      </div>
      <div className="shape2 rotateme">
        <img src={publicImg('shape2.svg')} alt="" />
      </div>
      <div className="shape3">
        <img src={publicImg('shape3.svg')} alt="" />
      </div>
      <div className="shape4">
        <img src={publicImg('shape4.svg')} alt="" />
      </div>
      <div className="shape6 rotateme">
        <img src={publicImg('shape4.svg')} alt="" />
      </div>
      <div className="shape7">
        <img src={publicImg('shape4.svg')} alt="" />
      </div>
      <div className="shape8 rotateme">
        <img src={publicImg('shape2.svg')} alt="" />
      </div>
    </>
  )
}
