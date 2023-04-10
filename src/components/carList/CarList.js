import CarService from "../../services/car.service";

function CarList() {
  const getCars = () => {
    const allCars = CarService.getCars();

    return (
      allCars.map(c => <p>{c.brand} - {c.model} - {c.price}</p>)
    );
  }

  return (
    <>
      {getCars()}
    </>
  );
}

export default CarList;