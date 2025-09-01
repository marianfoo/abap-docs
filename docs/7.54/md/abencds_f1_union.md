  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm) → 

ABAP CDS - SELECT, UNION

Syntax

... UNION *\[*ALL*\]* [select\_statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) ...

Effect

Creates the union of rows in the results sets of two [SELECT statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"). This can only happen if the results sets have the same number of elements and have a compatible data type in each position (pair by pair). The data types DF16\_..., DF34\_..., LCHR,LRAW,STRING, RAWSTRING, and GEOM\_EWKB are not supported. A union results set can itself be the left side of a further union. If the addition ALL is not specified, all duplicate entries are removed from the results set. They are not removed if ALL is specified. The properties of the elements of the merged results set are determined as follows:

-   Element names

-   If an explicit [name list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_name_list.htm) is specified, this list determines the names of the elements

-   If no explicit [name list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_name_list.htm) is specified, the direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of all SELECT statements and are used.

-   Key elements

The definition of the key elements is taken from the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of the first SELECT statement.

-   Element annotations

[Element annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotations.htm) are applied only from the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of the first SELECT statement.

-   Data type

-   The data type of each element of the CDS entity is the dictionary type of the element from the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of the first SELECT statement.

-   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all results sets involved.

The following table shows which data types can be merged with which data types of the following SELECT statements in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of the first SELECT statement using UNION.

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

There are no further restrictions to note in combinations using "x". The following rules apply to the other combinations:

-   In combinations with "w", the length or the value range of the data type in the first SELECT must be long enough for all following SELECT lists. If this is not the case, a syntax check warning is raised.

-   In combinations using "l", the lengths of the data types must match exactly.

If the length or value range of the first element does not cover the following elements in combinations with "w", the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm) of the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

A CDS view in which union sets are formed with UNION can expose [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry"). A CDS association must be defined and exposed in the same way in all SELECT statements joined with UNION. That is, CDS associations that are published in the respective [SELECT lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) must appear in all SELECT statements joined with UNION and the following requirements must be met:

-   They have the same name.

-   They have the same cardinality.

-   They must be published at the same position in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) using a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm).

-   They must have the same ON conditions, that is:

-   The conditions must relate to the same fields in the source and target data source and express the same logic for these fields.

-   The fields of the source data source that are listed in conditions must be at identical respective positions in the SELECT list.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are published in the individual SELECT lists act like a CDS association published by the union set. There are no restrictions on CDS associations that are not published in the SELECT lists.

Notes

-   Union sets can be a good way of transforming non-standardized database tables into a standardized view of the data.

-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) expression.

-   The maximum number of different SELECT statements that can be joined using UNION depends on the database system. If this number is exceeded, the CDS view cannot be activated.

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

The following CDS view creates the union of the results sets of two SELECT statements. The element col1 in the first SELECT list has the type INT4, whereas the associated element col1 in the second SELECT list has the type INT8. This is why a syntax check warning is raised. In the case of the second element, col2, the example demonstrates how the warning can be bypassed using a [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) to the type INT8.

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

The program DEMO\_CDS\_UNION\_ELEMENT\_TYPE uses [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) to access the view four times:

-   The first access writes directly to an internal table with the row type of the CDS entity. The access works because the value of the element col1 matches the value range of the data type i.

-   The second access is the same as the first but one value in the element col1 is outside the value range of the data type i of the first column of the internal table result2. This is why an exception is raised.

-   In the third access, the exception is prevented since the data type of the first column of the results set (and hence the data type of the internal table result3) is transformed to int8 using a [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) in ABAP SQL.

-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table result4.

The recommended method in all cases, however, is to handle the second element using a [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) in the CDS view.