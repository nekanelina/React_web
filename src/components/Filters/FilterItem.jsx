

function FilterItem(item) {
  const { id, img, description} = item;

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

export default FilterItem;
