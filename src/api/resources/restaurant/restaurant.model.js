import mongoose from 'mongoose';

export const schema = {
  address: {
  		building: String,
  		coord: Array,
  		street: String,
  		zipcode: String
  	},
  	borough: String,
  	cuisine: String,
  	grades: [
  		{
  			date: {
  				$date: Number
  			},
  			grade: String,
  			score: Number
  		}
  	],
  	name: String,
  	restaurant_id: String
};

const restaurantSchema = new mongoose.Schema(schema);

export const Restaurant = mongoose.model('restaurant', restaurantSchema);
