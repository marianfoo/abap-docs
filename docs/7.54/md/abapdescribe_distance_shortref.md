  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DESCRIBE DISTANCE - Quick reference

[Reference](javascript:call_link\('abapdescribe_distance.htm'\))

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and returns the result in dst.

Addition

-   IN *{*BYTE*|*CHARACTER*}* MODE
    Defines whether the distance is determined in bytes or characters.