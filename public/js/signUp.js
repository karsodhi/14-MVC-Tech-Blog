const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username, email, password);

    if (username && email && password) {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
            // alert('you did it');
            // document.location.replace(`/newuser?email=${email}`);
            document.location.replace(`/login`);
        } else {
            alert('Failed to sign up.');
        }
        console.log(response)
    }
};