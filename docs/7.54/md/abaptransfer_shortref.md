  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TRANSFER - Quick reference

[Reference](javascript:call_link\('abaptransfer.htm'\))

Syntax

TRANSFER dobj TO dset *\[*LENGTH len*\]*
                      *\[*NO END OF LINE*\]*.

Effect

Transfers the data of the data object dobj to the file specified in dset.

Additions

-   LENGTH len
    Restricts the number of characters or bytes to be transferred to len.
    
-   NO END OF LINE
    Prevents the attachment of end of line separators for text files or legacy text files.