  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

Splitter Controls

A splitter control is a screen element that divides the area it covers into two [subscreen areas](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry"), either horizontally beside each other or vertically one above the other. The division is made by a sash. The horizontal or vertical position of the sash is specified statically in the definition of the splitter control. It can be set to PBO in the ABAP program and changed by the user while the screen is being displayed.

Inserting [subscreen dynpros](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") into both subscreen areas takes place in exactly the same way as [direct insertion](javascript:call_link\('abendynp_subscreen.htm'\)) using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement in the dynpro flow logic. Any subscreens can be inserted, particularly those that contain splitter controls again.

In ABAP programs, the position of the sash of a splitter controls is controlled using an instance of the CL\_DYNPRO\_SPLITTER class. If, before sending this screen, an object of this class is created and its constructor is given the name of a splitter control, this is bound to the splitter control and its methods can be used to set and read the position of the sash. The sash position is specified by percentage and refers to the width or height of the splitter control. In the object, the position is represented by a private attribute. Important methods of the class are:

-   GET\_GUISASH
    At PAI sets the sash position of the object to the current value of the bound splitter control.

-   SET\_SASH
    If no value is passed to the POSITION parameter, the method sets the sash position of the bound splitter control at PBO to the value of the object. If a value is passed to the POSITION parameter, the method sets the attribute of the object and the sash position of the bound splitter control at PBO to this value. At PAI, only the attribute of the object is set.

-   GET\_SASH
    Gets the sash position of the bound splitter control at PBO and PAI.

A splitter control can have a [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") assigned to it, which can be used to react to changes to the sash position made by the user in ABAP programs.

Notes

-   A splitter control can only be created in the alphanumeric Screen Painter by using Edit → Create Element → Splitter Control. For this reason it should only be used in cases when the functions offered are required on classic dynpros. Use [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry") or [Web Dynpro ABAP](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry") for new developments instead of classic dynpros.

-   Splitter controls offer certain advantages over the corresponding [CFW](javascript:call_link\('abencfw_glosry.htm'\) "Glossary Entry") containers. One advantage is that they allow all screen elements of a classic dynpro to be displayed directly in a flexible frame; another is that they have better performance than CFW controls. An example of intensive use of splitter controls is the flexible interface of ABAP Debugger.

Executable Example

[Dynpros, Splitter Controls](javascript:call_link\('abendynpro_splitter_control_abexa.htm'\))