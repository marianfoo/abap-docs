---
title: "GET DATASET - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm) Syntax GET DATASET dset POSITION pos ATTRIBUTES attr. Effect Defines the properties of a file opened using OPEN DATASET. Additions -   POSITION pos Gets the current position of the file pointe
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset_shortref.htm"
abapFile: "abapget_dataset_shortref.htm"
keywords: ["do", "data", "abapget", "dataset", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  G

GET DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm)

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Effect

Defines the properties of a file opened using OPEN DATASET.

Additions

-   POSITION pos
    Gets the current position of the file pointer in pos.
    
-   ATTRIBUTES attr
    Gets the properties of the file in the structure attr of the type DSET\_ATTRIBUTES.