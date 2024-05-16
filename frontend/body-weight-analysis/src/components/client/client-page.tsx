import React, { useState } from "react";
import InputField from "../formFields/input-field";
import CheckEmptyField from "../globleActions/check-empty-fields";
import ClientQueryModel from "./query-model";
import CheckRecommendation from "./check-recomentation";

interface Props {}

const ClientPage: React.FC<Props> = () => {
  const [empty, setEmpty] = useState<boolean>(true);
  const [clientQuery, setClientQuery] = useState<ClientQueryModel>({
    age: 0,
    weight: 0,
    height: 0,
  });

  return (
    <div className="h-screen w-full flex flex-wrap justify-center">
      <div className="lg:w-2/3 sm:w-full md:w-full p-5 h-fit flex flex-wrap justify-center">
        <div className="form-area  w-full h-fit bg-black">
          <form
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
            action=""
            className="lg:flex md:flex  flex-wrap bg-red-100 items-center justify-center p-3 w-full"
          >
            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Age (years)"}
              type={"number"}
              id={"age"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({ ...clientQuery, age: Number(e.target.value) });
              }}
            />

            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Weight (kg)"}
              type={"number"}
              id={"weight"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({
                  ...clientQuery,
                  weight: Number(e.target.value),
                });
              }}
            />

            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Height (cm)"}
              type={"number"}
              id={"height"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({
                  ...clientQuery,
                  height: Number(e.target.value),
                });
              }}
            />
            <div className={"px-5 sm:w-full md:w-1/4 lg:w-1/4"}>
              <button
                className="bg-blue-200 p-2 rounded-md w-full"
                onClick={() =>
                  CheckRecommendation(
                    [
                      document.getElementById("age") as HTMLInputElement,
                      document.getElementById("weight") as HTMLInputElement,
                      document.getElementById("height") as HTMLInputElement,
                    ],
                    setEmpty,
                    clientQuery,
                    empty
                  )
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="results-area h-fit w-full bg-blue-800 p-4">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            minima illum veniam mollitia repudiandae ab, veritatis ad impedit
            voluptate a.
          </h1>
          <h1>
            Esse velit culpa harum nulla cupiditate totam aliquid beatae
            deserunt earum tenetur voluptatem amet, at a reprehenderit
            consequuntur provident voluptatum.
          </h1>
          <h1>
            Quisquam deleniti qui maiores dignissimos nam similique doloremque
            repellat adipisci fuga, ratione iusto, officia perferendis minima ea
            veritatis iure debitis!
          </h1>
          <h1>
            Ipsa, nemo accusantium quia tenetur fugit temporibus est natus quo
            possimus ab, amet debitis perferendis hic voluptate! Est, officia
            in!
          </h1>
          <h1>
            Aliquid excepturi, vel iure sunt voluptas itaque odit. Modi repellat
            rerum eligendi nulla doloribus ex at blanditiis optio ullam eius.
          </h1>
          <h1>
            Maxime asperiores quia quos possimus? Commodi ex cupiditate
            voluptates saepe doloremque quia provident assumenda, sit mollitia
            dolore ut et facilis.
          </h1>
          <h1>
            Temporibus corrupti, eaque sit hic vitae culpa porro in impedit
            dolorem delectus accusantium? Voluptates nemo dicta, quae sunt quasi
            non?
          </h1>
          <h1>
            Veritatis adipisci ullam reiciendis illum sunt aliquam quibusdam
            ipsam ipsum fugit harum iusto architecto necessitatibus dolor,
            dolorum praesentium vitae minima.
          </h1>
          <h1>
            Quidem numquam quo nostrum, quibusdam eveniet voluptas repellendus
            animi ducimus ad hic cupiditate id? Corrupti repellat enim eaque hic
            earum.
          </h1>
          <h1>
            Ratione accusamus quasi commodi nihil omnis quis aperiam nemo unde
            quae sint, dignissimos voluptates cum vero, necessitatibus quidem.
            Voluptatem, iusto?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
