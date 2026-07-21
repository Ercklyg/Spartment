export default function PaymentHistory({ payments = [] }) {
  const formatDate = (date) => {
    if (!date) {
      return "N/A";
    }

    const converted = new Date(date);

    return `${converted.getMonth() + 1}/${converted.getDate()}/${converted.getFullYear()}`;
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2>Payment History</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>

            <th>Amount</th>

            <th>Method</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr key={index}>
                <td>{formatDate(payment.paymentDate || payment.date)}</td>

                <td>₱{payment.amount}</td>

                <td>{payment.paymentMethod || payment.method || "Cash"}</td>

                <td>{payment.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No payment history found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
