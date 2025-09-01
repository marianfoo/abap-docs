  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

GET PF-STATUS

[Quick Reference](javascript:call_link\('abapget_pf-status_shortref.htm'\))

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDINGfcode*\]*.

Extras:

[1\. ... PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns data object status the currently set GUI status, whose name is also available in the sy-pfkey system field. The following can be specified for status:

-   An existing character-like variable.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type GUI\_STATUS is declared.
    

If no status is set (empty status is displayed in the GUI window), status is initialized. If the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") is set, status is set to the value "STLI".

Addition 1

...PROGRAM prog

Effect

The addition PROGRAM is used to assign the name of the program (where the current GUI status is defined) to the variable prog. prog expects a character-like data object.

Addition 2

... EXCLUDING fcode

Effect

The addition EXCLUDING is used to insert the function codes (which are inactive in the current GUI status) row by row into the internal table fcode. For fcode, an internal table with a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like row type can be specified. Function codes are only defined if they have been deactivated with the relevant addition of the statement SET PF-STATUS. Statically deactivated function codes in the GUI status are not defined.

Example

Determine the current status in a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module.

DATA: status TYPE string,
      prog  TYPE string,
      fcode  TYPE SORTED TABLE OF sy-ucomm
             WITH NON-UNIQUE KEY table\_line.
...
MODULE user\_command\_100 INPUT.
  ...
  GET PF-STATUS status PROGRAM prog EXCLUDING fcode.
  ...
ENDMODULE.