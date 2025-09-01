  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) → 

Enhancements Using BAdIs

BAdIs are created in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry") as a part of the [ABAP enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry"). These BAdIs, together with their calling points in ABAP programs, form explicit [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") of these programs and are assigned to [enhancement spots](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry").

If BAdIs and their calling points are defined in a system, [enhancements](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry") can be made in follow-on systems by creating [BAdI](javascript:call_link\('abenbadi_implementation_glosry.htm'\) "Glossary Entry") implementations in these systems. A BAdI implementation consists mainly of a [BAdI implementation class](javascript:call_link\('abenbadi_implement_class_glosry.htm'\) "Glossary Entry") whose instances enhance the functions of an ABAP program at runtime in the form of an [object plug-in](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry"). In the enhancement concept, a BAdI implementation is an [enhancement implementation element](javascript:call_link\('abenenhancement_impl_elem_glosry.htm'\) "Glossary Entry") and is administrated by [enhancement implementations](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry").

A BAdI consists mainly of a [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry") that contains the declaration of [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry"), and a set of filters. The filters enable certain BAdI implementations to be selected for use. The following settings can be made in the definition of a BAdI, in addition to the selection of the [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry"):

-   Whether a BAdI is intended for single or multiple use. If a BAdI is intended for single use, only a single [BAdI implementation](javascript:call_link\('abenbadi_implementation_glosry.htm'\) "Glossary Entry") can be used in one [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), and one BAdI implementation must be available for each use.

-   A fallback [BAdI implementation class](javascript:call_link\('abenbadi_implement_class_glosry.htm'\) "Glossary Entry") can be specified to be used if no BAdI implementation matches the filter conditions.

-   A BAdI can be defined as context-free or context-dependent. This setting controls the instantiation of the [object plug-ins](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry"). In context-free BAdIs, it is possible to define whether an object plug-in can be created only once or multiple times within an internal session. In context-dependent BAdIs, the object plug-ins are associated with a [context object](javascript:call_link\('abenbadi_context_object_glosry.htm'\) "Glossary Entry").

Unlike the previous classic BAdIs, which were edited directly in the [BAdI Builder](javascript:call_link\('abenbadi_builder_glosry.htm'\) "Glossary Entry"), the BAdIs of the enhancement concept are supported by the ABAP runtime environment by the following ABAP statements:

-   [GET BADI](javascript:call_link\('abapget_badi.htm'\))
    Creates a [BAdI object](javascript:call_link\('abenbadi_object_glosry.htm'\) "Glossary Entry") as a handle for [object plug-ins](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry").
    

-   [CALL BADI](javascript:call_link\('abapcall_badi.htm'\))
    Calls [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") in [object plug-ins](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry").

The BAdIs of the enhancement concept are also freely switchable using switches from [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry").

Notes

-   For a BAdI intended for single use, it is best to always enter a fallback implementation class and to implement it in the same system as the BAdI.

-   The implementation of the [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") of a [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry") can be made optional (like any other interface method) by using the addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)).

-   For [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"), special [AMDP BAdIs](javascript:call_link\('abenamdp_badi_glosry.htm'\) "Glossary Entry") are available. These apply the effect of the switches from [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") to the implementation of database procedures in the current database.

-   See also the Documentation Enhancement Framework in [SAP Help Portal](http://help.sap.com).

Continue
[GET BADI](javascript:call_link\('abapget_badi.htm'\))
[CALL BADI](javascript:call_link\('abapcall_badi.htm'\))