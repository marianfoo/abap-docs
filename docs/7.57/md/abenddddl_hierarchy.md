  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Hierarchy Columns, ABENDDDDL_HIERARCHY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Hierarchy Columns

[Hierarchy columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") are additional components of the result set when the following data sources are accessed in an ABAP SQL query:

-   A [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm)
-   A [hierarchy navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm)

The hierarchy columns have the same names and contain the values of the [hierarchy attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") of the data sources above. Using these, they provide information about the SQL [hierarchy node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") in question. The following table shows the name and meaning of each hierarchy column:

Name

Data Type

Meaning

HIERARCHY\_RANK

INT8

Sequential number granted as a unique hierarchy node ID when a hierarchy is created.

HIERARCHY\_TREE\_SIZE

INT8

Number of [descendant nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescendant_node_glosry.htm "Glossary Entry") of the hierarchy node, including the hierarchy node itself.

HIERARCHY\_PARENT\_RANK

INT8

0 for [root nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_node_glosry.htm "Glossary Entry"), otherwise the HIERARCHY\_RANK ID of the [parent node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_node_glosry.htm "Glossary Entry").

HIERARCHY\_LEVEL

INT4

[Hierarchy level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") of the hierarchy node. Always 1 for [root nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_node_glosry.htm "Glossary Entry"). For their [descendant nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescendant_node_glosry.htm "Glossary Entry"), the distance from the root node plus one.

HIERARCHY\_IS\_CYCLE

INT1

Flag indicating whether the hierarchy node is part of (1) or is not part of (0) a [node cycle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennode_cycle_glosry.htm "Glossary Entry").

HIERARCHY\_IS\_ORPHAN

INT1

Flag indicating whether the hierarchy node is (1) or is not (0) an [orphan node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorphan_node_glosry.htm "Glossary Entry").

NODE\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that concatenates the values of all [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") fields of the associated [hierarchy association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no concatenation is required, and the data type is the data type of the specified field of the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry").

PARENT\_ID

SSTRING, length 1333

Internal character-like key of the hierarchy node that concatenates the values of all [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") fields of the associated [hierarchy association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified in the ON conditions. If there is only one comparison in the ON condition, no concatenation is required, and the data type is the data type of the specified field of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry").

VALID\_FROM, VALID\_UNTIL

DATS, TIMESTAMP, TIMESTAMPL

These attributes exist only for [temporal SQL hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry"). They contain the limits of the [validity interval](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the current [hierarchy node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of a [temporal SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry").

Hints

-   In addition to the general hierarchy columns shown here, the [hierarchy navigators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") might also have several special columns.
-   The hierarchy columns must be specified explicitly in the [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) list before they can be selected.
-   The values of some hierarchy columns are usable only if the hierarchy is a tree-like SQL hierarchy in which a hierarchy node does not have multiple parent nodes.

Example

Explicit access to the hierarchy columns when a CDS hierarchy is specified as a data source in a SELECT statement in the program DEMO\_HIERARCHY\_PARENT\_CHILD.

FINAL(start\_id) = 'A '.
SELECT FROM demo\_cds\_parent\_child( p\_id = @start\_id )
       FIELDS id,
              parent,
              hierarchy\_rank,
              hierarchy\_tree\_size,
              hierarchy\_parent\_rank,
              hierarchy\_level,
              hierarchy\_is\_cycle,
              hierarchy\_is\_orphan,
              node\_id,
              parent\_id
       INTO TABLE @FINAL(cds\_result).