  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Object Services](javascript:call_link\('abenabap_object_services.htm'\)) →  [Query Service](javascript:call_link\('abenabap_object_services_query.htm'\)) → 

Query Service Overview

A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program.

A query is implemented by an object (query object) that implements the interface IF\_OS\_QUERY and is created by a query manager.

A query is a logical expression that compares the attributes of a persistent class with parameters or values that comprise the [query condition](javascript:call_link\('abenos_query_filter_cond.htm'\)). Those objects are loaded whose attributes meet the query conditions. A query also contains a [sort condition](javascript:call_link\('abenos_query_sort_cond.htm'\)), which determines the order of the loaded objects in the results table.

When a query is created using the query manager method CREATE\_QUERY method, the query conditions and sort conditions are passed to it.

The query itself is merely a container for the query condition and the sort condition. A query is executed by calling the interface method IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_QUERY in the class agent of a persistent class. Similarly, the result of an executed query is not bound to the query, but is returned by the class agent’s method as a table of references.

Note

When the result quantity of a query is determined, the changes that are made in the current transaction to persistent objects are not considered. The query is executed directly in the database.