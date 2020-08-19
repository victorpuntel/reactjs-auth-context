export function signIn() {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: 'saddsads',
                user: {
                    name: 'admin',
                    email: 'admin@auth.com'
                }
            });
        }, 2000);
    });
}

export function signOut(){
    
}