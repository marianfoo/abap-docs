---
title: "DESCRIBE DISTANCE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_distance.htm) Syntax DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst IN BYTECHARACTER MODE. Effect Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and re
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_distance_shortref.htm"
abapFile: "abapdescribe_distance_shortref.htm"
keywords: ["do", "data", "abapdescribe", "distance", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  D

DESCRIBE DISTANCE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_distance.htm)

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

Defines the distance between two data objects dobj1 and dobj2 in the memory in bytes or characters and returns the result in dst.

Addition

-   IN *{*BYTE*|*CHARACTER*}* MODE
    Defines whether the distance is determined in bytes or characters.