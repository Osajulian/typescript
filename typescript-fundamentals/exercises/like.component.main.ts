import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);