  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20input%20parameter%2C%20ABENINPUT_PARAMETER_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

input parameter

[Formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to which the value of an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") is passed at the time of a call and which is evaluated in the procedure. Input parameters for which [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined must not be accessed with write access in the procedure. Input parameters are defined for [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") and [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") using IMPORTING, which is why they are also called IMPORTING parameters. For [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), input parameters are defined using USING and the latter are not protected against write access defined for pass by reference.