import React from 'react'
import './Table.css'
import { useState } from "react";

const Table = () => {
    const [electronics,setElectronics] = useState({"phones" : 800, "laptops" : 700});
    const [furnitures,setFurnitures] = useState({"chairs" : 700, "tables" : 300});
    const [inputv,setInputv] = useState({"electronics" : null, "furnitures" : null, "phones" : null, "laptops" : null, "tables" : null, "chairs" : null});
    const [variance1, setVariance1] = useState({});
    const [key1,setKey] = useState(0)
    const setOnChange = (v, title) => {
        if (title === "electronics"){
            inputv["electronics"] = v
            inputv["phones"] = v
            inputv["laptops"] = v
            setInputv(inputv)
            // setKey(key1 + 1)
        }
        if (title === "furnitures"){
            inputv["furnitures"] = v
            inputv["chairs"] = v
            inputv["tables"] = v
            setInputv(inputv)
            // setKey(key1 + 1)
        }
        else{
            inputv[title] = v
            setInputv(inputv)
            // setKey(key1 + 1)
        }
        console.log(inputv)
    }
    const setAllocationPercentage = (title) =>{
        setKey(key1 + 1)
        console.log(title)
        console.log(inputv)
        if(title == "electronics"){
            variance1["phones"] = (((electronics["phones"] + (electronics["phones"] * inputv["phones"] / 100)) - 800) / 800) * 100
            variance1["laptops"] = (((electronics["laptops"] + (electronics["laptops"] * inputv["laptops"] / 100)) - 700) / 700) * 100
            electronics["phones"] = electronics["phones"] + (electronics["phones"] * inputv["phones"] / 100)
            electronics["laptops"] = electronics["laptops"] + (electronics["laptops"] * inputv["laptops"] / 100)
            setElectronics(electronics)
            setVariance1(variance1)
            setKey(key1 + 1)
        }
        if(title == "furnitures"){
            variance1["tables"] = (((furnitures["tables"] + (furnitures["tables"] * inputv["tables"] / 100)) - 300) / 300) * 100
            variance1["chairs"] = (((furnitures["chairs"] + (furnitures["chairs"] * inputv["chairs"] / 100)) - 700) / 700) * 100
            furnitures["tables"] = furnitures["tables"] + (furnitures["tables"] * inputv["tables"] / 100)
            furnitures["chairs"] = furnitures["chairs"] + (furnitures["chairs"] * inputv["chairs"] / 100)
            setFurnitures(furnitures)
            setVariance1(variance1)
            setKey(key1 + 1)
        }
        if(title == "tables"){
            variance1["tables"] = (((furnitures["tables"] + (furnitures["tables"] * inputv["tables"] / 100)) - 300) / 300) * 100
            furnitures["tables"] = furnitures["tables"] + (furnitures["tables"] * inputv["tables"] / 100)
            setFurnitures(furnitures)           
            setVariance1(variance1)
            setKey(key1 + 1)
        }
        if(title == "chairs"){
            variance1["chairs"] = (((furnitures["chairs"] + (furnitures["chairs"] * inputv["chairs"] / 100)) - 700) / 700) * 100
            furnitures["chairs"] = furnitures["chairs"] + (furnitures["chairs"] * inputv["chairs"] / 100)
            setFurnitures(furnitures)
            setVariance1(variance1)
            setKey(key1 + 1)
        }
        if(title == "phones"){
            variance1["phones"] = (((electronics["phones"] + (electronics["phones"] * inputv["phones"] / 100)) - 800) / 800) * 100
            electronics["phones"] = electronics["phones"] + (electronics["phones"] * inputv["phones"] / 100)
            setElectronics(electronics)
            setVariance1(variance1)
            setKey(key1 + 1)
            setKey(key1 + 1)
        }
        if(title == "laptops"){
            variance1["laptops"] = (((electronics["laptops"] + (electronics["laptops"] * inputv["laptops"] / 100)) - 700) / 700) * 100
            electronics["laptops"] = electronics["laptops"] + (electronics["laptops"] * inputv["laptops"] / 100)
            setElectronics(electronics)
            setVariance1(variance1)
            setKey(key1 + 1)
        }
        console.log(electronics)
        console.log(furnitures)
    }
    const setAllocationValue = (title) =>{
        console.log(title)
        if(title == "electronics"){
            electronics["phones"] = parseFloat(inputv["phones"])
            electronics["laptops"] = parseFloat(inputv["laptops"])
            setElectronics(electronics)
            setKey(key1 + 1)
        }
        if(title == "furnitures"){
            furnitures["tables"] = parseFloat(inputv["tables"]) 
            furnitures["chairs"] = parseFloat(inputv["chairs"])
            setFurnitures(furnitures)
            setKey(key1 + 1)
        }
        if(title == "tables"){
            furnitures["tables"] = parseFloat(inputv["tables"])
            setFurnitures(furnitures)
            setKey(key1 + 1)
        }
        if(title == "chairs"){
            furnitures["chairs"] = parseFloat(inputv["chairs"])
            setFurnitures(furnitures)
            setKey(key1 + 1)
        }
        if(title == "phones"){
            electronics["phones"] = parseFloat(inputv["phones"])
            setElectronics(electronics)
            setKey(key1 + 1)
            setKey(key1 + 1)
        }
        if(title == "laptops"){
            electronics["laptops"] = parseFloat(inputv["laptops"])
            setElectronics(electronics)
            setKey(key1 + 1)
        }
        console.log(electronics)
        console.log(furnitures)
    }
  return (
    <div key={key1}>
      <table>
        <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Input</th>
            <th>Allocation %</th>
            <th>Allocation Val</th>
            <th>Variance %</th>
        </tr>
        <tr>
            <td>Electronics</td>
            <td><input disabled defaultValue={JSON.stringify(electronics.laptops + electronics.phones)}></input></td>
            <td><input type="number" defaultValue={inputv.electronics} onChange={(event) => setOnChange(event.target.value, "electronics")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("electronics")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("electronics")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.electronics} disabled></input></td>
        </tr>
        <tr>
            <td>--Phones</td>
            <td><input disabled defaultValue={JSON.stringify(electronics.phones)}></input></td>
            <td><input type="number" defaultValue={inputv.phones} onChange={(event) => setOnChange(event.target.value, "phones")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("phones")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("phones")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.phones} disabled></input></td>
        </tr><tr>
            <td>--Laptops</td>
            <td><input disabled defaultValue={JSON.stringify(electronics.laptops)}></input></td>
            <td><input type="number" defaultValue={inputv.laptops} onChange={(event) => setOnChange(event.target.value, "laptops")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("laptops")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("laptops")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.laptops} disabled></input></td>
        </tr><tr>
            <td>Furniture</td>
            <td><input disabled defaultValue={JSON.stringify(furnitures.chairs + furnitures.tables)}></input></td>
            <td><input type="number" defaultValue={inputv.furnitures} onChange={(event) => setOnChange(event.target.value, "furnitures")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("furnitures")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("furnitures")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.furnitures} disabled></input></td>
        </tr><tr>
            <td>--Tables</td>
            <td><input disabled defaultValue={JSON.stringify(furnitures.tables)}></input></td>
            <td><input type="number" defaultValue={inputv.tables} onChange={(event) => setOnChange(event.target.value, "tables")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("tables")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("tables")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.tables} disabled></input></td>
        </tr><tr>
            <td>--Chairs</td>
            <td><input disabled defaultValue={JSON.stringify(furnitures.chairs)}></input></td>
            <td><input type="number"  defaultValue={inputv.chairs} onChange={(event) => setOnChange(event.target.value, "chairs")}></input></td>
            <td><button type="allocation" onClick={() => setAllocationPercentage("chairs")}>Allocate</button></td>
            <td><button type="allocation2" onClick={() => setAllocationValue("chairs")}>Allocate</button></td>
            <td><input type="number" defaultValue={variance1.chairs} disabled></input></td>
        </tr>
    </table>
    </div>
  )
}

export default Table
