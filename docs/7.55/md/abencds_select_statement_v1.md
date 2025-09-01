  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) → 

CDS DDL - DDIC-based View, SELECT

Syntax

SELECT *\[*DISTINCT*\]* *{* [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm)
                    FROM [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm)
                    *\[*[association1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) [association2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) ...*\]* *}*
                *|* *{* FROM [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm)
                    *\[* [association1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) [association2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) ...*\]*
                    {[select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm)} *}*
                  *\[* [clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v1.htm)*\]*

Effect

The SELECT statement defines a query performed on the data sources specified in [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) for a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), as part of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm). Possible data sources are [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm), or other non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry").

-   [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) defines the components read in a list.

-   [association1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm), [association2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm), ... define CDS associations for the current SELECT statement. These CDS associations can be accessed in [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) and in [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) using [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm).

-   DISTINCT removes duplicates from the results list. If DISTINCT is specified, the elements cannot have the [type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Both variants of the code are equivalent. Curly brackets { } must be used in the second variant before and after the select\_list.

The optional addition [clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v1.htm) are SELECT clauses that enable conditions, groupings, and unions.

Example

The CDS view business\_partner\_role defined here is a view of an existing CDS view business\_partner. An element bp\_role is defined in the SELECT list and given the comment Business partner role. Any duplicate values of the element are removed using DISTINCT.

@AbapCatalog.sqlViewName: 'BPA\_ROLE\_VW'
define view business\_partner\_role as
  select distinct
         from business\_partner
         *{* business\_partner.role //Business partner role
         *}*

The CDS view business\_partner\_role can be addressed in ABAP programs using ABAP SQL, for example:

SELECT \* FROM business\_partner\_role INTO TABLE @itab ...

The addition DISTINCT of SELECT is no longer needed in this case.

Continue
[CDS DDL - DDIC-based View, SELECT, data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm)
[CDS DDL - DDIC-based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm)
[CDS DDL - DDIC-based View, SELECT, select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm)
[CDS DDL - DDIC-based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v1.htm)
[CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm)