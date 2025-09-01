  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_methods.htm) → 

AMDP - Procedure Implementations

An AMDP procedure implementation is an AMDP method for implementing a [database procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_procedure_glosry.htm "Glossary Entry"). It is declared in an [AMDP class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_classes.htm) like a regular [static method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_method_glosry.htm "Glossary Entry") or [instance method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_method_glosry.htm "Glossary Entry") in any [visibility section](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvisibility_section_glosry.htm "Glossary Entry"). An AMDP procedure implementation cannot be identified as an AMDP method in the declaration part of the class.

An AMDP function implementation is indicated as an AMDP method in the implementation part of the class using the addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_by_db_proc.htm) of the statement METHOD. At the same time, the database system where the method is to be used and the programming language of the database system used to implement the method are also defined. The database objects of the current database schema accessed in the AMDP method must be declared using an addition [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_by_db_proc.htm). If possible, the syntax check is performed on the basis of this information. When database tables defined in the ABAP Dictionary are accessed, and the access is known statically, the AMDP framework ensures that the order of the fields defined in the dictionary is respected, which can differ from the order on the database.

The following restrictions apply, however, with respect to the [parameter interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of an AMDP procedure implementation:

-   The typing of the parameters must not be [generic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_typing_glosry.htm "Glossary Entry"). Only [elementary data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") and [table types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_type_glosry.htm "Glossary Entry") with a structured row type can be used. The row type of a tabular type can only contain elementary data types as components
-   A parameter must not have an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") and must not have a component with an enumerated type.
-   A parameter must not be typed with a data type that references one of the obsolete built-in data types [DF16\_SCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) or [DF34\_SCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary.
-   The parameters must be declared using [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm) for [pass by value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). [Pass by reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is not allowed.
-   [Return values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreturn_value_glosry.htm "Glossary Entry") cannot be declared using [RETURNING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_functional.htm).
-   Only [input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninput_parameter_glosry.htm "Glossary Entry") can be flagged as optional parameters.
    -   Each elementary optional input parameter must have a replacement parameter declared using [DEFAULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm). Only literals or constants can be specified as replacement parameters.
    -   Unlike in [regular methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm), a literal specified as a replacement parameter must be convertible to the data type of the input parameter. If not, a syntax error occurs.
    -   Input parameters of the types string, xstring, decfloat16, and decfloat34 cannot have replacement parameters and hence cannot be optional.
    -   An optional tabular input parameter cannot have any replacement parameters and must be made optional instead using [OPTIONAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm).
-   Parameter names:
    -   Parameter names cannot start with the characters "%\_".
    -   The parameter name connection can only be used for an input parameter of type DBCON\_NAME, if the name of the database connection can be passed to the input parameter.
    -   The parameter name client is reserved for future enhancements.
    -   The parameter name endmethod is not allowed.
-   [RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) can be used to specify the exceptions specified under [AMDP -Exception Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_exceptions.htm) to handle these classes for a call. Other exceptions cannot be handled. No non-class-based exceptions can be created using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm).

The following restrictions apply to method implementation:

-   An AMDP method must not be empty.
-   [DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_glosry.htm "Glossary Entry") statements are not allowed for creating, changing or deleting database objects.
-   No statements are allowed that are only possible in database tables and not in views, such as TRUNCATE TABLE or LOCK TABLE.
-   Local temporary database objects cannot be accessed.
-   Executing transactional statements is not allowed. In particular, no [database commits](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm) and [database rollbacks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_rollback.htm) using COMMIT and ROLLBACK statements are allowed. This also applies to called procedures. [LUWs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry") should always be handled in the ABAP program to ensure data consistency between procedures.
-   Writes cannot be performed on database tables where [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") is switched on, since SQLScript accesses are ignored by buffer synchronizations.
-   AMDP methods do not have any [implicit enhancement options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenimplicit_enh_points.htm).

Further restrictions may apply depending on the programming language of the database system and these are listed in the corresponding sections:

-   [SQLScript for the SAP HANA Database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_hdb_sqlscript.htm)
-   [L for the SAP HANA Database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_hdb_l_internal.htm) (used internally at SAP only)

Hints

-   It is strongly recommended that only the character set 7-bit ASCII is used when implementing an AMDP method.
-   The use of dynamic programming techniques is strongly discouraged, even if supposedly allowed by the programming language of the database system.
    -   The existence of other database objects cannot be checked or guaranteed when they are accessed dynamically. This is particularly relevant when other AMDP methods are called.
    -   When database tables in the ABAP Dictionary are accessed dynamically, the AMDP framework cannot respect the order of the fields defined here and the order of fields on the database, which might be different, is used instead. This can produce the incorrect values when making assignments to ABAP data objects declared with respect to the ABAP Dictionary.
    -   In dynamic accesses, it is not possible to prevent writes from being performed on database tables with activated table buffering, which can cause inconsistencies in buffer synchronizations.
    -   Dynamic accesses can lead to [SQL injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_inj_amdp_scrty.htm) related to input from outside.
-   When passed to an actual parameter, a [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry") is passed to its type-dependent initial value.