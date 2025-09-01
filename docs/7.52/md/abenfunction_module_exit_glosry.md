  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

function module exit

[Customer exit](javascript:call_link\('abencustomer_exit_glosry.htm'\) "Glossary Entry") for [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") in the form of empty or partially implemented [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") delivered with the standard SAP system. Incorporated in ABAP programs using the statement [CALL CUSTOMER-FUNCTION](javascript:call_link\('abapcall_customer-function.htm'\)). The function module [interfaces](javascript:call_link\('abeninterface_glosry.htm'\) "Glossary Entry") are predefined by SAP. The implementation can be empty or partially predefined. The customer must fully implement and activate them using [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") CMOD. It is advisable to replace function module exits by [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry")s.