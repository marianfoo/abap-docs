---
title: "OS - Query Service, Overview"
description: |
  A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program. A query is implemented by an object (query object) that implements the interface IF_OS_QUERY and is created by a query manager. A
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenos_query_terms.htm"
abapFile: "abenos_query_terms.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenos", "query", "terms"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_object_services_query.htm) → 

OS - Query Service, Overview

A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program.

A query is implemented by an object (query object) that implements the interface IF\_OS\_QUERY and is created by a query manager.

A query is a logical expression that compares the attributes of a persistent class with freely selectable parameters or values, known as the [query condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenos_query_filter_cond.htm). Those objects are loaded whose attributes meet the query conditions. A query also contains a [sort condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenos_query_sort_cond.htm), which determines the order of the loaded objects in the results table.

When a query is created using the query manager method CREATE\_QUERY, the query conditions and sort conditions are passed to it.

The query itself is merely a container for the query condition and the sort condition. A query is executed by calling the interface method IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_QUERY in the class agent of a persistent class. Similarly, the result of an executed query is not bound to the query, and it is returned by the method of the class agent as a table of references instead.

Hint

When the result set of a query is determined, the changes that are made to persistent objects in the current transaction are ignored. The query is executed directly in the database.