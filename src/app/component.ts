
import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();
    getProduct(key: number): Product {
        return this.model.getProduct(key);
}
    getProducts(): Product[] {
        return this.model.getProducts();
}
    newProduct: Product = new Product();
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
}
    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
}
    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`А чо  ${thing} Пушкин вводить будет?`);
                        break;
                    case "minlength":
                        messages.push(` Опять ${thing} ....хотя бы 
                            ${state.errors['minlength'].requiredLength}
                            символов ввести надо`);
                            break;
    case "pattern":
        messages.push(`в ${thing} ты ввел какую-то дичь
             `);
break;
                }
            }
        }
        return messages;
    }
}
