---
title: "Syntax"
description: |
  ... sql_cond1 AND sql_cond2 AND sql_cond3 ... ... sql_cond1 OR sql_cond2 OR sql_cond3 ... ... NOT sql_cond ... ... ( sql_cond ) ... Effect Any number of logical sql_cond(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) expressions can be joined to make one
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_andornot.htm"
abapFile: "abenwhere_logexp_andornot.htm"
keywords: ["select", "do", "if", "try", "data", "abenwhere", "logexp", "andornot"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)

sql\_cond - AND, OR, NOT, ( )

Syntax

... sql\_cond1 AND sql\_cond2 AND sql\_cond3 ...

... sql\_cond1 OR sql\_cond2 OR sql\_cond3 ...

... NOT sql\_cond ...

... ( sql\_cond ) ...

Effect

Any number of logical [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) expressions can be joined to make one logical expression using AND or OR and the result of a logical expression can be negated using NOT. The same [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) apply as to general logical expressions, with the difference that the operator NOT cannot be specified more than once consecutively. In particular, the explicit use of ( ) parentheses is also possible.

The following additional rules apply to logical expressions whose result is unknown (because an operand has the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry")):

-   An AND join of two unknown expressions or one true expression with an unknown expression produces an unknown expression. An AND join of a false expression with an unknown expression produces a false expression.

-   An OR join of two unknown expressions or one false expression with an unknown expression produces an unknown expression. An OR join of one true and one unknown expression produces a true expression.

-   The negation of an unknown expression with NOT produces an unknown expression.

Notes

-   In particular, the expressions specified [dynamically](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm) as (cond\_syntax) are also possible as logical expressions within a join or negation.

-   The operator NOT in a WHERE clause cannot be supported by an [index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_index.htm). For this reason, it is best to use the reverse relational operator instead of NOT, for example col <= dobj instead of NOT col > dobj.

-   Two NOT operators can only be specified consecutively if they are separated by an opening parenthesis. If not, an even number of consecutive NOTs has the same meaning as none and an odd number of consecutive NOTs has the same meaning as a single NOT and should be used accordingly.

Example

Reads flights from Frankfurt to Los Angeles or San Francisco.

SELECT \*
       FROM spfli
       WHERE cityfrom = 'FRANKFURT' AND
             ( cityto = 'LOS ANGELES' OR
               cityto = 'SAN FRANCISCO' )
       INTO TABLE @DATA(spfli\_tab).