import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    render() {
    return (
        <div className='container'>
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                    <label for="validationTooltip01" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="validationTooltip01"  required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationTooltip02" className="form-label">Prenoms</label>
                    <input type="text" className="form-control" id="validationTooltip02"  required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationTooltipUsername" class="form-label">Nom d'utilisateur</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                        <div className="invalid-tooltip">
                            S'il vous plait, utilisez un nom d'utilisateur unique et valide.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Address Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="col-md-6">
                    <label for="validationTooltip03" className="form-label">Ville / Pays</label>
                    <input type="text" className="form-control" id="validationTooltip03" required />
                    <div className="invalid-tooltip">
                        Please provide a valid city.
                    </div>
                </div>
                    
                <div className="col-12">
                    <button className="bttn" type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    )
}
}


