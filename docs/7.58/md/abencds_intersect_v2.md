---
title: "CDS DDL - CDS View Entity, SELECT, INTERSECT"
description: |
  Syntax ... INTERSECT select_statement(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) ... Effect The set operator(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm 'Glossary Entry') INTERSECT returns all disti
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm"
abapFile: "abencds_intersect_v2.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "intersect"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_clauses_v2.htm) →  [CDS DDL - CDS View Entity, Set Operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20INTERSECT%2C%20ABENCDS_INTERSECT_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - CDS View Entity, SELECT, INTERSECT

Syntax

... INTERSECT [select\_statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) ...

Effect

The [set operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") INTERSECT returns all distinct rows that are included in all result sets of multiple [SELECT statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. All data types are supported except for [STRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [RAWSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [LCHR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [LRAW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). A view using INTERSECT can itself be the left side of a further view using INTERSECT.

Prerequisite

As a prerequisite for using the statement INTERSECT in a CDS view entity, the CDS view entity annotation [Metadata.ignorePropagatedAnnotations: true](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) must be specified.

Rules for the Elements of a View Using INTERSECT

The first SELECT statement defines the signature of the INTERSECT view. The elements of the result set of the INTERSECT view have the following properties:

-   Element names
    
    The direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) of all SELECT statements and are used.
    
-   Key elements
    
    They key elements of all SELECT lists must match. Otherwise, a syntax check error occurs.
    
-   Element annotations
    
    Only the SELECT list of the first SELECT statement can define [element annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_element_annotations_v2.htm). In all subsequent branches, element annotations are forbidden.
    
-   Data type
    -   The SELECT list of the first SELECT statement determines the DDIC data type of each element of the CDS entity.
    -   The data type used to create the result set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

The following table shows which data types can be combined with each other in a view using INTERSECT. On the left side, the data types of the SELECT list of the first SELECT statement are listed and the other columns specify with which data types of the following SELECT lists they can be combined.

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

d

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
-   In combinations using d, the number of decimal places must match exactly.

If the length or value range of the first element does not cover the following elements in combinations with w, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_conversion.htm) of the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

Amounts and Quantities in INTERSECT Views

If the elements of a UNION view are [CDS amount fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), [CDS quantity fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or [CDS calculated quantities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), the following rules apply:

-   Since the annotation Metadata.ignorePropagatedAnnotations: true is mandatory in UNION views, all reference annotations are lost and must be provided again within the first SELECT branch.
    -   For elements of data type CURR or QUAN as well as for calculated quantities, the reference annotation is mandatory.
    -   Elements of other data types lose their reference information and their characteristic as amount or quantity field. The respective reference annotation can be assigned anew to declare the field an amount or quantity field. This is optional.
-   Calculated quantity fields can be merged only with other calculated quantity fields. Amount fields and quantity fields can be merged with each other, as long as the data types match (see matrix above).
-   For amount fields of type CURR, the number of decimal places must match exactly in all UNION branches.
-   Note: Elements of data type CURR are incompatible to any other data type. The function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) can be used to convert an amount field of data type CURR into an amount field of data type DECFLOAT34.

Associations in Views Using INTERSECT

A CDS view entity in which result sets are formed with INTERSECT can define and expose [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry"). Such an association must be defined and exposed in the same way in all SELECT statements combined with INTERSECT. That is, CDS associations that are exposed in the respective SELECT lists must appear in all SELECT statements combined with INTERSECT and the following requirements must be met:

-   They have the same [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry").
-   They must be exposed at the same position in the SELECT list using a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm).
-   They must have the same ON conditions, that is:
    -   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
    -   The fields of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") that are listed in an ON condition must be at identical positions in the SELECT list.
-   Note: It is not required that the associations are defined with the same alias name.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual SELECT lists act like a CDS association exposed by the INTERSECT result set. There are no restrictions on CDS associations that are not exposed in the SELECT lists.

Nesting of INTERSECT Branches

In CDS view entities, nesting of INTERSECT clauses is possible. To nest an INTERSECT clause within another INTERSECT clause, use brackets ( ... ). A nested INTERSECT clause is merged first and its result set is then merged again with the result sets of the other INTERSECT branches.

Restrictions

-   Defining new to-child and to-parent associations is not possible in a view using INTERSECT. Exposing to-child and to-parent associations that were defined in the data source of the SELECT statement is possible.
-   Annotations are only allowed in the SELECT list of the first SELECT statement. In all following branches, annotations are not allowed.

Hints

-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm) expression.
-   The maximum number of different SELECT statements that can be merged using INTERSECT depends on the database system. If this number is exceeded, the CDS view entity cannot be activated.
-   The addition ALL is not available for the set operator INTERSECT.

Example

The following CDS view entity combines the result sets of two SELECT statements using INTERSECT. It returns only those rows returned by both queries.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, set operator INTERSECT'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_INTERSECT  
as select from sflight
{
  carrid,
  connid
}
where price > 1000
intersect
select from spfli
{
  carrid,
  connid
}

The class CL\_DEMO\_CDS\_INTERSECT uses [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) to access the view and it displays the result set.