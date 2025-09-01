---
title: "correlated_subquery_glosry"
description: |
  correlated_subquery_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorrelated_subquery_glosry.htm"
abapFile: "abencorrelated_subquery_glosry.htm"
keywords: ["do", "try", "data", "abencorrelated", "subquery", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

correlated subquery

[Subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry") that uses columns of the surrounding [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") in its [SQL conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_glosry.htm "Glossary Entry"). It must be possible to assign the column to a [SQL data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_data_source_glosry.htm "Glossary Entry") in the surrounding query. A correlated subquery is evaluated for each individual row of the result set of the surrounding query.