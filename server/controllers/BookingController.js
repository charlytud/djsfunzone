
const { booking } = require("../models/booking");
const asyncMiddleware = require("../middlewares/async");

module.exports = {
    createBooking: asyncMiddleware(async(req, res) => {
        const {
            start,
            end,
            product,
            user
        } = req.body;
    
        let bookingFields = {};

        if(start) bookingFields.startDate = start;
        if(end) bookingFields.endDate = end;
        if(product) bookingFields.productId = productId;
        if(user) bookingFields.userId = userId;

        const newBooking = await new booking(bookingFields).save();        
    }),
    updateBooking: asyncMiddleware(async(req, res) => {
        const {
            _id,
            name,
            description,
            rate,
            picture
        } = req.body;
    
        let bookingFields = {};

        if(name) bookingFields.bookingName = name;
        if(description) bookingFields.description = description;
        if(rate) bookingFields.rate = rate;
        if(picture) bookingFields.picture = picture;

        booking.findByIdAndUpdate(
            { _id },
            { bookingFields },
            { $new: true},
            function(err, booking){
                if (err) return res.send(err);
                
                return res.status(200).json({
                    success: "true",
                    booking
                });
            }
        );
    }),
    getBookings: asyncMiddleware(async(req, res) => {
        const bookings = await booking.find();
        if(!bookings){
            return res.status(404).json({ error: "No booking Found"});
        }
        return res.status(200).json(bookings);
    }),
    getBookingById: asyncMiddleware(async(req, res)=>{
        const _id = req.query.id;
        const booking = await booking.findById({ _id });
        if(!booking) return res.status(400).json({ error: "No booking Found" });
        return res.status(200).send(booking);
    }),
    deleteBooking: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const booking = await booking.findByIdAndRemove({ _id });

        if(!booking) return res.status(400).json({error: "booking Not Found"});
        
        return res.status(200).json({ success: true });      
    })
};

//     getbookings: asyncMiddleware(async(req, res) => {
//         const errors = {};
//         const bookings = await booking.find()
//         .populate({
//             path: 'categoryId', 
//             model: 'Category', 
//             select: 'categoryName'})
//         .populate({
//             path: 'supplierId', 
//             model: 'Supplier', 
//             select: 'companyName'}).
//         exec();
//         if(!bookings){
//             errors.notFound = "No booking found";
//             return res.status(404).json(errors);
//         }

//         return res.status(200).json(bookings);
//     }),
//     getbookingByFields: asyncMiddleware(async(req, res)=>{
//         const errors = {};
//         const {
//             category,
//             supplier
//         } = req.query

//         let filterFields = { category: null, supplier: null };

//         if(category) filterFields.category = category;
//         if(supplier) filterFields.supplier = supplier;

//         if(filterFields.category && filterFields.supplier) {
//             const booking = await booking.find(
//                 { 
//                     categoryId: filterFields.category, 
//                     supplierId: filterFields.supplier 
//                 }
//             )
//             .populate({
//             path: 'categoryId', 
//             model: 'Category', 
//             select: 'categoryName'})
//             .populate({
//             path: 'supplierId', 
//             model: 'Supplier', 
//             select: 'companyName'})
//             .exec();

//             if(!booking){
//                 errors.notFound = "No booking found";
//                 return res.status(404).json(errors);
//             }
//             return res.status(200).json(booking)
//         } else if(filterFields.category && filterFields.supplier === null) {
//             const booking = await booking.find(
//                 { categoryId: filterFields.category }
//             ).populate({
//             path: 'categoryId', 
//             model: 'Category', 
//             select: 'categoryName'})
//             .populate({
//             path: 'supplierId', 
//             model: 'Supplier', 
//             select: 'companyName'}).
//             exec();

//             if(!booking) {
//                 errors.notFound = "No booking found in selected category"
//                 return res.status(404).json(errors);
//             }
//             return res.status(200).json(booking)
//         } else if ( filterFields.category === null && filterFields.supplier ) {
//             const booking = await booking.find(
//                 { supplierId: filterFields.supplier }
//             ).populate({
//             path: 'categoryId', 
//             model: 'Category', 
//             select: 'categoryName'})
//             .populate({
//             path: 'supplierId', 
//             model: 'Supplier', 
//             select: 'companyName'}).
//             exec();

//             if(!booking) {
//                 errors.notFound = "No booking found with selected supplier"
//                 return res.status(404).json(errors);
//             }
//             return res.status(200).json(booking)
//         };
//     }),
// };