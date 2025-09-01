---
title: "ABAP SQL - literal"
description: |
  ABAP literals(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) can be used in read positions of ABAP SQL statements where host variables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) are possible. Unlike host vari
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm"
abapFile: "abenabap_sql_literals.htm"
keywords: ["do", "if", "try", "data", "types", "abenabap", "sql", "literals"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20literal%2C%20ABENABAP_SQL_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - literal

[ABAP literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) can be used in read positions of ABAP SQL statements where [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) are possible. Unlike host variables, they are not prefixed with the escape character @. The [literal operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral_operator_glosry.htm "Glossary Entry") can be used to combine two literals of the same type into a single literal.

In ABAP SQL, there are two different kinds of literals:

-   [Typed literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_typed_literals.htm) (cover most built-in types of the ABAP Dictionary)
    
    Typed literals are always handled like elementary SQL expressions
    
-   [Untyped literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_untyped_literals.htm) (character literals and numeric literals)
    
    Untyped literals are either handled like elementary SQL expressions or like host variables.
    

Continue
[ABAP SQL - Typed Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_typed_literals.htm)
[ABAP SQL - Untyped Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_untyped_literals.htm)