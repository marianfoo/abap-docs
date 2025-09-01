  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SET DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_dataset.htm)

Syntax

SET DATASET dest *\[*POSITION *{*pos*|**{*END OF FILE*}**}**\]*
                 *\[*ATTRIBUTES attr*\]*.

Effect

Determines the attributes of a file opened using OPEN DATASET.

Additions

-   POSITION *{*pos*|**{*END OF FILE*}**}*
    Specifies the position of the file pointer as pos or as the end of the file.
    

-   ATTRIBUTES attr
    Specifies the attributes of the file in the structure attr of type DSET\_ATTRIBUTES.