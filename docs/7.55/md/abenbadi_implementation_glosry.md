  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

BAdI implementation

Implementation of a [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry"). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a [BAdI implementation class](javascript:call_link\('abenbadi_implement_class_glosry.htm'\) "Glossary Entry") and a filter condition that can be used to select the BAdI implementation in the [GET BADI](javascript:call_link\('abapget_badi.htm'\)) statement in the [BAdI object](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry"). A BAdI implementation is created as an [enhancement implementation element](javascript:call_link\('abenenhancement_impl_elem_glosry.htm'\) "Glossary Entry") as part of an [enhancement](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry") in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"), where it can be marked as a standard implementation. A BAdI implementation can be in the state active or inactive, which overrides both the [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") setting and the filter condition.