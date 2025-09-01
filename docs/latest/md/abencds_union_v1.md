---
title: "CDS DDL - DDIC-Based View, SELECT, UNION"
description: |
  Syntax ... UNION ALL select_statement(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) ... Effect Merges the rows of the result sets of two SELECT statements(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_st
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm"
abapFile: "abencds_union_v1.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abencds", "union"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_clauses_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20UNION%2C%20ABENCDS_UNION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS DDL - DDIC-Based View, SELECT, UNION

Syntax

... UNION *\[*ALL*\]* [select\_statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) ...

Effect

Merges the rows of the result sets of two [SELECT statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") into one result set. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. The data types DF16\_..., DF34\_..., LCHR, LRAW,STRING, RAWSTRING, and GEOM\_EWKB are not supported. A union result set can itself be the left side of a further union.

If the addition ALL is specified, all entries, even duplicates, are listed in the result set. If ALL is not specified, all duplicate entries are removed from the result set. For determining the duplicate rows, all columns of the result set are considered. In detail, this works as follows:

-   First, all rows of all UNION branches are combined into one result set.
-   Then, all rows that occur more than once (considering all columns, not just key fields) are deleted except for one.

The properties of the elements of the merged result set are determined as follows:

-   Element names
    -   If an explicit [name list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_name_list_v1.htm) is specified, this list determines the names of the elements
    -   If no explicit [name list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_name_list_v1.htm) is specified, the direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of all SELECT statements and are used.
-   Key elements
    
    The [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of the first SELECT statement determines the key elements.
    
-   Element annotations
    
    Only the [element annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_annotations_v1.htm) from the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of the first SELECT statement are applied.
    
-   Data type
    -   The [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of the first SELECT statement determines the data type of each element of the CDS entity.
    -   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

The following table shows which data types can be merged with each other in a union. On the left side, the data types of the SELECT list of the first SELECT statement are listed and the other columns specify with which data types of the following SELECT lists they can be merged.

First/following

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

CHAR

SSTRING

NUMC

DATS

TIMS

ACCP

CLNT

LANG

UNIT

CUKY

RAW

INT1

x

w

w

w

w

w

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

INT2

x

x

w

w

w

w

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

INT4

x

x

x

w

w

w

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

INT8

x

x

x

x

w

w

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

DEC

w

w

w

w

w

w

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

CURR

w

w

w

w

w

w

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

QUAN

w

w

w

w

w

w

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

FLTP

x

x

x

w

w

w

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

CHAR

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

l

w

w

l

l

l

l

l

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

NUMC

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

l

l

l

l

l

l

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

w

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

TIMS

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

l

\-

x

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

l

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

CLNT

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

l

\-

\-

\-

x

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

l

\-

l

\-

\-

\-

\-

x

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

CUKY

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

\-

\-

\-

\-

\-

\-

x

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

x

There are no further restrictions to note in combinations using x. The following rules apply to the other combinations:

-   In combinations with w, the length or the value range of the data type in the first SELECT must be long enough for all following SELECT lists. If this is not the case, a syntax check warning is raised.
-   In combinations using l, the lengths of the data types must match exactly.

If the length or value range of the first element does not cover the following elements in combinations with w, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_into_conversion.htm) of the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

A CDS view in which union sets are formed with UNION can expose [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry"). Such an association must be defined and exposed in the same way in all SELECT statements merged with UNION. That is, CDS associations that are exposed in the respective [SELECT lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) must appear in all SELECT statements merged with UNION and the following requirements must be met:

-   They have the same name.
-   They have the same [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry").
-   They must be exposed at the same position in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) using a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm).
-   They must have the same ON conditions, that is:
    -   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
    -   The fields of the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") that are listed in an ON condition must be at identical positions in the SELECT list.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual SELECT lists act like a CDS association exposed by the union set. There are no restrictions on CDS associations that are not exposed in the SELECT lists.

Restriction

Defining new CDS compositions is not possible in a CDS view with UNION or UNION ALL.

Hints

-   Union sets can be a good way of transforming non-normalized DDIC database tables into a normalized view on the data.
-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) expression.
-   The maximum number of different SELECT statements that can be merged using UNION depends on the database system. If this number is exceeded, the CDS view cannot be activated.

Examples

Union set without name list. The element names of the SELECT lists must match.

@AbapCatalog.sqlViewName: '...'
define view ... as
  select
    from demo\_join1
      { a as c1, b as c2, c as c3, d as c4 }
    union
      select
        from demo\_join2
          { d as c1, e as c2, f as c3, g as c4 }

Union set with name list. The element names of the SELECT lists do not need to match.

@AbapCatalog.sqlViewName: '...'
define view ... ( c1, c2, c3, c4 ) as
  select
    from demo\_join1
      { a, b, c, d }
    union
      select
        from demo\_join2
          { d, e, f, g }

Example

The following CDS view creates the union of the result sets of two SELECT statements. The element col1 in the first SELECT list has the type INT4, whereas the associated element col1 in the second SELECT list has the type INT8. This is why a syntax check warning is raised. To bypass the warning, col2 is converted to data type INT8 using a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) expression.

@AbapCatalog.sqlViewName: 'DEMOCDSUNIONTYPE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Union\_Element\_Type(
    id,
    col1,
    col2
  )
  as select from
    demo\_expressions
    {
      id,
      num1                      as col1,
      cast( num1 as abap.int8 ) as col2
    }
union all select from
  demo\_expressions
    {
      id,
      numlong1 as col1,
      numlong1 as col2
    }

The class CL\_DEMO\_CDS\_UNION\_ELEMENT\_TYPE uses [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the view four times:

-   The first access writes directly to an internal table with the line type of the CDS entity. The access works because the value of the element col1 matches the value range of the data type i.
-   The second access is the same as the first but one value in the element col1 is outside the value range of the data type i of the first column of the internal table result2. This is why an exception is raised.
-   In the third access, the exception is prevented since the data type of the first column of the result set (and hence the data type of the internal table result3) is transformed to int8 using a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) in ABAP SQL.
-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table result4.

The recommended method in all cases, however, is to handle the second element using a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) in the CDS view.