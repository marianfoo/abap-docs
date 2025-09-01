  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Abstract%20Behavior%20Definitions%2C%20ABENBDL_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Abstract Behavior Definitions

[RAP abstract behavior definitions](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [RAP BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

A [RAP abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") mainly serves as typing mechanism for deep [action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or [function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.

Related Information

-   How to use an abstract BDEF as [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") for a [RAP action](javascript:call_link\('abenbdl_action.htm'\)) or a [RAP function](javascript:call_link\('abenbdl_function.htm'\)) in a managed or unmanaged RAP BO is described in topic [RAP BDL - InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\)).
-   How to use an abstract BDEF as [output parameter](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for a RAP action or a RAP function in a managed or unmanaged RAP BO is described in topic [RAP BDL - OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\)).
-   Abstract behavior definitions can be classified with the [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") for extensibility. The rules are described in the topic [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)).

Example

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

abstract;
strict(2);
with hierarchy;
define behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root
{
  field ( suppress ) Dummy;
  deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC
  {
    char10 = char\_10;
    Integer4 = integer\_4;
    sub \_itemStructure = struktur;
    sub \_itemTable = tabelle;
  }
  association \_itemTable;
  association \_itemStructure;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}

The managed BDEF DEMO\_CDS\_DEEP\_PARAMETER uses the abstract BDEF as action parameter in three actions.

managed implementation in class bp\_demo\_cds\_deep\_parameter unique;
strict(2);
define behavior for DEMO\_CDS\_DEEP\_PARAMETER
persistent table DEMO\_BO\_DEEP
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
    mapping for demo\_bo\_deep
    {
    RootBO = root;
    }
  field (readonly:update) RootBO;
// mapping: none
  action a2\_from\_flat              parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: structure
  action a2\_from\_deep       deep  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: table
  action a2\_from\_deep\_table deep table
                                  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
//deep selective output parameter
  action a2\_deep\_result deep result selective \[1\]
    DEMO\_CDS\_ABSTRACT\_ROOT;
}

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   Usage as flat parameter in action a2\_from\_flat
    ![Figure](abdoc_abstract_flat.jpg)
-   Usage as structure in action a2\_from\_deep
    ![Figure](abdoc_abstract_structure.jpg)
-   Usage as table in action a2\_from\_deep\_table
    ![Figure](abdoc_abstract_table.jpg)

Continue
[RAP - Behavior Definition Header, Abstract BDEF](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\))
[RAP - Entity Behavior Definition, Abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))