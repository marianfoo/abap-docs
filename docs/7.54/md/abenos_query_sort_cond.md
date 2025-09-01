---
title: "Sort Conditions"
description: |
  A sort condition is a list of attributes attr that specifies the direction in which they are sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. and this information is placed after the attribute. Only publ
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenos_query_sort_cond.htm"
abapFile: "abenos_query_sort_cond.htm"
keywords: ["do", "if", "method", "data", "abenos", "query", "sort", "cond"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services.htm) →  [Query Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services_query.htm) → 

Sort Conditions

A sort condition is a list of attributes attr that specifies the direction in which they are sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. and this information is placed after the attribute. Only public attributes can be used.

ASCENDING

attr ASCENDING

DESCENDING

attr DESCENDING

Note

The sort condition and its parameter list are analyzed when a query is executed and transformed into an internal display. To bypass parsing each time the query is executed, the methods of the interface IF\_OS\_QUERY\_EXPR\_FACTORY can be used to create multiple-use sort conditions in the internal display.

Example

price ASCENDING date DESCENDING