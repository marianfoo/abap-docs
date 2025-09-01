---
title: "TRUNCATE DATASET - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptruncate.htm) Syntax TRUNCATE DATASET dset AT CURRENT POSITIONPOSITION pos. Effect Sets the end of file of the file specified in dset to the position specified after AT. Additions -   CURRENT POSITION Sets the
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptruncate_dataset_shortref.htm"
abapFile: "abaptruncate_dataset_shortref.htm"
keywords: ["do", "if", "data", "abaptruncate", "dataset", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  T

TRUNCATE DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptruncate.htm)

Syntax

TRUNCATE DATASET dset AT *{*CURRENT POSITION*}**|**{*POSITION pos*}*.

Effect

Sets the end of file of the file specified in dset to the position specified after AT.

Additions

-   CURRENT POSITION
    Sets the end of file to the current file pointer.
    
-   POSITION pos
    Sets the end of file to the position specified in pos.