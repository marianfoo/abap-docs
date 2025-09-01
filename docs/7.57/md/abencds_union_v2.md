---
title: "CDS DDL - CDS View Entity, SELECT, UNION"
description: |
  Syntax ... UNION ALL select_statement(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) ... Effect Merges the rows of the result sets of multiple SELECT statements(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_stateme
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm"
abapFile: "abencds_union_v2.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "method", "data", "types", "internal-table", "abencds", "union"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_clauses_v2.htm) →  [CDS DDL - CDS View Entity, Set Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_set_operators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, SELECT, UNION, ABENCDS_UNION_V2, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, SELECT, UNION

Syntax

... UNION *\[*ALL*\]* [select\_statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) ...

Effect

Merges the rows of the result sets of multiple [SELECT statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) of [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") into one result set. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. A union result set can itself be the left side of a further union.

If the addition ALL is specified, all entries, even duplicates, are listed in the result set. If ALL is not specified, all duplicate entries are removed from the result set. For determining the duplicate rows, all columns of the result set are considered. In detail, this works as follows:

-   First, all rows of all UNION branches are combined into one result set.
-   Then, all rows that occur more than once (considering all columns, not just key fields) are deleted except for one.

Data Types

If the addition ALL is specified, all data types are possible in a union view. Elements with data types [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [LCHR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) must be at the end of the view and an element of type INT2 or INT4 must stand directly in front of such an element, representing the maximum length of the element. Only one such element is allowed per view.

Without the addition ALL, data types [STRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [LCHR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), and [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are not supported.

Prerequisite

As a prerequisite for using the statement UNION in a CDS view entity, the CDS view entity annotation [Metadata.ignorePropagatedAnnotations: true](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm) must be specified.

Rules for the Elements of a UNION View

In general, the first SELECT statement defines the signature of the UNION view. Here are the details on the properties of the elements of the merged result set:

-   Element names
    
    The direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v2.htm) of all SELECT statements and are used.
    
-   Key elements
    
    They key elements of all SELECT lists must match. Otherwise, a syntax check error occurs.
    
-   Element annotations
    
    Only the SELECT list of the first SELECT statement can define [element annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_annotations_v2.htm). In all subsequent branches, element annotations a forbidden.
    
-   Data type
    -   The SELECT list of the first SELECT statement determines the DDIC data type of each element of the CDS entity.
    -   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

The following table shows which data types can be merged with each other in a union. On the left side, the data types of the SELECT list of the first SELECT statement are listed and the other columns specify with which data types of the following SELECT lists they can be merged.

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

If the length or value range of the first element does not cover the following elements in combinations with w, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_conversion.htm) of the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

Amounts and Quantities in UNION Views

If the elements of a UNION view are [CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), [CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or [CDS calculated quantities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), the following rules apply:

-   Since the annotation Metadata.ignorePropagatedAnnotations: true is mandatory in UNION views, all reference annotations are lost and must be provided again within the first SELECT branch.
    -   For elements of data type CURR or QUAN as well as for calculated quantities, the reference annotation is mandatory.
    -   Elements of other data types lose their reference information and their characteristic as amount or quantity field. The respective reference annotation can be assigned anew to declare the field an amount or quantity field. This is optional.
-   Calculated quantity fields can be merged only with other calculated quantity fields. Amount fields and quantity fields can be merged with each other, as long as the data types match (see matrix above).
-   For amount fields of type CURR, the number of decimal places must match exactly in all UNION branches.
-   Note: Elements of data type CURR are incompatible to any other data type. The function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) can be used to convert an amount field of data type CURR into an amount field of data type DECFLOAT34.

Associations in UNION Views

A CDS view entity in which union sets are formed with UNION can expose [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry"). Such an association must be defined and exposed in the same way in all SELECT statements merged with UNION. That is, CDS associations that are exposed in the respective SELECT lists must appear in all SELECT statements merged with UNION and the following requirements must be met:

-   They have the same [cardinality](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencardinality_glosry.htm "Glossary Entry").
-   They must be exposed at the same position in the SELECT list using a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).
-   They must have the same ON conditions, that is:
    -   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
    -   The fields of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") that are listed in an ON condition must be at identical positions in the SELECT list.
-   Note: It is not required that the associations are defined with the same alias name.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual SELECT lists act like a CDS association exposed by the union set. There are no restrictions on CDS associations that are not exposed in the SELECT lists.

Nesting of UNION Branches

In CDS view entities, nesting of union clauses is possible. To nest a union clause within another union clause, use brackets ( ... ). A nested union clause is merged first and its result set is then merged again with the result sets of the other union branches.

Example number 3 below demonstrates nesting of union branches.

Restrictions

-   Defining new CDS compositions is not possible in a UNION view. Exposing CDS compositions and to-parent associations that were defined in a data source of the SELECT statements is possible.
-   Annotations are only allowed in the SELECT list of the first SELECT statement. In all following branches, annotations are not allowed.

Hints

-   Union sets can be a good way of transforming non-normalized [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry") into a normalized view of the data.
-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) expression.
-   The maximum number of different SELECT statements that can be merged using UNION depends on the database system. If this number is exceeded, the CDS view entity cannot be activated.
-   If the annotation [@AbapCatalog.entityBuffer.definitionAllowed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm) is set to true in a union view, a syntax check warning occurs. Union views might return duplicate records with regards to the key fields. The buffer needs a unique key in some scenarios. Therefore, unexpected buffer behavior might occur.

Example

Union set. The element names of the SELECT lists must match.

define view entity ... as
  select
    from demo\_join1
      { a as c1, b as c2, c as c3, d as c4 }
    union
      select
        from demo\_join2
          { d as c1, e as c2, f as c3, g as c4 }

Example

The following CDS view entity creates the union of the result sets of two SELECT statements. The element col1 in the first SELECT list has the type INT4, whereas the associated element col1 in the second SELECT list has the type INT8. This is why a syntax check warning is raised. To bypass the warning, col2 is converted to data type INT8 using a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) expression.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_UNION\_ELEMENT\_TYPE\_VE
  as select from
    demo\_expressions
    {
      id,
      num1                      as col1,
      cast( num1 as abap.int8 ) as col2,
      raw1                      as col3  
    }
union all select from
  demo\_expressions
    {
      id,
      numlong1 as             col1,
      numlong1 as             col2,
      abap.raw'AABBCCDDEEAABBCCDDEE' as col3    
    }

The program DEMO\_CDS\_UNION\_ELEMENT\_TYPE\_VE uses [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) to access the view four times:

-   The first access writes directly to an internal table with the line type of the CDS entity. The access works because the value of the element col1 matches the value range of the data type i.
-   The second access is the same as the first but one value in the element col1 is outside the value range of the data type i of the first column of the internal table result2. This is why an exception is raised.
-   In the third access, the exception is prevented since the data type of the first column of the result set (and hence the data type of the internal table result3) is transformed to int8 using a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) in ABAP SQL.
-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table result4.

The recommended method in all cases, however, is to handle the second element using a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) in the CDS view entity.

