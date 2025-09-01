  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services_query.htm) → 

OS - Sort Conditions

A sort condition is a list of attributes attr that specifies the direction in which they are sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. and this information is placed after the attribute. Only public attributes can be used.

ASCENDING

attr ASCENDING

DESCENDING

attr DESCENDING

Hint

The sort condition and its parameter list are analyzed when a query is executed and transformed into an internal representation. To bypass parsing each time the query is executed, the methods of the interface IF\_OS\_QUERY\_EXPR\_FACTORY can be used to create multiple-use sort conditions in the internal representation.

Example

price ASCENDING date DESCENDING