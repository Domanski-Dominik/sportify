import { Schema,model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ._]+(?<![_.])$/,
            "Nazwa użytkownika jest nieprawidłowa. Powinna zawierać od 8 do 20 znaków alfanumerycznych lub polskich liter i być unikalna!"
          ],
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;