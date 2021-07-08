import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCrit: string): User[] {
    
    if(users == null || searchCrit.length ===0){
      return users;
    }

    let search = searchCrit.toLocaleLowerCase();
    let selectedUsers: User[] = [];

    for(let u of users){
      if(
        u.id.toString().includes(search)
          || u.username.toLowerCase().includes(search)
            || u.password.toLowerCase().includes(search)
              || u.firstname.toLowerCase().includes(search)
                || u.lastname.toLowerCase().includes(search)
                  || u.status.toLowerCase().includes(search)
      )
      {selectedUsers.push(u);}
    }
    return selectedUsers;

  }

}
