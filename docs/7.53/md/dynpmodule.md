  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) → 

MODULE

Syntax

MODULE mod *\[* AT *{*EXIT-COMMAND*|*CURSOR-SELECTION*}* *\]*
           *\[* ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}* *\]*
           *\[* SWITCH switch *\]*.

Extras:

[1\. ... AT EXIT-COMMAND](#!ABAP_ADDITION_1@1@)
[2\. ... AT CURSOR-SELECTION](#!ABAP_ADDITION_2@2@)
[3\. ... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*](#!ABAP_ADDITION_3@3@)
[4\. ... SWITCH switch](#!ABAP_ADDITION_4@4@)

Effect

The statement MODULE of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") calls the [dialog module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_module_glosry.htm "Glossary Entry") mod of the ABAP program. MODULE can be used either as a keyword or as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm). When using it as an addition, the call of the dialog module depends on conditions for the dynpro fields.

As a keyword, the statement calls the dialog module mod of the respective ABAP program. At [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") time, the additions AT and ON can be used to specify conditions for the call of the dialog module.

At the [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") event, you can call any dialog module defined in the ABAP program with the addition OUTPUT. At the events PAI, POH, and POV, any dialog module defined with the addition INPUT can be called or without any addition. If the dialog module mod does not exist in the ABAP program, a non-handleable exception is raised. After a dialog module is processed in the ABAP program, processing of the dynpro flow logic is resumed after the position of the call, unless the dynpro processing is completed within the dialog module.

MODULE can be used as a keyword only at PBO and PAI time. At [POH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpov_glosry.htm "Glossary Entry") time, MODULE can be used only as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) .

Note

Do not mix up the MODULE statement of the dynpro flow logic with the identically called statement [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodule.htm) for defining dialog modules in the ABAP program.

Addition 1

... AT EXIT-COMMAND

Effect

The addition AT EXIT-COMMAND at PAI time causes module mod to be called in the following precise cases:

-   the function used to raise the event PAI has function type "E"
    
-   a character string starting with "E" was entered in the command field of the system toolbar and was confirmed by pressing Enter.
    

The dialog module is called before the automatic input checks defined in the system or in ABAP Dictionary and independently of its position in the event block. The only dynpro field transported to the ABAP program is the [OK field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenok_field_glosry.htm "Glossary Entry"). If the function that raised the PAI event does not meet any of the above prerequisites, the statement MODULE is not executed.

If multiple statements MODULE have the addition AT EXIT COMMAND , only the first one is executed. If no statement MODULE has the addition AT EXIT COMMAND, a PAI is processed as normal: The predefined input checks are executed and then the PAI event block is processed sequentially. Provided the dynpro processing is not terminated in the dialog module mod, after the return from the dialog module, the complete PAI processing is executed. The addition AT EXIT COMMAND cannot be used with the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm).

Note

The function type of a function is determined in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry") or [Menu Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmenu_painter_glosry.htm "Glossary Entry"). Usually those functions of the user interface are defined with function type "E" that are assigned to the icons Back, Exit and Cancel in the standard toolbar of the GUI status. Therefore, the called dialog module should terminate the dynpro processing and allow security checks, if required.

Addition 2

... AT CURSOR-SELECTION

Effect

The addition AT CURSOR-SELECTION at PAI time causes the module mod to be called only if

-   the function used to raise the event PAI has function code "CS" and function type "S"
    
-   The cursor is placed on a single input or output field of the screen at the moment of the user action
    

The call occurs within the usual PAI processing, meaning that the automatic input checks defined in the system or in ABAP Dictionary are executed and the statement MODULE is called according to its position in the event block. More specifically, the addition can be used with the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm).

If the PAI event is raised under the above circumstances, the function code is not passed to sy-ucomm and the OK field. They keep their previous values.

Note

The function type and function code of a function are determined in Screen Painter or in Menu Painter. It is best to use the function code "CS" in Menu Painter for the function code F2 and, in this way, assign it to the double-click function of the mouse. This makes it possible to assign dialog modules to the selection of input or output fields.

Addition 3

... ON *{*CHAIN-INPUT*|*CHAIN-REQUEST*}*

Effect

These conditions make sense only within [chains](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm) using the statements CHAIN and ENDCHAIN. They check the individual conditions [ON INPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm) or [ON REQUEST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm) for all [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") that are specified so far within the current chain after [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm). The dialog module is called if at least one of the dynpro fields fulfills the respective condition.

Addition 4

... SWITCH switch

Effect

If the addition SWITCH is specified, the dialog module mod is called only if the [switch](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenswitch_german_glosry.htm "Glossary Entry") specified by switch is in the state ON.

With switch, a switch defined in the repository must be specified directly. If the specified switch does not exist, the dialog module is not called.

The addition cannot be specified with the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm). Here, the switch assigned to the dynpro field in Screen Painter applies.

Example

Typical structure of a simple dynpro flow logic. At PBO, a dialog module status\_0100 is called to set the GUI status, at PAI, a dialog module leave\_100 is called to handle functions with function type "E" and a dialog module user\_command\_0100 to handle the other user actions.

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE leave\_100 AT EXIT-COMMAND.
  MODULE user\_command\_0100.

The relevant ABAP program must implement the dialog modules and may have a structure like the one below. Since dialog modules do not have any local data, it is best to handle the actual editing within procedures called depending on the function code.

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
[Module Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodule_abexas.htm)