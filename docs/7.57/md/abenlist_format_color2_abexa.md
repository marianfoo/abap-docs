---
title: "Lists - Possible Colors"
description: |
  This example demonstrates which colors are available for list formatting. Source Code REPORT demo_list_format_color_1 . DATA i TYPE i VALUE 0. DATA col(15) TYPE c. WHILE i < 8. CASE i. WHEN 0. col = 'COL_BACKGROUND '. WHEN 1. col = 'COL_HEADING    '. WHEN 2. col = 'COL_NORMAL     '. WHEN 3. c
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_format_color2_abexa.htm"
abapFile: "abenlist_format_color2_abexa.htm"
keywords: ["do", "while", "if", "case", "class", "data", "abenlist", "format", "color2", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists.htm) →  [FORMAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapformat.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Possible Colors, ABENLIST_FORMAT_COLOR2_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Lists - Possible Colors

This example demonstrates which colors are available for list formatting.

Source Code   

REPORT demo\_list\_format\_color\_1 .
DATA i TYPE i VALUE 0.
DATA col(15) TYPE c.
WHILE i < 8.
  CASE i.
    WHEN 0. col = 'COL\_BACKGROUND '.
    WHEN 1. col = 'COL\_HEADING    '.
    WHEN 2. col = 'COL\_NORMAL     '.
    WHEN 3. col = 'COL\_TOTAL      '.
    WHEN 4. col = 'COL\_KEY        '.
    WHEN 5. col = 'COL\_POSITIVE   '.
    WHEN 6. col = 'COL\_NEGATIVE   '.
    WHEN 7. col = 'COL\_GROUP      '.
  ENDCASE.
  FORMAT INTENSIFIED COLOR = i.
  WRITE: /(4) i, AT 7            sy-vline,
            col,                 sy-vline,
            col INTENSIFIED OFF, sy-vline,
            col INVERSE.
  i += 1.
ENDWHILE.

Description   

In the statement FORMAT, the COLOR option for subsequent WRITE statements is set at runtime. The additional options are set individually for each WRITE statement in the program.