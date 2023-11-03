import React from 'react'

const Componentt = ({ title, description }) => {

    return (
        <div class="w-1/2">
            <input type="checkbox" name="panel" id="panel-1" class="hidden" />
            <label for="panel-1" class="relative block bg-black text-white p-4 shadow border-b border-grey">{title}</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header pt-4 pl-4">Header</h2>
                <p class="accordion__body p-4" id="panel1">{description}</p>
            </div>
        </div>
    )
}

export default Componentt
