  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy.htm) → 

SELECT, FROM cds\_hierarchy

Syntax

... cds\_hierarchy*\[*[sql\_para](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_parameters.htm)*\]* ...

Effect

Specifies a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") cds\_hierarchy as an [SQL hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy.htm) in an ABAP SQL query. The CDS hierarchy is specified using its name cds\_hierarchy defined after [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm). If the CDS hierarchy has input parameters, actual parameters must be assigned to these in a parenthesized list [sql\_para](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_parameters.htm).

The rows of the tabular result set of a CDS hierarchy specified as a data source are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the SQL hierarchy and their columns are composed of the elements of the CDS hierarchy and the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddddl_hierarchy.htm) that can be used to access the [hierarchy attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") of the data source of the CDS hierarchy.

Hint

When a CDS hierarchy is accessed, the hierarchy columns are read regardless of whether hierarchy attributes are listed in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_hiera_element_list.htm). If a hierarchy attribute is defined as an explicit element of the CDS hierarchy, it is possible to access both the element and the additional hierarchy column in ABAP SQL.

Example

Specifies a CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE as a data source of a SELECT statement in the program DEMO\_HIERARCHY\_TREE with parameter passing and explicit access to the hierarchy columns.

DATA(start\_id) = 1.
SELECT FROM demo\_cds\_simple\_tree( p\_id = @start\_id )
       FIELDS id,
              parent,
              name,
              hierarchy\_rank,
              hierarchy\_tree\_size,
              hierarchy\_parent\_rank,
              hierarchy\_level,
              hierarchy\_is\_cycle,
              hierarchy\_is\_orphan,
              node\_id,
              parent\_id
       INTO TABLE @DATA(cds\_result).