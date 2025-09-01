  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20data_source%2C%20ABENCDS_DATA_SOURCE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - DDIC-Based View, SELECT, data\_source

Syntax

... entity*\[* [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_parameters_v1.htm)*\]**|* [path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) *\[**\[*AS*\]* alias*\]* *\[* [join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm)*\]* ...

Effect

Defines a data source of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). A data source can be a DDIC database table defined in ABAP Dictionary, a [DDIC database view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry"), an [DDIC external view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexternal_view_glosry.htm "Glossary Entry"), a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry"), a [CDS hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) in which [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") are evaluated. [Non-SQL CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") are not possible as association target of the path expression.
-   If the data source is a CDS entity with a [list of input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v1.htm), actual parameters must be passed to these using [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_parameters_v1.htm).
-   An alternative name alias for a directly specified data source can be defined after AS. It is also possible to define an alias name without the keyword AS (see example below). If a path expression is used, an alternative name must be defined. The name must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm).
-   The syntax [JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm) can be used to combine multiple data sources as [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry").

Hint

For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_matrix.htm).

Example

Defines the CDS view demo\_business\_partner\_1 for the DDIC database table snwd\_bpa, for which an alternative name partner is specified. This name is used in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm).

@AbapCatalog.sqlViewName: 'DEMO\_BPA\_1'
define view DEMO\_BUSINESS\_PARTNER\_1 as
  select from snwd\_bpa as partner
         { key partner.bp\_id,
           partner.company\_name,
           partner.bp\_role }

as can also be omitted in front of the alternative name partner. The following example demonstrates another valid spelling that is potentially confusing:

@AbapCatalog.sqlViewName: 'DEMO\_BPA\_2'
define view DEMO\_BUSINESS\_PARTNER\_2 as
  select from snwd\_bpa
           partner{ key partner.bp\_id,
                    partner.company\_name,
                    partner.bp\_role }

Continue
[CDS DDL - DDIC-Based View, SELECT, JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm)