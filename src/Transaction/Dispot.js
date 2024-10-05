import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { DispotAction } from './Actions';

export default function Dispot() {
    const [dispot,setDispot]=useState(0)
    const {t}=useTranslation()
    function handleSubmit(e){
        e.preventDefault()
        DispotAction(dispot)
        .then((result) => {
                toast.success("Dispot success")
                setDispot(0)
        }).catch((err) => {
            toast.error("Error")
            
        });
    }
  return (
    <div>
         <form onSubmit={handleSubmit} className="">
            <div className="mb-4 text-left ">
              <label htmlFor="email" className="text-left block text-sm font-medium mb-2">{t('Dispot')}:</label>
              <input
                type="number"
                id="dispot"
                value={dispot}
                onChange={(e) => setDispot(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
        

            <div className="flex items-center">
              <button
                type="submit"
                className=" btn btn-primary bg-blue-500 text-white p-2 rounded mr-4 w-full principal-backgroundcolor"
              >
                {t('Confirm')}
              </button>
            </div>
          </form>
    </div>
  )
}
