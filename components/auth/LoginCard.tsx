"use client"

import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'


 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface LoginCardProps{
    onClickBack:()=>void,
    onClickLogin:(username:string,password:string)=>void,
    redirectSignup:()=>void

}
 
export function LoginCard(
    {
    onClickBack,
    onClickLogin,
    redirectSignup

    }:LoginCardProps
) {

    const [username,setUsername]=React.useState<string>("");
    const [password,setPassword]=React.useState<string>("");


  return (
    <Card className="sm:w-[350px] w-full">
      <CardHeader>
        <div className="flex justify-between ">
            <div className="flex justify-start mb-3">
                <Button variant="outline" onClick={onClickBack}><FontAwesomeIcon icon={faArrowLeft} /></Button>
            </div>
            <div>
                <CardTitle>Login here</CardTitle>
                <CardDescription>welcome to Gspot.</CardDescription>
            </div>
            <div>

            </div>
        </div>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="***********" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="flex justify-center mt-3">
            <Button className="w-full" onClick={()=>{onClickLogin(username,password)}}>Log in</Button>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
            <p>don't have an account?<span className="text-blue-500 cursor-pointer" onClick={redirectSignup}>click here</span></p>
      </CardFooter>
    </Card>


  )
}