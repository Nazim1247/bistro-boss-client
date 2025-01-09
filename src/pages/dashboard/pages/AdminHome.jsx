import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {users} = useAuth();
    return (
        <div>
            adminHome
            {
                users ? users.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;