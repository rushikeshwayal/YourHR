function Features() {
  return (
    <div className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] px-6 py-14 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Escrow Service</h2>
            <p className="mt-4 text-gray-600">
              Protect both parties in a transaction. Funds are held securely until all conditions are met.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Razorpay API</h2>
            <p className="mt-4 text-gray-600">
              Seamless payment integration with Razorpay's robust API, ensuring fast and secure transactions.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Blockchain Security</h2>
            <p className="mt-4 text-gray-600">
              Transactions are secured with Blockchain, offering unparalleled transparency and tamper-proof records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;