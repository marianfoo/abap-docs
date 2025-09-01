---
title: "PRINT-CONTROL - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm) Syntax PRINT-CONTROL    INDEX-LINE index_line    formatsFUNCTION code LINE line POSITION col . Effect Creates index entries for list archiving or sets a print format (ob
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_shortref.htm"
abapFile: "abapprint-control_shortref.htm"
keywords: ["insert", "do", "if", "abapprint", "control", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  P

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PRINT-CONTROL, ABAPPRINT-CONTROL_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

PRINT-CONTROL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)

Syntax

PRINT-CONTROL   { INDEX-LINE index\_line }
              *|* *{* formats*|**{*FUNCTION code*}*
                  *\[*LINE line*\]* *\[*POSITION col*\]* *}*.

Effect

Creates index entries for list archiving or sets a print format (obsolete).

Additions   

-   [INDEX-LINE index\_line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)
    Inserts the content of index\_line as an index line into the current spool list.
-   Obsolete: [formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_obsolete.htm)
    Predefined print formats for print control codes.
-   Obsolete: [FUNCTION code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_obsolete.htm)
    Specifies print control codes directly in code.
-   Obsolete: [*\[*LINE line*\]* *\[*POSITION col*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_obsolete.htm)
    Sets the print format starting from the list line specified in line and position specified in col.