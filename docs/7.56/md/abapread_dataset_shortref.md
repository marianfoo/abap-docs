---
title: "READ DATASET - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_dataset.htm) Syntax READ DATASET dset INTO dobj MAXIMUM LENGTH mlen ACTUAL LENGTH alen. Effect Imports data from the file specified in dset to the data object dobj. Additions -   MAXIMUM LENGTH ml
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_dataset_shortref.htm"
abapFile: "abapread_dataset_shortref.htm"
keywords: ["do", "if", "data", "abapread", "dataset", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  R

READ DATASET - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_dataset.htm)

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