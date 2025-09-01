---
title: "DESCRIBE DISTANCE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_distance.htm) Syntax DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst IN BYTECHARACTER MODE. Effect Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and re
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_distance_shortref.htm"
abapFile: "abapdescribe_distance_shortref.htm"
keywords: ["do", "data", "abapdescribe", "distance", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  D

DESCRIBE DISTANCE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_distance.htm)

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and returns the result in dst.

Addition

-   IN *{*BYTE*|*CHARACTER*}* MODE
    Defines whether the distance is determined in bytes or characters.