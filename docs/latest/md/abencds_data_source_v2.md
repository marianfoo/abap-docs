---
title: "Syntax"
description: |
  ... entity parameters(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_parameters_v2.htm) path_expr(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) AS alias  join(https://help.sap.com/doc/abap
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm"
abapFile: "abencds_data_source_v2.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "source"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20data_source%2C%20ABENCDS_DATA_SOURCE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - CDS View Entity, SELECT, data\_source

Syntax

... entity*\[* [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_parameters_v2.htm)*\]**|* [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) *\[*AS alias*\]* *\[* [join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm)*\]* ...

Effect

Defines a data source of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A data source can be a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"), a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) in which [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") are evaluated. [Non-SQL CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") are not possible as association target of the path expression.
-   If the data source is a CDS entity with a [list of input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v2.htm), actual parameters must be passed to these using [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_parameters_v2.htm).
-   An [alias name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") alias for a directly specified data source can be defined after AS. The name must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm).
-   The syntax [JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm) can be used to combine multiple data sources as [joins](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_glosry.htm "Glossary Entry").

Hints

-   If the data source after FROM is specified as a path expression and if, additionally, the view defines an association, then there is a conflict because in the ON condition of an association, it is not possible to specify a path expression. To prevent this conflict, the following options are available:
    -   Use the $projection syntax in the ON condition
    -   Assign an alias name to the data source
    -   Resolve the path expression and use the association target as prefix in the ON condition.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_matrix.htm).

Example

Defines the CDS view entity DEMO\_CDS\_DATA\_SOURCE with two data sources:

-   The first data source demo\_cds\_param\_view\_entity requires values for three input parameters. It is assigned the alias name source1. To use this data source in the SELECT list, the alias name source1 must be used as prefix.
-   The second data source scarr is defined using an inner join. It is assigned the alias name \_source2. To use this data source in the SELECT list, the alias name \_source2 must be used as prefix.
    
    @EndUserText.label: 'CDS view entity data source example'
    define view entity DEMO\_CDS\_DATA\_SOURCE
      as select from Demo\_Cds\_Param\_View\_Entity
                     ( p\_distance\_l:12, p\_distance\_u:23, p\_unit:'kms' )  
                                               as source1
        inner join   scarr                     as \_source2
          on source1.carrid = \_source2.carrid
      {        
        key source1.carrid,
        key source1.connid,
            source1.cityfrom,
            source1.cityto,
            source1.distance,
            source1.distid,
            //scarr
            \_source2.carrname,
            \_source2.currcode,
            \_source2.url
      }
    

Continue
[CDS DDL - CDS View Entity, SELECT, JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm)