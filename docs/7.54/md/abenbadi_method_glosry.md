  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

BAdI method

[Method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of a [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry"). A BAdI method is implemented in [BAdI implementations](javascript:call_link\('abenbadi_implementation_glosry.htm'\) "Glossary Entry") and then called using the associated BAdI object and [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)). If the BAdI interface is part of the definition of a [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") that is defined for multiple use, the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a BAdI method can only contain [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") and [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"). If all BAdIs are defined for single use, the interface can also have [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") or a [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry"). BAdI methods can define or propagate [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry"), and their implementation can be made[optional](javascript:call_link\('abapmethods_default.htm'\)).