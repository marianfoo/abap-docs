  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

EXPORT - Export of a Structure Description

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT NAMETAB h f ID id.

Effect

Exports a generated structure description. This statement can only be used by ABAP Workbench tools. For the field list f, a standard table without a secondary key can be specified.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Table name is too long.
    Runtime error: EXPORT\_NAMETAB\_WRONG\_ID