class Github{
    constructor(){
        this.client_id = '82676c5ec25c54e5c48e';
        this.client_secret = 'a86672aa2615f2074c65c80541a3ff10b397ad1d';
    }

    async getUser(user){
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        return {
            profile: profileData
            //or just profile
        }
    }
}