

export async function verifierAdmin(req, res, next) {
    try {
        const currentUser = req.user;

        if (currentUser.admin) {
            next(); 
        } else {
            return res.status(403).json({ message: 'Erreur, Vous n\'êtes pas autorisé à effectuer cette action' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
