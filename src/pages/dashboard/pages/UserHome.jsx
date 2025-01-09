import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {users} = useAuth();
    return (
        <div>
            userHome
            {
                users ? users.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;