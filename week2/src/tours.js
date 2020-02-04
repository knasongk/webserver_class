const tours = [{
	id: 1,
	description: "boat ride along the main river",
	cost: "$100",
   },
   {
	id: 2,
	description: "temple excursion in Songkhla province",
	cost: "$250",
	   
   }]; 

export const getTourById = id =>
	tours.find(tour => tour.id === id);

export default getTourById
