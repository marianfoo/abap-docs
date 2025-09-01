---
title: "Syntax"
description: |
  ... entity parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_parameters.htm) path_expr(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm) AS alias  join(https://help.sap.com/doc/abapdo
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm"
abapFile: "abencds_f1_data_source.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "source"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) → 

ABAP CDS - SELECT, data\_source

Syntax

... entity*\[* [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_parameters.htm)*\]**|* [path\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm) *\[**\[*AS*\]* alias*\]* *\[* [join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_joined_data_source.htm)*\]* ...

Effect

Defines a data source of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"). A data source can be a database table defined in ABAP Dictionary , a [database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_view_glosry.htm "Glossary Entry"), an [external view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexternal_view_glosry.htm "Glossary Entry"),
or a non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") ( [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") or [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") ).

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm) in which [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") are evaluated. The associations of the path expression cannot have any abstract target data sources.

-   If the data source is a CDS entity with a [list of input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_list.htm), actual parameters must be passed to these using [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_parameters.htm).

-   An alternative name alias for a directly specified data source can be defined after AS. In fact, AS can be left out. An alternative name must be defined if a path expression is used. The name must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_general_syntax_rules.htm).

-   The syntax [join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_joined_data_source.htm) can be used to join multiple data sources as [joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_glosry.htm "Glossary Entry").

Example

Defines the CDS view business\_partner for the database table snwd\_bpa, for which an alternative name partner is specified. This name is used in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm).

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
[ABAP CDS - SELECT, parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_parameters.htm)
[ABAP CDS - SELECT, JOIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_joined_data_source.htm)