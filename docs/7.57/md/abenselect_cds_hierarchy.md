  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM cds_hierarchy, ABENSELECT_CDS_HIERARCHY, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM cds\_hierarchy

Syntax

... cds\_hierarchy*\[*[sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\))*\]* ...

Effect

Specifies a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") cds\_hierarchy as an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) in an ABAP SQL query. The CDS hierarchy is specified using its name cds\_hierarchy defined after [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)). If the CDS hierarchy has input parameters, actual parameters must be assigned to these in a parenthesized list [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\)).

The rows of the tabular result set of a CDS hierarchy specified as a data source are the [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") of the SQL hierarchy and their columns are composed of the elements of the CDS hierarchy and the additional [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) that can be used to access the [hierarchy attributes](javascript:call_link\('abenhierarchy_attribute_glosry.htm'\) "Glossary Entry") of the data source of the CDS hierarchy.

Hint

When a CDS hierarchy is accessed, the hierarchy columns are read regardless of whether hierarchy attributes are listed in the [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)). If a hierarchy attribute is defined as an explicit element of the CDS hierarchy, it is possible to access both the element and the additional hierarchy column in ABAP SQL.

Example

Specifies a CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE as a data source of a SELECT statement in the program DEMO\_HIERARCHY\_TREE with parameter passing and explicit access to the hierarchy columns.

FINAL(start\_id) = 1.
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
       INTO TABLE @FINAL(cds\_result).