# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Statements in the Dynpro Flow Logic / dynpro - Subscreens, Tabstrips, and Splitter Controls

Included pages: 11


### abendynp_subscreens.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Subscreens, Tabstrips, and Splitter Controls, ABENDYNP_SUBSCREENS, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Subscreens, Tabstrips, and Splitter Controls

Subscreens are screen layouts of special subscreen dynpros that can be included in other dynpros. Subscreens are either included directly, or using special [controls](javascript:call_link\('abencontrol_glosry.htm'\) "Glossary Entry").

-   [Including Subscreens Directly](javascript:call_link\('abendynp_subscreen.htm'\))
-   [Tabstrip Controls](javascript:call_link\('abendynp_tabstrip.htm'\))
-   [Splitter Controls](javascript:call_link\('abendynp_splitter_control_spcl.htm'\))

Continue
[dynpro - Including Subscreens Directly](javascript:call_link\('abendynp_subscreen.htm'\))
[dynpro - Tabstrip Controls](javascript:call_link\('abendynp_tabstrip.htm'\))
[dynpro - Splitter Controls](javascript:call_link\('abendynp_splitter_control_spcl.htm'\))
[dynpro - CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\))
[dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\))


### abendynp_subscreen.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Including Subscreens Directly, ABENDYNP_SUBSCREEN, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Including Subscreens Directly

The statement [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) can be used to include other screen layouts directly in the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") in the form of subscreens. Here, subscreen areas must first be defined in the screen layout of the current dynpro. Every subscreen area has a unique name and can be configured to support changes in screen size. If the latter is defined, each size change in the current GUI window raises the [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event.

