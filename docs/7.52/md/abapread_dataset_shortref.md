  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

READ DATASET - Quick reference

[Reference](javascript:call_link\('abapread_dataset.htm'\))

Syntax

READ DATASET dset INTO dobj *\[*MAXIMUM LENGTH mlen*\]*
                            *\[**\[*ACTUAL*\]* LENGTH alen*\]*.

Effect

Imports data from the file specified in dset to the data object dobj.

Additions

-   MAXIMUM LENGTH mlen
    Restricts the number of characters and bytes to be read from the file to mlen.
    
-   *\[*ACTUAL*\]* LENGTH alen
    Returns the number of characters and bytes read from the file to alen.