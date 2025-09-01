  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Methods, ABENAMDP_METHODS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

AMDP - Methods

There are two types of AMDP methods, methods without a return value that define [AMDP procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and methods with a return value that define [AMDP functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_function_glosry.htm "Glossary Entry").

-   [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_methods.htm)
-   [AMDP function implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_function_methods.htm)

In AMDP classes, AMDP methods are flagged as follows:

-   In AMDP procedure implementations and AMDP function implementations that do not implement any [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry"), flagging is not necessary in the declaration with [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm). However, an optional addition [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_amdp_options.htm) can be used to declare properties of the AMDP method.
-   AMDP function implementations that must implement [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry"), declared as static methods using CLASS-METHODS, and linked with their CDS table function using the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_for_tabfunc.htm).
-   When implemented, all AMDP methods must be flagged using the statement METHOD.
    -   AMDP procedure implementations with the addition [BY DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod_by_db_proc.htm)
    -   AMDP function implementations with the addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod_by_db_proc.htm)

The implementation of an AMDP method is stored in the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") by the ABAP runtime framework. In an AMDP method, it is possible to access objects in the same database schema directly. The name of the current database schema must not be specified here. If the correct authorization is granted, it is possible to access objects in a different database schema by specifying its name.

Hint

[Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_glosry.htm "Glossary Entry") cannot be implemented as AMDP methods.

Continue
[AMDP - Procedure Implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_methods.htm)
[AMDP - Function Implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_function_methods.htm)
[\[CLASS-\]METHODS, AMDP OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_amdp_options.htm)
[CLASS-METHODS, FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_for_tabfunc.htm)
[CLASS-METHODS, FOR DDL OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_for_ddl_object.htm)
[METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod_by_db_proc.htm)