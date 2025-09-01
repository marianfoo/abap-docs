  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

METHOD - BY DATABASE PROCEDURE, FUNCTION

Syntax

METHOD meth BY DATABASE PROCEDURE*|*FUNCTION
            FOR db
            LANGUAGE db\_lang
            *\[*OPTIONS db\_options*\]*
            *\[*USING   db\_entities*\]*
            *\[*USING   SCHEMA schema1 OBJECTS db\_entities*\]*
            *\[*USING   SCHEMA schema2 OBJECTS db\_entities*\]*
            ... .
  ...
ENDMETHOD.

Extras:

[1\. ... FOR db](#!ABAP_ADDITION_1@1@)
[2\. ... LANGUAGE db\_lang](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS db\_options](#!ABAP_ADDITION_3@3@)
[4\. ... USING db\_entities](#!ABAP_ADDITION_4@4@)
[5\. ... USING SCHEMA schema OBJECTS db\_entities](#!ABAP_ADDITION_5@5@)

Effect

Implements an [AMDP procedure](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") or an [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") in an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry"). The addition BY DATABASE PROCEDURE or BY DATABASE FUNCTION can be specified in the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") that contains an appropriate tag interface [IF\_AMDP\_MARKER\_...](javascript:call_link\('abenamdp_classes.htm'\)) for [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").

-   The addition BY DATABASE PROCEDURE defines an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\)) for implementing a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry").
    
-   The addition BY DATABASE FUNCTION defines an [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) for implementing a [database function](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry").
    

The parameter interface of the method declared in the [declaration part](javascript:call_link\('abendeclaration_section_glosry.htm'\) "Glossary Entry") must meet the prerequisites for [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\)) or [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\)). The parameter interface of an AMDP function implementation that implements a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") is taken from the definition of the CDS table function specified after the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)) in the declaration of the method.

The addition FOR db defines the database system where the method is used. The addition LANGUAGE defines the database-specific language in which the method is implemented. OPTIONS is used to specify database-specific options. USING is used to declare database objects managed by ABAP that are used in the AMDP method.

Note

If the current AS ABAP does not have sufficient authorizations to manage database procedures or database functions in its database system, syntax errors can occur in AMDP methods. Missing authorizations can be detected using transaction SICK.

Executable Examples

[AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\))

Addition 1

... FOR db

Effect

Determines the database system for which the AMDP method is used. The AMDP class must contain the appropriate tag interface. The following table shows the syntax that can be specified for db, the database system it identifies, and the required tag interface.

db

Database System

Tag Interface

HDB

SAP HANA database

IF\_AMDP\_MARKER\_HDB

The AMDP method can only be called in an AS ABAP whose [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is managed by the specified database system; otherwise a runtime error is produced.

Notes

-   An AMDP class can contain multiple tag interfaces for different database systems for implementing AMDP methods in various languages.
    
-   Additional regular methods can be provided to make an AMDP class with [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\))s public. These methods call the AMDP methods as specified by the database system of the current standard AS ABAP database. In database systems that do not support AMDP, an alternative implementation in ABAP SQL or Native SQL can be created in regular methods.
    

Addition 2

... LANGUAGE db\_lang

Effect

Determines the database-specific language in which the AMDP is implemented. The following table shows the syntax for db\_lang used to specify the language (depending on the specified database system db), the meaning, and a link to further information.

db

db\_lang

Language

More Information

HDB

SQLSCRIPT

[SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry")

[SQL Script for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\))

HDB

SQL

DDL

Not yet documented

HDB

GRAPH

GRAPH

Not yet documented

HDB

LLANG

[L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry")

[L for the SAP HANA database](javascript:call_link\('abenamdp_hdb_l_internal.htm'\)) (for internal SAP use only and only for [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\)))

If possible, the ABAP syntax check examines the implementation of the method for the specified language. This is possible only if the check takes place on an AS ABAP whose standard database is managed by the specified database system. The check is performed with respect to the currently installed version of the database. No checks take place on an AS ABAP with a different database system.

Addition 3

... OPTIONS db\_options

Effect

Specifies database-specific options for the AMDP procedure or function. The following tables shows the syntax for option as specified by the database system in question, db and the associated meaning.

db

option

Meaning

HDB

READ-ONLY

Only reads are permitted on the database tables in the database procedure or database function. Other AMDP methods can be called only if also flagged as READ-ONLY.

HDB

DETERMINISTIC

For [AMDP scalar functions](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry") only. If a query calls an AMDP scalar function more than once with the same values for the input parameters and with the option DETERMINISTIC, the function is performed only once and the result is buffered for the duration of the query. In AMDP scalar functions like this, no functions are allowed that could return non-matching values in different calls. More information can be found under [SAP Hana SQLScript Reference](https://help.sap.com/viewer/de2486ee947e43e684d39702027f8a94/2.0.00/en-US).

HDB

SUPPRESS SYNTAX ERRORS

For internal use at SAP only: If the AMDP procedure accesses database objects not managed by ABAP that do not exist at the time of the syntax check, only syntax warnings are raised and not syntax errors. If a required object is missing at runtime, a [catchable exception is raised](javascript:call_link\('abenamdp_exceptions.htm'\)).

The option READ-ONLY can also be specified with the addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) in the declaration of an AMDP method. It applies when specified either in the implementation or in the declaration of the method, or both.

