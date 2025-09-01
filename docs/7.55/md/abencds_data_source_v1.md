  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) → 

CDS DDL - DDIC-based View, SELECT, data\_source

Syntax

... entity*\[* [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\))*\]**|* [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) *\[**\[*AS*\]* alias*\]* *\[* [join](javascript:call_link\('abencds_joined_data_source_v1.htm'\))*\]* ...

Effect

Defines a data source of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). A data source can be a DDIC database table defined in ABAP Dictionary , a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), an [DDIC external view](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry"), a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), or a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) in which [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") are evaluated. The CDS associations of the path expression cannot have any abstract [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry").

-   If the data source is a CDS entity with a [list of input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)), actual parameters must be passed to these using [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\)).

-   An alternative name alias for a directly specified data source can be defined after AS. It is also possible to define an alias name without the keyword AS (see example below). If a path expression is used, an alternative name must be defined. The name must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

-   The syntax [JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) can be used to combine multiple data sources as [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry").

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
[CDS DDL - DDIC-based View, SELECT, JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\))