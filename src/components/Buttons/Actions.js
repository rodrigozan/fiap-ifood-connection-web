import { Link } from "react-router-dom";

const Actions = () => {
  function textColors(color, force, action) {
    const className = `border-transparent p-3 pl-0 text-${color}-${force} ${action}`
    return className
  }

  return (
    <div className="container">
      <div className="flex justify-start">
        <Link to="/admin/produto/123">
          <div
            className={textColors("amber", "500", "edit")}
          >
            <i className="fas fa-edit"></i>
          </div>
        </Link>
        <button
          className={textColors("red", "700", "delete")}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Actions