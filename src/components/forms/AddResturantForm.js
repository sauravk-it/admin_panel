import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from "formik";
import { Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, OutlinedInput, Stack, TextField, Typography, createFilterOptions } from '@mui/material';
import SelectField from '../common/SelectField';
import { stripStationsList, useStationList } from '../hooks/stations';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Select from 'react-select';
import { useVendorList, stripVendorsList } from '../hooks/vendors';
import SubmittButton, { OutlinedButton } from '../common/Button';
import Newselect from '../common/Newselect';
import { SelectChangeEvent } from '@mui/material/Select';



const firm_type_options = [
    { label: "Private Limited", value: "Private Limited" },

    { label: "Partnership Firm", value: "Partnership" },
    { label: "Proprietorship", value: "Properietorship" },
];
const restaurant_type_options = [
    { label: "Veg", value: "Veg", id: "1" },
    { label: "Non-Veg", value: "Non-Veg", id: "2" },
    { label: "Jain", value: "Jain", id: "3" },
];

const delivery_type_options = [
    { label: "Delivery", value: "delivery" },
    { label: "Pickup", value: "pickup" },
];
const status_type_options = [
    { label: "Active", value: "Active" },
    { label: "Deactive", value: "Closed" },
];
const fssai_status_type_options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
];

const AddResturantForm = ({ modalIsOpen, setModalIsOpen, }) => {
    const { stationsData, stationsIsLoading } = useStationList();
    const { vendorsData, vendorsIsLoading } = useVendorList();

    const [state, setState] = useState({ selectedOption: "" });
    const [newArr, setNewarr] = useState([]);

    const addStation = () => {
        setNewarr([]);
        var arr = [],
            result = state.selectedOption.map((data) => {
                arr.push(data.value);
                newArr.push(data.value);
            });
    };


    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.label,
    });


    const pushItem = (e, id) => {
        if (e.target.checked) {
            restaurant_type.push(e.target.value);
        } else if (!e.target.checked) {
            var indexToRemove = restaurant_type.indexOf(e.target.value);
            if (indexToRemove !== -1) {
                restaurant_type.splice(indexToRemove, 1);
            }
        }
    };
    const [station, setStation] = React.useState([]);
    const [vendor, setVendor] = React.useState('');
    const [restaurant_type, setResaurant_type] = React.useState([]);
    const [firmtype, setFirmtype] = React.useState('');
    const [fssai_status, setFssai_status] = React.useState('');
    const [delivery_type, setDelivery_type] = React.useState('')
    const [status_type, setStatus_type] = React.useState('')
    const [openingtime, setOpeningTime] = React.useState(null)
    const [closingtime, setClosingTime] = React.useState(null)

    const handleChange1 = (event) => {
        setFirmtype(event.target.value);
    };
    const handleChange2 = (event) => {
        setFssai_status(event.target.value);
    };
    const handleChange3 = (event) => {
        setDelivery_type(event.target.value);
    };
    const handleChange4 = (event) => {
        setStatus_type(event.target.value);
    };
    const handleChange5 = (event) => {
        setVendor(event.target.value);

    };

  

    



    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    brand: "",
                    userId: null,
                    station: null,
                    station_distance: "",
            
                    address: "",
                    firm_name: "",
                    firm_type: "", // Private Limited, Partnership Firm, Proprietorship
                    company_pan: "",
                    gstin: "",
            
                    contact_person: "",
                    email: "",
                    contact_number: "",
                    alt_number: "",
            
                    restaurant_type: [], // * Veg, Non-Veg, Jain
                    delivery_type: "delivery", // delivery, pickup
                    fssai_status: true,
                    fssai_lic_num: "",
                    status: "Active",
            
                    opening_time: "",
                    closing_time: "",
            
                    ifsc: "",
                    account: "",
                    ac_holder_name: "",
                    min_order_time: "",
                    min_order_amount: "",
                    city: "",
                    state: "",
                    pinCode: "",
                    fssaiValidUpto: "",
            

                }}
                onSubmit={(value) => {
                    console.log(value)
                }}

            >
                {(formik) => (
                    <Form  >
                        <div className='row'>


                            <div className="col-md-6">
                            {vendorsData?(   <Autocomplete
                                    disablePortal
                                
                                    size='small'
                                    id="combo-box-demo"
                                    options={stationsData?.map(stripStationsList)}
                                    getOptionLabel={(option) => option.label}
                                    filterOptions={filterOptions}
                                    value={formik.values.station}
                                    onChange={(e,value) => formik.setFieldValue("station", value)}
                                    slotProps={{ textField: { size: 'small' } }}
                                    
                                    renderInput={(params) => <TextField {...params}  name="station" label="Station" />}
                                />):("loading")}
                               
                            </div>
                            <div className='col-md-6 mb-2'>
                                {vendorsData?(   <Autocomplete
                                    disablePortal
                                    size='small'
                                    options={vendorsData?.map(stripVendorsList)}
                                    value={formik.values.userId?.label}
                                    onChange={(e,value) => formik.setFieldValue("userId",value.value)}
                                    slotProps={{ textField: { size: 'small' } }}
                                    renderInput={(params) => <TextField  name="userId"      {...params} label="Select Vendor" />}
                                />):("loading")}
                             


                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Resturant Name *"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3 ">
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Brand Name *"
                                    name="brand"
                                    value={formik.values.brand}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Firm Name *"
                                    name="firm_name"
                                    value={formik.values.firm_name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">

                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Firm Type</InputLabel>
                                        <Newselect
                                            size="small"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="firm_type"
                                            value={formik.values.firm_type}
                                            onChange={formik.handleChange}
                                            input={<OutlinedInput label="Firm Type" />}
                                        >
                                            {firm_type_options.map((element, id) => {
                                                return (
                                                    <MenuItem key={id} value={element.value}> {element.label}</MenuItem>
                                                )
                                            })}
                                        </Newselect>
                                    </FormControl>
                                </Box>

                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Address*"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="City*"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="State"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Pincode*"
                                    name="pinCode"
                                    value={formik.values.pinCode}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"

                                    label="Distance From Station"
                                    name="station_distance"
                                    value={formik.values.station_distance}
                                    onChange={formik.handleChange}

                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="PAN No.*"
                                    name="company_pan"
                                    value={formik.values.company_pan}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="GSTIN*"
                                    name="gstin"
                                    value={formik.values.gstin}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">

                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">FSSAI Status</InputLabel>
                                        <Newselect
                                            size="small"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                          
                                            name="fssai_status"
                                            value={formik.values.fssai_status}
                                    onChange={formik.handleChange}
                                            input={<OutlinedInput label="FSSAI Status" />}
                                        >
                                            {fssai_status_type_options.map((element, id) => {
                                                return (
                                                    <MenuItem key={id} value={element.value}> {element.label}</MenuItem>
                                                )
                                            })}
                                        </Newselect>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="FSSAI*"
                                    name="fssai_lic_num"
                                    value={formik.values.fssai_lic_num}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Delivery Type</InputLabel>
                                        <Newselect

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                           
                                            name="delivery_type"
                                            value={formik.values.delivery_type}
                                            onChange={formik.handleChange}
                                            input={<OutlinedInput label="Delivery Type" />}
                                        >
                                            {delivery_type_options.map((element, id) => {
                                                return (
                                                    <MenuItem key={id} value={element.value}> {element.label}</MenuItem>
                                                )
                                            })}
                                        </Newselect>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="col-md-3">
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                        <Newselect
                                            size="small"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                           
                                            name="status"
                                            value={formik.values.status}
                                            onChange={formik.handleChange}
                                            input={<OutlinedInput label="Status" />}
                                        >
                                            {status_type_options.map((element, id) => {
                                                return (
                                                    <MenuItem key={id} value={element.value}> {element.label}</MenuItem>
                                                )
                                            })}
                                        </Newselect>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="col-md-3">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">Resturant Type</InputLabel>
                                    <Newselect
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                       
                                        name="restaurant_type"
                                        value={formik.values.restaurant_type}
                                        onChange={formik.handleChange}
                                        label="Age"
                                        multiple

                                        size="small"
                                        input={<OutlinedInput label="Resturant Type" />}
                                    >
                                        {restaurant_type_options.map((element, id) => (
                                            <MenuItem key={id} value={element.value}> {element.label}</MenuItem>
                                        ))}



                                    </Newselect>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size='small'
                                    type="date"
                                    name="fssaiValidUpto"
                                    label="FSSAI Valid Upto"
                                    value={formik.values.fssaiValidUpto}
                                    onChange={formik.handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>


                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    fullWidth
                                    name="min_order_amount"
                                    label="Minimum Order Amount" 
                                    value={formik.values.min_order_amount}
                                    onChange={formik.handleChange}
                                    />
                                    
                               
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    fullWidth
                                    size="small"
                                    name="min_order_time"
                                    label="Minimum Order Time"
                                    value={formik.values.min_order_time}
                                    onChange={formik.handleChange} />
                            </div>
                            <div className="col-md-3">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker
                                            slotProps={{ textField: { size: 'small' } }}
                                            
                                            value={openingtime}
                                            onChange={(newValue) => setOpeningTime(newValue)}
                                            name="opening_time" label="Opening Time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <div className="col-md-3">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker
                                            slotProps={{ textField: { size: 'small' } }}
                                            value={closingtime}
                                            onChange={(newValue) => setClosingTime(newValue)}
                                            name="closing_time" label="Closing Time" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>

                        </div>
                        <div className="row mt-3">


                        </div>

                        <hr />
                        <Typography>Contact Details</Typography>
                        <div className="row mt-3">

                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="contact_person"
                                    label="Contact Person*"
                                    value={formik.values.contact_person}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="email"
                                    label="Email*"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="contact_number"
                                    label="Contact Number*"
                                    value={formik.values.contact_number}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="alt_number"
                                    label="Alternate No."
                                    value={formik.values.alt_number}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <hr />
                        <Typography>Bank Account Details</Typography>
                        <div className="row mt-3">

                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="ac_holder_name"
                                    label="Account Name*"
                                    value={formik.values.ac_holder_name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="account"
                                    label="Account No.*"
                                    value={formik.values.account}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <TextField
                                    size="small"
                                    name="ifsc"
                                    label="IFSC Code*"
                                    value={formik.values.ifsc}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>



                        <SubmittButton  label="Add Restaurant" />



                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddResturantForm
