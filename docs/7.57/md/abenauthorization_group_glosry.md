  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: authorization group, ABENAUTHORIZATION_GROUP_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

authorization group

[Program property](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") that allows the combination of different programs into groups for shared [authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"). The group name is an [authorization field](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") of the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_PROGRAM, for which an [authorization check](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry") is performed when an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is executed using the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)). This is done to check whether the current [ABAP user](javascript:call_link\('abenabap_user_glosry.htm'\) "Glossary Entry") is authorized to execute the program. All authorization groups should be stored in the database table TPGP.