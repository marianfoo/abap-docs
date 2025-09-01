---
title: "AMDP - Procedure Implementations"
description: |
  An AMDP procedure implementation is an AMDP method for implementing a database procedure(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_procedure_glosry.htm 'Glossary Entry'). It is declared in an AMDP class(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/aben
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_methods.htm"
abapFile: "abenamdp_procedure_methods.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenamdp", "procedure", "methods"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_methods.htm) → 

AMDP - Procedure Implementations

An AMDP procedure implementation is an AMDP method for implementing a [database procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_procedure_glosry.htm "Glossary Entry"). It is declared in an [AMDP class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_classes.htm) like a regular [static method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") or [instance method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_method_glosry.htm "Glossary Entry") in any [visibility section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvisibility_section_glosry.htm "Glossary Entry"). An AMDP procedure implementation cannot be identified as an AMDP method in the declaration part of the class.

An AMDP procedure implementation is indicated as an AMDP method in the implementation part of the class using the addition [BY DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod_by_db_proc.htm) of the statement METHOD. At the same time, the database system where the method is used and the programming language of the database system used to implement the method are also defined. The database objects of the current database schema accessed in the AMDP method must be declared using an addition [USING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod_by_db_proc.htm). If possible, the syntax check is performed on the basis of this information. When database tables defined in ABAP Dictionary are accessed statically, the AMDP framework makes sure that the order of the fields defined in the dictionary is respected (this may be different from the order on the database).

The following restrictions apply, however, with respect to the [parameter interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of an AMDP procedure implementation:

-   The typing of the parameters cannot be [generic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_typing_glosry.htm "Glossary Entry"). Only [elementary data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") and [table types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_type_glosry.htm "Glossary Entry") with a structured row type can be used. The row type of a tabular type can only contain elementary data types as components

-   A parameter cannot be typed with a data type that references one of the obsolete built-in data types [DF16\_SCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or [DF34\_SCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

-   The parameters must be declared using [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm) for [pass by value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). [Pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is not permitted.

-   [Return values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_glosry.htm "Glossary Entry") cannot be declared using [RETURNING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_functional.htm).

-   Only [input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_parameter_glosry.htm "Glossary Entry") can be flagged as optional and every optional parameter must have a replacement parameter declared using [DEFAULT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm). Only literals or constants can be specified as replacement parameters.

-   Parameter names:

-   Parameter names cannot start with the characters "%\_".

-   The parameter name connection can only be used for an input parameter of type DBCON\_NAME, if the name of the database connection can be passed to the input parameter.

-   The parameter name client is reserved for future enhancements.

-   The parameter name endmethod is not permitted.

-   [RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm) can be used to specify the the exceptions specified under [AMDP -Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_exceptions.htm) to handle these classes for a call. Other exceptions cannot be handled. No non-class-based exceptions can be created using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm).

The following restrictions apply to method implementation:

-   An AMDP method cannot be empty.

-   [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_glosry.htm "Glossary Entry") statements are not permitted for creating, changing or deleting database objects.

-   Local temporary database objects cannot be accessed.

-   Executing transactional statements is not permitted. In particular, no [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm)s and [rollbacks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_rollback.htm) with COMMIT and ROLLBACK statements are allowed. This also applies to called procedures. [LUWs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenluw_glosry.htm "Glossary Entry") should always be handled in the ABAP program, to ensure data consistency between procedures.

-   Writes cannot be performed on database tables where [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is switched on, since SQLScript accesses are ignored by buffer synchronizations.

-   AMDP methods do not have any [implicit enhancement options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenimplicit_enh_points.htm).

Further restrictions may apply depending on the programming language of the database system and these are discussed in the corresponding sections:

-   [SQL Script for the SAP HANA Database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_hdb_sqlscript.htm)

-   [L for the SAP HANA Database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_hdb_l_internal.htm) (used internally at SAP only)

Notes

-   It is strongly recommended that only the character set 7-bit-ASCII is used when implementing an AMDP method.

-   The use of dynamic programming techniques is strongly discouraged, even if supposedly permitted by the programming language of the database system.

-   The existence of other database objects cannot be checked or guaranteed when they are accessed dynamically. This is particularly relevant when other AMDP methods are called.

-   When database tables in ABAP Dictionary are accessed dynamically, the AMDP framework cannot respect the order of the fields defined here and the order of fields on the database (which might be different) is used instead. This can produce the wrong values when making assignments to ABAP data objects declared with respect to ABAP Dictionary.

-   In dynamic accesses, it is not possible to prevent writes from being performed on database tables with activated table buffering and this can cause inconsistencies in buffer synchronizations.

-   Dynamic accesses can be the cause of [SQL injections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_inj_amdp_scrty.htm) related to input from outside.

-   When passed to an actual parameter, a [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") is passed to its type-dependent initial value.