These options are optional, with the following exception: READ-ONLY must be specified at least once in the implementation of an [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") or an [L procedure](javascript:call_link\('abenamdp_hdb_l_internal.htm'\)).

The syntax check examines the specified options at runtime.

Note

The option SUPPRESS SYNTAX ERRORS is not applied to database objects managed by ABAP that are specified after USING.

Addition 4

... USING db\_entities

Effect

Declares the database objects managed by ABAP accessed in the AMDP procedure or function. The following must be specified after USING:

-   All [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") using the name of the CDS entity
    
-   All database tables and classic views from ABAP Dictionary
    
-   All procedures and functions managed by AMDP
    

These tables, views, and procedures are from the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") used in the procedure. If used in the procedure, the names of the database objects must be specified without specifying the database schema.

-   For [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), these are the names of the associated [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") or [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").
    
-   The database objects of database tables and classic views from ABAP Dictionary have the same names as in ABAP Dictionary.
    
-   An AMDP procedure or function is specified using the syntax class=>meth. Here, class is the name of its AMDP class and meth is the name of the AMDP procedure implementation or function implementation.
    

For a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), after USING the name of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") can be be specified and for a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the name of the associated [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") can also be specified. However, if a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

Each database object specified after USING must also be used in the procedure or function. Any database objects other than those above managed by ABAP cannot be specified after USING and the procedure or function cannot be used to access database objects not specified after USING, with the following exceptions:

-   Database objects in the current database schema if they are not in the namespace of the [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") /1BCAMDP/. If used in the procedure or function, they must be specified directly and without specifying the database schema.
    
-   Database objects in a different database schema using their full qualified names ([logical schemas](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) can be used here too) .
    

With the exception of the namespace /1BCAMDP/, database objects from the current database schema can be accessed in a database procedure or database function managed by AMDP only if they are managed by ABAP and specified after USING.

Notes

-   Explicit declarations of database objects used in the procedure or function are required for various static checks (such as where-used lists or package checks) and enable the visibility of an AMDP method to be passed to the database level.
    
-   An object specified after USING must be visible here. An AMDP method from a different class can be specified only if it can be used by the current class and, accordingly, can only be called in the database procedure or database function. This applies the visibility concept in ABAP Objects to the database system, even if it does not have a similar concept.
    
-   In the case of database tables in ABAP Dictionary specified after USING, the AMDP framework makes sure that the order of the fields defined in the dictionary is respected when the tables are accessed statically (this may be different from the order on the database).
    
-   When an AMDP method class=>meth is specified after USING, the ABAP runtime environment identifies this as a use of the class class and its [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") is executed before the first call of the AMDP method. This means that, if an AMDP procedure or function uses other AMDP procedures or functions, the corresponding static constructor is executed.
    
-   AMDP methods in the same class must also be specified after USING, if used in the procedure or function.
    
-   For [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), it is recommended that you specify the CDS entity.
    
-   A database-specific option SUPPRESS SYNTAX ERRORS specified after OPTIONS is not applied to the database objects managed by ABAP that are specified after USING. The syntax error cannot be suppressed for these.
    
-   The namespace /1BCAMDP/ is intended for temporary database tables, views, or database procedures or database functions of the current database schema accessed in AMDP procedures or functions.
    
-   The addition USING cannot be specified in the implementation of [L procedures](javascript:call_link\('abenamdp_hdb_l_internal.htm'\)).
    

Addition 5

... USING SCHEMA schema OBJECTS db\_entities

Effect

Declares a [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") and the database objects it contains that are accessed by the AMDP procedure or function.

For schema, only logical database schemas that the current ABAP database schema can be mapped to can be specified. The addition USING SCHEMA must be specified for each logical database schema of this type that is used in the AMDP method in a macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)). The way this addition works is determined by the physical database schema that is mapped to the logical database schema schema.

-   If the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is mapped to the logical database schema using the predefined name :abap\_db\_schema, all database tables and views from ABAP Dictionary used in the procedure must be specified after OBJECTS. For these Dictionary objects, the addition USING SCHEMA behaves in the same way as the addition USING. AMDP-managed procedures and functions cannot, however, be specified after OBJECTS.
    
-   If a different database schema is mapped to the logical database schema (or not database schema at all), any names can be specified after OBJECTS that comply with the naming conventions for database tables and views in ABAP Dictionary.
    

The addition USING SCHEMA must be specified after the addition USING and only one USING SCHEMA addition is allowed for a logical database schema schema.

Notes

-   The addition USING SCHEMA is designed for scenarios in which database objects are defined in any database schema in some systems and in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") in others If database objects like this are specified accordingly after a suitable logical database schema, the AMDP procedure can be transported between the systems in question without the need for syntax modifications. It is enough to configure the correct mapping for each system in transaction DB\_SCHEMA\_MAP.
    
-   It is pointless to map the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") to a logical database schema specified after schema explicitly (without using the predefined name :abap\_db\_schema), since this logical schema cannot be used in the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)).
    
-   No [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") can be specified for schema.
    
-   If AMDP-managed procedures and functions are used in the AMDP method, they cannot be specified after USING SCHEMA and must always be specified after USING instead.
    
-   If the flag that allows mappings of the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is changed for an existing logical database schema, the above rules for using the addition USING SCHEMA incur syntax errors in [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") that already use this logical database schema.
    

Executable Example

[Access to Database Schemas](javascript:call_link\('abenamdp_db_schema_abexa.htm'\))

Continue
[AMDP - SQL Script for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\))
[AMDP - L for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_l_internal.htm'\))