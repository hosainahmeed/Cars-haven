import PagesBanner from "../../component/PagesBanner/PagesBanner";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";

function ServicesPage() {
  const { user } = useAuth();

  const { data: bookingData = [], isLoading: bookingLoading ,refetch} = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/booking?email=${user?.email}`,{withCredentials:true});
      return result.data;
    },
  });
  
  if (bookingLoading) {
    return <p>....booking loading</p>;
  }

  const deleteItemHandle = (id) => {
    axios.delete(`http://localhost:5000/booking/${id}`).then((res) => {
      console.log("deleted id", res.data);
      refetch()
    });
  };

  return (
    <div>
      <PagesBanner title="Youre Booking"></PagesBanner>
      <h1 className="text-2xl font-black text-center mt-12 py-4">
        All booking Items
      </h1>
      <div className="py-12">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {bookingData.map((item) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <button
                        onClick={() => deleteItemHandle(item._id)}
                        className="btn btn-circle"
                      >
                        <GiCancel style={{ fontSize: "24px" }} />
                      </button>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-24 rounded">
                          <img src={item.productImage} />
                        </div>
                      </div>
                      <div className="text-xl">
                        <div className="font-bold">
                          Name: {item.productName}
                        </div>
                        <div className="text-sm opacity-50">
                          <b>Size:</b> s
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>price:{item.price}</td>
                  <td>Date:</td>
                  <th>
                    <button className="btn btn-den btn-warning">
                      pending <span className="loading loading-spinner"></span>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
