export interface UserProfile {

    username?: string ;
    email?:string;
    firstName?:string;
    lastName?:string;
    role?:string;
    token?:string;
    realm_access?: {
        roles: string[];
      };

}