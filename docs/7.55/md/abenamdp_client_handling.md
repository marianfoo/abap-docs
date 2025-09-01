  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Client Handling

AMDP does not support [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)). When accessing client-dependent database tables or views in an AMDP method, the required client ID must be selected explicitly. Therefore, the parameter interface of an AMDP method must usually contain an input parameter for the client ID, and this must be used in a WHERE condition. Exceptions to this rule are explained in the note below.

Hints

-   Using an input parameter for the client ID is particularly advisable for [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\)) of [client-dependent CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). In ABAP SQL reads, only the data of the current client or clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) in the result set is respected by default. Selecting this precise data in the function implementation is recommended both for performance reasons and for making sure that the correct data is read.

-   In [SQLScript](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)) implementations, the built-in function [SESSION\_CONTEXT](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) can be used to access the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT and CDS\_CLIENT of the SAP HANA database too. In a call from ABAP, these variables contain a client ID:

-   CLIENT always contains the nominal value of the ABAP system field [sy-mandt](javascript:call_link\('abensystem_fields.htm'\)).

-   CDS\_CLIENT contains the same value as CLIENT by default, but can be modified during the execution of an ABAP SQL statement by the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and in an AMDP method call from ABAP by the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)).

Access of this type should be used only if it is verifiable that an AMDP method is called only from ABAP and accesses exactly the data of this client ID. In other cases, the result is undefined. Therefore, it is usually recommended to use an input parameter to pass the required client ID to AMDP functions and use it as an access condition.

-   An exception to this rule is when reading [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) CDS views whose client handling is defined by the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](javascript:call_link\('abencds_view_client_handling_v1.htm'\)). A DDIC database view of this type usually evaluates the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") of the database that is mapped to the CDS session variable [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)). In a SAP HANA database this is the HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). If, in the implementation of an AMDP method, a WHERE condition selects a client ID other than that contained in the session variable CDS\_CLIENT, the result set is empty in this case. For this reason, when a CDS-managed DDIC view of this type is accessed in the implementation of an AMDP method, no WHERE condition can be used for the client ID and the session variable must be set to the value in question instead. The addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) can be used for this purpose in the declaration of the method with [METHODS](javascript:call_link\('abapmethods.htm'\)) or [CLASS-METHODS](javascript:call_link\('abapmethods.htm'\)). Without this addition, a syntax error occurs when a CDS-managed DDIC view of this type is accessed. However, this is only significant for general [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"), which are called in the same way as normal methods in ABAP. In an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") that is used as a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the session variable can be set with the addition [USING CLIENT](javascript:call_link\('abapselect.htm'\)). See the example for the option [SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)).

Example

The executable example of how to [implement an SQLScript procedure](javascript:call_link\('abenamdp_abexa.htm'\)) demonstrates explicit client handling using an input parameter and using the ABAP-specific session variable CLIENT.