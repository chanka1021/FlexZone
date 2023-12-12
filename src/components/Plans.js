import React from 'react'
import './styles/Plans.css'
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";

function Plans() {
    return (
        <div className='plansSectionContainer'>
            <div className='PlansTitle'>
                <p className='T1'>Lister votre Club</p>
                <p className='T2'>etre partenaire</p>
                <p className='T1'>Choisir votre Program</p>
            </div>
            <div className='plansContainer'>
                <div className='plan'>
                    <div className='PlanTitle' >
                        <FaHeart className='Heart' />
                        Basic
                    </div>
                    <div className='PlanPrice' >
                        500 MAD / month
                        <p>30% Off  pour les nouveaux</p>
                    </div>
                    <div className='PlanDesc'>
                        <a>1 Semaines essaie gratuit</a><br />

                        Référencement de la salle de sport sur la plateforme
                        Page de profil basique avec les détails de la salle de sport et les informations de contact
                        <br />
                        Possibilité de gérer et mettre à jour les informations de la salle de sport
                        <br />
                        Accès limité aux fonctionnalités de gestion de la salle de sport
                        Support client standard.<br />
                        Rapport d'analyse mensuel.
                        <div className='PlanBtn'>Commencer</div>
                    </div>
                </div>
                <div className='plan'>
                    <div className='PlanTitle' >
                        <FaStar className='star' />

                        Standard
                    </div>
                    <div className='PlanPrice' >
                        700 MAD / month
                        <div>Populaire</div>
                    </div>
                    <div className='PlanDesc'>
                        <a>2 Semaines essaie gratuit</a><br />
                        Toutes les fonctionnalités incluses dans le Plan Basique
                        Page de profil améliorée avec des options de personnalisation supplémentaires <br />
                        Fonctionnalités avancées de gestion de la salle de sport<br /> telles que la planification de cours<br /> la gestion des membres et le suivi des présences<br />
                        Intégration de réservation et de paiement en ligne<br />
                        Support client prioritaire<br />
                        Analyse et rapports améliorés

                        <div className='PlanBtn'>Commencer</div>
                    </div>
                </div>
                <div className='plan'>
                    <div className='PlanTitle' >
                        <MdDiamond className='diamond' />
                        Premium
                    </div>
                    <div className='PlanPrice' >
                        1000 MAD / month
                        <p>10% Off  pour les nouveaux</p>
                    </div>
                    <div className='PlanDesc'>
                        <a>2 Semaines essaie gratuit</a><br />
                        Toutes les fonctionnalités incluses dans le Plan Standard<br />
                        Position premium dans les résultats de recherche et en tant que salle de sport recommandée<br />
                        Options de personnalisation et de branding avancées pour la page de profil de la salle de sport<br />
                        Outils de marketing avancés et options de promotion<br />
                        Intégration avec des services tiers supplémentaires<br /> tels que des plateformes de CRM ou d'e-mail marketing
                        Gestionnaire de compte dédié<br />
                        Analyse et insights avancés
                        <div className='PlanBtn'>Commencer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans