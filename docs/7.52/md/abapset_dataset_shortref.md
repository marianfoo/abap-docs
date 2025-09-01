  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET DATASET - Quick reference

[Reference](javascript:call_link\('abapset_dataset.htm'\))

Syntax

SET DATASET dest *\[*POSITION *{*pos*|**{*END OF FILE*}**}**\]*
                 *\[*ATTRIBUTES attr*\]*.

Effect

Determines the attributes of a file opened using OPEN DATASET.

Additions

-   POSITION *{*pos*|**{*END OF FILE*}**}*
    Specifies the position of the data pointer as pos or as the end of the file.
    
-   ATTRIBUTES attr
    Specifies the attributes of the file in the structure attr of type DSET\_ATTRIBUTES.