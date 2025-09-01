# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / Object Services (OS) / OS - Query Service

Included pages: 6


### abenabap_object_services_query.htm

---
title: "OS - Query Service"
description: |
  The query service makes it possible to search for and load persistent objects using logical expressions. -   Query Service Overview(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_terms.htm) -   Query Service Components(https://help.sap.com/doc/abapdocu_latest_index_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm"
abapFile: "abenabap_object_services_query.htm"
keywords: ["do", "if", "data", "abenabap", "object", "services", "query"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Query%20Service%2C%20ABENABAP_OBJECT_SERVICES_QUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Query Service

The query service makes it possible to search for and load persistent objects using logical expressions.

-   [Query Service Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_terms.htm)
-   [Query Service Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_comps.htm)
-   [Query Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm)
-   [Sort Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm)

Continue
[OS - Query Service, Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_terms.htm)
[OS - Components of the Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_comps.htm)
[OS - Query Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm)
[OS - Sort Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm)
![Example](exa.gif "Example") [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_abexa.htm)


### abenos_query_terms.htm

---
title: "OS - Query Service, Overview"
description: |
  A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program. A query is implemented by an object (query object) that implements the interface IF_OS_QUERY and is created by a query manager. A
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_terms.htm"
abapFile: "abenos_query_terms.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenos", "query", "terms"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Query%20Service%2C%20Overview%2C%20ABENOS_QUERY_TERMS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Query Service, Overview

A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program.

A query is implemented by an object (query object) that implements the interface IF\_OS\_QUERY and is created by a query manager.

A query is a logical expression that compares the attributes of a persistent class with freely selectable parameters or values, known as the [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm). Those objects are loaded whose attributes meet the query conditions. A query also contains a [sort condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm), which determines the order of the loaded objects in the results table.

When a query is created using the query manager method CREATE\_QUERY, the query conditions and sort conditions are passed to it.

The query itself is merely a container for the query condition and the sort condition. A query is executed by calling the interface method IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_QUERY in the class agent of a persistent class. Similarly, the result of an executed query is not bound to the query, and it is returned by the method of the class agent as a table of references instead.

Hint

When the result set of a query is determined, the changes that are made to persistent objects in the current transaction are ignored. The query is executed directly in the database.


### abenos_query_comps.htm

---
title: "OS - Components of the Query Service"
description: |
  A query is represented by a query object, which is managed by a query manager (also an object). The query manager represents the query service with respect to the ABAP program. To create a query manager, the static method GET_QUERY_MANAGER of the general system service class CL_OS_SYSTEM is requ
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_comps.htm"
abapFile: "abenos_query_comps.htm"
keywords: ["do", "if", "method", "class", "data", "abenos", "query", "comps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Components%20of%20the%20Query%20Service%2C%20ABENOS_QUERY_COMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Components of the Query Service

A query is represented by a query object, which is managed by a query manager (also an object). The query manager represents the query service with respect to the ABAP program.

To create a query manager, the static method GET\_QUERY\_MANAGER of the general system service class CL\_OS\_SYSTEM is required.

An ABAP program does not work with the query manager and queries using class reference variables. Instead, it uses the interfaces IF\_OS\_QUERY\_MANAGER, IF\_OS\_QUERY, and IF\_OS\_QUERY\_EXPR\_FACTORY to access them.

A query is not executed directly, but using the method GET\_PERSISTENT\_BY\_QUERY of the interface IF\_OS\_CA\_PERSISTENCY of a class agent. This searches for persistent objects of the associated persistent class that match the [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm).

The options for executing a query are controlled using the interface IF\_OS\_QUERY\_OPTIONS. To do this, a structure of the type IF\_OS\_QUERY\_OPTIONS=>OPTIONS can be passed to the method GET\_PERSISTENT\_BY\_QUERY.

Relevant Method of the System Service   

Most of the components of the system service class CL\_OS\_SYSTEM are used internally by the Object Services. A method must be used in an application program to be able to work explicitly with object-oriented queries.

-   GET\_QUERY\_MANAGER
    
    This static method returns the return value RESULT of type IF\_OS\_QUERY\_MANAGER containing a reference to the Query Manager. The query manager is created when the Object Services are initialized.
    

Methods of the Query Manager   

The query manager manages the object-oriented queries of the ABAP program and is executed from interface IF\_OS\_QUERY\_MANAGER.

-   IF\_OS\_QUERY\_MANAGER~CREATE\_QUERY
    
    Creates a query and returns a reference to the query object in the return value RESULT of type IF\_OS\_QUERY. The [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) is passed to the parameter I\_FILTER of type string. The [sort condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm) is passed to the parameter I\_ORDERING of type string. If the parameters of the query are specified using a parameter list, they must be passed to the parameter I\_PARAMETERS of type string.
    

Methods of a Query   

Queries are executed from interfaces IF\_OS\_QUERY and IF\_OS\_QUERY\_EXPR\_FACTORY.

Methods of the Interface IF\_OS\_QUERY   

-   IF\_OS\_QUERY~GET\_EXPR\_FACTORY
    
    Returns a reference to a query expression factory in the return parameter RESULT of type IF\_OS\_QUERY\_EXPR\_FACTORY. Technically speaking, a query expression factory is part of a query object, although it is executed using the interface IF\_OS\_QUERY\_EXPR\_FACTORY, like a separate object.
    
-   IF\_OS\_QUERY~SET\_FILTER\_EXPR
    
    Sets the [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm). The internal representation of the query condition that is created with a query expression factory is passed to the parameter I\_FILTER\_EXPR of type IF\_OS\_QUERY\_FILTER\_EXPR.
    
-   IF\_OS\_QUERY~SET\_PARAMETERS\_EXPR
    
    Sets the parameter list of the [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm). The internal representation of the parameter list that is created with a query expression factory is passed to the parameter I\_PARAMETERS\_EXPR of type IF\_OS\_QUERY\_PARAMETERS\_EXPR.
    
-   IF\_OS\_QUERY~SET\_ORDERING\_EXPR
    
    Sets the [sort condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm). The internal representation of a sort condition created with the query expression factory is passed to the parameter I\_ORDERING\_EXPR of type IF\_OS\_QUERY\_ORDERING\_EXPR.
    
-   IF\_OS\_QUERY~PARSE
    
    Creates the internal representation of the query condition, the parameter list, and the sort condition if these have not yet been created or set.
    

Methods of the Interface IF\_OS\_QUERY\_EXPR\_FACTORY   

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_OPERATOR\_EXPR
    
    Creates either a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    attr1 operator attr2,
    where attr1, operator, and attr2 are the values of the parameters I\_ATTR, I\_OPERATOR, and I\_ATTR2 or a query condition of the form
    attr1 operator 'val' or
    attr1 operator val\_w\_quotes
    where val and val\_w\_quotes are the values of the parameters I\_VAL and I\_VAL\_W\_QUOTES.
    
    If the parameter I\_IDX of type i is passed, val is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter I\_IDX.
    
    The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_LIKE\_EXPR
    
    Depending on the value of the parameter I\_NOT, creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    attr *\[*NOT*\]* LIKE 'pattern' or
    attr *\[*NOT*\]* LIKE pattern\_w\_quotes,
    where attr, pattern, and pattern\_w\_quotes are the values of the parameters I\_ATTR, I\_PATTERN and I\_PATTERN\_W\_QUOTES.
    
    If the parameter I\_IDX of type i is passed, pattern is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter I\_IDX.
    
    Passing one of the parameters I\_ESCAPE or I\_ESCAPE\_W\_QUOTES appends the definition of an escape character of the form ... ESCAPE 'escape' or ... ESCAPE escape\_w\_quotes where escape and escape\_w\_quotes are the values of the parameters I\_ESCAPE and I\_ESCAPE\_W\_QUOTES.
    
    The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_ISNULL\_EXPR
    
    Depending on the value of the parameter I\_NOT, creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    attr IS *\[*NOT*\]* NULL,
    where attr is the value of the parameter I\_ATTR.
    
    The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_REF\_EXPR
    
    Creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    attr EQUALSREF ref,
    where attr is the value of the parameter I\_ATTR and ref is the value of the parameter from the parameter list whose index when the query is executed is determined by the value of the parameter I\_IDX.
    
    Instead of using a parameter to set the persistent object reference, the instance GUID and class GUID can be specified using the parameters I\_GUID and I\_CLSGUID of type OS\_GUID.
    
    The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_NOT\_EXPR
    
    Creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    NOT ( expr ),
    where expr is a query condition that already exists and was passed to the parameter I\_EXPR.
    
    The new query condition is returned in the return value RESULT.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_AND\_EXPR
    
    Creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    ( expr1 ) AND ( expr2 )
    where expr1 or expr2 are query conditions that already exist and were passed to the parameters I\_EXPR1 or I\_EXPR2.
    
    The new query condition is returned in the return value RESULT.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_OR\_EXPR
    
    Creates a [query condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) of the form
    ( expr1 ) OR ( expr2 )
    where expr1 or expr2 are query conditions that already exist and were passed to the parameters I\_EXPR1 or I\_EXPR2.
    
    The new query condition is returned in the return value RESULT.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_PARAMETERS\_EXPR
    
    Creates a parameter list. The parameter list that is created is returned in return value RESULT of type IF\_OS\_QUERY\_PARAMETERS\_EXPR.
    
    The parameters are appended consecutively when the method APPEND of an additional interface IF\_OS\_QUERY\_PARAMETERS\_EXPR is called. The parameter name is passed to the parameter I\_PAR.
    
-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_ORDERING\_EXPR
    
    Creates a [sort condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm). The sort condition is returned in the return value RESULT of type IF\_OS\_QUERY\_ORDERING\_EXPR.
    
    The attributes used for the sort are appended consecutively when the method APPEND\_ASCENDING or APPEND\_DESCENDING of the additional interface IF\_OS\_QUERY\_ORDERING\_EXPR is called. The parameter name is passed to the parameter I\_ATTR.


### abenos_query_filter_cond.htm

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


### abenos_query_sort_cond.htm

---
title: "OS - Sort Conditions"
description: |
  A sort condition is a list of attributes attr that specifies the direction in which they are to be sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. This information is placed after the attribute. Only pu
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_sort_cond.htm"
abapFile: "abenos_query_sort_cond.htm"
keywords: ["do", "if", "method", "data", "abenos", "query", "sort", "cond"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm) → 

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


### abenos_query_abexa.htm

---
title: "OS - Query Service"
description: |
  This example demonstrates how an object-oriented query is used. Source Code  Public class definition CLASS cl_demo_query_service DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_abexa.htm"
abapFile: "abenos_query_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "abenos", "query", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Query Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Query%20Service%2C%20ABENOS_QUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Query Service

This example demonstrates how an object-oriented query is used.

Source Code   

\* Public class definition
CLASS cl\_demo\_query\_service DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_query\_service IMPLEMENTATION.
  METHOD main.
    DATA: airpfrom TYPE s\_fromairp VALUE 'FRA',
          airpto   TYPE s\_toairp   VALUE 'SIN'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = airpfrom
      )->add\_field( CHANGING field = airpto )->request( ).
    TYPES: BEGIN OF result,
             carrid TYPE s\_carr\_id,
             connid TYPE s\_conn\_id,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    TRY.
        FINAL(query) = cl\_os\_system=>get\_query\_manager( )->create\_query(
          i\_filter   = \`AIRPFROM = PAR1 AND AIRPTO = PAR2\`
          i\_ordering = \`CARRID ASCENDING CONNID ASCENDING\` ).
        FINAL(agent) = ca\_spfli\_persistent=>agent.
        out->write(
          VALUE results(
            FOR <connection>
            IN agent->if\_os\_ca\_persistency~get\_persistent\_by\_query(
              i\_query   = query
              i\_par1    = airpfrom
              i\_par2    = airpto )
              ( carrid = CAST cl\_spfli\_persistent(
                                <connection> )->get\_carrid( )
                connid = CAST cl\_spfli\_persistent(
                                <connection> )->get\_connid( ) ) ) ).
      CATCH cx\_root INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

A query manager is called using the method GET\_QUERY\_MANAGER of the class CL\_OS\_SYSTEM and a query created using the method CREATE\_QUERY and a specified filter and sort conditions. The query is executed using the interface method GET\_PERSISTENT\_BY\_QUERY of the interface IF\_OS\_CA\_PERSISTENCY and the flights found are displayed.

Since the predefined parameters PAR1, PAR2 from a parameter list are used here, an [SQL injection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm "Glossary Entry") is not possible in this example.
