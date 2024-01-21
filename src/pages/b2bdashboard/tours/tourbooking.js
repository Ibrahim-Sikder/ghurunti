import React from "react"
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css"
import styling from "../profile.module.css"
import dynamic from "next/dynamic"
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
const TourBooking = () => {
  const bookingData = [
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
    {
      id: 1,
      name: "Ibrahim Sikder",
      destination: "Destination",
      phone: "013565423",
      email: "ibrahimsikder5033@gmail.com",
      requiruement: "I want to go Umrah package",
      date: "05-12-2023",
      passengerNumber: 5,
      passportNumber: 3567876543,
      city: "Cox's Bazar",
    },
  ]
  return (
    <B2BdashboardLayout>
      <div className={style.ticketListHead}>
        <h3 className="text-2xl font-bold text-white">Tour Booking Info</h3>
      </div>

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <div className="overflow-x-auto ">
              <table className="table lg:table-auto columns-xl break-after-column">
                <thead className={style.tableWrap}>
                  <tr>
                    <th>Name </th>
                    <th>Destination </th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Requirement</th>
                    <th>Passport Number</th>
                    <th>Passenger Number </th>
                    <th>Booked Date</th>
                    <th colSpan={2}>Action </th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.map((data) => (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.destination}</td>
                      <td>{data.phone}</td>
                      <td>{data.email}</td>
                      <td>{data.requiruement}</td>
                      <td>{data.passengerNumber}</td>
                      <td>{data.passportNumber}</td>
                      <td>{data.city}</td>
                      <td>
                        <span className=" bg-red-900 rounded text-white py-2 text-xs px-2 font-xs">
                          Cancel
                        </span>
                      </td>
                      <td>
                        <span className=" bg-gray-300 rounded py-2 text-xs px-2 font-xs">
                          Pending
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  )
}

export default dynamic(() => Promise.resolve(TourBooking), { ssr: false })
