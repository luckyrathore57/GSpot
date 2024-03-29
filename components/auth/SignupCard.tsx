import * as React from "react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { z } from "zod"
import { SignupSchema } from "@/zod/schema/authenticationSchema"



interface SignUpProps{
    onClickBack:()=>void,
    onClickSignup:({username,password,email,collegeName}:z.infer<typeof SignupSchema>)=>void,
    redirectLogin:()=>void,
    collegeOptions:string[]

}


export function SignupCard(
    {
        onClickBack,
        onClickSignup,
        redirectLogin,
        collegeOptions
    
        }:SignUpProps
    
) {
    const [username,setUsername]=React.useState<string>("");
    const [password,setPassword]=React.useState<string>("");
    const [email,setEmail]=React.useState<string>("");
    const [collegeName,setCollegeName]=React.useState<string>("");

  return (
    <Card className="w-full sm:w-[450px] ">
       <CardHeader>
        <div className="flex justify-between ">
            <div className="flex justify-start mb-3">
                <Button variant="outline" onClick={onClickBack}><FontAwesomeIcon icon={faArrowLeft} /></Button>
            </div>
            <div>
                <CardTitle>Create new account</CardTitle>
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
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">College</Label>
              <Select onValueChange={(college)=>{setCollegeName(college)}}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {collegeOptions.map((collegeItem)=>(<SelectItem value={collegeItem} key={collegeItem}>{collegeItem}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center mt-3">
            <Button className="w-full" onClick={()=>{onClickSignup({username,password,email,collegeName})}}>Create new account</Button>
            </div>
          </div>

      </CardContent>
      <CardFooter className="flex justify-between">
            <p>Already have an account?<span className="text-blue-500 cursor-pointer" onClick={redirectLogin}>click here</span></p>
      </CardFooter>
    </Card>
  )
}
