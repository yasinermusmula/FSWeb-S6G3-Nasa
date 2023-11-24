import "./Image.css";

const Image = (props) => {
  const { url } = props;
  return (
    <div>
      <img src={url} />
    </div>
  );
};

export default Image;
