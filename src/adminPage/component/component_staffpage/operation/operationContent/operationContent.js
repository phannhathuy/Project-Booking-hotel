import './style.css'
import { Switch, Route } from "react-router-dom";
import ListBookings from '../operation_listBookings/listBookings';
import DetailBooking from '../operation_detailBooking/detailBooking'
import Invoice from '../operation_invoice/invoice';

export default function OperationContent() {
    return (
        <div>
            <Switch>
                <Route path="/operation/list_bookings">
                    <ListBookings />
                </Route>
                <Route path="/operation/detail_booking">
                    <DetailBooking />
                </Route>
                <Route path="/operation_invoice">
                    <Invoice>

                    </Invoice>
                </Route>
            </Switch>
        </div>
    )
}