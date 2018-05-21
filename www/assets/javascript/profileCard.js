var cardObj = {
    createCard: function(results) { 
        var bio = gOAuth.userProfile.bio,
            roles = gOAuth.userProfile.roles.map(role => role.jobs);
        bio = (bio) ? bio : "<a href='#'>Add Bio</a>";
    var card = `<div class="block-title" id="block-name">${gOAuth.user.fullName}</div>
        <div class="data-table">
            <table>
                <tbody>
                <tr>
                    <td class="label-cell center-cell">${gOAuth.user.email}</td>
                </tr>
                <tr>
                    <td class="label-cell center-cell" id="profile-pic"><img src='${gOAuth.user.imgURL}'></td>
                </tr>
                <tr>
                    <td class="label-cell">${bio}</td>
                </tr>	
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td class="label-cell">Jobs</td>
                    <td class="label-cell">${gOAuth.userProfile.jobs}</td>
                </tr>
                <tr>
                    <td class="label-cell">Connections</td>
                    <td class="label-cell">${gOAuth.userProfile.connections}</td>
                </tr>
                <tr>
                    <td class="label-cell">Roles</td>
                    <td class="label-cell">${roles.join("<br>")}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="block block-strong">
           <div class="row">
               <div class="col-100">
                   <a id="logout-button" href="#" class="button button-raised button-fill popup-open">Log Out</a>
               </div>
           </div>
       </div>`;
   
        $(".page-content").append(card);
    }
}