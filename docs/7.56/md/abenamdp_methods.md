  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Methods

There are two types of AMDP methods, methods without a return value that define [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and methods with a return value that define [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").

-   [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\))
-   [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\))

In AMDP classes, AMDP methods are flagged as follows:

-   In AMDP procedure implementations and AMDP function implementations that do not implement any [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), flagging is not necessary in the declaration with [METHODS](javascript:call_link\('abapmethods.htm'\)) or [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). However, an optional addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) can be used to declare attributes of the AMDP method.
-   AMDP function implementations that must implement [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), declared as static methods using CLASS-METHODS, and linked with their CDS table function using the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)).
-   When implemented, all AMDP methods must be flagged using the statement METHOD.
    -   AMDP procedure implementations with the addition [BY DATABASE PROCEDURE](javascript:call_link\('abapmethod_by_db_proc.htm'\))
    -   AMDP function implementations with the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\))

The implementation of an AMDP method is stored in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") by the ABAP runtime framework. In an AMDP method, it is possible to access objects in the same database schema directly. The name of the current database schema must not be specified here. If the correct authorization is granted, it is possible to access objects in a different database schema by specifying its name.

Hint

[Constructors](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry") cannot be implemented as AMDP methods.

Continue
[AMDP - Procedure Implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\))
[AMDP - Function Implementations](javascript:call_link\('abenamdp_function_methods.htm'\))
[\[CLASS-\]METHODS, AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\))
[CLASS-METHODS, FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\))
[CLASS-METHODS, FOR DDL OBJECT](javascript:call_link\('abapclass-methods_for_ddl_object.htm'\))
[METHOD, BY DATABASE PROCEDURE, FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\))