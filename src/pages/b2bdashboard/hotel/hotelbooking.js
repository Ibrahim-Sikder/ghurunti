import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../profile.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const HotelBooking = () => {
    const bookingData = [
        {
            id: 1,
            name: "Ibrahim Sikder",
            phone: '013565423',
            email: 'ibrahimsikder5033@gmail.com',
            date: '05-12-2023',
            totalGuest: 5,
            nationality: 3567876543,
            country: "Cox's Bazar",
            nrcNo: "Cox's Bazar"
        },
        {
            id: 1,
            name: "Ibrahim Sikder",
            phone: '013565423',
            email: 'ibrahimsikder5033@gmail.com',
            date: '05-12-2023',
            totalGuest: 5,
            nationality: 3567876543,
            country: "Cox's Bazar",
            nrcNo: "Cox's Bazar"
        },
        {
            id: 1,
            name: "Ibrahim Sikder",
            phone: '013565423',
            email: 'ibrahimsikder5033@gmail.com',
            date: '05-12-2023',
            totalGuest: 5,
            nationality: 3567876543,
            country: "Cox's Bazar",
            nrcNo: "Cox's Bazar"
        },
        {
            id: 1,
            name: "Ibrahim Sikder",
            phone: '013565423',
            email: 'ibrahimsikder5033@gmail.com',
            date: '05-12-2023',
            totalGuest: 5,
            nationality: 3567876543,
            country: "Cox's Bazar",
            nrcNo: "Cox's Bazar"
        },
        {
            id: 1,
            name: "Ibrahim Sikder",
            phone: '013565423',
            email: 'ibrahimsikder5033@gmail.com',
            date: '05-12-2023',
            totalGuest: 5,
            nationality: 3567876543,
            country: "Cox's Bazar",
            nrcNo: "Cox's Bazar"
        },
    ]
  return (
    <B2BdashboardLayout>
       <div className={style.ticketListHead}>
            <h3 className="text-2xl font-bold text-white">Hotel Booking Info</h3>
          </div>

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
                <div className="overflow-x-auto ">
                  <table className="table lg:table-auto columns-xl break-after-column">
                    <thead className={style.tableWrap}>
                      <tr>
                        <th>Name </th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Nationality </th>
                        <th>Total Guest Number </th>
                        <th>Booked Date</th>
                        <th>NRC NO </th>
                        <th>City</th>
                        <th>Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        bookingData.map(data=>  <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.nationality}</td>
                            <td>{data.totalGuest}</td>
                           
                            <td>{data.date}</td>
                            <td>{data.city}</td>
                            <td>{data.nrcNo}</td>
                            <td>
                              <span className=" bg-red-500 rounded text-white py-2 text-xs px-2 font-xs">
                                Cancel
                              </span>
                            </td>
                          </tr>)
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(HotelBooking), { ssr: false });
