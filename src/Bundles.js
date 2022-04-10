import React, { useState } from "react";
import "./App.css";
import {useCart} from 'react-use-cart'

const Bundles = (props) => {
    const {addItem} = useCart();
  const [bun, setBun] = useState("");
  const [de,setDe] = useState("");
  const datas = (item) => {
    console.log("res,",item.decs)
    setBun(item.title)
    setDe(item.price)
  };

  const clo = () => {
      setBun("");
      setDe("");
  }

  console.log("bun",bun)
  console.log("de",de)
  return (
    <>
      <section id="bundles" className="bundles">
        <div className="cont">
          <div className="mini-div">
            <div className="1mini-div">
              <h6
                style={{ margin: "10px" }}
                onClick={() => datas(props.item)}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {props.title}
              </h6>
              <p style={{ margin: "10px" }}>{props.desc}</p>
            </div>
            <div className="2mini-div">
              <img src={props.img} alt="img" className="img1"></img>
            </div>
          </div>
          <div className="new-mini-div">
            <div className="rs">
              <span>
                <h6 style={{ margin: "10px" }}>&#8377;{props.price}</h6>
              </span>
            </div>
            <div className="popular">
              <span>
                <h6 style={{ margin: "10px" }}>🔥 Popular</h6>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h6>{bun}</h6>
              <p>{de}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={clo}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bundles;
