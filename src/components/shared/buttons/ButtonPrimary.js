import Link from "next/link";

const ButtonPrimary = ({ children, url, className, onClick }) => {
  // If `url` is provided, use a `Link` component, otherwise use a `button`
  if (url) {
    return (
      <Link
        href={url}
        className={`text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} transition-all duration-300`}
      >
        {children ? children : ""}
      </Link>
    );
  } else {
    
    return (
      <button
        className={`text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} transition-all duration-300`}
        onClick={onClick} 
      >
        {children ? children : ""}
      </button>
    );
  }
};

export default ButtonPrimary;

