  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

authorization group

[Program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") that allows the combining of different programs into groups for shared [authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"). The group name is an [authorization field](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") of the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_PROGRAM, for which, when an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is executed using the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), an [authorization check](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry") is performed implicitly to determine whether the current [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") is authorized to execute the program. All authorization groups should be saved in the database table TPGP.