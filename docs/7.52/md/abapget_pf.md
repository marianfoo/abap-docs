---
title: "GET PF-STATUS"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_pf-status_shortref.htm) Syntax GET PF-STATUS status PROGRAM prog EXCLUDINGfcode. Extras: 1. ... PROGRAM prog(#!ABAP_ADDITION_1@1@) 2. ... EXCLUDING fcode(#!ABAP_ADDITION_2@2@) Effect This state
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_pf.htm"
abapFile: "abapget_pf.htm"
keywords: ["insert", "do", "if", "try", "data", "internal-table", "abapget"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) → 

GET PF-STATUS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_pf-status_shortref.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDINGfcode*\]*.

Extras:

[1\. ... PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns data object status the currently set GUI status, whose name is also available in the sy-pfkey system field. The following can be specified for status:

-   An existing character-like variable.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type GUI\_STATUS is declared.
    

If no status is set (empty status is displayed in the GUI window), status is initialized. If the [standard list status](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") is set, status is set to the value "STLI".

Addition 1

...PROGRAM prog

Effect

Use the addition PROGRAM to assign the name of the program (where the current GUI status is defined) to variable prog. prog expects a character-like data object.

Addition 2

... EXCLUDING fcode

Effect

Use the addition EXCLUDING to insert the function codes (which are inactive in the current GUI status) row by row into the internal table fcode. For fcode, an internal table with a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like row type can be specified. Function codes are only defined if they have been deactivated with the relevant addition of the statement SET PF-STATUS. Statically deactivated function codes in the GUI status are not defined.

Example

Determine the current status in a [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") module.

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