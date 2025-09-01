  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_methods.htm) →  [METHOD - BY DATABASE PROCEDURE, FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) → 

AMDP - L for the SAP HANA Database

This function is only for internal use within SAP.
Customers and partners are not allowed to use this function.

[L](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenllang_glosry.htm "Glossary Entry") is a low-level programming language used for programming [L procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenl_procedure_glosry.htm "Glossary Entry") on the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"). L is the implementation language of an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") that specifies the addition [FOR HDB LANGUAGE LLANG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) when the statement METHOD is used.

The programming language L is only [documented](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenllang_internal.htm) internally at SAP. The following list contains special properties and additional restrictions for [AMDP methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm) methods implemented in L:

-   L procedures provide read-only access only. This restriction is made either in the declaration of the AMDP method using the addition [AMDP OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_amdp_options.htm) or in the implementation of the AMDP method using the addition [OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm).

-   L procedures do not have relationships with other database objects. The addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) cannot be specified in the implementation.

-   When an L procedure is saved in the database system, any asterisks (\*) at the start of a line are transformed to double slashes (//).

-   Only those L functions can be called within AMDP methods that are defined in the same AMDP method.

-   Parameter interface:

-   An AMDP method for an L procedure cannot have any input/output parameters defined using CHANGING.

-   An AMDP method for an L procedure must have at least one output parameter defined using EXPORTING. Output parameters must be tabular with a structured row type and cannot be scalar.

Note

The programming language L can only be used internally and with restrictions at SAP. For general programming with the SAP HANA database, [SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_glosry.htm "Glossary Entry") or the script language [SQL Script](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_script_glosry.htm "Glossary Entry") must be used. The use of L by customers and partners is not supported.

Executable Example

[AMDP, Implementation of an L Procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_l_abexa.htm)