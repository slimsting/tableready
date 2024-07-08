import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing order from frontend
const placeOrder = async (request, response) => {
  const frontend_url = "http://localhost:5174";

  try {
    const newOrder = new orderModel({
      userId: request.body.userId,
      items: request.body.items,
      amount: request.body.amount,
      address: request.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(request.body.userId, { cartData: {} });

    const line_items = request.body.items.map((item) => ({
      price_data: {
        currency: "kes",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "kes",
        product_data: {
          name: "Deliverly Charges",
        },
        unit_amount: 2 * 100 * 123,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    response.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: `Error: ${error}` });
  }
};

const verifyOrder = async (request, response) => {
  const { orderId, success } = request.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      response.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findbyIdAndDelete(orderId);
    }
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: `Error ${error}` });
  }
};

// user orders for frontend
const userOrders = async (request, response) => {
  try {
    const orders = await orderModel.find({ userId: request.body.userId });
    response.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: `Error: ${error}` });
  }
};

// listing orders for admin panel
const listOrders = async (request, reponse) => {
  try {
    const orders = await orderModel.find({});
    reponse.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    reponse.json({ success: false, message: `Error: ${error}` });
  }
};
// api for updating order status
const updateStatus = async (request, response) => {
  try {
    await orderModel.findByIdAndUpdate(request.body.orderId, {
      status: request.body.status,
    });
    response.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
