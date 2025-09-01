  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_subscreens.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Splitter Controls, ABENDYNP_SPLITTER_CONTROL_SPCL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Splitter Controls

A splitter control is a screen element that divides the area it covers either horizontally into two adjacent [subscreen areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry") or vertically one above each other. The division is made by a sash. The horizontal or vertical position of the sash is specified statically in the definition of the splitter control. It can be set to PBO in the ABAP program and changed by the user while the screen layout is displayed.

[Subscreen dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") are included in both subscreen areas in exactly the same way as [direct inclusion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_subscreen.htm) using the [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpcall.htm) statement in the dynpro flow logic. Any subscreens can be included, particularly those that contain splitter controls again.

In ABAP programs, the position of the sash of a splitter controls is controlled using an instance of the CL\_DYNPRO\_SPLITTER class. If, before sending this screen layout, an object of this class is created and its constructor is given the name of a splitter control, this is bound to the splitter control and its methods can be used to set and read the position of the sash. The sash position is specified as a percentage and refers to the width or height of the splitter control. In the object, the position is represented by a private attribute. Important methods of the class are:

-   GET\_GUISASH
    
    At PAI sets the sash position of the object to the current value of the bound splitter control.
    
-   SET\_SASH
    
    If no value is passed to the POSITION parameter, the method sets the sash position of the bound splitter control at PBO to the value of the object. If a value is passed to the POSITION parameter, the method sets the attribute of the object and the sash position of the bound splitter control at PBO to this value. At PAI, only the attribute of the object is set.
    
-   GET\_SASH
    
    Returns the sash position of the bound splitter control at PBO and PAI.
    

A splitter control can have a [function code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_code_glosry.htm "Glossary Entry") assigned to it, which can be used to react to changes to the sash position made by the user in ABAP programs.

Hints

-   A splitter control can only be created in the alphanumeric Screen Painter by using Edit → Create Element → Splitter Control. For this reason, it should only be used in cases when the functions offered are required on classic dynpros. [SAPUI5](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensapui5_glosry.htm "Glossary Entry") or [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") should be used for new developments instead of classic dynpros.
-   Splitter controls offer certain advantages over the corresponding [CFW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencfw_glosry.htm "Glossary Entry") containers. One advantage is that they allow all screen elements of a classic dynpro to be displayed directly in a flexible frame. Another is that they have better performance than CFW controls. An example of intensive use of splitter controls is the flexible interface of the ABAP Debugger.

Executable Example

[Dynpros, Splitter Controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_splitter_control_abexa.htm)