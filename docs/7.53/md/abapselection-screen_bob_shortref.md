  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SELECTION-SCREEN - BLOCK - Quick reference

[Reference](javascript:call_link\('abapselection-screen_block.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF BLOCK block
                                *\[*WITH FRAME *\[*TITLE title*\]**\]*
                                *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK block.

Effect

Defines a block named block on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Additions

-   WITH FRAME
    Creates a frame around the block.
    
-   TITLE title
    Creates a title title for the block.
    
-   NO INTERVALS
    Specifies the addition NO INTERVALS for all the selection criteria in the block.