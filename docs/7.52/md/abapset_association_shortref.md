---
title: "SET ASSOCIATION - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association.htm) Syntax SET ASSOCIATION mesh_path  = wa    LIKE wa       INITIAL . Effect Sets associations for a mesh path(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenme
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_association_shortref.htm"
abapFile: "abapset_association_shortref.htm"
keywords: ["do", "try", "abapset", "association", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SET ASSOCIATION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_set_association.htm)

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Addition

-   \= wa
    Sets key values for follow-on nodes.
    
-   LIKE wa
    Sets key values from initial nodes.
    
-   INITIAL
    Sets initial values.