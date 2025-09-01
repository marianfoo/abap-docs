  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Methods%2C%20ABENAMDP_METHODS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Methods

There are two types of AMDP methods, methods without a return value that define [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and methods with a return value that define [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").

-   [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\))
-   [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\))

In AMDP classes, AMDP methods are flagged as follows:

-   In AMDP procedure implementations and AMDP function implementations that do not implement any [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") or [CDS scalar functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), flagging is not necessary in the declaration with [METHODS](javascript:call_link\('abapmethods.htm'\)) or [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). However, an optional addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) can be used to declare properties of the AMDP method.
-   AMDP function implementations that implement [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") must be declared as static methods using CLASS-METHODS, and linked with the associated CDS table function using the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)).
-   AMDP function implementations that implement [CDS scalar functions](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") must be declared as static methods using CLASS-METHODS, and linked with the associated CDS scalar function using the addition [FOR SCALAR FUNCTION](javascript:call_link\('abapclass-methods_for_scalfunc.htm'\)).
-   When implemented, all AMDP methods must be flagged using the statement METHOD.
    -   AMDP procedure implementations with the addition [BY DATABASE PROCEDURE](javascript:call_link\('abapmethod_by_db_proc.htm'\))
    -   AMDP function implementations with the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\))

The implementation of an AMDP method is stored in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") by the ABAP runtime framework. In an AMDP method, it is possible to access objects in the same database schema directly. The name of the current database schema need not and must not be specified here. If the correct authorization is granted, it is possible to access objects in a different database schema by specifying its name.

Hint

[Constructors](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry") cannot be implemented as AMDP methods.

Continue
[AMDP - Procedure Implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\))
[AMDP - Function Implementations](javascript:call_link\('abenamdp_function_methods.htm'\))
[\[CLASS-\]METHODS, AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\))
[CLASS-METHODS, FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\))
[CLASS-METHODS, FOR SCALAR FUNCTION](javascript:call_link\('abapclass-methods_for_scalfunc.htm'\))
[CLASS-METHODS, FOR DDL OBJECT](javascript:call_link\('abapclass-methods_for_ddl_object.htm'\))
[METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](javascript:call_link\('abapmethod_by_db_proc.htm'\))