  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Input Help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) → 

dynpro - Input Help in Dialog Modules

To define input helps in dialog modules, dialog modules can be called at POV time:

PROCESS ON VALUE-REQUEST.
  ...
  FIELD field MODULE mod.
  ...

After [PROCESS ON VALUE-REQUEST](javascript:call_link\('dynpprocess.htm'\)), the MODULE statement can only be used in combination with the FIELD statement. When F4 is selected, the dialog module mod of the FIELD statement on whose field field the cursor is positioned. If multiple FIELD statements are specified for the same field field, only the first statement is executed. The dialog module mod does not provide the content of the dynpro field field, since this content is not transported by the FIELD statement at PROCESS ON HELP-REQUEST time. If the recommended [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") and search help exits do not meet requirements, proposal lists for the input help can be programmed in this dialog module.

Function modules are available here that support search helps as well as all other types of input help, and which also transport data between the dynpro and the ABAP program. These function modules are prefixed with F4IF\_. The most important are:

-   F4IF\_FIELD\_VALUE\_REQUEST
    
    Calls the input help in the ABAP Dictionary dynamically. The import parameters TABNAME and FIELDNAME can be used to pass the name of the component of a structure or database in the ABAP Dictionary to the function module. The ABAP Dictionary input help defined for this component is called. All relevant dynpro fields are read. Any fields selected from the proposal list are either passed to the relevant input-enabled screen fields, if the import parameters DYNPPROG, DYNPNR, and DYNPROFIELD are specified, or passed back in the table parameter RETURN\_TAB.
    
-   F4IF\_INT\_TABLE\_VALUE\_REQUEST
    
    This function module displays a proposal list created in the ABAP program. This list is passed to the function module in the table parameter VALUE\_TAB. The selection of the user is either passed to the corresponding input-enabled screen fields, if the import parameters DYNPPROG, DYNPNR, and DYNPROFIELD are specified, or passed back in the table parameter RETURN\_TAB.
    

The additional function modules DYNP\_VALUES\_READ and DYNP\_VALUES\_UPDATE read and return dynpro fields at POV time. For further information, see the relevant function module documentation.

Executable Example

[Input Helps in Dialog Modules](javascript:call_link\('abendynpro_f4_help_dial_abexa.htm'\))