  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

pass by value

Method of passing data from [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") when the procedure is called, which is defined in the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). In pass by value, a local [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") is created as a copy of the actual parameter. [Output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") and [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") are initialized when the procedure is called. [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") and [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry") are passed the value of the actual parameter when they are called. Changed formal parameters are only passed to the actual parameter if the procedure was concluded without errors - that is, whenever the last statement is reached or there is an exit using [RETURN](javascript:call_link\('abapreturn.htm'\)) (or [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\)) or [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))). Refer also to [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abenformal_parameters_oview.htm'\))