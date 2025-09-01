  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  E

EXEC SQL - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec.htm)

Syntax

EXEC SQL *\[*PERFORMING subr*\]*.
  ...
ENDEXEC.

Effect

Defines an area in which [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") statements can be specified for database accesses.

Addition

-   [PERFORMING subr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec_implicit.htm)
    Obsolete: Implicit cursor processing if a SELECT statement is specified. Here, the subroutine subr is called for each row read.