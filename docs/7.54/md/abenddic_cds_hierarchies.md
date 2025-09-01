---
title: "ABAP CDS - Hierarchies"
description: |
  A CDS hierarchy is defined in the DDL source code(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm 'Glossary Entry') of a CDS data definition(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm 'Glossary Entry') i
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_hierarchies.htm"
abapFile: "abenddic_cds_hierarchies.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenddic", "cds", "hierarchies"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) → 

ABAP CDS - Hierarchies

A CDS hierarchy is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") using the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm). The name of the CDS hierarchy must match the name of the [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). DDL source code in a CDS hierarchy can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

A CDS hierarchy represents a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") of rows created when the CDS hierarchy is accessed. CDS hierarchies can currently only be used when the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") is a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"). When a CDS hierarchy is activated, a view with the same name is created as an [ABAP-managed database object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") on the database. This view accesses a hierarchy generator function such as [HIERARCHY](https://help.sap.com/viewer/4f9859d273254e04af6ab3e9ea3af286/2.0.03/en-US/a93c356d32ef4e7fbd6143b554278eab.html).

A CDS hierarchy is declared as a CDS entity cds\_entity using the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm). As a data type in ABAP Dictionary, the CDS entity represents a structured type with the [elements of the CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) as components and can be used like any [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.

-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.

-   The CDS entity cannot be used as a data type for definitions of [classic dictionary objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) in ABAP Dictionary.

A CDS hierarchy is located in the namespace of the [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_types.htm) in ABAP Dictionary and in the namespace of the global [object types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_library_glosry.htm "Glossary Entry").

When using CDS hierarchies, the handling of the special [hierarchy attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") is of special importance. These attributes occur as part of the results set of the hierarchy function on the database:

-   The hierarchy attributes can be accessed explicitly as follows:

-   The prefix [$node.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element.htm) can be used to list them in the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) of the CDS hierarchy and grant them an alias name. They are then applied like a regular element of the hierarchy.

-   When a ABAP SQL query is applied to a CDS hierarchy, they are handled as additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry"), regardless of their element list, and their names can be used in explicitly specified columns

This makes it possible to specify a hierarchy attribute in the element list of the CDS hierarchy in two different ways in an ABAP SQL query, either by using the name of the element or by using the name of the hierarchy column.

-   When CDS hierarchies are used, the hierarchy attributes are not respected implicitly in the following cases:

-   When used as a data source of other CDS entities.

-   When used as a data type.

-   When used as a data source in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm), if \* or ...~\* is specified in the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list.

In these cases, only the explicit elements of the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) are respected. These can, however, present hierarchy attributes.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system supports hierarchies. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.

-   No [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") is created for a CDS hierarchy.

-   A hierarchy attribute does not become part of a structured data type created by a CDS hierarchy until it is listed explicitly in the element list of the hierarchy.

-   For information about client handling of CDS hierarchies, see [Client Handling in CDS Hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hiera_client_handling.htm).

Continue
[ABAP CDS - Client Handling in CDS Hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hiera_client_handling.htm)