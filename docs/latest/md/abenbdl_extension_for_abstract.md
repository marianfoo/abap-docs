  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Abstract BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_abstract.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extension%20for%20abstract%2C%20ABENBDL_EXTENSION_FOR_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - extension for abstract

Syntax

extension for abstract;
  *\[*define behavior for ...*\]*
  *\[*extend behavior for ...*\]*
  *\[*scalar entity ...*\]*
...

Alternatives:

[1\. ... define behavior for](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... extend behavior for](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... scalar entity](#!ABAP_ALTERNATIVE_3@3@)

Effect

Extends an existing [abstract behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") using an [abstract BDEF extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_abs_bdef_ext_glosry.htm "Glossary Entry") in the [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry"). An abstract behavior definition can have one or more abstract BDEF extensions. The number of extensions is not limited. An abstract BDEF extension itself cannot be further extended.

An abstract BDEF extension can have the following components:

-   define behavior for: Adds a new node to the hierarchical type of the abstract BDEF using the statement define behavior for.
-   extend behavior for: Extends an existing node using the statement extend behavior for.
-   scalar entity: Adds a new scalar entity to the hierarchical type.

Example

The abstract BDEF extension DEMO\_RAP\_ABSTRACT\_X extends the abstract behavior definition DEMO\_RAP\_ABSTRACT\_ROOT.

-   It extends the behavior of the root node.
-   It adds the scalar entity DEMO\_RAP\_ABSTRACT\_5
-   It adds the extension node DEMO\_RAP\_ABSTRACT\_4 using the syntax define behavior for.
    
    extension for abstract;
    extend behavior for DEMO\_RAP\_ABSTRACT\_ROOT
    {
      association \_item3;
      extend deep mapping for demo\_rap\_struc\_x
        {
          sub \_Item3 = sub\_3;
        }
    }
    scalar entity DEMO\_RAP\_ABSTRACT\_5 field comp3;
    extend behavior for DEMO\_RAP\_ABSTRACT\_1
    {
      association \_x1;
    }
    define behavior for DEMO\_RAP\_ABSTRACT\_4
    with control
    {
      field ( suppress ) comp1, comp2;
    }
    

Alternative 1   

... define behavior for ...

Prerequisites

-   As a prerequisite, the original abstract behavior definition must explicitly allow BDEF extensions as described in topic [RAP - Extensibility Enabling for Abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_enabling_abstract.htm).
-   The extension node must be added to the RAP data model via [RAP data model extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_data_model_ext_glosry.htm "Glossary Entry").

Effect

An extension node adds a new node to the hierarchical type of the abstract BDEF using the statement define behavior for. [Field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_abstract.htm), [associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association_abstract.htm), and [type mappings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_abstract.htm) can be specified for the extension node in the same way as for abstract BDEFs. There is only one difference: the field attribute mandatory:execute is not available in abstract BDEF extensions.

For details, see the topic [RAP - Entity Behavior Body, Abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_abstract.htm).

Alternative 2   

... extend behavior for ...

Effect

Extends an existing node of an abstract BDEF. As a prerequisite, extensions must be explicitly enabling as described in the topic [RAP - Extensibility Enabling for Abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_enabling_abstract.htm).

Options:

-   The field characteristic suppress can be specified for extension fields.
-   Associations that have an extension node as association target can be added.
-   An existing type mapping can be extended. As a prerequisite, the original type mapping must explicitly allow extensions as described in the topic [RAP - Extensibility Enabling for Abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_enabling_abstract.htm).
-   A new RAP type mapping to a partner type can be added. This type mapping can only contain extension fields. It must not contain any fields from the original data model. The syntax is exactly the same as for abstract BDEFs, see topic [RAP - Mapping, Abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_abstract.htm).

Alternative 3   

... scalar entity ...

Effect

A new scalar entity can be integrated into the hierarchical type as scalar type. This scalar entity must be an extension node, that means it must be added to the data model via [RAP data model extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_data_model_ext_glosry.htm "Glossary Entry"). The syntax is exactly the same as for abstract BDEFs, see the topic [RAP - Entity Behavior Definition, Abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_abstract.htm).