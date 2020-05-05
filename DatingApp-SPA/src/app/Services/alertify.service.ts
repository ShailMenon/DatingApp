import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallBack: () => any)
{
alertify.confirm(message, (e: any)=> {
  if(e)
  {
    okCallBack()
  }else
  {

  }
});
}

success(message: string)
{
  alertify.confirm(message);
}

error(message: string)
{
  alertify.confirm(message);
}

waring(message: string)
{
  alertify.confirm(message);
}

message(message: string)
{
  alertify.confirm(message);
}

}
