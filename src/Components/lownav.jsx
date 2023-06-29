import React, { useState } from "react";
import Icon from '../Configuration/Icon.jsx';
export default function _lownav_({ gotoComponent }) {
    return (
        <nav className="navbar-lower">
            <button onClick={() => { gotoComponent('semester') }} className="navbar-lower-button">
                <Icon icon='radio_button_checked' /> 1. HJ </button>
            <button onClick={() => { gotoComponent('semester') }} className="navbar-lower-button">
                <Icon icon='radio_button_checked' /> 2.HJ </button>
            <button onClick={() => { gotoComponent('end') }} className="navbar-lower-button">
                <Icon icon='flag' /> Ende </button>
            <button onClick={() => { gotoComponent('settings') }} className="navbar-lower-button">
                <Icon icon='settings' /> Einst. </button>
        </nav>
    )
}