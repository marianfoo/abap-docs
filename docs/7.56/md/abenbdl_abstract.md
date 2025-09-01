  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

CDS BDL - CDS abstract behavior definitions

[CDS abstract behavior definitions](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [CDS BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

A [CDS abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") mainly serves as typing mechanism for deep [action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or [function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.

Related Information

-   How to use an abstract BDEF as [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") for a [RAP action](javascript:call_link\('abenbdl_action.htm'\)) or a [RAP function](javascript:call_link\('abenbdl_function.htm'\)) in a managed or unmanaged RAP BO is described in topic [CDS BDL - InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\)).
-   How to use an abstract BDEF as [output parameter](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for a RAP action or a RAP function in a managed or unmanaged RAP BO is described in topic [CDS BDL - OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\)).

Example

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

CDS source code was not found

The managed BDEF DEMO\_CDS\_DEEP\_PARAMETER uses the abstract BDEF as action parameter in three actions.

CDS source code was not found

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   Usage as flat parameter in action a2\_from\_flat
    ![Figure](bdoc_abstract_flat.jpg)
-   Usage as structure in action a2\_from\_deep
    ![Figure](bdoc_abstract_structure.jpg)
-   Usage as table in action a2\_from\_deep\_table
    ![Figure](bdoc_abstract_table.jpg)

Continue
[CDS BDL - CDS behavior definition header, abstract BDEF](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\))
[CDS BDL - entity behavior definition, abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))