Subscreens are the screen layouts of special [subscreen dynpros](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry"). When a subscreen is included, the flow logic of the subscreen dynpro is also included. Subscreens can also include other subscreens. Subscreens cannot have their own OK field. Instead, user actions on subscreens pass the function codes to the OK field of the including dynpro. In the PAI event block of a subscreen dynpro, a [MODULE](javascript:call_link\('dynpmodule.htm'\)) statement is never executed with the AT EXIT-COMMAND addition.

Hint

Subscreens dynpros are defined like regular dynpros in the [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") and are flagged there as regular dynpros. [Selection screens](javascript:call_link\('abapselection-screen_subscreen.htm'\)) can also be defined as subscreens.

Executable Example

[Dynpros, Subscreens](javascript:call_link\('abendynpro_subscreen_abexa.htm'\))


### abendynp_tabstrip.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Tabstrip Controls, ABENDYNP_TABSTRIP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

dynpro - Tabstrip Controls

A tabstrip control is a screen element that consists of multiple tab pages. Every tab page contains a single-line [tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry") linked with a function code and which can be used to select the tab page by clicking it once. Under the tab title, a tab page consists of a subscreen area. Each tab title must have a subscreen area assigned to it, in which any subscreens can be displayed. There are two ways to do this:

-   Browsing in SAP GUI
    
    A separate subscreen area is assigned to each tab title and the function codes of the tab titles are defined with the function type "P". If the user selects a tab title, the event PAI is not raised. The associated subscreens are included once in each individual subscreen area by using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic. If the user selects a tab title, the SAP GUI browses to the associated tab page and displays its subscreen.
    
-   Browsing in ABAP Programs
    
    The same subscreen area is assigned to each tab title, and the function codes of the tab titles are defined without [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). If the user selects a tab title, the event PAI is raised. The associated subscreen is included dynamically using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic in the subscreen area each time the user browses. In the ABAP program, the associated tab page must be activated using [CONTROLS](javascript:call_link\('abapcontrols.htm'\)) and the correct subscreen dynpro for the subscreen area must be specified.
    

Hint

If a tab title is selected when browsing in the SAP GUI, input checks are not made, and data is not transported to the ABAP program. The entries are all checked and the data of all subscreens transported only if a user action raises the PAI event. When browsing in the ABAP program, the input is checked each time a tab title is selected, and the current tab page data is transported to the ABAP program of the subscreen dynpro.

Executable Examples

-   [Dynpros, Tabstrips with Scrolling in SAP GUI](javascript:call_link\('abentab_strip_control1_abexa.htm'\))
-   [Dynpros, Tabstrips with Scrolling in AS instance](javascript:call_link\('abentab_strip_control2_abexa.htm'\))


### abendynp_splitter_control_spcl.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Splitter Controls, ABENDYNP_SPLITTER_CONTROL_SPCL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Splitter Controls

A splitter control is a screen element that divides the area it covers either horizontally into two adjacent [subscreen areas](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry") or vertically one above each other. The division is made by a sash. The horizontal or vertical position of the sash is specified statically in the definition of the splitter control. It can be set to PBO in the ABAP program and changed by the user while the screen layout is displayed.

[Subscreen dynpros](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") are included in both subscreen areas in exactly the same way as [direct inclusion](javascript:call_link\('abendynp_subscreen.htm'\)) using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement in the dynpro flow logic. Any subscreens can be included, particularly those that contain splitter controls again.

In ABAP programs, the position of the sash of a splitter controls is controlled using an instance of the CL\_DYNPRO\_SPLITTER class. If, before sending this screen layout, an object of this class is created and its constructor is given the name of a splitter control, this is bound to the splitter control and its methods can be used to set and read the position of the sash. The sash position is specified as a percentage and refers to the width or height of the splitter control. In the object, the position is represented by a private attribute. Important methods of the class are:

-   GET\_GUISASH
    
    At PAI sets the sash position of the object to the current value of the bound splitter control.
    
-   SET\_SASH
    
    If no value is passed to the POSITION parameter, the method sets the sash position of the bound splitter control at PBO to the value of the object. If a value is passed to the POSITION parameter, the method sets the attribute of the object and the sash position of the bound splitter control at PBO to this value. At PAI, only the attribute of the object is set.
    
-   GET\_SASH
    
    Returns the sash position of the bound splitter control at PBO and PAI.
    

A splitter control can have a [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") assigned to it, which can be used to react to changes to the sash position made by the user in ABAP programs.

Hints

-   A splitter control can only be created in the alphanumeric Screen Painter by using Edit → Create Element → Splitter Control. For this reason, it should only be used in cases when the functions offered are required on classic dynpros. [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry") or [Web Dynpro ABAP](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry") should be used for new developments instead of classic dynpros.
-   Splitter controls offer certain advantages over the corresponding [CFW](javascript:call_link\('abencfw_glosry.htm'\) "Glossary Entry") containers. One advantage is that they allow all screen elements of a classic dynpro to be displayed directly in a flexible frame. Another is that they have better performance than CFW controls. An example of intensive use of splitter controls is the flexible interface of the ABAP Debugger.

Executable Example

[Dynpros, Splitter Controls](javascript:call_link\('abendynpro_splitter_control_abexa.htm'\))


### dynpcall.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - CALL SUBSCREEN, DYNPCALL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

dynpro - CALL SUBSCREEN

Syntax

CALL SUBSCREEN sub\_area *\[*INCLUDING prog dynnr*\]*.

Variants:

[1\. CALL SUBSCREEN sub\_area INCLUDING prog dynnr.](#!ABAP_VARIANT_1@1@)
[2\. CALL SUBSCREEN sub\_area.](#!ABAP_VARIANT_2@2@)

Effect

Includes a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). There is one variant for the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and one variant for the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"). The statement CALL SUBSCREEN cannot be used between the statements LOOP and ENDLOOP or CHAIN and ENDCHAIN.

Hints

-   The statement CALL SUBSCREEN is required to [include](javascript:call_link\('abendynp_subscreen.htm'\)) subscreens directly and to include them using [tabstrips](javascript:call_link\('abendynp_tabstrip.htm'\)) or [splitter controls](javascript:call_link\('abendynp_splitter_control_spcl.htm'\)).
-   An obsolete variant of this statement is [CALL CUSTOMER SUBSCREEN](javascript:call_link\('dynpcall_customer_subscreen.htm'\)).

Variant 1   

CALL SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

PBO

This statement is used to include the [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") of the program defined in prog and the dynpro number defined in dynnr in the [subscreen area](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry") sub\_area of the current dynpro, and processes its PBO flow logic at this point. After PBO processing of the subscreen dynpro, the flow logic of the current dynpro is continued after the CALL statement.

The area sub\_area must be specified directly. prog expects either a two-character data object from the current ABAP program or a text field literal. dynnr expects a data object of the type n and length 4 from the current ABAP program or a text field literal. An uncatchable exception is raised if the specified subscreen dynpro cannot be found. If no subscreen dynpro is included for PBO in a subscreen area, the area remains empty.

If the specified subscreen dynpro is not defined in the current ABAP program, the specified program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised. If the object is a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") is created. If the object is an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") or a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), the program is loaded to the [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") of the current program.

The flow logic of the subscreen dynpro calls the dialog modules of its own ABAP program and the global fields of its own program are transported to the subscreen dynpro. When a subscreen is being processed, sy-dynnr contains the dynpro number of the subscreen.

The GUI status and the current next dynpro cannot be changed in the dialog modules of the subscreen, and the statements SET *{* TITLEBAR *|* PF-STATUS *}* and *{* LEAVE *|* SET *}* SCREEN raise an uncatchable exception there.

Variant 2   

CALL SUBSCREEN sub\_area.

Effect

PAI

The statement calls the PAI flow logic of the [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") included in the sub\_area [subscreen area](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry"). The subscreen dynpro must be included in the subscreen area for PBO (see variant 1). The same applies to the dialog modules called by the PAI flow logic as to the modules called by PBO. The data transport between the subscreen dynpro and its ABAP program is performed at the call, or is delayed when [FIELD](javascript:call_link\('dynpfield.htm'\)) statements are executed in the PAI flow logic of the subscreen logic.

Hints

-   If the use of subscreens means that the names of the displayed screen elements are not unique, multiple dynpro fields can be assigned to a global data object of the ABAP program, and, accordingly, multiple transports can be performed for PBO and PAI.
-   Since function codes from the subscreen dynpro are moved to the OK field of the including dynpro, it is advisable to give these function codes unique names.
-   Since the dynpro fields of subscreen dynpros are transported to the global data objects of the program in which the subscreen dynpros are defined, it must be ensured that the calling program is provided with this data when called externally. If reusable subscreen dynpros are to be defined, it is advisable to encapsulate them in function pools and to use function modules to enable the caller to set and use the global data.

Example

If a tabstrip control with untyped tabstrips and a subscreen area called SUB is defined on a dynpro, the associated dynpro flow logic can appear as follows. The statement CALL SUBSCREEN includes the subscreen dynpro of the same ABAP program whose number is in the ABAP data object dynnr in the subscreen area SUB. The associated programming section of the ABAP program is in the example for [CONTROLS](javascript:call_link\('abapcontrols_tabstrip.htm'\)).

PROCESS BEFORE OUTPUT.
  MODULE prepare\_tabstrip.
  CALL SUBSCREEN sub INCLUDING sy-repid dynnr.
PROCESS AFTER INPUT.
  CALL SUBSCREEN sub.
  MODULE handle\_user\_command.


### abentab_strip_control_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls, ABENTAB_STRIP_CONT
ROL_ABEXAS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls

Continue
![Example](exa.gif "Example") [dynpro - Subscreens](javascript:call_link\('abendynpro_subscreen_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Tabstrips with Scrolling in SAP GUI](javascript:call_link\('abentab_strip_control1_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Tabstrips with Scrolling on the ABAP Server](javascript:call_link\('abentab_strip_control2_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Splitter Control](javascript:call_link\('abendynpro_splitter_control_abexa.htm'\))


### abendynpro_subscreen_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Subscreens, ABENDYNPRO_SUBSCREEN_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

dynpro - Subscreens

This example demonstrates how to include subscreens.

Source Code   

REPORT demo\_dynpro\_subscreens.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: number1(4) TYPE n VALUE '0110',
      number2(4) TYPE n VALUE '0130',
      field(10) TYPE c, field1(10) TYPE c, field2(10) TYPE c.
CALL SCREEN 100.
MODULE status\_100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE fill\_0110 OUTPUT.
  field = 'Entry 1'(001).
ENDMODULE.
MODULE fill\_0120 OUTPUT.
  field = field1.
ENDMODULE.
MODULE fill\_0130 OUTPUT.
  field = 'Entry 2'(002).
ENDMODULE.
MODULE fill\_0140 OUTPUT.
  field = field2.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE save\_ok INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
ENDMODULE.
MODULE user\_command\_0110 INPUT.
  IF save\_ok = 'OK1'.
    number1 = '0120'.
    field1 = field.
    CLEAR field.
  ENDIF.
ENDMODULE.
MODULE user\_command\_0130 INPUT.
  IF save\_ok = 'OK2'.
    number2 = '0140'.
    field2 = field.
    CLEAR field.
  ENDIF.
ENDMODULE.
MODULE user\_command\_100 INPUT.
  CASE save\_ok.
    WHEN 'SUB1'.
      number1 = '0110'.
    WHEN 'SUB2'.
      number1 = '0120'.
      CLEAR field1.
    WHEN 'SUB3'.
      number2 = '0130'.
    WHEN 'SUB4'.
      number2 = '0140'.
      CLEAR field2.
  ENDCASE.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. Four pushbuttons with function codes SUB1 to SUB4 and two identically sized subscreen areas area1 and area2 have been created. In the same ABAP program, four subscreen dynpros 110 to 140 are defined. The input/output field of all four subscreen dynpro has the name field. The function codes of the pushbuttons on the subscreen dynpros 110 and 130 are OK1 and OK2. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_100.
  CALL SUBSCREEN: area1 INCLUDING sy-repid number1,
                  area2 INCLUDING sy-repid number2.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE save\_ok.
  CALL SUBSCREEN: area1,
                  area2.
  MODULE user\_command\_100.

The dynpro flow logic of subscreen dynpros 110 and 130 is:

PROCESS BEFORE OUTPUT.
  MODULE fill\_0110*|*0130.
PROCESS AFTER INPUT.
  MODULE user\_command\_0110*|*0130.

The dynpro flow logic of subscreen dynpros 120 and 140 is:

PROCESS BEFORE OUTPUT.
  MODULE fill\_0120*|*0150.
PROCESS AFTER INPUT.

When the program is executed, a screen appears on which subscreens 110 and 130 are displayed. The pushbuttons on the main dynpro allow the user to choose between two subscreen dynpros for each screen area. The pushbuttons on the subscreen dynpros 110 and 130 allow data to be passed to the subscreen dynpros 120 and 140.

Since all subscreen dynpros use the same field name field, the identically named ABAP field is transported more than once at each PBO and PAI of the main dynpro. For this reason, the values must be stored in the auxiliary fields field1 and field2 in the ABAP program.

The function code of the pushbuttons of the subscreen dynpros is different and regular handling in an ABAP field is enough. If the function codes had the same names, it would be necessary to use multiple helper fields here as well.


### abentab_strip_control1_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Tabstrips with Scrolling in SAP GUI, ABENTAB_STRIP_CONTROL1_ABEXA, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Tabstrips with Scrolling in SAP GUI

This example demonstrates the use of tabstrip controls with local scrolling.

Source Code   

REPORT demo\_dynpro\_tabstrip\_local.
CONTROLS mytabstrip TYPE TABSTRIP.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
mytabstrip-activetab = 'PUSH2'.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'OK'.
    MESSAGE i888(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='
                                  mytabstrip-activetab.
  ENDIF.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. It is a tabstrip page called mytabstrip created with three tabs, PUSH1, PUSH2, PUSH3 and identically named function codes of type p. One of the subscreen areas sub1 to sub3 is assigned to each tab title. The push button is called BUTTON and has the function code OK. Three subscreen dynpros 110 to 130 are also defined that fit into the subscreen areas mentioned above. The dynpro flow logic of subscreens 110 to 130 does not contain any module calls.

When the program is executed, the user sees a screen, the second tab page of which is active because before dynpro 100 is called, the component activetab of the structure mytabstrip is set to PUSH2. The user can scroll between the tab pages without raising the event PAI. One of the three subscreen dynpros is included on each tab page.

When the user chooses Continue, the PAI event is raised, and an information message displays the function code of the tab title of the page that is currently active.


### abentab_strip_control2_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Tabstrips with Scrolling on the ABAP Server, ABENTAB_STRIP_CONTROL2_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Tabstrips with Scrolling on the ABAP Server

This example demonstrates the use of tabstrip controls with centralized scrolling.

Source Code   

REPORT demo\_dynpro\_tabstrip\_server.
CONTROLS mytabstrip TYPE TABSTRIP.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA  number TYPE sy-dynnr.
mytabstrip-activetab = 'PUSH2'.
number = '0120'.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'OK'.
    MESSAGE i888(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='
                                  mytabstrip-activetab.
  ELSE.
    mytabstrip-activetab = save\_ok.
    CASE save\_ok.
      WHEN 'PUSH1'.
        number = '0110'.
      WHEN 'PUSH2'.
        number = '0120'.
      WHEN 'PUSH3'.
        number = '0130'.
    ENDCASE.
  ENDIF.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The layout of dynpro 100 and the subscreen dynpros 110 to 130 is the same as in the [executable example](javascript:call_link\('abentab_strip_control1_abexa.htm'\)) with local scrolling. The function codes of the three tab titles are not typed and a common subscreen area sub is assigned to all tab titles.

The dynpro flow logic of dynpro 100 makes a dynamic binding to PBO, a subscreen dynpro in the subscreen area sub. The dynpro flow logic of subscreen dynpros 110 to 130 does not contain any module calls.

This example works in exactly the same way as the [example with local scrolling](javascript:call_link\('abentab_strip_control1_abexa.htm'\)) except that scrolling between the tabstrip pages is programmed in the ABAP program. Each time the user chooses a tab title, the function code from the OK field is assigned to the activetab component of structure mytabstrip. At the same time, the variable number is given the dynpro number of the subscreen dynpro to be displayed in the subscreen area SUB of the tabstrip.


### abendynpro_splitter_control_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Splitter Control, ABENDYNPRO_SPLITTER_CONTROL_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Splitter Control

This example demonstrates a [splitter control](javascript:call_link\('abensplitter_control_glosry.htm'\) "Glossary Entry").

Source Code   

REPORT demo\_dynpro\_splitter\_control.
DATA splitter TYPE REF TO cl\_dynpro\_splitter.
START-OF-SELECTION.
  CREATE OBJECT splitter
    EXPORTING
      splitter\_name = 'SPLITTER'.
  CALL SCREEN 100.
MODULE set\_status OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE set\_sash OUTPUT.
  splitter->set\_sash( ).
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE get\_sash INPUT.
  splitter->get\_guisash( ).
ENDMODULE.

Description   

A subscreen is assigned to both parts of the splitter control. The subscreens are called in the dynpro flow logic.


### abentab_strip_control_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls, ABENTAB_STRIP_CONT
ROL_ABEXAS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls

Continue
![Example](exa.gif "Example") [dynpro - Subscreens](javascript:call_link\('abendynpro_subscreen_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Tabstrips with Scrolling in SAP GUI](javascript:call_link\('abentab_strip_control1_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Tabstrips with Scrolling on the ABAP Server](javascript:call_link\('abentab_strip_control2_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Splitter Control](javascript:call_link\('abendynpro_splitter_control_abexa.htm'\))
