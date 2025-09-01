---
title: "TRANSFER - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptransfer.htm) Syntax TRANSFER dobj TO dset LENGTH len NO END OF LINE. Effect Transfers the data of the data object dobj to the file specified in dset. Additions -   LENGTH len Restricts the number of character
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptransfer_shortref.htm"
abapFile: "abaptransfer_shortref.htm"
keywords: ["do", "if", "data", "abaptransfer", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  T

TRANSFER - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptransfer.htm)

Syntax

TRANSFER dobj TO dset *\[*LENGTH len*\]*
                      *\[*NO END OF LINE*\]*.

Effect

Transfers the data of the data object dobj to the file specified in dset.

Additions

-   LENGTH len
    Restricts the number of characters or bytes to be transferred to len.
    

-   NO END OF LINE
    Prevents the attachment of end of line separators for text files or legacy text files.