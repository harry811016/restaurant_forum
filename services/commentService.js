const db = require('../models')
const Comment = db.Comment

let commentController = {
  postComment: (req, res, callback) => {
    return Comment.create({
      text: req.body.text,
      RestaurantId: req.body.restaurantId,
      UserId: req.user.id
    })
      .then((comment) => {
        return callback({ status: 'success', message: '' })
      })
  },
  deleteComment: (req, res, callback) => {
    return Comment.findByPk(req.params.id)
      .then((comment) => {
        comment.destroy()
          .then((comment) => {
            return callback({ status: 'success', message: '' })
          })
      })
  }
}
module.exports = commentController