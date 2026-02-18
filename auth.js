// auth.js

function logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("access_token");
    window.location.href = '/';
}

function checkAuth() {
    const token = localStorage.getItem("id_token");
    if (!token) {
        try {
            const cognitoDomain = "https://us-east-1senj5cvnr.auth.us-east-1.amazoncognito.com/login";
            const clientId = "1u4dbf3uu4s4fvnb4g7lo9o59";
            const redirectUri = "https://www.agastyagpt.com/callback.html";

            window.location.href =
                `${cognitoDomain}` +
                `?client_id=${clientId}` +
                `&redirect_uri=${encodeURIComponent(redirectUri)}` +
                `&response_type=token` +
                `&scope=email+openid+phone`;
        }
        catch (error) {
            console.error("Error redirecting to login:", error);
            window.location.href = '/';
        }
    }
    return true;
}