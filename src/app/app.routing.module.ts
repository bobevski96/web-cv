import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { SummaryComponent } from "./summary/summary.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'summary',
        component:SummaryComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'**',
        component:AboutComponent
    }


]


@NgModule({
    imports: [RouterModule.forRoot(routes)], // We import the RouterModule with our routes, basic configuration that is not changed, and we can use it as it is
    exports: [RouterModule],
})
export class AppRoutingModule {}
