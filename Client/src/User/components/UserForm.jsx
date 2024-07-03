import PropTypes from 'prop-types';

export default function UserForm({ onSubmit, register }) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" {...register("name", { required: true })} />
            </label>
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" {...register("email", { required: true })} />
            </label>

            <label htmlFor="password1">
                Password
                <input type="password" name="password1" id="password1" {...register("password1", { required: true })} />
            </label>

            <label htmlFor="password2">
                Confirm Password
                <input type="password" name="password2" id="password2" {...register("password2", { required: true })} />
            </label>
  
            <button type="submit">Submit</button>
        </form>
    );
}

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
};
