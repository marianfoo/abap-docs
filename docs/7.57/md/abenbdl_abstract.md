---
title: "CDS BDL - CDS Abstract Behavior Definitions"
description: |
  CDS abstract behavior definitions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm 'Glossary Entry') in ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') are created using the behavior definiti
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_abstract.htm"
abapFile: "abenbdl_abstract.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "abstract"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Abstract Behavior Definitions, ABENBDL_ABSTRACT, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Abstract Behavior Definitions

[CDS abstract behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") are created using the behavior definition language [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_source_code_glosry.htm "Glossary Entry").

A [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") mainly serves as typing mechanism for deep [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") or [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.

Related Information

-   How to use an abstract BDEF as [input parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_parameter_glosry.htm "Glossary Entry") for a [RAP action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) or a [RAP function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm) in a managed or unmanaged RAP BO is described in topic [CDS BDL - InputParameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_input_param.htm).
-   How to use an abstract BDEF as [output parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") for a RAP action or a RAP function in a managed or unmanaged RAP BO is described in topic [CDS BDL - OutputParameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm).

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
// mapping: none
  action a2\_from\_flat             parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: structure
  action a2\_from\_deep       deep  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: table
  action a2\_from\_deep\_table deep table
                                  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
}

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   Usage as flat parameter in action a2\_from\_flat
    ![Figure](abdoc_abstract_flat.jpg)
-   Usage as structure in action a2\_from\_deep
    ![Figure](abdoc_abstract_structure.jpg)
-   Usage as table in action a2\_from\_deep\_table
    ![Figure](abdoc_abstract_table.jpg)

Continue
[CDS BDL - CDS Behavior Definition Header, Abstract BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bdef_abstract_header.htm)
[CDS BDL - Entity Behavior Definition, Abstract BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_abstract.htm)