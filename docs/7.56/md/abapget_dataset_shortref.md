  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

GET DATASET - Short Reference

[Reference](javascript:call_link\('abapget_dataset.htm'\))

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Effect

Defines the properties of a file opened using OPEN DATASET.

Additions

-   POSITION pos
    Gets the current position of the file pointer in pos.
-   ATTRIBUTES attr
    Gets the properties of the file in the structure attr of the type DSET\_ATTRIBUTES.