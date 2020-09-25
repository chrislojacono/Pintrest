import pinsView from '../views/pinsView';

const boardMaker = (board) => {
  const domString = `<div class="card" id="${board.uid}">
  <div class="img-container card-body" style="background-image:linear-gradient(to bottom, rgba(209, 209, 219, 0.253), rgba(204, 174, 195, 0.73)), url(${board.image})">
      <h3 class="card-title">${board.name}</h3>
      <a href="#" id="${board.uid}" class="btn btn-info see-pins">Pins</a>
    </div>
  </div>`;

  pinsView.showPins();
  return domString;
};

export default { boardMaker };
