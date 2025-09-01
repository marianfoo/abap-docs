  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHOD%2C%20BY%20DATABASE%20PROCEDURE%2C%20FUNCTION%2C%20GRAPH%20WORKSPACE%2C%20ABAPMETHOD_BY_DB_PROC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE

Syntax

METHOD meth BY DATABASE PROCEDURE*|*FUNCTION*|**{*GRAPH WORKSPACE*}*
            FOR db
            LANGUAGE db\_lang
            *\[*OPTIONS db\_options*\]*
            *\[*USING   entities*\]*
            *\[*USING   SCHEMA schema1 OBJECTS db\_entities*\]*
            *\[*USING   SCHEMA schema2 OBJECTS db\_entities*\]*
            ... .
  ...
ENDMETHOD.

Additions:

[1\. ... FOR db](#!ABAP_ADDITION_1@1@)
[2\. ... LANGUAGE db\_lang](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS db\_options](#!ABAP_ADDITION_3@3@)
[4\. ... USING entities](#!ABAP_ADDITION_4@4@)
[5\. ... USING SCHEMA schema OBJECTS db\_entities](#!ABAP_ADDITION_5@5@)

Effect

Implements an [AMDP procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"), an [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry"), or a [graph workspace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraph_workspace_glosry.htm "Glossary Entry") in an [AMDP class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry"). The addition BY DATABASE PROCEDURE, BY DATABASE FUNCTION or BY DATABASE GRAPH WORKSPACE can be specified in the [implementation part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of a [global class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry") that contains an appropriate tag interface [IF\_AMDP\_MARKER\_...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_classes.htm) for [AMDP classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry").

-   The addition BY DATABASE PROCEDURE defines an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) for implementing a [database procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_procedure_glosry.htm "Glossary Entry").
-   The addition BY DATABASE FUNCTION defines an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm) for implementing a [database function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_function_glosry.htm "Glossary Entry").
-   The addition BY DATABASE GRAPH WORKSPACE defines a [graph workspace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraph_workspace_glosry.htm "Glossary Entry") that can be consumed by a [graph procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraph_procedure_glosry.htm "Glossary Entry") using [GraphScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraphscript_glosry.htm "Glossary Entry"), see [Graph Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_graph.htm).

The parameter interface of the method declared in the [declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_part_glosry.htm "Glossary Entry") must meet the prerequisites for [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) or [AMDP function implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm). The parameter interface of an AMDP function implementation that implements a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") is taken from the definition of the CDS table function specified after the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_for_tabfunc.htm) in the declaration of the method. The parameter interface of an AMDP function implementation that implements a [CDS scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") is taken from the definition of the CDS scalar function specified after the addition [FOR SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_for_scalfunc.htm) in the declaration of the method.

The addition FOR db defines the database system where the method is used. The addition LANGUAGE defines the database-specific language in which the method is implemented. OPTIONS is used to specify database-specific options. USING is used to declare database objects managed by ABAP that are used in the AMDP method.

Hint

If the current AS ABAP does not have sufficient authorizations to manage database procedures or database functions in its database system, syntax errors can occur in AMDP methods. Missing authorizations can be identified using transaction SICK.

Executable Examples

[AMDP - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abexas.htm)

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

The AMDP method can only be called in an AS ABAP whose [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") is managed by the specified database system. Otherwise a runtime error occurs.

Hints

-   Currently, the only available database is the SAP HANA database.
-   Additional regular methods can be provided to make an AMDP class with [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) generally available. These methods call the AMDP methods depending on the database system of the current standard AS ABAP database. In database systems that do not yet support AMDP, an alternative implementation in ABAP SQL can be created in regular methods.
-   In the latter case an alternative implementation in Native SQL can be created as well.

Addition 2   

... LANGUAGE db\_lang

Effect

Determines the database-specific language in which the AMDP is implemented. The following table shows the syntax for db\_lang used to specify the language depending on the specified database system db, the meaning, and a link to further information.

db

db\_lang

Language

More Information

HDB

SQLSCRIPT

[SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_glosry.htm "Glossary Entry")

[SQLScript for the SAP HANA Database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript.htm)

HDB

SQL

DDL

Not yet documented

HDB

GRAPH

[GraphScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraphscript_glosry.htm "Glossary Entry")

[Graph Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_graph.htm)

The ABAP syntax check examines the implementation of the method for the specified language as far as possible. This is possible only if the check takes place on an AS ABAP whose standard database is managed by the specified database system. The check is performed with respect to the currently installed version of the database. No checks take place on an AS ABAP with a different database system.

Addition 3   

... OPTIONS db\_options

Effect

Specifies database-specific options for the AMDP procedure or function. The following table shows the syntax for option depending on the specified database system db and the associated meaning.

db

option

Meaning

HDB

READ-ONLY

Only reads are allowed on the database tables in the database procedure or database function. Other AMDP methods can be called only if they are also flagged as READ-ONLY.

HDB

DETERMINISTIC

For [AMDP scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") only. If a query calls an AMDP scalar function more than once with the same values for the input parameters and with the option DETERMINISTIC, the function is performed only once, and the result is buffered for the duration of the query. In AMDP scalar functions like this, no functions are allowed that could return different values in different calls. For more information, see [SAP Hana SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d).

HDB

SUPPRESS SYNTAX ERRORS

For internal SAP use only: If the AMDP procedure accesses database objects not managed by ABAP that do not yet exist at the time of the syntax check, only syntax warnings are raised and not syntax errors. If a required object is missing at runtime, a [catchable exception is raised](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_exceptions.htm).

The option READ-ONLY can also be specified with the addition [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) in the declaration of an AMDP method. It applies when specified either in the implementation or in the declaration of the method, or in both places.

These options are optional, with the following exception: READ-ONLY must be specified at least once in the implementation of an [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") or an [L procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_l_internal.htm).

The syntax check examines the specified options at runtime.

Hint

The option SUPPRESS SYNTAX ERRORS does not affect database objects managed by ABAP that are specified after USING.

Addition 4   

... USING entities

Effect

Declares one of the following:

-   the [DDL object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_object_glosry.htm "Glossary Entry") in methods using the syntax ... BY DATABASE GRAPH WORKSPACE ....
-   the database objects managed by ABAP accessed in the AMDP procedure or function.

After USING, all database objects from the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that are used in the implementation must be specified. More specifically, the following database objects must be specified after USING:

-   [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"), such as [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), using the name of the CDS entity.
-   Database tables and DDIC views from the ABAP Dictionary using the name defined in ABAP Dictionary.
-   Procedures and functions managed by AMDP. An AMDP procedure or function is specified using the syntax class=>meth. Here, class is the name of its AMDP class and meth is the name of the AMDP procedure implementation or function implementation.

The names of the database objects must be specified without specifying the database schema.

In case of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry"), the name of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") can also be specified after USING. In the case of a CDS table function, the name of the associated AMDP function can also be specified. However, this is not recommended and produces a syntax check warning. If an AMDP method uses the name of a CDS entity, stricter syntax checks are applied and all CDS entities must be addressed using their CDS name.

Each database object specified after USING must also be used in the procedure or function. No other database objects than those listed above can be specified after USING and the procedure or function can only access database objects specified after USING, with the following exceptions:

-   Database objects in the current database schema if they are in the namespace of the [namespace prefix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") /1BCAMDP/. If used in the procedure or function, they must be specified directly and without specifying the database schema.
-   Database objects in a different database schema using their fully qualified names, for which [logical schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) can also be used.

In summary, database objects of the current database schema can only be accessed in a database procedure or database function managed by AMDP if they are managed by ABAP and specified after USING. The only exception are objects of the namespace /1BCAMDP/.

Hints

-   USING is integrated into the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") and the names of database objects entities must be specified as usual in ABAP. After USING, the implementation in the database-specific language starts and the entities must be addressed accordingly in the implementation. For example, in SQLScript, the following rules apply when addressing database objects entities:
    
    -   If specified without quotation marks, the names are not case-sensitive.
    -   If specified with double quotation marks, the names must be written in uppercase letters.
    -   Special characters enforce the use of double quotation marks and uppercase letters. For example, a namespace prefix usually has a slash (/) and therefore enforces double quotation marks and uppercase letters.
    -   Example:
    
    ... USING cl\_my\_class=>my\_method.
       *\[*...*\]*
       select \* from "CL\_MY\_CLASS=>MY\_METHOD" ...
    
-   Explicit declarations of database objects used in the procedure or function are required for various static checks, such as where-used lists or package checks, and also makes the AMDP method visible on the database level.
-   Objects specified after USING must be visible at this position. An AMDP method from a different class can be specified only if it can be used by the current class. This applies the visibility concept of ABAP Objects to the database system, even if the database system does not have a similar concept.
-   In the case of DDIC database tables, the order of the fields defined in the ABAP Dictionary may differ from the order of the fields on the database. For DDIC database tables specified after USING, the AMDP framework ensures that the order of the fields defined in the dictionary is respected when the tables are accessed statically.
-   When an AMDP method class=>meth is specified after USING, the ABAP runtime framework identifies this as a use of the class class and its [static constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") is executed before the first call of the AMDP method. If an AMDP procedure or function uses other AMDP procedures or functions, it can therefore be assumed that the corresponding static constructor was executed.
-   AMDP methods defined and implemented in the same class must also be specified after USING, if they are used in the procedure or function.
-   The namespace /1BCAMDP/ is intended for temporary database tables, views, or database procedures or database functions of the current database schema that are to be accessed in AMDP procedures or functions.
-   A database-specific option SUPPRESS SYNTAX ERRORS specified after OPTIONS does not affect the database objects managed by ABAP that are specified after USING. The syntax error cannot be suppressed for these.
-   The addition USING cannot be specified in the implementation of [L procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_l_internal.htm).

Addition 5   

... USING SCHEMA schema OBJECTS db\_entities

Effect

Declares a [logical database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") and the database objects it contains that are accessed by the AMDP procedure or function.

For schema, only logical database schemas that the current ABAP database schema can be mapped to can be specified. The addition USING SCHEMA must be specified for each logical database schema of this type that is used in the AMDP method in a macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm). The effect of this addition depends on the physical database schema that is mapped to the logical database schema schema.

-   If the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is mapped to the logical database schema using the predefined name :abap\_db\_schema, all database tables and views from the ABAP Dictionary used in the procedure must be specified after OBJECTS. For these dictionary objects, the addition USING SCHEMA behaves in the same way as the addition USING. AMDP-managed procedures and functions cannot, however, be specified after OBJECTS.
-   If a different database schema or no database schema is mapped to the logical database schema, any names can be specified after OBJECTS that comply with the naming conventions for database tables and views in the ABAP Dictionary.

The addition USING SCHEMA must be specified after the addition USING and only one USING SCHEMA addition is allowed for a logical database schema schema.

Hints

-   The addition USING SCHEMA is intended for scenarios in which database objects are defined in any database schema in some systems and in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") in others. If database objects like this are specified accordingly after a suitable logical database schema, the AMDP procedure can be transported between these systems without the need for syntax modifications. It is sufficient to make the correct mapping in each system in transaction DB\_SCHEMA\_MAP.
-   It is pointless to map the current [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") to a logical database schema specified after schema explicitly, that is, not using the predefined name :abap\_db\_schema, since this logical schema cannot be used in the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm).
-   No [logical HDI container](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") can be specified for schema.
-   If AMDP-managed procedures and functions are used in the AMDP method, they cannot be specified after USING SCHEMA and must always be specified after USING instead.
-   If the flag that allows mappings of the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is changed for an existing logical database schema, the above rules for using the addition USING SCHEMA lead to syntax errors in [AMDP classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry") that already use this logical database schema.

Executable Example

[Access to Database Schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_db_schema_abexa.htm)

Continue
[AMDP - SQLScript for the SAP HANA Database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript.htm)
[AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_graph.htm)
[AMDP - L for the SAP HANA Database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_l_internal.htm)