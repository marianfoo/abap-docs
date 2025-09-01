---
title: "READ DATASET - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset.htm) Syntax READ DATASET dset INTO dobj MAXIMUM LENGTH mlen ACTUAL LENGTH alen. Effect Imports data from the file specified in dset to the data object dobj. Additions -   MAXIMUM LENGTH ml
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset_shortref.htm"
abapFile: "abapread_dataset_shortref.htm"
keywords: ["do", "if", "data", "abapread", "dataset", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  R

READ DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset.htm)

Syntax

READ DATASET dset INTO dobj *\[*MAXIMUM LENGTH mlen*\]*
                            *\[**\[*ACTUAL*\]* LENGTH alen*\]*.

Effect

Imports data from the file specified in dset to the data object dobj.

Additions

-   MAXIMUM LENGTH mlen
    Restricts the number of characters and bytes to be read from the file to mlen.
    
-   *\[*ACTUAL*\]* LENGTH alen
    Returns the number of characters and bytes read from the file to alen.