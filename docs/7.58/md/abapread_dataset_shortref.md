  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20DATASET%2C%20ABAPREAD_DATASET_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ DATASET - Short Reference

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