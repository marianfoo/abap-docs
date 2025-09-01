---
title: "SET ASSOCIATION - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_set_association.htm) Syntax SET ASSOCIATION mesh_path  = wa    LIKE wa       INITIAL . Effect Sets associations for a mesh path(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenme
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_association_shortref.htm"
abapFile: "abapset_association_shortref.htm"
keywords: ["do", "if", "try", "abapset", "association", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET ASSOCIATION, ABAPSET_ASSOCIATION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

SET ASSOCIATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_set_association.htm)

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Addition  

-   \= wa
    Sets key values for follow-on nodes.
-   LIKE wa
    Sets key values from initial nodes.
-   INITIAL
    Sets initial values.