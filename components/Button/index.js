import { colors } from "../../styles/themes";
const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            align-items: center;
            background: ${colors.black};
            border: 0;
            color: #fff;
            cursor: pointer;
            border-radius: 9999px;
            display: flex;
            font-size: 16px;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
          }
          /* este operando > ve el primer nivel de los hijos no todo el arbol */
          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
};

export default Button;
