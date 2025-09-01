---
title: "Lists - Create"
description: |
  The following ABAP statements are used for creating classical lists: -   WRITE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) -   ULINE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm) -   FORMAT(https://help.sap.com/doc/abapdocu_758_index_h
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm"
abapFile: "abenabap_lists.htm"
keywords: ["do", "if", "class", "abenabap", "lists"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Create%2C%20ABENABAP_LISTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Create

The following ABAP statements are used for creating classical lists:

-   [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm)
-   [ULINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm)
-   [FORMAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapformat.htm)
-   [SET BLANK LINES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_blank_lines.htm)
-   [SKIP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip.htm)
-   [NEW-LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-line.htm)
-   [BACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapback.htm)
-   [POSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapposition.htm)
-   [SET LEFT SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_scroll-boundary.htm)
-   [NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page.htm)
-   [RESERVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreserve.htm)
-   [HIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphide.htm)
-   [SET MARGIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_margin.htm)
-   [PRINT-CONTROL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprint-control.htm)

Programming Guideline

[Use SAP List Viewer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_guidl.htm "Guideline")

Hint

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example CL\_SALV\_TABLE.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_output_abexa.htm) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [CL\_DEMO\_OUTPUT\_STREAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm). The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_examples.htm).

Continue
[WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm)
[ULINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm)
[FORMAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapformat.htm)
[SET BLANK LINES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_blank_lines.htm)
[SKIP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip.htm)
[NEW-LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-line.htm)
[BACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapback.htm)
[POSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapposition.htm)
[SET LEFT SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_scroll-boundary.htm)
[NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page.htm)
[RESERVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreserve.htm)
[HIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphide.htm)
![Example](exa.gif "Example") [Lists - Page Layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_pages_abexa.htm)