  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, SELECT, ABENCDS_SELECT_STATEMENT_V1, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, SELECT

Syntax

SELECT *\[*DISTINCT*\]* *{* [select\_list](javascript:call_link\('abencds_select_list_v1.htm'\))
                    FROM [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
                    *\[*[association1](javascript:call_link\('abencds_association_v1.htm'\)) [association2](javascript:call_link\('abencds_association_v1.htm'\)) ...*\]* *}*
                *|* *{* FROM [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
                    *\[* [association1](javascript:call_link\('abencds_association_v1.htm'\)) [association2](javascript:call_link\('abencds_association_v1.htm'\)) ...*\]*
                    {[select\_list](javascript:call_link\('abencds_select_list_v1.htm'\))} *}*
                  *\[* [clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\))*\]*

Effect

The SELECT statement defines a query performed on the data sources specified in [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) for a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), as part of the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)). Possible data sources are [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)), or [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   [select\_list](javascript:call_link\('abencds_select_list_v1.htm'\)) defines the components read in a list.
-   [association1](javascript:call_link\('abencds_association_v1.htm'\)), [association2](javascript:call_link\('abencds_association_v1.htm'\)), ... define CDS associations for the current SELECT statement. These CDS associations can be accessed in [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) and in [select\_list](javascript:call_link\('abencds_select_list_v1.htm'\)) using [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)).
-   DISTINCT removes duplicates from the results list. If DISTINCT is specified, the elements cannot have the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.
    
    Note: For determining duplicate rows, all columns are considered and not just key fields.
    

Both variants of the code are equivalent. Curly brackets { } must be used in the second variant before and after the select\_list.

The optional addition [clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\)) are SELECT clauses that enable conditions, groupings, and unions.

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
[CDS DDL - DDIC-Based View, SELECT, data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, Associations](javascript:call_link\('abencds_association_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, select\_list](javascript:call_link\('abencds_select_list_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\))