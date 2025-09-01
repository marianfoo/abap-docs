  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_dynpro_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20MODULE%2C%20DYNPMODULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - MODULE

Syntax

MODULE mod *\[* AT *{*EXIT-COMMAND*|*CURSOR-SELECTION*}* *\]*
           *\[* ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}* *\]*
           *\[* SWITCH switch *\]*.

Additions:

[1\. ... AT EXIT-COMMAND](#!ABAP_ADDITION_1@1@)
[2\. ... AT CURSOR-SELECTION](#!ABAP_ADDITION_2@2@)
[3\. ... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*](#!ABAP_ADDITION_3@3@)
[4\. ... SWITCH switch](#!ABAP_ADDITION_4@4@)

Effect

The MODULE statement of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") calls the [dialog module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_module_glosry.htm "Glossary Entry") mod of the ABAP program. MODULE can be used either as a keyword or as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm). When using it as an addition, the call of the dialog module depends on conditions for the dynpro fields.

As a keyword, the statement calls the dialog module mod of the respective ABAP program. At [PAI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry") time, the additions AT and ON can be used to specify conditions for the call of the dialog module.

At the [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") event, any dialog module defined in the ABAP program with the addition OUTPUT can be called. At the events PAI, POH, and POV, any dialog module defined with the addition INPUT or without any addition can be called. If the dialog module mod does not exist in the ABAP program, an uncatchable exception is raised. After a dialog module is processed in the ABAP program, processing of the dynpro flow logic is resumed after the position of the call, unless the dynpro processing is completed within the dialog module.

MODULE can be used as a keyword only at PBO and PAI time. At [POH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpov_glosry.htm "Glossary Entry") time, MODULE can be used only as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm).

Hint

The MODULE statement of the dynpro flow logic must not be confused with the identically named statement [MODULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodule.htm) for defining dialog modules in the ABAP program.

Addition 1   

... AT EXIT-COMMAND

Effect

The addition AT EXIT-COMMAND at PAI time causes module mod to be called if the following applies:

-   The function used to raise the event PAI has function type E.
-   A character string starting with E was entered in the command field of the system toolbar and was confirmed by pressing Enter.

The dialog module is called before the automatic input checks defined in the system or in the ABAP Dictionary and independently of its position in the event block. The only dynpro field transported to the ABAP program is the [OK field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenok_field_glosry.htm "Glossary Entry"). If the function that raised the PAI event does not meet any of the above prerequisites, the statement MODULE is not executed.

If multiple MODULE statements have the addition AT EXIT-COMMAND, only the first one is executed. If no MODULE statement has the addition AT EXIT-COMMAND, a PAI is processed as normal: The predefined input checks are executed and then the PAI event block is processed sequentially. If the dynpro processing is not terminated in the dialog module mod, the complete PAI processing is executed after the dialog module has ended. The addition AT EXIT-COMMAND cannot be specified with the statement [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm).

Hint

The function type of a function is defined in the [Screen Painter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_painter_glosry.htm "Glossary Entry") or [Menu Painter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmenu_painter_glosry.htm "Glossary Entry"). Usually those functions of the user interface are defined with function type E that are assigned to the icons Back, Exit and Cancel in the standard toolbar of the GUI status. Therefore, the called dialog module should terminate the dynpro processing and allow security checks, if required.

Addition 2   

... AT CURSOR-SELECTION

Effect

The addition AT CURSOR-SELECTION at PAI time causes the module mod to be called only if the following applies:

-   The function used to raise the event PAI has the function code CS and function type S.
-   The cursor is placed on a single input field or output field of the screen layout at the time of the user action.

The call occurs as part of the usual PAI processing, that is, the automatic input checks defined in the system or in the ABAP Dictionary are executed and the statement MODULE is called according to its position in the event block. More specifically, the addition can be used with the statement [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm).

If the PAI event is raised under the above circumstances, the function code is not passed to sy-ucomm and the OK field. They keep their previous values.

Hint

The function type and function code of a function are defined in the Screen Painter or in the Menu Painter. It is best to use the function code CS in Menu Painter for the function code F2 and, in this way, assign it to the double-click function of the mouse. This makes it possible to assign dialog modules to the selection of input or output fields.

Addition 3   

... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*

Effect

These conditions make sense only within [chains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpchain.htm) using the statements CHAIN and ENDCHAIN. They check the individual conditions [ON INPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield_module.htm) or [ON REQUEST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield_module.htm) for all [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") that are specified so far within the current chain after [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm). The dialog module is called if at least one of the dynpro fields fulfills the respective condition.

Addition 4   

... SWITCH switch

Effect

If the addition SWITCH is specified, the dialog module mod is called only if the [switch](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_glosry.htm "Glossary Entry") specified by switch is in the state ON.

With switch, a switch defined in the repository must be specified directly. If the specified switch does not exist, the dialog module is not called.

The addition cannot be specified with the statement [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm). Here, the switch assigned to the dynpro field in Screen Painter applies.

Example

Typical structure of a simple dynpro flow logic. At PBO, a dialog module status\_0100 is called to set the GUI status. At PAI, a dialog module leave\_100 is called to handle functions with function type E and a dialog module user\_command\_0100 to handle the other user actions.

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE leave\_100 AT EXIT-COMMAND.
  MODULE user\_command\_0100.

The associated ABAP program must implement the dialog modules and may have a structure like the one below. Since dialog modules do not have any local data, it is best to handle the actual processing within procedures called depending on the function code.

DATA: ok\_code TYPE sy-ucomm,
      ...
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_0100'.
ENDMODULE.
MODULE leave\_100 INPUT.
  CASE ok\_code.
    WHEN 'BACK'.
      ...
    WHEN 'CANCEL'.
      ...
    WHEN 'EXIT'.
      LEAVE PROGRAM.
    ...
  ENDCASE.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  CASE ok\_code.
    WHEN ...
      CALL ...
      ...
  ENDCASE.
ENDMODULE.

Continue
[dynpro - Examples of Module Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodule_abexas.htm)