  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v2.htm'\)) →  [CDS DDL - CDS View Entity, Set Operators](javascript:call_link\('abencds_set_operators.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, SELECT, EXCEPT, ABENCDS_EXCEPT_V2, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, SELECT, EXCEPT

Syntax

... EXCEPT [select\_statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) ...

Effect

The [set operator](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") EXCEPT returns all rows of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") that are not part of the result sets of the following SELECT statements. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. All data types except for [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)), [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)), and [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)) are supported. An EXCEPT result set can itself be the left side of a further EXCEPT.

Prerequisite

As a prerequisite for using the statement EXCEPT in a CDS view entity, the CDS view entity annotation [Metadata.ignorePropagatedAnnotations: true](javascript:call_link\('abencds_view_entity_anno.htm'\)) must be specified.

Rules for the Elements of a View Using EXCEPT

The first SELECT statement defines the signature of the view using EXCEPT. The elements of the result set of the EXCEPT view have the following properties:

-   Element names
    
    The direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](javascript:call_link\('abencds_select_list_v2.htm'\)) of all SELECT statements and are used.
    
-   Key elements
    
    They key elements of all SELECT lists must match. Otherwise, a syntax check error occurs.
    
-   Element annotations
    
    Only the SELECT list of the first SELECT statement can define [element annotations](javascript:call_link\('abencds_element_annotations_v2.htm'\)). In all subsequent branches, element annotations are forbidden.
    
-   Data type
    -   The SELECT list of the first SELECT statement determines the DDIC data type of each element of the CDS entity.
    -   The data type used to create the result set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

The following table shows which data types can be merged with each other in a view using EXCEPT. On the left side, the data types of the SELECT list of the first SELECT statement are listed and the other columns specify with which data types of the following SELECT lists they can be merged.

First/following

INT1

INT2

INT4

INT8

DEC

DF16\_...

DF34\_...

CURR

QUAN

FLTP

CHAR

SSTRING

STRING

NUMC

DATS

DATN

TIMS

TIMN

UTCL

ACCP

CLNT

LANG

UNIT

CUKY

RAW

GEOM\_EWKB

INT1

x

w

w

w

w

\-

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

w

w

w

\-

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

w

w

\-

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

w

x

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

w

w

w

w

w

w

w

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF16\_...

w

w

w

w

w

x

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF34\_...

w

w

w

w

w

x

x

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

\-

\-

\-

\-

\-

\-

\-

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

w

w

w

w

w

w

w

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

x

x

x

w

w

w

w

\-

w

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

w

\-

l

w

\-

w

\-

\-

l

\-

l

\-

\-

\-

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

STRING

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

\-

l

l

\-

l

\-

\-

l

\-

l

\-

\-

\-

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

\-

l

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DATN

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

\-

l

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

TIMN

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

UTCL

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

\-

l

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

\-

l

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

GEOM\_EWKB

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

There are no further restrictions to note in combinations using x. The following rules apply to the other combinations:

-   In combinations with w, the length or the value range of the data type in the first SELECT must be long enough for all following SELECT lists. If this is not the case, a syntax check warning is raised.
-   In combinations using l, the lengths of the data types must match exactly.

If the length or value range of the first element does not cover the following elements in combinations with w, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

Associations in Views Using EXCEPT

A CDS view entity in which result sets are formed with EXCEPT can define and expose [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). Such an association must be defined and exposed in the same way in all SELECT statements combined with EXCEPT. That is, CDS associations that are exposed in the respective SELECT lists must appear in all SELECT statements combined with EXCEPT and the following requirements must be met:

-   They have the same [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry").
-   They must be exposed at the same position in the SELECT list using a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)).
-   They must have the same ON conditions, that is:
    -   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
    -   The fields of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") that are listed in an ON condition must be at identical positions in the SELECT list.
-   Note: It is not required that the associations are defined with the same alias name.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual SELECT lists act like a CDS association exposed by the EXCEPT result set. There are no restrictions on CDS associations that are not exposed in the SELECT lists.

Nesting of EXCEPT Branches

In CDS view entities, nesting of EXCEPT clauses is possible. To nest an EXCEPT clause within another EXCEPT clause, use parentheses ( ... ). A nested EXCEPT clause is merged first and its result set is then merged again with the result sets of the other EXCEPT branches.

The second example below demonstrates nesting of EXCEPT branches.

Restrictions

-   Defining new CDS compositions and to-parent associations is not possible in a view using EXCEPT. Exposing CDS compositions and to-parent associations that were defined in the data source of the SELECT statement is possible.
-   Annotations are only allowed in the SELECT list of the first SELECT statement. In all following branches, annotations are not allowed.

Hints

-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)) expression.
-   The maximum number of different SELECT statements that can be merged using EXCEPT depends on the database system. If this number is exceeded, the CDS view entity cannot be activated.
-   The addition ALL is not available for the set operator EXCEPT.

Example

The following CDS view entity combines the result sets of two SELECT statements using EXCEPT. It returns only unique rows returned by the first query but not by the second. In this example, it returns all flights that cost less than 2000, at the same time excluding all such flights that cost between 600 and 900.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, set operator EXCEPT'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_EXCEPT
  as select from sflight
{
  carrid,
  connid,
  @Semantics.amount.currencyCode: 'currency'
  price,
  currency
}
where
  price < 2000
except
select from sflight
{
  carrid,
  connid,
  price,
  currency
}
where
  price between 600 and 900

The program DEMO\_CDS\_EXCEPT uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view and it displays the result set.

Example - Nesting of EXCEPT Branches

The following CDS view entity nests an EXCEPT clause within another EXCEPT clause.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'set operator EXCEPT, nesting'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_EXCEPT\_NESTING  
as select from demo\_expressions  
{
char1 as a,
num1 as b  
}
except  
(
select from demo\_ddic\_types
{
char1 as a,
int1 as b
}
where char1 = 'A'
except select from demo\_ddic\_types
{
char1 as a,
int1 as b
}
where int1 < 9
)

The program DEMO\_CDS\_EXCEPT\_NESTING first fills the underlying database tables and then accesses the view using [SELECT](javascript:call_link\('abapselect.htm'\)). The result set consists of 9 rows.

Without nesting and the parentheses ( ) around the last two EXCEPT branches, the result set would return only 1 row.