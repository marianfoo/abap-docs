---
title: "AMDP - Client Handling"
description: |
  AMDP does not support automatic client handling(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm 'Glossary Entry'). When accessing client-specific database tables or views in an AMDP method, the required client ID must be selected explicitly. Therefore, the
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_client_handling.htm"
abapFile: "abenamdp_client_handling.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenamdp", "client", "handling"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) → 

AMDP - Client Handling

AMDP does not support automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry"). When accessing client-specific database tables or views in an AMDP method, the required client ID must be selected explicitly. Therefore, the parameter interface of an AMDP method must usually contain an input parameter for the client ID, and this must be used in a WHERE condition. Exceptions to this rule are explained in the note below.

Notes

-   Using an input parameter for the client ID is particularly advisable for [AMDP function implementations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_methods.htm) of [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). In Open SQL reads, only the data of the current client or clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) in the results set is respected by default. Selecting this precise data in the function implementation is recommended both for performance reasons and for making sure that the correct data is read.

-   In [SQLScript](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_hdb_sqlscript.htm) implementations, the built-in function [SESSION\_CONTEXT](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) can be used to access the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_session_variables.htm) CLIENT and CDS\_CLIENT of the SAP HANA database too. In a call from ABAP, these variables contain a client ID:

-   CLIENT always contains the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm).

-   CDS\_CLIENT contains the same value as CLIENT by default, but can be modified during the execution of an Open SQL statement by the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) and in an AMDP method call from ABAP by the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_amdp_options.htm).

Access of this type should be used only if it is verifiable that an AMDP method is called only from ABAP and accesses exactly the data of this client ID. In other cases, the result is undefined. Therefore, it is usually recommended to use an input parameter to pass the required client ID to AMDP functions and use it as an access condition.

-   An exception to this rule is when reading [CDS database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") of [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) CDS views whose client handling is defined by the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm). A database view of this type usually evaluates the [session variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_variable_glosry.htm "Glossary Entry") of the database that is mapped to the CDS session variable [$session.client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm). In a SAP HANA database this is the HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_session_variables.htm). If, in the implementation of an AMDP method, a WHERE condition selects a client ID other than that contained in the session variable CDS\_CLIENT, the results set is empty in this case. For this reason, if this type of CDS database view is accessed in an AMDP method, the syntax check issues a warning and an exception of the class CX\_AMDP\_CDS\_CLIENT\_MISMATCH is raised in the call. The session variable must be set to the required value in the implementation of the AMDP method, instead of a WHERE condition for the client ID. The addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_amdp_options.htm) can be used for this purpose in the declaration of the method with [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm) OR [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm). This addition prevents the warning before the syntax check and the exception. However, this is only significant for general [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"), which are called in the same way as normal methods in ABAP. In an [AMDP function implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that is used as a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") in the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), the session variable can be set with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm). See the example for the option [SESSION CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_amdp_options.htm).

Example

The executable example of how to [implement an SQLScript procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_abexa.htm) demonstrates explicit client handling using an input parameter and using the ABAP-specific session variable CLIENT.