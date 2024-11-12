import GridItem from "../GridItem/GridItem";

function ImageCard({ color, alt, urls }) {
  return (
    <GridItem>
      <div style={{ backgroundColo: color, borderColor: color }}>
        <img src={urls.small} alt={alt} />
      </div>
    </GridItem>
  );
}

export default ImageCard;
