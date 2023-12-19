import React from 'react'
import './styles/Contactus.css'
import { BsMailbox, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import img from "../assets/banner.png"

function ContactUs() {
    return (
        <div className='Contactus'>
            <div className='ContactForm'>
                <div className='Getintouch'>
                    <p className='bv'>BIENVENUE SUR Flexzone</p>
                    <p className='getin'>Prenez contact avec nous</p>
                    <p className='text-horaires'>If you have any feedback or questions about our clubs, our website or our services in general, please contact us by filling out the form. </p>
                    <div className='oh'>heures d'ouverture</div>
                    <div className='horaires'>
                        <p className='text-horaires'><a>Lun - Ven :</a> 08.00 AM to 09.00 PM</p>
                        <p className='text-horaires'><a>Sat :</a> 09.00 AM to 06.00 PM</p>
                        <p className='text-horaires'><a>Sunday :</a> 09.00 AM to 02.00 PM</p>
                    </div>
                </div>
                <div className='Form'>
                    <p className='getin'>Envoie-nous un message</p>
                    <p className='bv'>Votre adresse email ne sera pas publiée *</p>
                    <div className='Form'>
                        <input placeholder='nom complete' />
                        <input placeholder='adresse email' />
                        <input placeholder='subjet' />
                        <input placeholder='message' />
                        <div className='sendbtn'>Envoyer maintenant</div>
                    </div>
                </div>

            </div>
            <div className='ContactInfos' style={{ backgroundImage: `url(${img})` }}>
                <div className='InfosContainer'>
                    <div className='info1'>
                        <a><BsTelephoneFill /></a>
                        <p>Phone</p>
                        <hr className='Devider' />
                        (+212) 123456789
                    </div>
                    <div class="verticalLine"></div>

                    <div className='info1'>
                        <a><MdEmail /></a>
                        <p> Mail</p>
                        <hr className='Devider' />
                        contact@flexzone.com
                    </div>
                    <div class="verticalLine"></div>

                    <div class="verticalLine"></div>
                    <div className='info1'>
                        <a><MdLocationOn /></a>
                        <p>Localisation</p>
                        <hr className='Devider' />
                        Martil . Maroc
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs