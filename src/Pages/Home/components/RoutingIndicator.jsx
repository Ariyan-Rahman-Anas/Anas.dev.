import { TbArrowLoopRight } from "react-icons/tb"
import { Link } from "react-router-dom"

const RoutingIndicator = ({navigateTo}) => {
  return (
      <div className="absolute right-5 bottom-5 ">
          <Link
              to={navigateTo}
              className="text-teal-700 group-hover:text-teal-500 duration-500 text-2xl "
          >
              <TbArrowLoopRight></TbArrowLoopRight>
          </Link>
      </div>
  )
}
export default RoutingIndicator