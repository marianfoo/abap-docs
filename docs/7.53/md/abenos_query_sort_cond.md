  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Object Services](javascript:call_link\('abenabap_object_services.htm'\)) →  [Query Service](javascript:call_link\('abenabap_object_services_query.htm'\)) → 

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