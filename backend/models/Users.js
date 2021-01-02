import mongoose from 'mongoose'
// import findOrCreate from 'mongoose-find-or-create'

const userSchema = mongoose.Schema({
    // googleId: {
    //     type: String,
    //     unique: true
    // },
    // name: String,
    // surname: String,
    // profilePhotoUrl: String
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// userSchema.plugin(findOrCreate)

const User = mongoose.model('users', userSchema)

export default User