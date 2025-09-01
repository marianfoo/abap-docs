  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20General%20Dynpros%2C%20ABENABAP_DYNPROS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

General Dynpros

Dynpro is an abbreviation for Dynamic Program. A dynpro is a [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") object and is always a component of an ABAP program (a function pool, executable program, or module pool). It consists of a [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") with its screen elements and the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). [Dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") are assigned to the screen elements.

The flow logic contains processing blocks for events that are raised before a screen layout is sent, and after user actions on the displayed screen layout. General dynpros are edited using the [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") tool. Special dynpros, such as selection screens and lists, are generated from ABAP statements.

The dynpros in a single ABAP program can be combined to form [dynpro sequences](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry"). Individual dynpros or dynpro sequences can be called either using a transaction code from outside the ABAP program or by using the statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) in the associated ABAP program. Once a dynpro or dynpro sequence is called, the control of the execution of the ABAP program is passed to the flow logic of the dynpro. Dynpro sequences can be defined dynamically by setting the next dynpro attribute for a dynpro dynamically in the ABAP program.

The screen flow logic is divided into the Process Before Output ([PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry")) event, which is processed before the screen is displayed, and the Process After Input ([PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry")) event, which is processed after a user action on the screen.

The following diagram shows the position of dynpros between the [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") and the ABAP program:

![Figure](dynpro_position.png)

The dynpro flow logic calls dialog modules in the ABAP program, either to prepare the screens for display (PBO event) or to process the user's entries (PAI event). Dynpros are dynamic programs and have their own data objects, called [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). These are associated with the input/output fields that appear on the screen itself. When the screen is displayed and exited, data is passed between dynpros and ABAP programs on the basis of the matching names of dynpro fields and data objects in the ABAP program.

Each screen has a GUI status, containing a menu bar, standard toolbar, and an application toolbar. Like dynpros, GUI statuses are independent components of the ABAP program. They are created in the [Menu Painter](javascript:call_link\('abenmenu_painter_glosry.htm'\) "Glossary Entry"). GUI statuses are assigned to dynpros dynamically in ABAP programs. Each dynpro is associated with the current GUI status using a special dynpro field to which the corresponding function code is passed whenever user actions are performed on the GUI status. The dynpro passes the [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") to the ABAP program where it can then be evaluated, just like any other dynpro field.

The following subtopics are covered in this section:

-   [User Interface](javascript:call_link\('abenabap_dynpros_gui.htm'\))
-   [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\))
-   [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\))
-   [Dynpro Flow and Dynpro Sequences](javascript:call_link\('abenabap_dynpros_processing.htm'\))
-   [Input Checks](javascript:call_link\('abenabap_dynpros_checks.htm'\))
-   [Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\))
-   [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\))
-   [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\))

Hint

The classic dynpros described here are considered obsolete by SAP for application programs. For new developments, only [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry") or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry") should be used.

Continue
[dynpro - Elements](javascript:call_link\('abenabap_dynpro_elements.htm'\))
[dynpro - Processing Screens](javascript:call_link\('abenabap_dynpro_processing_screens.htm'\))
[dynpro - Dynpro Flow and Dynpro Sequences](javascript:call_link\('abenabap_dynpros_processing.htm'\))
[dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\))
[dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\))