Example - Nesting of Union Clauses

The following CDS view entity nests a union clause within another union clause.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, union nesting'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_UNION\_NESTING\_VE
  as select from demo\_dbtab\_child
{
  key key\_field,
      char\_field
}
where
  key\_field = 1 // 3 entries, 2 duplicate
union all select from demo\_dbtab\_child
{
  key key\_field,
      char\_field
}
where
  key\_field = 3 // 3 entries, 2 duplicates
union all
(
  select from demo\_dbtab\_child
  {
    key key\_field,
        char\_field
  }
  where
    key\_field = 4 // 2 unique entries
  union --distinct
  select from demo\_dbtab\_child
  {
    key key\_field,
        char\_field
  }
  where
    key\_field = 6 // 1 unique entry
)

The program DEMO\_CDS\_UNION\_NESTING\_VE first fills the underlying database table and then accesses the view using [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm). The result set consists of 9 rows. Two of them are duplicates, marked in yellow:

![Figure](nesting_result.png)

If there were no nesting and the brackets ( ) around the last two union branches were left out, the result set would return only 7 rows. The reason is that the third union branch does not use the addition ALL. With nesting, duplicate entries are removed only from the last two branches, which are nested within each other.

Without nesting, duplicate entries would be removed from all union branches and the result set would contain fewer rows.