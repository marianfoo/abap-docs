---
title: "INCLUDE, TYPE, STRUCTURE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type.htm) Syntax INCLUDE  TYPE struc_type  STRUCTURE struc  AS name RENAMING WITH SUFFIX suffix. Effect Includes all components of the structured type struc_type or the structure
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type_shortref.htm"
abapFile: "abapinclude_type_shortref.htm"
keywords: ["do", "if", "abapinclude", "type", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  I

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INCLUDE, TYPE, STRUCTURE, ABAPINCLUDE_TYPE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

INCLUDE, TYPE, STRUCTURE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type.htm)

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Effect

Includes all components of the structured type struc\_type or the structure struc at the current position in a structure definition.

Additions   

-   AS name
    Defines a higher-level name for the included components.
-   RENAMING WITH SUFFIX suffix
    Renames the bound components by adding the ending suffix.