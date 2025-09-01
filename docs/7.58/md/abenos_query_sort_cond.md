  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Sort%20Conditions%2C%20ABENOS_QUERY_SORT_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Sort Conditions

A sort condition is a list of attributes attr that specifies the direction in which they are to be sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. This information is placed after the attribute. Only public attributes can be used.

ASCENDING   

attr ASCENDING

DESCENDING   

attr DESCENDING

Hint

The sort condition and its parameter list are analyzed when a query is executed and transformed into an internal representation. To bypass parsing each time the query is executed, the methods of the interface IF\_OS\_QUERY\_EXPR\_FACTORY can be used to create reusable sort conditions in the internal representation.

Example

price ASCENDING date DESCENDING