  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

input parameter

[Formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), to which the value of an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") is passed at the time of a call and which is evaluated in the procedure. Input parameters for which the [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined cannot be succeeded by a write access in the procedure. Input parameters are defined for [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") and [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") using IMPORTING. Therefore, they are also called IMPORTING parameters. For [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), input parameters are defined using USING. They are not protected against a write access during the pass by reference.