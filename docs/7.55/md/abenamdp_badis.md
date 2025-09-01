  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - BAdIs

In addition to the option of implementing [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") of a normal [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") as [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\)) and making these methods callable by using [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)), it is also possible to create special AMDP BAdIs. An AMDP BAdI is a BAdI that is labeled accordingly in [BAdI Builder](javascript:call_link\('abenbadi_builder_glosry.htm'\) "Glossary Entry") and has the following properties:

-   Definition and implementation

-   An AMDP BAdI does not have any filters.

-   Fallback [BAdI implementation classes](javascript:call_link\('abenbadi_implement_class_glosry.htm'\) "Glossary Entry") must be specified.

-   Every [BAdI method](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") of an AMDP BAdI must be an AMDP procedure implementation.

-   Every AMDP method must be implemented for the same database system.

-   Call BAdI methods

-   The AMDP procedure implementations of an AMDP BAdI can be called like regular [BAdl methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") with [GET BADI](javascript:call_link\('abapget_badi.htm'\)) and [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)).

-   The AMDP procedures of an AMDP BAdI created on the database can be called here (like all AMDP procedures) from other AMDP methods in the same database system. These AMDP procedures are specified using the name of a [BAdI implementation class](javascript:call_link\('abenbadi_implement_class_glosry.htm'\) "Glossary Entry"). The usage must be declared after the addition [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the calling method.

In both cases, execution is performed in accordance with the rules of the [enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry") and the corresponding switch in [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry"). If no enhancement is available, the mandatory fallback implementation class is implemented.

Hints

-   AMDP BAdIs are primarily used to execute calls of AMDP procedures from AMDP procedures or functions, in accordance with the rules of the switch-based enhancement concept. Although switch-based calls of AMDP procedure implementations can be made from ABAP programs without AMDP BAdIs, these calls can only be made from AMDP procedures or functions for AMDP procedure implementations of AMDP BAdIs. The AMDP framework ensures that the relevant database procedure for the current database switch setting is created on the database.

-   Before the AMDP procedure of an AMDP BAdI can be called from other AMDP procedures or functions without syntax errors, it must already exist on the database when the calling method is created. For this reason, fallback BAdI implementation classes are mandatory for AMDP BAdIs, whose AMDP procedures can be created on the database whenever required.

-   AMDP BADIs do not currently support [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\)).