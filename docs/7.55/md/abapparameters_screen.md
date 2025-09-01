  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) → 

PARAMETERS, screen\_options

[Short Reference](javascript:call_link\('abapparameters_shortref.htm'\))

Syntax

... *{* *{**\[*OBLIGATORY*|*NO-DISPLAY*\]* *\[*VISIBLE LENGTH vlen*\]**}*
    *|* *{*AS CHECKBOX *\[*USER-COMMAND fcode*\]**}*
    *|* *{*RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]**}*
    *|* *{*AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*
                                      *\[*OBLIGATORY*\]**}* *}*
    *\[*[MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))*\]* ...

Additions:

[1\. ... OBLIGATORY](#!ABAP_ADDITION_1@1@)
[2\. ... NO-DISPLAY](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)
[4\. ... AS CHECKBOX *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_4@4@)
[5\. ... RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_5@5@)
[6\. ... AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_6@6@)

Effect

These additions can be used to declare the input field as a required field, hide the input field on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), and define the visible length of the field. The input field can be displayed as a checkbox, radio button, or [dropdown list box](javascript:call_link\('abendropdown_listbox_glosry.htm'\) "Glossary Entry"). The [MODIF ID](javascript:call_link\('abapselection-screen_modif_id.htm'\)) addition assigns all the screen elements of the parameter to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.

Hint

Not all combinations of additions are valid. The syntax above shows the allowed combinations.

Addition 1

... OBLIGATORY

Effect

This addition defines the input field of the parameter on the selection screen as a required (obligatory) field. If no entry is made in this field, the user cannot use the Execute function (F8) to exit the selection screen; instead, the user can only use the functions Back, Exit, or Cancel.

Addition 2

... NO-DISPLAY

Effect

This addition specifies that no screen elements are generated for the parameter on the selection screen. In an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a parameter of this type is used only as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when called with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

If the addition NO-DISPLAY is specified, a parameter can have any data types except for reference types. These parameters can only be populated using the [WITH](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) addition of the SUBMIT statement. In this case, unlike the general conversion rule for [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") types, the same rules apply as when importing data from a [data cluster](javascript:call_link\('abapimport_parameterlist.htm'\)).

Hint

The length of a value passed to a parameter without input field is not subject to the 132 character restriction that applies to parameters that do have input fields.

Addition 3

... VISIBLE LENGTH vlen

Effect

This addition defines the visible length of the input field as vlen. Here, vlen is entered directly as a positive number. If vlen is less than the length of the parameter and less than the maximum visible length, the input field is displayed in the length defined in vlen, with movable content. Otherwise, the addition is ignored.

Addition 4

... AS CHECKBOX *\[*USER-COMMAND fcode*\]*

Effect

This addition specifies that the input field in the first position of the selection screen is displayed as a [checkbox](javascript:call_link\('abencheckbox_glosry.htm'\) "Glossary Entry") with the corresponding description next to it on the right. The checkbox is selected if the value of para is "X" or "x". Otherwise, it is not selected.

This parameter must be created with type c and length 1. Explicitly specified lengths len are not allowed. If the addition [TYPE](javascript:call_link\('abapparameters_type.htm'\)) is used, it can only be followed by the generic type c or a non-generic data type of type c and length 1.

The addition USER-COMMAND can be used to assign a function code fcode to the parameter. The function code fcode must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") of the structure SSCRFIELDS from ABAP Dictionary can be declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)). When the user selects the checkbox on the selection screen, the runtime environment raises the event [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](javascript:call_link\('abenselection_screen_events.htm'\)) is affected accordingly.

Hints

-   If the TYPE addition is used to make a reference to a data type in ABAP Dictionary of type CHAR and length 1, and for which the valid values in the domain are defined as "X" and " ", the parameter is displayed automatically as a checkbox on the selection screen.

-   The addition USER-COMMAND can, for example, be used for screen modifications with the addition MODIF ID (refer to example).

-   If the addition USER-COMMAND is specified without the addition AS CHECKBOX, and the parameter is of type c with length 1, it is also displayed as a checkbox. Once again, explicit lengths cannot be specified. The addition OBLIGATORY is also possible in the syntax but does not make sense for a checkbox.

-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").
    

Addition 5

... RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]*

Effect

This addition specifies that the input field is displayed as a [radio button](javascript:call_link\('abenradio_button_glosry.htm'\) "Glossary Entry") in the first position on the selection screen, and the output field is displayed next to it on the right. The radio button is selected if the value of para is "X" or "x". Otherwise, it is not selected.

