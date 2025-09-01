---
title: "INSERT TEXTPOOL, Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... STATE state Effect This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values 'A' (for active) and 'I' (for inacti
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_textpool_internal.htm"
abapFile: "abapinsert_textpool_internal.htm"
keywords: ["insert", "do", "if", "catch", "abapinsert", "textpool", "internal"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_dynamic.htm) →  [Text Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentextpool.htm) →  [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_textpool.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT TEXTPOOL, Internal Addition, ABAPINSERT_TEXTPOOL_INTERNAL, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

INSERT TEXTPOOL, Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    
    -   the active version of the repository object or
    -   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.
    
    Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.
    
-   If the addition state is specified, the statement accesses
    -   the active version of the repository object if "A" is specified,
    -   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE