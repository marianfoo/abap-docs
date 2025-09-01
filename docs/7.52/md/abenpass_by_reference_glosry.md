  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

pass by reference

Method of passing data from [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") when the proecdure is called. It is defined in the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). In pass by reference, no local [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") is specified for the actual parameter. Instead, the procedure receives a reference to the actual parameter during the call, and works with the actual parameter itself. [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") that have been passed by reference are not allowed to be changed in the procedure. Also see [pass by reference](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abenformal_parameters_oview.htm'\))