group is used to define the [radio button group](javascript:call_link\('abenradio_button_group_glosry.htm'\) "Glossary Entry") for the parameter. The name group is entered directly as a character string with a maximum of 4 characters. Within a selection screen, there must be a minimum of two parameters in the same radio button group. There cannot be more than one radio button group with the same name in one program, even if they are defined in different selection screens. If a radio button group is defined in a [block](javascript:call_link\('abapselection-screen_block.htm'\)), all parameters of this group must be defined within the block.

This parameter must be created with type c and length 1. Explicitly specified lengths len are not allowed. If the addition [TYPE](javascript:call_link\('abapparameters_type.htm'\)) is used, it can only be followed by the generic type c or a non-generic data type of type c and length 1.

In a radio button group, only one parameter can be defined with the addition [DEFAULT](javascript:call_link\('abapparameters_value.htm'\)), and the specified value must be "X". By default, the first parameter in a radio button group is set to the value "X" and the rest are set to " ".

The addition USER-COMMAND can be used to assign a function code fcode to the first parameter in a radio button group. The function code fcode must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") of the structure SSCRFIELDS from ABAP Dictionary can be declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)). When the user selects any radio button from the radio button group on the selection screen, the runtime environment raises the event [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](javascript:call_link\('abenselection_screen_events.htm'\)) is affected accordingly.

Hints

-   We recommend that you arrange the radio buttons of a radio button group directly underneath each other. If the selection screen also contains other elements, we recommend that you define each radio button group within a block surrounded by a frame.

-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").
    

Addition 6

... AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*

Effect

This addition creates a [dropdown list box](javascript:call_link\('abendropdown_listbox_glosry.htm'\) "Glossary Entry") for an input field on the selection screen. The dropdown list box can be supplied with a selection list as follows:

-   At the point in time [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen_events.htm'\)) or [AT SELECTION-SCREEN ON VALUE-REQUEST FOR para](javascript:call_link\('abapat_selection-screen_events.htm'\)), the function module VRM\_SET\_VALUES can be called; the name of the parameter and a suitable list are passed in an internal table of type VRM\_VALUES from type pool VRM to this function module. The column TEXT of this table is displayed in the list box, and when a row is selected, the value from column KEY is added to the parameter.

-   If the function module VRM\_SET\_VALUES is not called and the parameter is created with a data type from ABAP Dictionary, and the data type is associated with the input help in the dictionary, the first column of the input help is displayed in the list box.

-   Otherwise, a single-row list box is displayed containing the current value of the parameter.

The addition VISIBLE LENGTH must be used to specify the visible length of the input field. The length must be specified explicitly since the length of the entries in the list box is usually different from the actual length of the parameter.

The addition USER-COMMAND can be used to assign a function code fcode to the dropdown list box. The function code fcode must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") of the structure SSCRFIELDS from ABAP Dictionary can be declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)). When the user selects a row from the list box on the selection screen, the runtime environment raises the event [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](javascript:call_link\('abenselection_screen_events.htm'\)) is affected accordingly.

Hints

-   Without the addition USER-COMMAND, selecting a row in the dropdown list box does not raise the event AT SELECTION-SCREEN.

-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Example

For parameter p, the system creates a dropdown list box, whose values are created once for event AT SELECTION-SCREEN OUTPUT and then passed to function module VRM\_SET\_VALUES.

PARAMETERS p TYPE i AS LISTBOX VISIBLE LENGTH 10.
AT SELECTION-SCREEN OUTPUT.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = CONV  vrm\_id( 'P' )
      values = VALUE vrm\_values(
                 FOR i = 1 UNTIL i > 10
                 ( key = i text = |Value { i }| ) ).

Example

For parameter p\_carrid, the system creates a dropdown list box, whose values originate from the input help for data type SPFLI-CARRID from ABAP Dictionary. The parameter p\_carrid is displayed with a length of 20 and filled with the label "Lufthansa". The user can select another airline; in this case, the three-character airline ID is assigned to the parameter. When the function code onli (associated with the function Execute in the GUI status of the default selection screen) is assigned, the events AT SELECTION-SCREEN and START-OF-SELECTION are raised.

PARAMETERS p\_carrid TYPE spfli-carrid
                    AS LISTBOX VISIBLE LENGTH 20
                    USER-COMMAND onli
                    DEFAULT 'LH'.
AT SELECTION-SCREEN.
  ...
START-OF-SELECTION.
  ...

Continue
![Example](exa.gif "Example") [Selection Screens - Display Properties for Parameters](javascript:call_link\('abensel_screen_param_screen_abexa.htm'\))