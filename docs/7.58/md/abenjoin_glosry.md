---
title: "join_glosry"
description: |
  join_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm"
abapFile: "abenjoin_glosry.htm"
keywords: ["do", "if", "try", "data", "abenjoin", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20join%2C%20ABENJOIN_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

join

A combination of two [SQL data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_data_source_glosry.htm "Glossary Entry") into one result set, consisting of columns of both data sources. The rows of the result set are determined by the [join type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_type_glosry.htm "Glossary Entry") and by [join conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_condition_glosry.htm "Glossary Entry") between columns of the data sources. The relation between the rows of the data sources can be expressed by a [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry"). Joins can be implemented in ABAP as follows:

-   [DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry") in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry")
-   [Join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_expression_glosry.htm "Glossary Entry") in [queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") of [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry")
-   [Join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_expression_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry") of [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry")

Furthermore, [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") and [CTE associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") define join relationships that are instantiated when the associations are used in [SQL path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_path_expression_glosry.htm "Glossary Entry").