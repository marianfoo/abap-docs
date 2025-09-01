  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  T

TRUNCATE DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptruncate.htm)

Syntax

TRUNCATE DATASET dset AT *{*CURRENT POSITION*}**|**{*POSITION pos*}*.

Effect

Sets the end of file of the file specified in dset to the position specified after AT.

Additions

-   CURRENT POSITION
    Sets the end of file to the current file pointer.
    

-   POSITION pos
    Sets the end of file to the position specified in pos.