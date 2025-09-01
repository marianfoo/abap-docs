  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm) → 

Conversion Rules for Meshes

[Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_glosry.htm "Glossary Entry") are not converted. Meshes can only be assigned to meshes and meshes can be assigned to each other only if they are fully [compatible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatibility.htm):

-   Their node structure must be identical (including the names of the nodes).

-   The mesh associations of each node must match in full, which means that

-   They must have the same name.

-   The same ON conditions must be specified.

-   The same table key must be used.

Note

[MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm) can also be used to assign incompatible meshes or structures and meshes to each other.

Example

See [Comparing Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands_mesh.htm)