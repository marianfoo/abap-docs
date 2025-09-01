  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) →  [METHOD - BY DATABASE PROCEDURE, FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) → 

AMDP - L for the SAP HANA Database

This function is only for internal use within SAP.
Customers and partners are not allowed to use this function.

[L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry") is a low-level programming language used for programming [L procedures](javascript:call_link\('abenl_procedure_glosry.htm'\) "Glossary Entry") on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). L is the implementation language of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") that specifies the addition [FOR HDB LANGUAGE LLANG](javascript:call_link\('abapmethod_by_db_proc.htm'\)) when the statement METHOD is used.

The programming language L is only [documented](javascript:call_link\('abenllang_internal.htm'\)) internally at SAP. The following list contains special properties and additional restrictions for [AMDP methods](javascript:call_link\('abenamdp.htm'\)) methods implemented in L:

-   L procedures provide read-only access only. This restriction is made either in the declaration of the AMDP method using the addition [AMDP OPTIONS READ-ONLY](javascript:call_link\('abapmethods_amdp_options.htm'\)) or in the implementation of the AMDP method using the addition [OPTIONS READ-ONLY](javascript:call_link\('abapmethod_by_db_proc.htm'\)).

-   L procedures do not have relationships with other database objects. The addition [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) cannot be specified in the implementation.

-   When an L procedure is saved in the database system, any asterisks (\*) at the start of a line are transformed to double slashes (//).

-   Only those L functions can be called within AMDP methods that are defined in the same AMDP method.

-   Parameter interface:

-   An AMDP method for an L procedure cannot have any input/output parameters defined using CHANGING.

-   An AMDP method for an L procedure must have at least one output parameter defined using EXPORTING. Output parameters must be tabular with a structured row type and cannot be scalar.

Note

The programming language L can only be used internally and with restrictions at SAP. For general programming with the SAP HANA database, [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") or the script language [SQL Script](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") must be used. The use of L by customers and partners is not supported.

Executable Example

[AMDP, Implementation of an L Procedure](javascript:call_link\('abenamdp_l_abexa.htm'\))