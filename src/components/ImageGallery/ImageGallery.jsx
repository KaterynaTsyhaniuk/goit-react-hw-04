import Grid from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  return (
    <Grid>
      {images.map(({ id, alt_description, color, urls }) => (
        <ImageCard key={id} alt={alt_description} color={color} urls={urls} />
      ))}
    </Grid>
  );
}

export default ImageGallery;
