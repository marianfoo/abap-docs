---
title: "SET CURSOR - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_dynpro.htm) Syntax SET CURSOR   FIELD field LINE line DISPLAYMEMORY OFFSET off    LINE line DISPLAYMEMORY OFFSET off    col lin  . Ef
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_shortref.htm"
abapFile: "abapset_cursor_shortref.htm"
keywords: ["loop", "do", "if", "try", "class", "abapset", "cursor", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20CURSOR%2C%20ABAPSET_CURSOR_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET CURSOR - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_dynpro.htm)

Syntax

SET CURSOR *{* *{* FIELD field *\[*LINE line*\]*
                     *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* LINE line
                    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Effect

Sets the cursor position on [screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") and [lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_list_glosry.htm "Glossary Entry").

Additions   

-   [FIELD field *\[*LINE line*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_dynpro.htm)
    Sets the cursor on the screen element or the field field displayed in a list, where line specifies the number of a line in a [table control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_control_glosry.htm "Glossary Entry") for a [step loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstep_loop_glosry.htm "Glossary Entry") or a list.
-   [LINE    line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_list.htm)
    Sets the cursor on the line of a table control, a step loop, or a list, specified in line.
-   [*\[*DISPLAY*|*MEMORY*\]* OFFSET off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_list.htm)
    Defines the offset off on which the cursor is set in the specified element. In lists, DISPLAY and MEMORY distinguish between the screen position and the position in the list buffer.
-   [col lin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_cursor_dynpro.htm)
    Sets the cursor to the column of the screen specified in col and the line of the screen specified in lin.