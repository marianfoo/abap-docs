  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) → 

CDS DDL - CDS View Entity, SELECT

Syntax

SELECT FROM [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm)
       *\[* [association1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) [association2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) ...*\]*
           {[select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm)}
       *\[*[clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v2.htm)*\]*

Effect

In a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), as part of the statement DEFINE VIEW ENTITY, a SELECT statement defines a query performed on the data sources specified in [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm). Possible data sources are [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry"), [CDS hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), or [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

-   [association1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm), [association2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm), ... define CDS associations for the current SELECT statement. These CDS associations can be accessed in [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) and in [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) using [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm).

-   The [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) defines the components read in a list.

-   The optional addition [clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v2.htm) are SELECT clauses that enable conditions or groupings.

Hint

-   The syntax SELECT \* to select all elements from the data source is not supported in CDS view entities. This syntax can be used in ABAP SQL and in [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), but not in CDS view entities.

-   The addition DISTINCT is currently not supported in [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

-   UNION clauses are currently not supported in [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

Example

The CDS view entity DEMO\_CDS\_BUPA\_NAME shown below is based on the existing [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") DEMO\_SALES\_CDS\_BUPA. In the SELECT list, the element family\_name is defined, assigned the alias name last\_name, and given the comment Business partner last name.

@EndUserText.label: 'CDS view entity business partner name'
define view entity DEMO\_CDS\_BUPA\_NAME
  as select from
    DEMO\_SALES\_CDS\_BUPA
    {
      family\_name as last\_name // Business partner last name
    }

The CDS view entity DEMO\_CDS\_BUPA\_NAME can be addressed in ABAP programs using ABAP SQL, for example:

SELECT \* FROM demo\_cds\_bupa\_name INTO TABLE @itab ...

Continue
[CDS DDL - CDS View Entity, SELECT, data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm)
[CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm)
[CDS DDL - CDS View Entity, SELECT, select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm)
[CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v2.htm)
[CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm)