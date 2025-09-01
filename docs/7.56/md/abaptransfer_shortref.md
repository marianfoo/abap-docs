  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TRANSFER - Short Reference

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
    Prevents the attachment of an end-of-line marker for text files or legacy text files.