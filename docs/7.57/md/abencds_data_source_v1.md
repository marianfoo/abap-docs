  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, SELECT, data_source, ABENCDS_DATA_SOURCE_V1, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, SELECT, data\_source

Syntax

... entity*\[* [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\))*\]**|* [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) *\[**\[*AS*\]* alias*\]* *\[* [join](javascript:call_link\('abencds_joined_data_source_v1.htm'\))*\]* ...

Effect

Defines a data source of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). A data source can be a DDIC database table defined in ABAP Dictionary, a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), an [DDIC external view](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry"), a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), or a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) in which [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") are evaluated. [Non-SQL CDS entities](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") are not possible as association target of the path expression.
-   If the data source is a CDS entity with a [list of input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)), actual parameters must be passed to these using [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\)).
-   An alternative name alias for a directly specified data source can be defined after AS. It is also possible to define an alias name without the keyword AS (see example below). If a path expression is used, an alternative name must be defined. The name must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).
-   The syntax [JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) can be used to combine multiple data sources as [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry").

Hint

-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](javascript:call_link\('abencds_data_source_matrix.htm'\)).

Example

Defines the CDS view business\_partner for the DDIC database table snwd\_bpa, for which an alternative name partner is specified. This name is used in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).

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
[CDS DDL - DDIC-Based View, SELECT, JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\))