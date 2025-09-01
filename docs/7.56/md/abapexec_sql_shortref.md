  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  E

EXEC SQL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm)

Syntax

EXEC SQL *\[*PERFORMING subr*\]*.
  ...
ENDEXEC.

Effect

Defines an area in which [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") statements can be specified for database accesses.

Addition

-   [PERFORMING subr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_implicit.htm)
    Obsolete: Implicit cursor processing if a SELECT statement is specified. Here, the subroutine subr is called for each row read.