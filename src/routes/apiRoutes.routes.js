const production = false;

const DNS ={
    host: production ? 'http://localhost:5000/' : 'http://localhost:5000/'
}

const FETCH_TIMEOUT = 20000;
export const ROUTES = {
    LOGIN:`${DNS.host}api/user/singin`,
    SAVEUSERFORADMIN:`${DNS.host}api/admin/usersensorhuman/register`,
    READUSERFORADMIN:`${DNS.host}api/admin/show`,
    SAVEENTIDADES:`${DNS.host}api/entidades/register`,
    READENTIDADES:`${DNS.host}api/entidades/show`,
    SAVEALARMAS:`${DNS.host}api/alarmas/register`,
    READALARMAS:`${DNS.host}api/alarmas/show`
   
} 

// Usuarios login
// POST /api/user/singup
// POST /api/user/singin

// Usuarios sensor humano
// POST /api/admin/usersensorhuman/register
// GET /api/admin/show

// Entidades
// GET /api/entidades/register
// POST /api/entidades/show

// Alarmas
// GET /api/alarmas/resgister
// POST /api/alarmas/show
