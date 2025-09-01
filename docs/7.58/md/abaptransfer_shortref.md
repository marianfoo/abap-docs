---
title: "TRANSFER - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer.htm) Syntax TRANSFER dobj TO dset LENGTH len NO END OF LINE. Effect Transfers the data of the data object dobj to the file specified in dset. Additions -   LENGTH len Restricts the number of character
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer_shortref.htm"
abapFile: "abaptransfer_shortref.htm"
keywords: ["do", "if", "data", "abaptransfer", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  T

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TRANSFER%2C%20ABAPTRANSFER_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TRANSFER - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer.htm)

Syntax

TRANSFER dobj TO dset *\[*LENGTH len*\]*
                      *\[*NO END OF LINE*\]*.

Effect

Transfers the data of the data object dobj to the file specified in dset.

Additions   

-   LENGTH len
    Restricts the number of characters or bytes to be transferred to len.
-   NO END OF LINE
    Prevents the attachment of an end-of-line marker for text files or legacy text files.