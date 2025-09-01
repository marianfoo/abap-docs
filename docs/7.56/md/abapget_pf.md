  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_abap_statements.htm) → 

GET PF-STATUS

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_pf-status_shortref.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*.

Additions:

[1\. ... PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns data object status the currently set GUI status, whose name is also available in the sy-pfkey system field. The following can be specified for status:

-   An existing character-like variable.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), where a variable of type GUI\_STATUS is declared.

If no status is set (empty status is displayed in the GUI window), status is initialized. If the [standard list status](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") is set, status is set to the value "STLI".

Addition 1   

...PROGRAM prog

Effect

The addition PROGRAM is used to assign the name of the program in which the current GUI status is defined to the variable prog. prog expects a character-like data object.

Addition 2   

... EXCLUDING fcode

Effect

The addition EXCLUDING is used to insert the function codes which are inactive in the current GUI status line by line into the internal table fcode. For fcode, an internal table with a [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") character-like line type can be specified. Function codes are only determined if they have been deactivated with the relevant addition of the statement SET PF-STATUS. Statically deactivated function codes in the GUI status are not defined.

Example

Determination of the current status in a [PAI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpai_glosry.htm "Glossary Entry") module.

DATA: status TYPE string,
      prog   TYPE string,
      fcode  TYPE SORTED TABLE OF sy-ucomm
             WITH NON-UNIQUE KEY table\_line.
...
MODULE user\_command\_100 INPUT.
  ...
  GET PF-STATUS status PROGRAM prog EXCLUDING fcode.
  ...
ENDMODULE.