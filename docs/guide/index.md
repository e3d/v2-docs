## What is AutoCalcs?

As indicated by the name AutoCalcs, it includes two parts:
- **Auto**: calculations created in AutoCalcs are live, responsive and can be reused. Each calculation is essentially an app, allowing new inputs to be entered and get updated results.
- **Calcs**: the plural form as opposed to single means AutoCalcs can be used to perform multi-step calculations, it is a platform and it's a calculation library.

When all units used in a calculator are chosen from the AutoCalcs library, unit conversion is done automatically by default, as indicated by the 'Unit[Auto]' button on the header; when non-standard unit is used, unit conversion is disabled, while calculation can still be done, except that the user needs to take care of unit conversion in this case. This provides users to use custom units as needed. An example can be found at [E-vehicle Energy Consumption](/daily-calculations/e-vehicle-energy-consumption.html)

## It is a Calculator
As a calculator, AutoCalcs can be used in 2 modes:
### - Single Mode: 
This is what is shown when you enter https://v2.donwen.com. It is a simple clean calculator with an input and an output field. For angles, the default unit is degrees, however you are free to switch between degrees(DEG) and radians(RAD). Also most of the common math functions and constants (e, 𝞹, etc.) are available and list can be found in the help page.
   ![UI-Single-mode](/assets/images/UI-Single-mode.png)
### - Multi-step Mode:
You can easily add a 2nd quantity (row) by clicking the 'Add A Quantity/Expression' button from the toolbar or shortcut 'Alt+Q'. AutoCalcs will automatically swtich to multi-step mode, allowing you to perform more complicated calculations. If you ever perform calculations in Excel or Google Sheets, AutoCalcs allows you to perform many common calculations, while you can write expressions in an explicit manner, using symbols directly.  Eg.: `a = 30, z = sin(a)`. 

Below is a cylinder volume calculator that you can use right on this page. Please note:
- The volume is shown in two different units in case users want to see both simutaneously;
- Both imperial and metric units are used in the calculator, while the basic volume calculation formula is used. This shows the convenience for the calculator that there is no need to worry about unit conversion at all when unit conversion is done automatically.
  <iframe src="https://v2.donwen.com/embed/c-20220611.175626449-e3d-037420-51bb56"
    width="100%" height="1200" style="border:1px solid black;">
  </iframe>

### - Images can be Added Easily
Images can be added for each calculation easily in multiple ways; can be removed, or position adjusted easily.  

When a calculation is created from an existing one, all images will be copied over.

## It is a Cross-Platform Platform
- Multi-step calculations can be saved into cloud.
- Once saved, each specific calculation will have a unique URL allowing it to be shared.
- Calculations saved in public domain are searchable; while registered user can save private calculations, and choose to search in private domain.
- Being **Cross-Platform**: it is on the web, accessible anywhere on any Internet connected device. 

## Calculations Are Embeddable
Calculations can be embedded into other webpage seamlessly. This means: if you want to publish an article that involves some calculations on your webpage, you can embed an AutoCalcs calculation seamlessly, and visitors to your webpage can run/use the calculation on your webpage. How cool is that!

For example, the follow HTML code will embed a simple unit converter on a webpage, allowing visitors to perform unit conversion on the fly.
```html
<iframe src="https://v2.donwen.com/embed/c-20220311.035340069-e3d-00f43d-590820"
  width="100%" height="300" style="border:1px solid black;">
</iframe>
```
It will show as the following on your webpage:
<iframe src="https://v2.donwen.com/embed/c-20220311.035340069-e3d-00f43d-590820"
  width="100%" height="300" style="border:1px solid black;">
</iframe>

To have some fun, you can click on the *'Add A Quantity/Expression'* button (the left most on the calculator header) to add a new row to show Q1 with an additional unit, say 'm', and see what you get.

## For More Help?
Go to https://v2.donwen.com/help.
