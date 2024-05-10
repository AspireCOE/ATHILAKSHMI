const mongoose = require('mongoose');

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the schema for the "aspire" collection
const aspireSchema = new mongoose.Schema({
  name: { type: String, index: true },
  type: { type: String, index: true },
  tags: { type: [String], index: true }
});

// Define instance method
aspireSchema.methods.printDetails = function() {
  console.log(`Name: ${this.name}, Type: ${this.type}, Tags: ${this.tags.join(', ')}`);
};

// Define static method
aspireSchema.statics.findByType = function(type) {
  return this.find({ type: type });
};

// Define query helper function
aspireSchema.query.byType = function(type) {
  return this.where({ type: type });
};

// Create compound index
aspireSchema.index({ name: 1, type: -1 });

// Create model for "aspire" collection
const Aspire = mongoose.model('Aspire', aspireSchema);

// Insert sample data into the "aspire" collection
Aspire.create([
  { name: 'Simba', type: 'Lion', tags: ['wild', 'big'] },
  { name: 'Bambi', type: 'Deer', tags: ['forest', 'cute'] },
  { name: 'Fluffy', type: 'Cat', tags: ['domestic', 'small'] }
])
  .then(() => {
    console.log('Data inserted successfully.');

    // Example usage of instance method
    return Aspire.findOne({ name: 'Simba' });
  })
  .then(lion => {
    if (!lion) {
      console.log('Lion not found.');
    } else {
      lion.printDetails();
    }
  })
  .catch(err => console.error('Error inserting data:', err));
