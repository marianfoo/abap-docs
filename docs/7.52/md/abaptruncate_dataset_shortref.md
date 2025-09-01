  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TRUNCATE DATASET - Quick reference

[Reference](javascript:call_link\('abaptruncate.htm'\))

Syntax

TRUNCATE DATASET dset AT *{*CURRENT POSITION*}**|**{*POSITION pos*}*.

Effect

Sets the end of file of the file specified in dset to the position specified after AT.

Additions

-   CURRENT POSITION
    Sets the end of file to the current file pointer.
    
-   POSITION pos
    Sets the end of file to the position specified in pos.