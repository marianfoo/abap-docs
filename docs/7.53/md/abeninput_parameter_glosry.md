  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

Input Parameters

[Formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to which the value of an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") is passed when the procedure is called and which is evaluated in the procedure. Input parameters for which [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined cannot be accessed by a write in the procedure. Input parameters are defined for [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") and [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") using IMPORTING, which is why they are also called IMPORTING parameters. In [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), input parameters are defined using USING and are not protected against writes when using pass by reference.