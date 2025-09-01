---
title: "Enhancements Using BAdIs"
description: |
  BAdIs are part of the enhancements(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_glosry.htm 'Glossary Entry') made available by the ABAP Enhancement Framework(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework_glosry.htm 'Glossary En
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_enhancement.htm"
abapFile: "abenbadi_enhancement.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenbadi", "enhancement"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Enhancements Using BAdIs, ABENBADI_ENHANCEMENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Enhancements Using BAdIs

BAdIs are part of the [enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_glosry.htm "Glossary Entry") made available by the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework_glosry.htm "Glossary Entry"). They are created in the [Enhancement Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). BAdIs, together with their calling positions in ABAP programs, form explicit [enhancement options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") of these programs and are assigned to [enhancement spots](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_spot_glosry.htm "Glossary Entry").

If BAdIs and their calling positions are defined in a system, [enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_glosry.htm "Glossary Entry") can be made in follow-on systems by creating [BAdI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") implementations in these systems. A BAdI implementation consists mainly of a [BAdI implementation class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") whose instances enhance the functions of an ABAP program at runtime in the form of an [object plug-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry"). In the ABAP Enhancement Framework, a BAdI implementation is an [enhancement implementation element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") and is administrated by [enhancement implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_glosry.htm "Glossary Entry").

A BAdI consists mainly of a [BAdI interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_interface_glosry.htm "Glossary Entry") that contains the declaration of [BAdI methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_method_glosry.htm "Glossary Entry"), and a set of filters. The filters enable certain BAdI implementations to be selected for use. The following settings can be made in the definition of a BAdI, in addition to the selection of the [BAdI interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_interface_glosry.htm "Glossary Entry"):

-   Whether a BAdI is intended for single or multiple use. If a BAdI is intended for single use, only a single [BAdI implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") can be used in an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), and one BAdI implementation must be available for each use.
-   A fallback [BAdI implementation class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") can be specified to be used if no BAdI implementation matches the filter conditions.
-   A BAdI can be defined as context-free or context-dependent. This setting controls the instantiation of the [object plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry"). In context-free BAdIs, it is possible to define whether an object plug-in can be created only once or multiple times within an internal session. In context-dependent BAdIs, the object plug-ins are linked with a [context object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_context_object_glosry.htm "Glossary Entry").

Unlike the previous classic BAdIs that were processed directly in the [BAdI Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_builder_glosry.htm "Glossary Entry"), the BAdIs of the ABAP Enhancement Framework are supported by the ABAP runtime framework by the following ABAP statements:

-   [GET BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm)
    
    Creates a [BAdI object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_object_glosry.htm "Glossary Entry") as a handle for [object plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry").
    
-   [CALL BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_badi.htm)
    
    Calls [BAdI methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_method_glosry.htm "Glossary Entry") in [object plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry").
    

The BAdIs of the ABAP Enhancement Framework are also freely switchable using switches from the [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry").

Hints

-   For a BAdI that is intended for single use, it is best to always specify a fallback implementation class and to implement it in the same system as the BAdI.
-   The implementation of the [BAdI methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_method_glosry.htm "Glossary Entry") of a [BAdI interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_interface_glosry.htm "Glossary Entry") can be made optional, like any other interface method, by using the addition [DEFAULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm).
-   For [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"), special [AMDP BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_badi_glosry.htm "Glossary Entry") are available. These apply the effect of the switches from the [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry") to the implementation of database procedures in the current database.
-   See also the documentation Enhancement Framework in SAP Help Portal.

Continue
[GET BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm)
[CALL BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_badi.htm)