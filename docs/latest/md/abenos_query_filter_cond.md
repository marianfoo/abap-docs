---
title: "OS - Query Conditions"
description: |
  A query condition is a logical expression that compares the attributes of a persistent class with free parameters or values. The syntax of a query condition is based on the syntax of the ABAP SQL WHERE condition, where reference variables for object references are also supported. Like a WHERE condit
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm"
abapFile: "abenos_query_filter_cond.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenos", "query", "filter", "cond"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Query%20Conditions%2C%20ABENOS_QUERY_FILTER_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Query Conditions

A query condition is a logical expression that compares the attributes of a persistent class with free parameters or values. The syntax of a query condition is based on the syntax of the ABAP SQL WHERE condition, where reference variables for object references are also supported. Like a WHERE condition, a query condition is made up of elementary comparisons that can be combined using the Boolean operators AND, OR, and NOT, where grouping using parentheses is supported.

-   [Comparison Operators](#abenos-query-filter-cond-1-------like---@ITOC@@ABENOS_QUERY_FILTER_COND_2)
-   [IS NULL](#abenos-query-filter-cond-3-------equalsref---@ITOC@@ABENOS_QUERY_FILTER_COND_4)
-   [AND, OR, NOT](#@@ITOC@@ABENOS_QUERY_FILTER_COND_5)

When a query is executed using a class agent, the query is bound exactly to its persistent class. The attributes specified in a query condition must exist in the persistent class as public persistent attributes. If not, an exception is raised. On the other hand, a query that has been created can certainly be executed consecutively by class agents of different persistent classes, as long as the specified attributes exist. When a query is executed, a SELECT statement is created internally with a WHERE condition, in which the attributes are replaced by concrete column identifiers and the free parameters are replaced by current values.

The elementary comparison operators below are supported in a query condition. An attribute, attr, of a persistent class must be specified as the first operand of a condition. The second operand operand or pattern of a comparison may be an attribute, a parameter par, or a literal value.

The names of parameters can be defined freely by specifying a parameter list. The parameter list is a list of parameter names that can be used in the query condition. The position of the parameter in the parameter list defines the index of the parameter in the parameter table. If no parameter list is specified, a predefined parameter list with the three parameter names PAR1, PAR2, and PAR3 is used.

Literal values are generally enclosed by quotation marks. The semantics of the comparison operators are defined by the corresponding ABAP SQL language element into which the logical expression is converted.

Hint

The query condition and its parameter list are analyzed when a query is executed and transformed into an internal representation. To bypass parsing each time the query is executed, the methods of the interface IF\_OS\_QUERY\_EXPR\_FACTORY can be used to create reusable query conditions in the internal representation.

Security Hints

-   The layout of a query condition in a program is one of the dynamic programming techniques. If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm).
-   To avoid [SQL injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm "Glossary Entry"), the use of parameters from the parameter list of a concatenation is recommended, where dynamic values are represented as literals.
-   See also [SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_os_query_scrty.htm).

Comparison Operators   

attr =*|*<>*|*<*|*\>*|*<=*|*\>= *{* operand *}*

LIKE   

attr *\[*NOT*\]* LIKE *{* pattern *}* *\[*ESCAPE escape*\]*

IS NULL   

attr IS *\[*NOT*\]* NULL

EQUALSREF   

attr EQUALSREF par

Comparison of two object references. When the query is executed, the parameter par must be bound to a reference variable that refers to a persistent instance of a persistent class.

AND, OR, NOT   

NOT expr

expr AND expr

expr OR expr

The semantics of the Boolean operators AND, OR, and NOT are also defined by their semantics in ABAP SQL. Explicit parentheses are possible. If no parentheses are specified, the ABAP SQL priority rules apply.

Examples

price < '100' AND currency = 'EUR'

name LIKE PAR1 AND age > '45' AND age < '65'

( department EQUALSREF DEP1 OR department EQUALSREF DEP2 ) AND NOT
( salary > '50000' AND currency = 'EUR' ) )