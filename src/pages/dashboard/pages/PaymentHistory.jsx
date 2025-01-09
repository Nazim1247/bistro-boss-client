import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {users} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', users.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${users.email}`)
            return res.data;
        }
    })
    console.log(payments)
    return (
        <div>
            <h2>PaymentHistory: {payments.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment, i)=> <tr key={payment._id}>
        <th>{i +1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}...</td>
      </tr>)}
      
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;