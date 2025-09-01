---
title: "ABAP CDS - SELECT"
description: |
  Syntax SELECT DISTINCT  select_list(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) FROM data_source(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) association1(https://help.sap.com/doc/abapdocu_753
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm"
abapFile: "abencds_f1_select_statement.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "statement"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) → 

ABAP CDS - SELECT

Syntax

SELECT *\[*DISTINCT*\]* *{* [select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm)
                    FROM [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm)
                    *\[*[association1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm) [association2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm) ...*\]* *}*
                *|* *{* FROM [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm)
                    *\[* [association1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm) [association2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm) ...*\]*
                    {[select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm)} *}*
                  *\[*[clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_select_clauses.htm)*\]*

Effect

The SELECT statement defines a query performed on the data sources specified in [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) for a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"), as part of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm). Possible data sources are [database tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) defined in ABAP Dictionary, [database views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_views.htm), or other [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm).

-   [select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) defines the components read in a list.

-   [association1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm), [association2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm), ... define associations for the current SELECT statement. These associations can be accessed in [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) and in [select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) using [path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm).

-   DISTINCT removes duplicates from the results list.

Both forms of the code have the same semantics. Curly brackets { } must be used in the second variant to set select\_list.

The optional additions [clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_select_clauses.htm) are SELECT clauses that enable conditions, groupings, and union sets to be specified or created.

Example

The CDS view business\_partner\_role defined here is a view of an existing CDS view business\_partner. An element bp\_role is defined in the SELECT list and given the comment Business partner role. Any duplicate values of the element are removed using DISTINCT.

@AbapCatalog.sqlViewName: 'BPA\_ROLE\_VW'
define view business\_partner\_role as
  select distinct
         from business\_partner
         { business\_partner.role //Business partner role
         }

The CDS view business\_partner\_role can be addressed in ABAP programs using ABAP SQL, for example:

SELECT \* FROM business\_partner\_role INTO TABLE @itab ...

The addition DISTINCT of SELECT is no longer needed in this case.

Continue
[ABAP CDS - SELECT, data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm)
[ABAP CDS - SELECT, ASSOCIATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm)
[ABAP CDS - SELECT, select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm)
[ABAP CD- SELECT, clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_select_clauses.htm)
[ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_operands_and_expressions.htm)
[ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_builtin_functions.htm)