  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) →  [FORMAT](javascript:call_link\('abapformat.htm'\)) → 

Lists, Supported Colors

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
  i = i + 1.
ENDWHILE.

Description

In the statement FORMAT, the COLOR option for subsequent WRITE statements is set at runtime. The other options are set individually for each WRITE statement in the program.