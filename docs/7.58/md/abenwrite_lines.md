---
title: "WRITE, Lines"
description: |
  When a list is output using WRITE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm), the characters - and  are replaced by suitable line elements(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_element_glosry.htm 'Glossary Entry') if they are displa
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_lines.htm"
abapFile: "abenwrite_lines.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenwrite", "lines"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WRITE%2C%20Lines%2C%20ABENWRITE_LINES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WRITE, Lines

When a list is output using [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm), the characters \- and | are replaced by suitable [line elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_element_glosry.htm "Glossary Entry") if they are displayed directly beside or above each other. Line elements are horizontal and vertical lines, corners, crosses, and T elements. Character replacement produces continuous lines. A solitary character | is always replaced by a vertical line. When the system field sy-uline is displayed, each character in the field is always replaced by a horizontal line as in the statement [ULINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm).

The replacement of characters with line elements depends on how the character is shown in the list and not on how it is defined in the list buffer. Consequently, the characters \- and | can be joined to form a line although they are not directly adjacent in the list buffer.

The replacement of characters by line elements can be switched off using the addition [FRAMES OFF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapformat.htm).

Hints

-   Data objects whose characters \- and | are to be replaced by line elements may only contain blanks in addition to these characters. Otherwise, replacement with line elements cannot be guaranteed.
-   In most cases, the line elements used to replace character produce the required results. Only in a few irrelevant cases can it happen that characters are replaced unexpectedly.
-   The line elements used to replace characters can also be displayed explicitly as [list elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_list_elements.htm). These can be used deliberately if the automatic replacements do not work as expected.