function Furniture({ furniturePiece }) {
  return (
    <div className="Furniture">
      <a href={`/furniture/${furniturePiece.id}`}>
        <h4>
          {furniturePiece.name}
          <span>{furniturePiece.price}</span>
        </h4>
      </a>
    </div>
  );
}

export default Furniture;
