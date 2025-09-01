---
title: "Conversion Rules for Meshes"
description: |
  Meshes(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_glosry.htm 'Glossary Entry') are not converted. Meshes can only be assigned to meshes and meshes can be assigned to each other only if they are fully compatible(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_mesh.htm"
abapFile: "abenconversion_mesh.htm"
keywords: ["do", "if", "try", "data", "abenconversion", "mesh"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversion Rules for Meshes, ABENCONVERSION_MESH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Conversion Rules for Meshes

[Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_glosry.htm "Glossary Entry") are not converted. Meshes can only be assigned to meshes and meshes can be assigned to each other only if they are fully [compatible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompatibility.htm), that is:

-   Their node structure must be identical, including the names of the nodes.
-   The mesh associations of each node are completely identical, which means that
    -   They must have the same name.
    -   The same ON conditions must be specified.
    -   The same table key must be used.

Hint

[MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) can also be used to assign incompatible meshes or structures and meshes to each other.

Example

See [Comparing Meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_mesh.htm)