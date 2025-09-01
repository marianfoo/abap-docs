---
title: "SET ASSOCIATION - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_set_association.htm) Syntax SET ASSOCIATION mesh_path  = wa    LIKE wa       INITIAL . Effect Sets associations for a mesh path(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenme
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_association_shortref.htm"
abapFile: "abapset_association_shortref.htm"
keywords: ["do", "try", "abapset", "association", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

SET ASSOCIATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_set_association.htm)

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Addition

-   \= wa
    Sets key values for follow-on nodes.
-   LIKE wa
    Sets key values from initial nodes.
-   INITIAL
    Sets initial values.