  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20update%20function%20module%2C%20ABENUPDATE_FUNCTION_MODULE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

update function module

[Function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") for which the property update module is marked in the [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). It is the basis of the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") function. An update function module generally contains changing database accesses and the statement [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) can be used to register it for later execution with the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). When an update function module is created, it is assigned either a high or low priority level.