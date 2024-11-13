import GridItem from "../GridItem/GridItem";

function ImageCard({ color, alt, urls, openModal }) {
  return (
    <GridItem>
      <div style={{ backgroundColo: color, borderColor: color }}>
        <img
          src={urls.small}
          alt={alt}
          onClick={() => openModal(urls.regular, alt)}
        />
      </div>
    </GridItem>
  );
}

export default ImageCard;
