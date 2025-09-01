---
title: "correlated_subquery_glosry"
description: |
  correlated_subquery_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorrelated_subquery_glosry.htm"
abapFile: "abencorrelated_subquery_glosry.htm"
keywords: ["do", "try", "data", "abencorrelated", "subquery", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

correlated subquery

[Subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") that uses columns of the wrapper [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") in its [SQL conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_glosry.htm "Glossary Entry"). It must be possible to assign the column uniquely to a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_source_glosry.htm "Glossary Entry") in the wrapper query. A correlated subquery is evaluated for each individual row of the results set in the wrapper query.