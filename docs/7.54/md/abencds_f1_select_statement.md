  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) → 

ABAP CDS - SELECT

Syntax

SELECT *\[*DISTINCT*\]* *{* [select\_list](javascript:call_link\('abencds_f1_select_list.htm'\))
                    FROM [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))
                    *\[*[association1](javascript:call_link\('abencds_f1_association.htm'\)) [association2](javascript:call_link\('abencds_f1_association.htm'\)) ...*\]* *}*
                *|* *{* FROM [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))
                    *\[* [association1](javascript:call_link\('abencds_f1_association.htm'\)) [association2](javascript:call_link\('abencds_f1_association.htm'\)) ...*\]*
                    {[select\_list](javascript:call_link\('abencds_f1_select_list.htm'\))} *}*
                  *\[*[clauses](javascript:call_link\('abencds_select_clauses.htm'\))*\]*

Effect

The SELECT statement defines a query performed on the data sources specified in [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), as part of the statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)). Possible data sources are [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) defined in ABAP Dictionary, [database views](javascript:call_link\('abenddic_database_views.htm'\)), or other [CDS views](javascript:call_link\('abencds_f1_define_view.htm'\)).

-   [select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) defines the components read in a list.

-   [association1](javascript:call_link\('abencds_f1_association.htm'\)), [association2](javascript:call_link\('abencds_f1_association.htm'\)), ... define CDS associations for the current SELECT statement. These CDS associations can be accessed in [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) and in [select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) using [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)).

-   DISTINCT removes duplicates from the results list. If DISTINCT is specified, the elements cannot have the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Both forms of the code have the same semantics. Curly brackets { } must be used in the second variant to set select\_list.

The optional additions [clauses](javascript:call_link\('abencds_select_clauses.htm'\)) are SELECT clauses that enable conditions, groupings, and union sets to be specified or created.

Example

The CDS view business\_partner\_role defined here is a view of an existing CDS view business\_partner. An element bp\_role is defined in the SELECT list and given the comment Business partner role. Any duplicate values of the element are removed using DISTINCT.

@AbapCatalog.sqlViewName: 'BPA\_ROLE\_VW'
define view business\_partner\_role as
  select distinct
         from business\_partner
         { business\_partner.role //Business partner role
         }

The CDS view business\_partner\_role can be addressed in ABAP programs using ABAP SQL, for example:

SELECT \* FROM business\_partner\_role INTO TABLE @itab ...

The addition DISTINCT of SELECT is no longer needed in this case.

Continue
[ABAP CDS - SELECT, data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))
[ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\))
[ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\))
[ABAP CDS - SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\))
[ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\))
[ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\))