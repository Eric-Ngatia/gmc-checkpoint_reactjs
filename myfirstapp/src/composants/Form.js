import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    render() {
    return (
        <div className='container'>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationTooltip01" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="validationTooltip01"  required />
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationTooltip02" class="form-label">Prenoms</label>
                    <input type="text" class="form-control" id="validationTooltip02"  required />
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationTooltipUsername" class="form-label">Nom d'utilisateur</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                        <div class="invalid-tooltip">
                            S'il vous plait, utilisez un nom d'utilisateur unique et valide.
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address Email </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="col-md-6">
                    <label for="validationTooltip03" class="form-label">Ville / Pays</label>
                    <input type="text" class="form-control" id="validationTooltip03" required />
                    <div class="invalid-tooltip">
                        Please provide a valid city.
                    </div>
                </div>
                    
                <div class="col-12">
                    <button class="bttn" type="submit">S'inscrire</button>
                </div>
            </form>


        <p>Veillez, si vous avez déjà un compte cliquer <a href='#'><i>Ici</i></a> </p>
        </div>
    )
}
}


