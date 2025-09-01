  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

AMDP - Procedure Implementations

An AMDP procedure implementation is an AMDP method for implementing a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry"). It is declared in an [AMDP class](javascript:call_link\('abenamdp_classes.htm'\)) like a regular [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") or [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") in any [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"). An AMDP procedure implementation cannot be identified as an AMDP method in the declaration part of the class.

An AMDP function implementation is indicated as an AMDP method in the implementation part of the class using the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD. At the same time, the database system where the method is used and the programming language of the database system used to implement the method are also defined. The database objects of the current database schema accessed in the AMDP method must be declared using an addition [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)). If possible, the syntax check is performed on the basis of this information. When database tables defined in ABAP Dictionary are accessed (and the access is known statically), the AMDP framework makes sure that the order of the fields defined in the dictionary is respected (this may be different from the order on the database).

The following restrictions apply, however, with respect to the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of an AMDP procedure implementation:

-   The typing of the parameters cannot be [generic](javascript:call_link\('abengeneric_typing_glosry.htm'\) "Glossary Entry"). Only [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") and [table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") with a structured row type can be used. The row type of a tabular type can only contain elementary data types as components

-   A parameter cannot have an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") and cannot have a component with an enumerated type.

-   A parameter cannot be typed with a data type that references one of the obsolete built-in data types [DF16\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) or [DF34\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary.

-   The parameters must be declared using [VALUE](javascript:call_link\('abapmethods_parameters.htm'\)) for [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"). [Pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is not permitted.

-   [Return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") cannot be declared using [RETURNING](javascript:call_link\('abapmethods_functional.htm'\)).

-   Only [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") can be flagged as optional parameters.

-   Each elementary optional input parameter must have a replacement parameter declared using [DEFAULT](javascript:call_link\('abapmethods_parameters.htm'\)). Only literals or constants can be specified as replacement parameters.

-   Unlike in [regular methods](javascript:call_link\('abapmethods_parameters.htm'\)), a literal specified as a replacement parameter must be convertible to the data type of the input parameter. If not, a syntax error occurs.

-   Input parameters of the types string, xstring, decfloat16, and decfloat34 cannot have replacement parameters and hence cannot be optional.

-   An optional tabular input parameter cannot have any replacement parameters and must be made optional instead using [OPTIONAL](javascript:call_link\('abapmethods_parameters.htm'\)).

-   Parameter names:

-   Parameter names cannot start with the characters "%\_".

-   The parameter name connection can only be used for an input parameter of type DBCON\_NAME, if the name of the database connection can be passed to the input parameter.

-   The parameter name client is reserved for future enhancements.

-   The parameter name endmethod is not permitted.

-   [RAISING](javascript:call_link\('abapmethods_general.htm'\)) can be used to specify the the exceptions specified under [AMDP -Exception Classes](javascript:call_link\('abenamdp_exceptions.htm'\)) to handle these classes for a call. Other exceptions cannot be handled. No non-class-based exceptions can be created using the addition [EXCEPTIONS](javascript:call_link\('abapmethods_general.htm'\)).

The following restrictions apply to method implementation:

-   An AMDP method must not be empty.

-   [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statements are not permitted for creating, changing or deleting database objects.

-   No statements are allowed that are only possible in database tables and not in views, such as TRUNCATE TABLE or LOCK TABLE.

-   Local temporary database objects cannot be accessed.

-   Executing transactional statements is not permitted. In particular, no [database commits](javascript:call_link\('abendb_commit.htm'\)) and [database rollbacks](javascript:call_link\('abendb_rollback.htm'\)) using COMMIT and ROLLBACK statements are allowed. This also applies to called procedures. [LUWs](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") should always be handled in the ABAP program, to ensure data consistency between procedures.

-   Writes cannot be performed on database tables where [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") is switched on, since SQLScript accesses are ignored by buffer synchronizations.

-   AMDP methods do not have any [implicit enhancement options](javascript:call_link\('abenimplicit_enh_points.htm'\)).

Further restrictions may apply depending on the programming language of the database system and these are discussed in the corresponding sections:

-   [SQL Script for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\))

-   [L for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_l_internal.htm'\)) (used internally at SAP only)

Notes

-   It is strongly recommended that only the character set 7-bit-ASCII is used when implementing an AMDP method.

-   The use of dynamic programming techniques is strongly discouraged, even if supposedly permitted by the programming language of the database system.

-   The existence of other database objects cannot be checked or guaranteed when they are accessed dynamically. This is particularly relevant when other AMDP methods are called.

-   When database tables in ABAP Dictionary are accessed dynamically, the AMDP framework cannot respect the order of the fields defined here and the order of fields on the database (which might be different) is used instead. This can produce the wrong values when making assignments to ABAP data objects declared with respect to ABAP Dictionary.

-   In dynamic accesses, it is not possible to prevent writes from being performed on database tables with activated table buffering and this can cause inconsistencies in buffer synchronizations.

-   Dynamic accesses can be the cause of [SQL injections](javascript:call_link\('abensql_inj_amdp_scrty.htm'\)) related to input from outside.

-   When passed to an actual parameter, a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is passed to its type-dependent initial value.