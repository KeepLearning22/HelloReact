import React from "react";
import ReactDOM from "react-dom/client";


/***
 * 
 * BUILDING REAL TIME APPLn
Componants in app
Header
 -Login
- Nav items
Body
 - Search 
- RestaurantContainer
   - RestranantCard - Img,name,ratings , cuisin ,delivary time
Footer
  -Copywrite
-Links
- Address
- Contacts

 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign in</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = (props) => {
    const {restData} = props; //Destructring data in props
    return(
        <div className="rest-card">
            
                <img alt="" className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restData.info.cloudinaryImageId}></img>
           {/* Swiggy uses cdn to host inmages which can be used in above way - it has same base url and we are appending 
           cloudynaryImageId of specific restaurantin it */}


           {//FOR manuaaly adding
           
           /* <h3>{props.name}</h3>
           <h4>{props.rating}</h4>
           <h4>{props.delivaryTime}</h4>
           <h4>{props.cuisin}</h4> */}

            <div className="card-data">
            {/* info is child attr */}
            <h3>{restData.info.name}</h3> 
            <h4>{restData.info.avgRating} stars</h4>
            <h4>{restData.info.sla.deliveryTime} minutes</h4>
            <h4>{restData.info.cuisines.join(", ")}</h4>
            {/* join js method to join with given symb */}
            </div>
        
        </div>
    )

}
const resObj1 =  {
    "info": {
      "id": "150591",
      "name": "Satkar Restaurant",
      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
      "locality": "Sinchai Colony",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "21553",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 10.9,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "10.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-07 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹450",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/satkar-restaurant-sinchai-colony-chhindwara-locality-chhindwara-150591",
      "type": "WEBLINK"
    }
  } 



const Body= () => {
    return (
        <div className="body">
            <div className="search">
                    Search Bar
            </div>
            <div className="rest-container">
                <RestaurantCard
                //Writing data manually
                    // name="KFC"
                    // rating="4.3"
                    // delivaryTime="20-25 min"
                    // cuisin="Burger"
                restData = {resObj1}


                />
                {/* <RestaurantCard
                    name="Third Wave Coffee"
                    rating="4.4"
                    delivaryTime="20-25 min"
                    cuisin="Cold-items"
                /> */}
            </div>
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
//HOW to render functinal compo 
    root.render(<AppLayout />);


// PROPS
// - Props are Arguments to function/functional componant
// - Arguments given in componant calling body are wrapped inside object 'props' and this props object is passed to card body



















   

//React element
// React element is OBJECT
//When we render react ele, ReactDOM lib takes this react object and convert it to html ele to render
//it on browser. It repalces the html root content to react rootcontent

//i.e ---> "Hiii!!" from dom willbe dispalyed first and imm. willbe replaced by "Text" in raect heading ele.

// *eg if we have to  craete heading elemnt in React
//JS
// -const heading = React.createElement("h1",{id:"heading","Text"});
// This react element is not HTML element, it bexcomes html element when we render it on html dom

// *(we can render react ele by creating root ele  in react)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

///////////////////   Efficient way to do all this is JSX(js syntax to easily create react ele)
//JSX
//Its NOT html in JS, it is html like syntax
//-const jsxheading = <h1 id="heading">Text</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
//But Parcel uses  Babel compiler transform / tranpiled jsx code to js / js engine understable code before it reaches to js engine

// 
// 
// 
