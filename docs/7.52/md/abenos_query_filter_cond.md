  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm) →  [Query Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_query.htm) → 

Query Conditions

A query condition is a logical expression that compares the attributes of a persistent class with free parameters or values. The syntax of a query condition is based on the syntax of the Open SQL WHERE condition, where reference variables for object references are also supported. Like a WHERE condition, a query condition is made up of elementary comparisons that can be joined using the Boolean operators AND, OR, and NOT, where grouping using parentheses is supported.

-   [Relational Operators](#@@ITOC@@ABENOS_QUERY_FILTER_COND_1)

-   [LIKE](#@@ITOC@@ABENOS_QUERY_FILTER_COND_2)

-   [IS NULL](#@@ITOC@@ABENOS_QUERY_FILTER_COND_3)

-   [EQUALSREF](#@@ITOC@@ABENOS_QUERY_FILTER_COND_4)

-   [AND, OR, NOT](#@@ITOC@@ABENOS_QUERY_FILTER_COND_5)

When a query is executed using a class agent, the query is bound precisely to its persistent class. The attributes specified in a query condition must exist in the persistent class as public persistent attributes. If not, an exception is raised. On the other hand, a query that has been created can certainly be executed in succession by class agents of different persistent classes, as long as the specified attributes exist. When a query is executed, a SELECT statement is created internally with a WHERE condition, in which the attributes are replaced by concrete column identifiers and the free parameters are replaced by current values.

The elementary relational operators below are supported in a query condition. An attribute, attr, of a persistent class must be specified as the first operand of a condition. The second operand operand or pattern of a comparison may be an attribute, a parameter par, or a literal value.

The names of parameters can be defined freely by specifying a parameter list, The parameter list is a list of parameter names that can be used in the query condition. The parameter’s position in the parameter list defines the parameter’s index in the parameter table. If no parameter list is specified, a predefined parameter list with the three parameter names PAR1, PAR2, and PAR3 is used.

Literal values are generally enclosed by quotation marks. The semantics of the relational operators are defined by the corresponding Open SQL language element into which the logical expression is converted.

Note

The query condition and its parameter list are analyzed when a query is executed and transformed into an internal display. To bypass parsing each time the query is executed, the methods of the interface IF\_OS\_QUERY\_EXPR\_FACTORY can be used to create multiple-use query conditions in the internal representation.

Security Notes

-   The layout of a query condition in a program is one of the dynamic programming techniques. If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm).

-   To avoid [SQL injections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_injection_glosry.htm "Glossary Entry"), the use of parameters from the parameter list of a chaining is recommended, where dynamic values are represented as literals.

-   See also [SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_inj_os_query_scrty.htm).

Relational Operators

attr =*|*<>*|*<*|*\>*|*<=*|*\>= *{* operand *}*

LIKE

attr *\[*NOT*\]* LIKE *{* pattern *}* *\[*ESCAPE escape*\]*

IS NULL

attr IS *\[*NOT*\]* NULL

EQUALSREF

attr EQUALSREF par

Compares two object references. When the query is executed, parameter par has to be bound to a reference variable that refers to a persistent instance of a persistent class.

AND, OR, NOT

NOT expr

expr AND expr

expr OR expr

The semantics of the Boolean operators AND, OR, and NOT are also defined by their semantics in Open SQL. Explicit parentheses are possible. If no parentheses are specified, the Open SQL priority rules apply.

Examples

price < '100' AND currency = 'EUR'

name LIKE PAR1 AND age > '45' AND age < '65'

( department EQUALSREF DEP1 OR department EQUALSREF DEP2 ) AND NOT
( salary > '50000' AND currency = 'EUR' ) )