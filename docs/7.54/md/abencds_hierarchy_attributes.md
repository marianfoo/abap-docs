---
title: "ABAP CDS - Hierarchy Attributes"
description: |
  A hierarchy attribute(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_attribute_glosry.htm 'Glossary Entry') contains hierarchy-specific information about a row in a tabular results set of a database hierarchy function. The following table shows the name and meaning of the
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm"
abapFile: "abencds_hierarchy_attributes.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "hierarchy", "attributes"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm) → 

ABAP CDS - Hierarchy Attributes

A [hierarchy attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") contains hierarchy-specific information about a row in a tabular results set of a database hierarchy function. The following table shows the name and meaning of the potential hierarchy attributes.

Name

Data Type

Meaning

HIERARCHY\_RANK

INT8

Sequential number granted as a unique hierarchy node ID when a hierarchy is created.

HIERARCHY\_TREE\_SIZE

INT8

Number of [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry") of the hierarchy node (including the hierarchy node itself).

HIERARCHY\_PARENT\_RANK

INT8

0 for [root nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry"), else the HIERARCHY\_RANK ID of the [parent node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchild_node_glosry.htm "Glossary Entry").

HIERARCHY\_LEVEL

INT4

[Hierarchy level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") of the hierarchy node. Always 1 for [root nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry"). For their [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry"), the distance from the root node plus one.

HIERARCHY\_IS\_CYCLE

INT1

Flag indicating whether the hierarchy node is part of (1) or is not part of (0) a [node cycle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennode_cycle_glosry.htm "Glossary Entry").

HIERARCHY\_IS\_ORPHAN

INT1

Flag indicating whether the hierarchy node is (1) or is not (0) an [orphan node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorphan_node_glosry.htm "Glossary Entry").

NODE\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that chains the values of all target data source fields of the associated [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the target data source.

PARENT\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that chains the values of all source data source fields of the associated [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the source data source.

VALID\_FROM, VALID\_UNTIL

DATS, TIMESTAMP, TIMESTAMPL

This attribute exists only for [temporal hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry"). The contain the limits of the [validity interval](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the current [hierarchy node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of a [temporal hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry").

In the definition of a CDS hierarchy using [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm), the hierarchy attributes can be included in the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) by specifying their names explicitly after a prefix [$node.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element.htm). This makes them components of the structured type represented by the CDS hierarchy with respect to ABAP.

Note

In [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), the hierarchy attributes occur as additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") in the results set of a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") access. More specifically, this is also the case when a CDS hierarchy is accessed. In ABAP SQL this means that there are two different ways of accessing a hierarchy attribute specified in the element list of a CDS hierarchy. See the example program DEMO\_HIERARCHY\_TREE\_HIER\_ATTR.