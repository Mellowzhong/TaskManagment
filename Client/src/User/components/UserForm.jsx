import PropTypes from 'prop-types';

export default function UserForm({ onSubmit, register }) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" {...register("name", { required: true })} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" {...register("email", { required: true })} />
            <label htmlFor="password1">Password</label>
            <input type="password" name="password1" id="password1" {...register("password1", { required: true })} />
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2" {...register("password2", { required: true })} />
            <button type="submit">Submit</button>
        </form>
    );
}

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
};
