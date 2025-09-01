  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  D

DESCRIBE DISTANCE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_distance.htm)

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and returns the result in dst.

Addition

-   IN *{*BYTE*|*CHARACTER*}* MODE
    Defines whether the distance is determined in bytes or characters.