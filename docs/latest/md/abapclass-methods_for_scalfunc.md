  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20FOR%20SCALAR%20FUNCTION%2C%20ABAPCLASS-METHODS_FOR_SCALFUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CLASS-METHODS, FOR SCALAR FUNCTION

[Short Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth FOR SCALAR FUNCTION cds\_scalar\_func.

Effect

This statement declares the [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth as an [AMDP function implementation](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") that implements a CDS scalar function cds\_scalar\_func as an [AMDP scalar function](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry"). This statement can only be specified in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of an [AMDP class](javascript:call_link\('abenamdp_classes.htm'\)) and not in an interface. The method must be implemented using the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD.

cds\_scalar\_func expects a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") defined using the statement [DEFINE SCALAR FUNCTION](javascript:call_link\('abencds_define_scalar_function.htm'\)) in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). This function must have a [CDS scalar function implementation reference](javascript:call_link\('abencds_scalar_func_impl_ref.htm'\)) of type SQL and the current class as well as the method meth must be specified in the field AMDP Reference of the [CDS scalar function implementation reference](javascript:call_link\('abencds_dsfi_glosry.htm'\) "Glossary Entry").

No other additions are possible. The interface parameters of the AMDP function implementation are derived from the [CDS scalar function definition](javascript:call_link\('abencds_dsfd_glosry.htm'\) "Glossary Entry") as follows:

-   The input parameters of the CDS scalar function are generated as mandatory input parameters of the AMDP function implementation. The names are copied, and the ABAP types are derived from the specified types.
-   The return value of the CDS scalar function is generated as return value. It has the data type specified in the CDS scalar function definition. The name of this return variable is result. This name is not part of the method signature.

Client-handling has not yet been implemented for CDS scalar functions and therefore, only client-independent objects can be accessed in the AMDP method that implements the scalar function.