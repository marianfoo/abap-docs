---
title: "correlated_subquery_glosry"
description: |
  correlated_subquery_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorrelated_subquery_glosry.htm"
abapFile: "abencorrelated_subquery_glosry.htm"
keywords: ["do", "if", "try", "data", "abencorrelated", "subquery", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20correlated%20subquery%2C%20ABENCORRELATED_SUBQUERY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

correlated subquery

[Subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") that uses columns of the surrounding [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") in its [SQL conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cond_glosry.htm "Glossary Entry"). It must be possible to assign the column to a [SQL data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_data_source_glosry.htm "Glossary Entry") in the surrounding query. A correlated subquery is evaluated for each individual row of the result set of the surrounding query.