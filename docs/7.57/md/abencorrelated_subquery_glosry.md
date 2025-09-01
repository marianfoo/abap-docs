---
title: "correlated_subquery_glosry"
description: |
  correlated_subquery_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorrelated_subquery_glosry.htm"
abapFile: "abencorrelated_subquery_glosry.htm"
keywords: ["do", "if", "try", "data", "abencorrelated", "subquery", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: correlated subquery, ABENCORRELATED_SUBQUERY_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

correlated subquery

[Subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") that uses columns of the surrounding [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") in its [SQL conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cond_glosry.htm "Glossary Entry"). It must be possible to assign the column to a [SQL data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_data_source_glosry.htm "Glossary Entry") in the surrounding query. A correlated subquery is evaluated for each individual row of the result set of the surrounding query.