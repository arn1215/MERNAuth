const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  orderItems: [
    {
      _id: { type: String, required: true },
      qty: { type: Number, required: true },
      images: { type: String, required: true },
      total: { type: Number, required: true },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Event'
      },
    }
  ],
  // shippingAddress: {
  //   address: { type: String, required: true },
  //   city: { type: String, required: true },
  //   postalCode: { type: String, required: true },
  //   country: { type: String, required: true },
  // },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    updateTime: { type: String },
    email: { type: String },
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: {
    type: Date,
  }


},
  { timestamps: true, }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order