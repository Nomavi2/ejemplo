// src/components/ItemListContainer.jsx
import PropTypes from 'prop-types';
function ItemListContainer({ mensajeBienvenida }) {
  return (
    <div className="container">
      <h1>{mensajeBienvenida}</h1>
      {}
    </div>
  );
}

ItemListContainer.propTypes = {
  mensajeBienvenida: PropTypes.string.isRequired,
};

export default ItemListContainer;


