  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_methods.htm) →  [METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20SQLScript%20for%20the%20SAP%20HANA%20Database%2C%20ABENAMDP_HDB_SQLSCRIPT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

AMDP - SQLScript for the SAP HANA Database

[SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_glosry.htm "Glossary Entry") is a script language, documented in the [SAP HANA SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d), and used to program [SQLScript procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") and [SQLScript functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_function_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"). It is the implementation language of an [AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_methods.htm) that specifies the addition [FOR HDB LANGUAGE SQLSCRIPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) in the statement METHOD.

-   [AMDP Procedures and Functions in SAP HANA](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_1)
-   [Parameter Interface](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_2)
    -   [SQLScript Procedures](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_3)
    -   [SQLScript Functions](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_4)
-   [Use](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_5)
-   [Access to ABAP Types](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_6)
-   [Access to Database Schemas](#@@ITOC@@ABENAMDP_HDB_SQLSCRIPT_7)

Hints

-   AS ABAP requires the following authorizations as a user of the database system to be able to manage SQLScript procedures and functions on the SAP HANA database:
    
    -   Privilege Execute on the object GET\_PROCEDURE\_OBJECTS of the schema SYS
    -   Privilege Execute on the object TRUNCATE\_PROCEDURE\_OBJECTS of the schema SYS
    
    Further authorizations are required for debugging AMDP methods in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). Missing authorizations can be identified using transaction SICK.
    
-   SQLScript implementations in AMDP methods replace calls of database procedures using [database procedure proxies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") and the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_database_procedure.htm). Database procedures can either be implemented completely in an AMDP method or an existing database procedure can be called from an AMDP method. In this case, the AMDP method replaces the database procedure proxy. Database procedure proxies are still recommended for scenarios in which [secondary connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") are used to access existing procedures in SAP HANA database alongside the current [standard AS ABAP database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry").

AMDP Procedures and Functions in SAP HANA   

The SQLScript implementation of an AMDP method with the name meth that belongs to an AMDP class class is stored by the ABAP runtime framework as an SQLScript procedure under the name CLASS=>METH in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the SAP HANA database. The names must be written in uppercase letters when used in the database system. AS ABAP is responsible for all transports, administration, and access control. SQLScript procedures and functions managed using AMDP can be accessed as follows:

-   Calls from ABAP
    -   Call of an [AMDP procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") or [AMDP scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") with standard method call [meth( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm) in ABAP programs. For meth, the associated [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) is specified.
    -   Calls an [AMDP table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") by specifying the assigned [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") or a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") that uses a CDS table function in an ABAP SQL read statement.
-   Calls from other AMDP procedures or functions
    -   An AMDP procedure or function implemented using SQLScript in the same class or a different class can call another AMDP procedure with the usual [SQLScript syntax](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d):
        
        CALL "CLASS=>METH"( f1 => a1, f2 => a2, ... );
        
        The called AMDP procedure implementation CLASS=>METH must be specified after the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the calling method. The usual visibility rules from ABAP Objects apply. A database procedure or database function implemented in a class cannot call a procedure implemented in a private AMDP procedure implementation of a different class, unless a friendship exists between the classes.
        
    -   An AMDP procedure or function implemented using SQLScript in the same class or a different class can call another AMDP function implemented with SQLScript using the usual [SQLScript syntax](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d):
        
        SELECT ... FROM "CLASS=>METH"( f1 => a1, f2 => a2, ... );
        
        The specified AMDP function implementation CLASS=>METH must be specified after the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the calling method. An AMDP function implementation is always public.
        
-   Calls from regular database procedures
    
    An SQLScript procedure or function created in the regular way in [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") or using Native SQL can call an SQLScript procedure or function implemented in an AMDP method or access an SQLScript function, as long as the procedure or function exists in the database system. This is [not recommended](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_recomm.htm), however, since the AMDP procedures and functions are managed in AS ABAP and consistency can only be guaranteed for other AMDP procedures and functions from the same AS ABAP.
    
-   Access in [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry")
    
    Once the ABAP runtime framework has created an SQLScript procedure or function managed by AMDP in the database system, it is visible in [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") and can even be edited. This is not recommended since this kind of change has no effect on the implementation in the AMDP method and can be overwritten by the ABAP runtime framework at any time.
    

Syntax

The syntax of a [SQLScript procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") or [function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_function_glosry.htm "Glossary Entry") written in SQLScript is exactly as described under [SAP Hana SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d), with one exception: The character \* at the start of a line indicates a [comment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm), as in ABAP. When the procedure or function is saved in the database system, the asterisk, \*, is transformed to the usual double hyphens, \--.

All SQLScript operators CE\_... that support views can be used. SQLScript operators that do not support views, for example, CE\_COLUMN\_TABLE, which only works with the technical property Column Store, cannot be used.

In an SQLScript procedure, the function SESSION\_CONTEXT is used for read access to the [session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") in the SAP HANA database. When called from ABAP, the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_session_variables.htm) are set to the values of the corresponding ABAP system fields. When accessing a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") implemented in an [AMDP table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") via ABAP SQL, the session variable CDS\_CLIENT is set to the value specified in the optional addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm). However, write access to session variables with the SQLScript statement SET is not allowed in an SQLScript procedure or function.

Hints

-   Support for ABAP comments introduced using \* enables the use of change entries inserted by the Modification Assistant tool in ABAP programs. This property should not be used when creating AMDP methods in the regular way.
-   The syntax is checked only on an AS ABAP whose standard database is a SAP HANA database. Here, a temporary database procedure or function is created that checks the syntax.
-   The use of the dynamic options under SQLScript syntax is strongly discouraged due to the reasons specified under [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm). This applies in particular to statements such as EXEC, EXECUTE IMMEDIATE, or APPLY FILTER.

Parameter Interface   

The elementary ABAP types of interface parameters of an AMDP method are mapped to the appropriate types in SQLScript. as shown in the [mapping tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript_mapping.htm).

SQLScript Procedures   

The parameter interface of an [SQLScript procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") supports input parameters declared using IN, output parameters declared using OUT, and input/output parameters declared using INOUT‎. All parameters can be scalar and tabular with the exception of input/output parameters, which can only be scalar. When used in the procedure, certain operand positions must or can be prefixed with a colon (:) in certain operand positions.

The parameter interface of an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) that implements an SQLScript procedure is transformed as follows:

-   An input parameter of the method defined using IMPORTING becomes an input parameter of the procedure declared using IN.
-   An output parameter of the method defined using EXPORTING becomes an output parameter of the procedure declared using OUT.
-   If CHANGING is used to define a
    -   scalar input/output parameter of the method, the parameter becomes an input/output parameter of the database procedure declared using INOUT.
    -   tabular input/output parameter of the method, it is transformed to a pair of input and output parameters declared using IN and OUT on the database, since SQLScript does not support INOUT parameters. The CHANGING parameter becomes an OUT parameter of the procedure with the same name as the CHANGING parameter. The IN parameter is created with an internal name consisting of the name of the CHANGING parameter and a postfix \_\_IN\_\_. The IN parameter is assigned to the OUT parameter before the start of the actual AMDP procedure. This transformation and the corresponding call are generally transparent for all ABAP developers. It becomes visible only when the database procedure is displayed, for example, in [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") or called from another database procedure (see the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_changing_abexa.htm)).

Elementary and tabular method parameters become scalar and tabular parameters of the database procedure respectively. As well as the restrictions for the parameter interface of an AMDP method described under [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm), the following restrictions apply in the implementation with SQLScript:

-   An [input/output parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") declared using [CHANGING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) cannot have the type string or xstring. An exception this rule are parameters that are typed with reference to the built-in type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary.
-   The length of a parameter typed with the type c or n is restricted to a maximum of 5000 characters.
-   Parameters of the types string and xstring cannot be assigned a replacement value using [DEFAULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_parameters.htm), which means they cannot be optional parameters. Since release 7.55, parameters of the types f, decfloat16, decfloat34, and sstring can be assigned a replacement value using DEFAULT.

Hint

In SQLScript, tabular parameters are handled as temporary database tables. An internal table passed to SQLScript can be accessed just like a database table.

SQLScript Functions   

The parameter interface of an [SQLScript function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_function_glosry.htm "Glossary Entry") supports input parameters declared using IN and a return value declared using RETURNS. The input parameters of a scalar function must be scalar, and the input parameters of a table function can be scalar and tabular. The return value of a scalar function is scalar, and the return value of a table function is tabular.

The parameter interface of an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm) that implements an SQLScript procedure is transformed as follows:

-   An input parameter of the method defined using IMPORTING becomes an input parameter of the function declared using IN.
-   The return value of the method defined using RETURN becomes the return value of the procedure declared using RETURNS.

The same restrictions apply as in SQLScript procedures, as well as the following:

-   AMDP scalar functions cannot have any output parameters besides the return value.
-   AMDP table functions for [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") can only have scalar input parameters.

Use   

As described above, SQLScript procedures and functions managed in the SAP HANA database using AMDP can be used in ABAP programs and in other AMDP procedures according to the visibility of the AMDP methods. Recursive and cyclical calls are forbidden in the HANA database system, which means that

-   an SQLScript procedure or function cannot use itself
-   an AMDP method that implements an SQLScript procedure cannot call any database procedures or use any database functions that themselves use the AMDP procedure or function.

Furthermore, an AMDP procedure or function can use regular SQLScript procedures and functions created in [SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") or using Native SQL. These procedures or functions cannot and must not be specified after the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the calling AMDP method.

Access to ABAP Types   

In an SQLScript procedure, the [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abap_types.htm) can be used to access ABAP types that have a corresponding type in SQLScript. The type mapping is described in the [mapping tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript_mapping.htm).

Access to Database Schemas   

In an SQLScript procedure, it is possible to access objects in the same database schema directly. The name of the current database schema must not be specified here. To access an object in another database schema, the name of the database schema can be specified as prefix separated by a period, as usual in SQLScript. As well as specifying the name directly, the [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) can be used to specify a [logical schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_schema_glosry.htm "Glossary Entry") to which a physical database schema is mapped.

Executable Examples

[AMDP - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abexas.htm)

Continue
[AMDP - Mapping of ABAP Types to SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript_mapping.htm)