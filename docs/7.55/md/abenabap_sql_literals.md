---
title: "ABAP SQL - literal"
description: |
  ABAP literals(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral.htm) can be used in read positions of ABAP SQL statements where host variables(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) are possible. Unlike host variables, the
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm"
abapFile: "abenabap_sql_literals.htm"
keywords: ["do", "if", "try", "data", "types", "abenabap", "sql", "literals"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operands.htm) → 

ABAP SQL - literal

[ABAP literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral.htm) can be used in read positions of ABAP SQL statements where [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) are possible. Unlike host variables, they are not prefixed with the escape character @. The [literal operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_operator_glosry.htm "Glossary Entry") can be used to join two literals of the same type as a single literal.

In ABAP SQL, there are two different kinds of literals:

-   [Typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) (cover most built-in types of the ABAP Dictionary)

Typed literals are always handled like elementary SQL expressions

-   [Untyped literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm) (character literals and numeric literals)

Untyped literals are either handled like elementary SQL expressions or like host variables.

Continue
[ABAP SQL - Typed Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm)
[ABAP SQL - Untyped Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm)