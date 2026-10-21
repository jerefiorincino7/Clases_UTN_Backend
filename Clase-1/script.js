/* console.log("hola desde el servidor!")
console.log("esto es backend?")

const filesystem = require("fs")

let contenido = filesystem.readFileSync(
    "./test.txt",
    {
        encoding: "utf-8"
    }
)

console.log("El contenido del test.txt es: " + contenido) */

const usuarios = [
    {
        _id: 1,
        name: 'pepe',
        email: 'pepe@gmail.com',
        role: {
            name: 'User',
            _id: 1
        },
        profile: {
            lang: 'es',
            isDark: true
        }
    },
    {
        _id: 2,
        name: 'juan',
        email: 'juan@gmail.com',
        role: {
            name: 'Admin',
            _id: 2
        },
        profile: {
            lang: 'en',
            isDark: false
        }
    }
]

/* formatUsers(users) */
/*     Debe devolver un array donde cada usuario tendra el siguiente formato:
        {
            user_id: ,
            user_name: ,
            user_email: ,
            role_name: ,
            role_id: ,
            profile_lang: ,
            profile_isDark
        } */

function formatUser(user) {
    return {
        user_id: user._id,
        user_name: user.name,
        user_email: user.email,
        role_name: user.role.name,
        role_id: user.role._id,
        profile_lang: user.profile.lang,
        profile_isDark: user.profile.isDark
    };
}

function formatUsers(users){
    const my_users = []
    for (const user of users) {
        my_users.push(formatUser(user))
    }
    return my_users
}
console.log(formatUser(usuarios[0]))

/* function getUserById (users,user_id){
    for (const user of users) {
        if (user._id === user_id) {
            return user
        }
    }
    return null
}
console.log(getUserById(usuarios, 1)) */

function getUserByRole(users, role_id) {
    const filtered_users = []
    for (const user of users) {
        if (user.role._id === role_id){
            filtered_users.push(user)
        }
    }
    return filtered_users
}

console.log(getUserByRole(usuarios, 1))