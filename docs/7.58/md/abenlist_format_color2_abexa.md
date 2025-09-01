  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm) →  [FORMAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapformat.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Possible%20Colors%2C%20ABENLIST_FORMAT_COLOR2_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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