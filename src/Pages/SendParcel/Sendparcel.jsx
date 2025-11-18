import React from "react";
import Container from "../../Utility/Container";

const Sendparcel = () => {
  return (
    <Container className="my-20 p-4 min-h-screen bg-base-100">
      <form className="bg-base-200/30 py-12 px-16 rounded-2xl">
        <fieldset className="fieldset">
          <h1 className="font-extrabold text-5xl text-secondary">Add Parcel</h1>

          {/* divider */}
          <div className="divider py-2"></div>

          <h3 className="font-extrabold text-2xl text-secondary">
            Enter your parcel details
          </h3>
          {/* radio */}

          <div>
            {/* <legend className="fieldset-legend">Status</legend> */}
            <div className="flex gap-8 py-4">
              <div className="flex items-center justify-center gap-3">
                <input
                  type="radio"
                  name="status"
                  className="radio radio-primary"
                  value="ongoing"
                  //   checked={status === "ongoing"}
                  //   onChange={handleChange}
                />
                <p className="font-semibold">Document</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <input
                  type="radio"
                  name="condition"
                  className="radio radio-primary"
                  value="solved"
                  //   checked={status === "solved"}
                  //   onChange={handleChange}
                />
                <p className="font-semibold">Not-Document</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {/* title */}
            <div className="flex-1">
              <legend className="fieldset-legend">Parcel Name</legend>
              <input
                type="text"
                name="parcel-name"
                className="input w-full"
                placeholder="Parcel Name"
                required
              />
            </div>

            <div className="flex-1">
              {/* Parcel Weight (KG) */}
              <legend className="fieldset-legend">Parcel Weight (KG)</legend>
              <input
                type="text"
                name="parcel-name"
                className="input w-full"
                placeholder="Parcel Weight (KG)"
                required
              />
            </div>
          </div>

          <div className="divider py-2"></div>

          <div className="flex gap-6">
            {/* Sender Details */}
            <div className="flex-1">
              <h1 className="text-xl font-extrabold text-secondary py-2">
                Sender Details
              </h1>
              {/* name */}
              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  <legend className="fieldset-legend">Sender Name</legend>
                  <input
                    type="text"
                    name="sender-name"
                    className="input w-full"
                    placeholder="Sender Name"
                    required
                  />
                </div>
                {/* select warhouse */}
                <div>
                  <legend className="fieldset-legend">
                    Sender Pickup Wire house
                  </legend>
                  <select
                    className="select w-full"

                    //   value={cat}
                    //   onChange={handleCatChange}
                  >
                    <option selected disabled={true}>
                      Select Sender Wire house
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Srilanka</option>
                  </select>
                </div>
                <div>
                  <legend className="fieldset-legend">Address</legend>
                  <input
                    type="text"
                    name="address"
                    className="input w-full"
                    placeholder="Address"
                    required
                  />
                </div>
                <div>
                  <legend className="fieldset-legend">Sender Contact No</legend>
                  <input
                    type="text"
                    name="sender-number"
                    className="input w-full"
                    placeholder="Sender Contact No"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <legend className="fieldset-legend">Your Region</legend>
                  <select
                    className="select w-full"

                    //   value={cat}
                    //   onChange={handleCatChange}
                  >
                    <option selected disabled={true}>
                      Select Your Region
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Srilanka</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <legend className="fieldset-legend">
                    Pickup Instruction
                  </legend>
                  <textarea
                    type="text"
                    name="pickup-instruction"
                    className="input w-full"
                    placeholder="Pickup Instruction"
                    required
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* receiver details */}

            <div className="flex-1">
              <h1 className="text-xl font-extrabold text-secondary py-2">
                Receiver Details
              </h1>
              <div className="grid grid-cols-2 gap-6">
                {/* name */}
                <div>
                  <legend className="fieldset-legend">Receiver Name</legend>
                  <input
                    type="text"
                    name="receiver-name"
                    className="input w-full"
                    placeholder="Receiver Name"
                    required
                  />
                </div>
                {/* select warhouse */}
                <div>
                  <legend className="fieldset-legend">
                    Receiver Delivery Wire house
                  </legend>
                  <select
                    className="select w-full"

                    //   value={cat}
                    //   onChange={handleCatChange}
                  >
                    <option selected disabled={true}>
                      Select Receiver Wire house
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Srilanka</option>
                  </select>
                </div>
                {/* address */}
                <div>
                  <legend className="fieldset-legend">Receiver Address</legend>
                  <input
                    type="text"
                    name="receiver-address"
                    className="input w-full"
                    placeholder="Receiver Address"
                    required
                  />
                </div>
                {/* contact */}
                <div>
                  <legend className="fieldset-legend">
                    Receiver Contact No
                  </legend>
                  <input
                    type="text"
                    name="receiver-number"
                    className="input w-full"
                    placeholder=" Receiver Contact No"
                    required
                  />
                </div>
                {/* region */}
                <div className="col-span-2">
                  <legend className="fieldset-legend">Receiver Region</legend>
                  <select
                    className="select w-full"

                    //   value={cat}
                    //   onChange={handleCatChange}
                  >
                    <option selected disabled={true}>
                      Select Your Region
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Srilanka</option>
                  </select>
                </div>
                {/* picup */}
                <div className="col-span-2">
                  <legend className="fieldset-legend">
                    Delivery Instruction
                  </legend>
                  <textarea
                    type="text"
                    name="delivery-instruction"
                    className="input w-full"
                    placeholder="Delivery Instruction"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="py-4">* PickUp Time-4pm-7pm-Approx.</p>
          {/* button */}

          <div className="py-4">
            <button type="submit" className="btn-sm-2">
              Proceed to Confirm Booking
            </button>
          </div>
        </fieldset>
      </form>
    </Container>
  );
};

export default Sendparcel;
