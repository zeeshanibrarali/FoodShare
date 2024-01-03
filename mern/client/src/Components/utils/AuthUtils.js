
export const handleAuthentication = async (formData, isLogin, navigate, setError) => {
    console.log(formData);
    const { email, password, confirmPassword } = formData;

    if (!email || !password) {
        setError("Please provide both email and password.");
        return;
    }

    if (!isLogin && password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
    }
    console.log("cool");
    // `/auth/${isLogin ? 'login' : 'register'}`
    try {
        // Send a post request to the database for authentication or registration
        const response = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, isLogin }),
        });

        if (!response.ok) {
            // Check for specific error cases
            if (response.status === 400 && response.body.error === 'Email is already registered') {
                setError('Email is already registered');
            } else {
                throw new Error(response.body.error || 'An error occurred during authentication or registration.');
            }
            return;
        }

        const { token, expiresAt } = await response.json();

        if (isLogin) {
            navigate("/dashboard");
        } else {
            navigate("/personalinfo");
        }

        // Store the token and expiresAt in the local storage
        localStorage.setItem('token', token);
        localStorage.setItem('expiresAt', expiresAt);
    } catch (error) {
        console.error(`Error during ${isLogin ? 'authentication' : 'registration'}:`, error);

        if (error.response) {
            console.error('Server response data:', error.response.data);
            console.error('Server response status:', error.response.status);
            console.error('Server response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
        }

        setError(`An error occurred fuck  it during ${isLogin ? 'authentication' : 'registration'}.`);
    }
};

export const checkAuthentication = async () => {
    try {
        // Send a GET request to check if the user is authenticated
        const response = await fetch('/auth/checkAuth');

        if (!response.ok) {
            throw new Error('Failed to check authentication status');
        }

        // Parse and return the authentication status and user information
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error checking authentication status:', error);
        return { isAuthenticated: false, user: null };
    }
};
