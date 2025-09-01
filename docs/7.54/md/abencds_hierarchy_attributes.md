  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) → 

ABAP CDS - Hierarchy Attributes

A [hierarchy attribute](javascript:call_link\('abenhierarchy_attribute_glosry.htm'\) "Glossary Entry") contains hierarchy-specific information about a row in a tabular results set of a database hierarchy function. The following table shows the name and meaning of the potential hierarchy attributes.

Name

Data Type

Meaning

HIERARCHY\_RANK

INT8

Sequential number granted as a unique hierarchy node ID when a hierarchy is created.

HIERARCHY\_TREE\_SIZE

INT8

Number of [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry") of the hierarchy node (including the hierarchy node itself).

HIERARCHY\_PARENT\_RANK

INT8

0 for [root nodes](javascript:call_link\('abenroot_node_glosry.htm'\) "Glossary Entry"), else the HIERARCHY\_RANK ID of the [parent node](javascript:call_link\('abenchild_node_glosry.htm'\) "Glossary Entry").

HIERARCHY\_LEVEL

INT4

[Hierarchy level](javascript:call_link\('abenhierarchy_level_glosry.htm'\) "Glossary Entry") of the hierarchy node. Always 1 for [root nodes](javascript:call_link\('abenroot_node_glosry.htm'\) "Glossary Entry"). For their [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry"), the distance from the root node plus one.

HIERARCHY\_IS\_CYCLE

INT1

Flag indicating whether the hierarchy node is part of (1) or is not part of (0) a [node cycle](javascript:call_link\('abennode_cycle_glosry.htm'\) "Glossary Entry").

HIERARCHY\_IS\_ORPHAN

INT1

Flag indicating whether the hierarchy node is (1) or is not (0) an [orphan node](javascript:call_link\('abenorphan_node_glosry.htm'\) "Glossary Entry").

NODE\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that chains the values of all target data source fields of the associated [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the target data source.

PARENT\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that chains the values of all source data source fields of the associated [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the source data source.

VALID\_FROM, VALID\_UNTIL

DATS, TIMESTAMP, TIMESTAMPL

This attribute exists only for [temporal hierarchies](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry"). The contain the limits of the [validity interval](javascript:call_link\('abenvalidity_interval_glosry.htm'\) "Glossary Entry") of the current [hierarchy node](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") of a [temporal hierarchy](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry").

In the definition of a CDS hierarchy using [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)), the hierarchy attributes can be included in the [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) by specifying their names explicitly after a prefix [$node.](javascript:call_link\('abencds_f1_hiera_element.htm'\)). This makes them components of the structured type represented by the CDS hierarchy with respect to ABAP.

Note

In [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), the hierarchy attributes occur as additional [hierarchy columns](javascript:call_link\('abenhierarchy_column_glosry.htm'\) "Glossary Entry") in the results set of a [hierarchy](javascript:call_link\('abenhierarchy_glosry.htm'\) "Glossary Entry") access. More specifically, this is also the case when a CDS hierarchy is accessed. In ABAP SQL this means that there are two different ways of accessing a hierarchy attribute specified in the element list of a CDS hierarchy. See the example program DEMO\_HIERARCHY\_TREE\_HIER\_ATTR.