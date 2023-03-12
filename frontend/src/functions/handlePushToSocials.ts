export const handlePushToSocials = (platform: 'instagram' | 'facebook') => {
    switch (platform) {
        case 'instagram':
            window.open('https://www.instagram.com/pets4luvfoundation/?hl=en', '_blank');
            break;
        case 'facebook':
            window.open('https://www.facebook.com/Pets4Luv/', '_blank');
            break;
    }
}