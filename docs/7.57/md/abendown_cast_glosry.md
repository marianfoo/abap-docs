  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: downcast, ABENDOWN_CAST_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

downcast

Also called narrowing cast. [Assignment](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry") between [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") in which the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of the target variable is more specific than the static type of the source variable and the assignability is not checked until runtime. A downcast must always be performed explicitly. This is done using assignments with the [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") ([?=](javascript:call_link\('abapmove_cast.htm'\))) and [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)). Downcasts are also still possible using the INTO addition of the statement [WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\)) of a case distinction using [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)). See also [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry").

[→ More about](javascript:call_link\('abenconversion_references.htm'\))