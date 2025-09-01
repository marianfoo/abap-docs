  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PARAMETERS, screen_options, ABAPPARAMETERS_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

PARAMETERS, screen\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_shortref.htm)

Syntax

... *{* *{**\[*OBLIGATORY*|*NO-DISPLAY*\]* *\[*VISIBLE LENGTH vlen*\]**}*
    *|* *{*AS CHECKBOX *\[*USER-COMMAND fcode*\]**}*
    *|* *{*RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]**}*
    *|* *{*AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*
                                      *\[*OBLIGATORY*\]**}* *}*
    *\[*[MODIF ID modid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm)*\]* ...

Additions:

[1\. ... OBLIGATORY](#!ABAP_ADDITION_1@1@)
[2\. ... NO-DISPLAY](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)
[4\. ... AS CHECKBOX *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_4@4@)
[5\. ... RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_5@5@)
[6\. ... AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*](#!ABAP_ADDITION_6@6@)

Effect

These additions can be used to declare the input field as a required field, hide the input field on the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"), and define the visible length of the field. The input field can be displayed as a checkbox, radio button, or [dropdown list box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendropdown_listbox_glosry.htm "Glossary Entry"). The [MODIF ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm) addition assigns all the screen elements of the parameter to the [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.

Hint

Not all combinations of additions are valid. The syntax specified above shows the allowed combinations.

Addition 1   

... OBLIGATORY

Effect

This addition defines the input field of the parameter on the selection screen as a required field. If no entry is made in this field, the user cannot use the Execute function (F8) to exit the selection screen and can only use the functions Back, Exit, or Cancel.

Addition 2   

... NO-DISPLAY

Effect

This addition specifies that no screen elements are generated for the parameter on the selection screen. In an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a parameter of this type is used only as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when called with [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm).

If the addition NO-DISPLAY is specified, a parameter can have any data types except for reference types. These parameters can only be filled using the [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_selscreen_parameters.htm) addition of the SUBMIT statement. In this case, unlike the general conversion rule for [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") types, the same rules apply as when importing data from a [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_parameterlist.htm).

Hint

The length of a value passed to a parameter without input field is not restricted to 132 characters unlike parameters that do have input fields.

Addition 3   

... VISIBLE LENGTH vlen

Effect

This addition defines the visible length of the input field as vlen. Here, vlen must be specified directly as a positive number. If vlen is less than the length of the parameter and less than the maximum visible length, the input field is displayed in the length defined in vlen, with movable content. Otherwise, the addition is ignored.

Addition 4   

... AS CHECKBOX *\[*USER-COMMAND fcode*\]*

Effect

This addition specifies that the input field in the first position of the selection screen is displayed as a [checkbox](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckbox_glosry.htm "Glossary Entry") with the associated description next to it on the right. The checkbox is selected if the value of para is X or x. Otherwise, it is not selected.

This parameter must be created with type c and length 1. Explicitly specified lengths len are not allowed. If the addition [TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_type.htm) is used, it can only be followed by the generic type c or a non-generic data type of type c and length 1.

The addition USER-COMMAND can be used to assign a function code fcode to the parameter. The function code fcode must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") of the structure SSCRFIELDS from the ABAP Dictionary can be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm). When the user selects the checkbox on the selection screen, the runtime framework raises the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) is affected accordingly.

Hints

-   If the TYPE addition is used to make a reference to a data type in the ABAP Dictionary of type CHAR and length 1 whose valid values in the domain are defined as X and blank, the parameter is displayed automatically as a checkbox on the selection screen.
-   The addition USER-COMMAND can, for example, be used for screen layout modifications with the addition MODIF ID (see the associated example).
-   If the addition USER-COMMAND is specified without the addition AS CHECKBOX, and the parameter is of type c with length 1, it is also displayed as a checkbox. No explicit lengths can be specified in this case either. The addition OBLIGATORY is also possible in the syntax but does not make sense for a checkbox.
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm always contains the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Addition 5   

... RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]*

Effect

This addition specifies that the input field is displayed as a [radio button](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenradio_button_glosry.htm "Glossary Entry") in the first position on the selection screen, and the output field is displayed next to it on the right. The radio button is selected if the value of para is X or x. Otherwise, it is not selected.

group is used to define the [radio button group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenradio_button_group_glosry.htm "Glossary Entry") for the parameter. The name group must be specified directly as a character string with a maximum of four characters. Within a selection screen, there must be a minimum of two parameters in the same radio button group. Multiple radio button groups cannot have the same name in a program, even if they are defined in different selection screens. If a radio button group is defined in a [block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_block.htm), all parameters of this group must be defined within the block.

This parameter must be created with type c and length 1. Explicitly specified lengths len are not allowed. If the addition [TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_type.htm) is used, it can only be followed by the generic type c or a non-generic data type of type c and length 1.

In a radio button group, only one parameter can be defined with the addition [DEFAULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm), and the specified value must be X. By default, the first parameter in a radio button group is set to the value X and the rest are set to blank.

The addition USER-COMMAND can be used to assign a function code fcode to the first parameter in a radio button group. The function code fcode must be specified directly and can contain a maximum of 20 characters. To evaluate the function code, an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") of the structure SSCRFIELDS from the ABAP Dictionary can be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm). When the user selects any radio button from the radio button group on the selection screen, the runtime framework raises the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) is affected accordingly.

Hints

-   It is recommended that the radio buttons of a radio button group are defined directly underneath each other. If the selection screen also contains other elements, it is advisable that each radio button group is defined within a framed block.
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Addition 6   

... AS LISTBOX VISIBLE LENGTH vlen *\[*USER-COMMAND fcode*\]*

Effect

This addition creates a [dropdown list box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendropdown_listbox_glosry.htm "Glossary Entry") for an input field on the selection screen. The dropdown list box can be supplied with a selection list as follows:

-   At the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm) or [AT SELECTION-SCREEN ON VALUE-REQUEST FOR para](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm), the function module VRM\_SET\_VALUES can be called to which the name of the parameter and a suitable list are passed in an internal table of type VRM\_VALUES from the type pool VRM. The column TEXT of this table is displayed in the list box, and when a line is selected, the value from column KEY is added to the parameter.
-   If the function module VRM\_SET\_VALUES is not called and the parameter is created with a data type from the ABAP Dictionary, and the data type is linked with the input help of the dictionary, the first column of the input help is displayed in the list box.
-   Otherwise, a single-line list box is displayed containing the current value of the parameter.

The addition VISIBLE LENGTH must be used to specify the visible length of the input field. The length must be specified explicitly since the length of the entries in the list box is usually different from the actual length of the parameter.

The addition USER-COMMAND can be used to assign a function code fcode to the dropdown list box. The function code fcode must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") of the structure SSCRFIELDS from the ABAP Dictionary can be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm). When the user selects a line from the list box on the selection screen, the runtime framework raises the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) and passes the function code fcode to the component ucomm of the interface work area sscrfields. If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) is affected accordingly.

Hints

-   Without the addition USER-COMMAND, selecting a line in the dropdown list box does not raise the event AT SELECTION-SCREEN.
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Example

For the parameter p, the system creates a dropdown list box, whose values are created once for event AT SELECTION-SCREEN OUTPUT and then passed to function module VRM\_SET\_VALUES.

PARAMETERS p TYPE i AS LISTBOX VISIBLE LENGTH 10.
AT SELECTION-SCREEN OUTPUT.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = CONV  vrm\_id( 'P' )
      values = VALUE vrm\_values(
                 FOR i = 1 UNTIL i > 10
                 ( key = i text = |Value { i }| ) ).

Example

For the parameter p\_carrid, the system creates a dropdown list box, whose values originate from the input help for data type SPFLI-CARRID from the ABAP Dictionary. The parameter p\_carrid is displayed with a length of 20 and filled with the label Lufthansa. The user can select another airline, which assigns the three-character airline ID is assigned to the parameter. When the function code onli, which is linked with the function Execute in the GUI status of the default selection screen, is assigned, the events AT SELECTION-SCREEN and START-OF-SELECTION are raised.

PARAMETERS p\_carrid TYPE spfli-carrid
                    AS LISTBOX VISIBLE LENGTH 20
                    USER-COMMAND onli
                    DEFAULT 'LH'.
AT SELECTION-SCREEN.
  ...
START-OF-SELECTION.
  ...

Continue
![Example](exa.gif "Example") [Selection Screens - Display Properties for Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_param_screen_abexa.htm)