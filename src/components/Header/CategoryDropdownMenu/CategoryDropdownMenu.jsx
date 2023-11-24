import { signal } from "@preact/signals-react";
import { allCategoriesActive } from "..";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import "./CategoryDropdownMenu.css";

const solarPanelsActive = signal(false);
const energyStorageActive = signal(false);
const evChargingActive = signal(false);
const energyEfficientAppliancesActive = signal(false);
const windTurbinesActive = signal(false);

const CategoryDropdownMenu = ({ className }) => {
  console.log("Render: CategoryDropdownMenu");

  return (
    <div className={className}>
      <div
        className={
          allCategoriesActive.value
            ? "category-dropdown-menu category-dropdown-menu-active"
            : "category-dropdown-menu category-dropdown-menu-disabled"
        }
      >
        <div className="category-item-wrapper">
          <div className="primary-categories">
            <div
              className={
                solarPanelsActive.value
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => {
                if (window.innerWidth > 800) solarPanelsActive.value = true;
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 800) solarPanelsActive.value = false;
              }}
            >
              <p
                className="primary-text"
                onClick={() => {
                  if (window.innerWidth < 801)
                    solarPanelsActive.value = !solarPanelsActive.value;
                }}
              >
                Solar Panels
              </p>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  solarPanelsActive.value
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <p className="sub-text">Monocrystalline</p>
                <p className="sub-text">Polycrystalline</p>
                <p className="sub-text">Thin Film</p>
              </div>
            </div>
            <div
              className={
                energyStorageActive.value
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => {
                if (window.innerWidth > 800) energyStorageActive.value = true;
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 800) energyStorageActive.value = false;
              }}
            >
              <p
                className="primary-text"
                onClick={() => {
                  if (window.innerWidth < 801)
                    energyStorageActive.value = !energyStorageActive.value;
                }}
              >
                Energy Storage Solutions
              </p>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  energyStorageActive.value
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <p className="sub-text">Batteries</p>
                <p className="sub-text">Flywheels</p>
                <p className="sub-text">Thermal</p>
              </div>
            </div>
            <div
              className={
                evChargingActive.value
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => {
                if (window.innerWidth > 800) evChargingActive.value = true;
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 800) evChargingActive.value = false;
              }}
            >
              <p
                className="primary-text"
                onClick={() => {
                  if (window.innerWidth < 801)
                    evChargingActive.value = !evChargingActive.value;
                }}
              >
                EV Charging Stations
              </p>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  evChargingActive.value
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <p className="sub-text">Home Charging</p>
                <p className="sub-text">Public Charging</p>
                <p className="sub-text">Super Charging</p>
              </div>
            </div>
            <div
              className={
                energyEfficientAppliancesActive.value
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => {
                if (window.innerWidth > 800)
                  energyEfficientAppliancesActive.value = true;
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 800)
                  energyEfficientAppliancesActive.value = false;
              }}
            >
              <p
                className="primary-text"
                onClick={() => {
                  if (window.innerWidth < 801)
                    energyEfficientAppliancesActive.value =
                      !energyEfficientAppliancesActive.value;
                }}
              >
                Energy-efficient Appliances
              </p>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  energyEfficientAppliancesActive.value
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <p className="sub-text">Energy Saving Light Bulbs</p>
                <p className="sub-text">Efficient Refrigerators</p>
                <p className="sub-text">Efficient Washing Machines</p>
              </div>
            </div>
            <div
              className={
                windTurbinesActive.value
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => {
                if (window.innerWidth > 800) windTurbinesActive.value = true;
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 800) windTurbinesActive.value = false;
              }}
            >
              <p
                className="primary-text"
                onClick={() => {
                  if (window.innerWidth < 801)
                    windTurbinesActive.value = !windTurbinesActive.value;
                }}
              >
                Wind Turbines
              </p>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  windTurbinesActive.value
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <p className="sub-text">Horizontal Axis Wind Turbines</p>
                <p className="sub-text">Vertical Axis Wind Turbines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdownMenu;
