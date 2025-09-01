  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversion Rules for Meshes

[Meshes](javascript:call_link\('abenmesh_glosry.htm'\) "Glossary Entry") are not converted. Meshes can only be assigned to meshes and meshes can be assigned to each other only if they are fully [compatible](javascript:call_link\('abencompatibility.htm'\)), that is:

-   Their node structure must be identical, including the names of the nodes.
-   The mesh associations of each node are completely identical, which means that
    -   They must have the same name.
    -   The same ON conditions must be specified.
    -   The same table key must be used.

Hint

[MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) can also be used to assign incompatible meshes or structures and meshes to each other.

Example

See [Comparing Meshes](javascript:call_link\('abenlogexp_rules_operands_mesh.htm'\))