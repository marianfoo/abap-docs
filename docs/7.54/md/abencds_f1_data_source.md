  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) → 

ABAP CDS - SELECT, data\_source

Syntax

... entity*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**|* [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) *\[**\[*AS*\]* alias*\]* *\[* [join](javascript:call_link\('abencds_f1_joined_data_source.htm'\))*\]* ...

Effect

Defines a data source of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). A data source can be a database table defined in ABAP Dictionary , a [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), an [external view](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") , or a non-abstract [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") (a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), or a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in which [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") are evaluated. The CDS associations of the path expression cannot have any abstract target data sources.

-   If the data source is a CDS entity with a [list of input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)), actual parameters must be passed to these using [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\)).

-   An alternative name alias for a directly specified data source can be defined after AS. In fact, AS can be left out. An alternative name must be defined if a path expression is used. The name must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

-   The syntax [join](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) can be used to join multiple data sources as [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry").

Example

Defines the CDS view business\_partner for the database table snwd\_bpa, for which an alternative name partner is specified. This name is used in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner as
  select from snwd\_bpa as partner
         { key partner.bp\_id,
           partner.company\_name,
           partner.bp\_role }

as can also be omitted in front of the alternative name partner. The following example demonstrates another valid spelling that is potentially confusing:

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner as
  select from snwd\_bpa
           partner{ key partner.bp\_id,
                    partner.company\_name,
                    partner.bp\_role }

Continue
[ABAP CDS - SELECT, parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))
[ABAP CDS - SELECT, JOIN](javascript:call_link\('abencds_f1_joined_data_source.htm'\))