---
title: "HIDE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphide_shortref.htm) Syntax HIDE dobj. Effect This statement stores the content of a variable dobj together with the current list line whose line number is contained in sy-linno in the hide area(https://help.sap.com/doc
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphide.htm"
abapFile: "abaphide.htm"
keywords: ["select", "do", "if", "try", "catch", "class", "data", "internal-table", "field-symbol", "abaphide"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists.htm) → 

HIDE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphide_shortref.htm)

Syntax

HIDE dobj.

Effect

This statement stores the content of a variable dobj together with the current list line whose line number is contained in sy-linno in the [hide area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhide_area_glosry.htm "Glossary Entry") of the current list level. The data type of the variable dobj must be [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry") and no field symbols or components of [boxed components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_component_glosry.htm "Glossary Entry") can be specified that point to rows of internal tables, and no class attributes can be specified. The saved values can be read as followed:

-   Any user action on a displayed screen list that causes a list event assigns all values saved using HIDE to the relevant variables.
    

-   If a list line of a list level is read or modified using the statements [READ LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_line.htm) or [MODIFY LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_line.htm), all the values of this line saved using HIDE are assigned to the relevant variables.
    

Hints

-   The HIDE statement works independently of whether the [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") was set. In particular, variables for empty list lines can be stored (that is, lines in which the list cursor was positioned using statements like [SKIP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapskip.htm)).
    

-   The HIDE statement should be executed directly in the statement that has set the list cursor in the line.
    

-   Using the HIDE statement on a field symbol can cause runtime errors. The syntax check creates a warning.
    

Example

Saving square numbers and cubic numbers for a list of numbers. The example shows that any variable can be stored independently of the line content. In the real world, one would more likely save only the number and execute the calculation, when required, in the event block for [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_line-selection.htm).

DATA: square TYPE i,
      cube   TYPE i.
START-OF-SELECTION.
  FORMAT HOTSPOT.
  DO 10 TIMES.
    square = sy-index \*\* 2.
    cube   = sy-index \*\* 3.
    WRITE / sy-index.
    HIDE: square, cube.
  ENDDO.
AT LINE-SELECTION.
  WRITE: square, cube.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The field is too long for HIDE.
    Runtime error: HIDE\_FIELD\_TOO\_LARGE

-   Cause: HIDE in a table line or a component in a table line is not possible.
    Runtime error: HIDE\_ILLEGAL\_ITAB\_SYMBOL

-   Cause: HIDE in a local field is not possible.
    Runtime error: HIDE\_NO\_LOCAL

-   Cause: HIDE is not possible on an empty page.
    Runtime error: HIDE\_ON\_EMPTY\_PAGE

-   Cause: Illegal field
    Runtime error: HIDE\_NOT\_GLOBAL

-   Cause: Permitted number of HIDE statements per list line exceeded
    Runtime error: HIDE\_TOO\_MANY\_HIDES
    

Continue
![Example](exa.gif "Example") [Lists - HIDE Technology](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_hide_abexa.htm)