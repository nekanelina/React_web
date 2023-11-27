

function MostPopularItem(props) {
  const { id, img, description} = props;

  return (
    <div className="category" key={id} id={`popular-${id}`}>
      <div className="image-container">
        <img className="image" src={img} alt='Some description' />
      </div>
      <div className="product-info">
         {description}
      </div>
    </div>
  );
}

export default MostPopularItem;
