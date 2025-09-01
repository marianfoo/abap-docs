  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Object Services](javascript:call_link\('abenabap_object_services.htm'\)) →  [Query Service](javascript:call_link\('abenabap_object_services_query.htm'\)) → 

Query Service Components

A query is represented by a query object, which is managed by a query manager (also an object). The query manager represents the query service with respect to the ABAP program.

To create a query manager, the static method GET\_QUERY\_MANAGER of the general system service class CL\_OS\_SYSTEM is required.

An ABAP program does not work with the query manager and queries by using class reference variables. Instead, it uses the interfaces IF\_OS\_QUERY\_MANAGER, IF\_OS\_QUERY, and IF\_OS\_QUERY\_FACTORY.

A query is not executed directly, but using the method GET\_PERSISTENT\_BY\_QUERY of the interface IF\_OS\_CA\_PERSISTENCY of a class agent. This means a search is carried out for persistent objects of the associated persistent class that match the query condition.

The options for executing a query are controlled using the interface IF\_OS\_QUERY\_OPTIONS. To enable this, a structure of the type IF\_OS\_QUERY\_OPTIONS=>OPTIONS can be passed to the method GET\_PERSISTENT\_BY\_QUERY.

Relevant Method of the System Service

Most of the components of the system service class CL\_OS\_SYSTEM are used internally by the Object Services. A method must be used in an application program to be able to work explicitly with object-oriented queries.

-   GET\_QUERY\_MANAGER

This static method returns the return value RESULT of type IF\_OS\_QUERY\_MANAGER containing a reference to the Query Manager. The query manager is created when the Object Services are initialized.

Methods of the Query Manager

The query manager manages the object-oriented queries of the ABAP program and is executed from interface IF\_OS\_QUERY\_MANAGER.

-   IF\_OS\_QUERY\_MANAGER~CREATE\_QUERY

Creates a query and returns a reference to the query object in the return value RESULT of type IF\_OS\_QUERY. The query condition is passed to the parameter I\_FILTER of type string. The sort condition is passed to the parameter I\_ORDERING of type string. If the parameters of the query are specified using a parameter list, this must be passed to the parameter I\_PARAMETERS of type string.

Methods of a Query

Queries are executed from interfaces IF\_OS\_QUERY and IF\_OS\_QUERY\_EXPR\_FACTORY.

Methods of the Interface IF\_OS\_QUERY

-   IF\_OS\_QUERY~GET\_EXPR\_FACTORY

Returns a reference to a query expression factory in the return parameter RESULT of type IF\_OS\_QUERY\_EXPR\_FACTORY. Technically speaking, a query expression factory is part of a query object, although it is executed using the interface IF\_OS\_QUERY\_EXPR\_FACTORY, like a separate object.

-   IF\_OS\_QUERY~SET\_FILTER\_EXPR

Sets the query condition. The internal display of the query condition that is created with a query expression factory is passed to the parameter I\_FILTER\_EXPR of type IF\_OS\_QUERY\_FILTER\_EXPR.

-   IF\_OS\_QUERY~SET\_PARAMETERS\_EXPR

Sets the parameter list of the query condition. The internal display of the parameter list that is created with a query expression factory is passed to the parameter I\_PARAMETERS\_EXPR of type IF\_OS\_QUERY\_PARAMETERS\_EXPR.

-   IF\_OS\_QUERY~SET\_ORDERING\_EXPR

Sets the sort condition. The internal display of a sort condition created with the query expression factory is passed to the parameter I\_ORDERING\_EXPR of type IF\_OS\_QUERY\_ORDERING\_EXPR.

-   IF\_OS\_QUERY~PARSE

Creates the internal displays of the query condition, the parameter list, and the sort term if these have not yet been created or set.

Methods of the Interface IF\_OS\_QUERY\_EXPR\_FACTORY

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_OPERATOR\_EXPR

Creates either a [query condition](javascript:call_link\('abenos_query_filter_cond.htm'\)) of the form
attr1 operator attr2,
where attr1, operator, and attr2 are the values of the parameters I\_ATTR, I\_OPERATOR, and I\_ATTR2 or a query condition of the form
attr1 operator 'val' or
attr1 operator val\_w\_quotes
where val and val\_w\_quotes are the values of the parameters I\_VAL and I\_VAL\_W\_QUOTES.

If the parameter I\_IDX of type i is passed, val is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter I\_IDX.

The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_LIKE\_EXPR

Depending on the value of the parameter I\_NOT, creates a query condition of the form
attr *\[*NOT*\]* LIKE 'pattern' or
attr *\[*NOT*\]* LIKE pattern\_w\_quotes,
where attr, pattern, and pattern\_w\_quotes are the values of the parameters I\_ATTR, I\_PATTERN and I\_PATTERN\_W\_QUOTES.

If the parameter I\_IDX of type i is passed, pattern is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter I\_IDX.

Passing one of the parameters I\_ESCAPE or I\_ESCAPE\_W\_QUOTES appends the definition of an escape character of the form ... ESCAPE 'escape' or . ... ESCAPE escape\_w\_quotes where escape and escape\_w\_quotes are the values of the parameters I\_ESCAPE and I\_ESCAPE\_W\_QUOTES.

The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_ISNULL\_EXPR

Depending on the value of the parameter I\_NOT, creates a query condition of the form
attr IS *\[*NOT*\]* NULL,
where attr is the value of the parameter I\_ATTR.

The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_REF\_EXPR

Creates a query condition of the form
attr EQUALSREF ref,
where attr is the value of the parameter I\_ATTR and ref is the value of the parameter from the parameter list whose index when the query is executed is determined by the value of the parameter I\_IDX.

Instead of using a parameter to set the persistent object reference, the instance GUID and class GUID can be specified using the parameters I\_GUID and I\_CLSGUID of type OS\_GUID.

The query condition that is created is returned in the return value RESULT of type IF\_OS\_QUERY\_FILTER\_EXPR.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_NOT\_EXPR

Creates a query condition of the form
NOT ( expr ),
where expr is a query condition that already exists and was passed to the parameter I\_EXPR.

The new query condition is returned in the return value RESULT.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_AND\_EXPR

Creates a query condition of the form
( expr1 ) AND ( expr2 )
where expr1 or expr2 are query conditions that already exist and were passed to the parameters I\_EXPR1 or I\_EXPR2.

The new query condition is returned in the return value RESULT.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_OR\_EXPR

Creates a query condition of the form
( expr1 ) OR ( expr2 )
where expr1 or expr2 are query conditions that already exist and were passed to the parameters I\_EXPR1 or I\_EXPR2.

The new query condition is returned in the return value RESULT.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_PARAMETERS\_EXPR

Creates a parameter list. The parameter list that is created is returned in return value RESULT of type IF\_OS\_QUERY\_PARAMETERS\_EXPR.

The parameters are appended in succession when the method APPEND of an additional interface IF\_OS\_QUERY\_PARAMETERS\_EXPR is called. The parameter name is passed to the parameter I\_PAR.

-   IF\_OS\_QUERY\_EXPR\_FACTORY~CREATE\_ORDERING\_EXPR

Creates a sort condition. The sort condition is returned in the return value RESULT of type IF\_OS\_QUERY\_ORDERING\_EXPR.

The attributes used for the sort are appended one after the other when the method APPEND\_ASCENDING or APPEND\_DESCENDING of the additional interface IF\_OS\_QUERY\_ORDERING\_EXPR is called. The parameter name is passed to the parameter I\_ATTR.