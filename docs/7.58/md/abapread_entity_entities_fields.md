---
title: "Syntax"
description: |
  ...   FROM fields_tab(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)    FIELDS ( comp1 comp2 ... ) WITH fields_tab(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)    ALL FIELDS WITH fields_tab(https:
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_fields.htm"
abapFile: "abapread_entity_entities_fields.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abapread", "entity", "entities", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) →  [READ ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITY%2C%20ENTITIES%2C%20field_spec%2C%20ABAPREAD_ENTITY_ENTITIES_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

READ ENTITY, ENTITIES, field\_spec

Syntax

...  *{* FROM [fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* FIELDS ( comp1 comp2 ... ) WITH [fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* ALL FIELDS WITH [fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm) *}* ...

Variants:

[1\. ... FROM fields\_tab ...](#!ABAP_VARIANT_1@1@)
[2\. ... FIELDS ( comp1 comp2 ... ) WITH fields\_tab ...](#!ABAP_VARIANT_2@2@)
[3\. ... ALL FIELDS WITH fields\_tab ...](#!ABAP_VARIANT_3@3@)

Effect

The field specification expressions are used to specify input parameters on whose basis read operations can be performed for on [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). All variants can be used for direct [read](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_read_operation_glosry.htm "Glossary Entry") and [read-by-association operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry"). The variant FROM is the only option for read operations executing functions (using the keyword EXECUTE) in most cases.

The parameters that are taken into account for read operations must be specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)). It is essential that the internal table is typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). Depending on the operation and the variant, the parameters of the internal table comprise [special components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm).

The following table provides an overview on the operations, which field specification expressions are possible for the operations, and which type and components of the required internal table are relevant:

Operation

Field Specification Expression

Type of Internal Tablefields\_tab

Components of Internal Table

Direct read operation (for example, READ ENTITY bdef FROM)

FROM
FIELDS (...) WITH
ALL FIELDS WITH

TYPE TABLE FOR READ IMPORT bdef

%control
%key
%pky
%tky

Read-by-association operation (... BY \\\_assoc ...)

FROM
FIELDS (...) WITH
ALL FIELDS WITH

TYPE TABLE FOR READ IMPORT bdef\\\_assoc

%control
%key
%pky
%tky

Read operation executing a function (using the keyword EXECUTE)

FROM

TYPE TABLE FOR FUNCTION IMPORT bdef~function

%key
%pky
%tky

bdef is the root entity name, \_assoc the name of the association defined in the underlying CDS view of the root entity, and function the name of a function specified in the BDEF. See the details on the components in the documentation for [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm).

Hints

-   The read statement must be completed by specifying a [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_result.htm) after fields\_tab. Optionally, [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) can also be specified after fields\_tab.
-   Depending on the context, the components listed in the Components column of the overview table might cover more than mentioned there. For example, the draft indicator %is\_draft is available in case of drafts only. %pid is only available in late numbering scenarios.
-   In the internal table (fields\_tab), all key fields must be specified, otherwise the read operation fails. In read-by-association operations, all key fields of an associated entity are returned by default.
-   The additions FIELDS ( ... ) WITH and [SET FIELDS WITH](abapmodify_entity_entities_fields.htm#!ABAP_VARIANT_4@4@) are only possible for read operations executing functions (using EXECUTE) if the function is defined with [deep *\[*table*\]* parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) and without a [selective](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm) parameter in the BDEF.

Variant 1   

... FROM fields\_tab ...

Effect

The read operation considers input parameters specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)). It can be used for all operations.

The [%control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) structure must be filled explicitly in fields\_tab.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OP\_FIELDS shows the use of FROM with a READ operation. The %control structure shows that some fields are requested, some are not.

READ ENTITY demo\_spfli\_flights
    FROM VALUE #(
        ( %key-Carrid = 'AZ'
          %key-Connid = 790
          %control = VALUE #( Airpfrom  = if\_abap\_behv=>mk-on
                              Airpto    = if\_abap\_behv=>mk-on
                              Cityfrom  = if\_abap\_behv=>mk-on
                              Cityto    = if\_abap\_behv=>mk-on
                              Countryfr = if\_abap\_behv=>mk-on
                              Countryto = if\_abap\_behv=>mk-on
                              Deptime   = if\_abap\_behv=>mk-off
                              Arrtime   = if\_abap\_behv=>mk-off
                              Distance  = if\_abap\_behv=>mk-off
                              Fltime    = if\_abap\_behv=>mk-on
                            ) ) )
      RESULT FINAL(read\_from)
      FAILED FINAL(failed\_from).

Variant 2   

... FIELDS ( comp1 comp2 ... ) WITH fields\_tab ...

Effect

Fields to be returned by the read operation are specified in a field list in brackets after the keyword FIELDS. The input parameters for the read operation are specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)). The fields (comp1, comp2, etc.) can be any of the entity's fields. Key fields can but need not be explicitly specified since they are read and returned by default even if not specified. At least one field must be specified in the field list. The fields are not separated by a comma. The order of the fields is irrelevant. However, the order of the columns, for example, of the read result table corresponds to the order in the database table.

The variant is a convenience variant and shortcut for FROM. %control is filled implicitly in fields\_tab.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OP\_FIELDS shows the use of FIELDS ... WITH with a read-by-association operation.

READ ENTITY demo\_spfli\_flights
    BY \\\_Flights
    FIELDS ( Carrid Connid Currency Price Planetype )
     WITH VALUE #( ( %key-Carrid = 'AA'
                     %key-Connid = 26 ) )
     RESULT FINAL(rba\_fields\_with)
     FAILED FINAL(failed\_rba\_fields\_with).

The FIELDS ( ... ) WITH addition supports the setting of %control regarding components in [deep input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_input_param.htm) in the context of deep [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") and [function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters. In this context, setting values of the %control structure is only possible if the [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") for a [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is defined with [with hierarchy;](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_bdef_abstract_header.htm) and the behavior for one or more of the nodes of the [CDS composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") is defined with [define behavior for ... with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@).

With the following syntax options, the setting of %control values (in [%param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_param.htm)) can be more detailed out for components of associated entities, for example, if only subcomponents of associated abstract entities are to be flagged and not the whole abstract entity itself:

-   An additional pair of parentheses following an associated abstract entity \_ent containing components (e. g. comp1) denotes that \_ent is not flagged itself but the subcomponents specified: ... FIELDS ( ... \_ent ( comp1 comp2 ... ) ... ) WITH ...
-   + before the additional pair of parentheses following an associated abstract entity \_ent containing components (e. g. comp1) denotes that the specified subcomponents are flagged and the abstract entity \_ent itself, too: ... FIELDS ( ...   \_ent +( comp1 comp2 ... ) ... ) WITH ...

In the following code snippets, a represents a field of the parent abstract entity, \_ent represents an associated abstract entity. b represents a subcomponent contained in \_ent. The example demonstrates the effect on the %control structures contained in %param:

... FIELDS ( a \_ent ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: flagged
"%param-\_ent-%control-b: not flagged
... FIELDS ( a \_ent ( b ) ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: not flagged
"%param-\_ent-%control-b: flagged
... FIELDS ( a \_ent +( b ) ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: flagged
"%param-\_ent-%control-b: flagged

See the program DEMO\_RAP\_EML\_DEEP\_PARAM\_FIELDS that visualizes these syntax options using an action.

Variant 3   

... ALL FIELDS WITH fields\_tab ...

Effect

All fields of an instance are read according to input parameters for the read operation specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_fields_tab.htm)).

The variant is a convenience variant and shortcut for FROM. It cannot be used for EXECUTE. %control is filled implicitly in fields\_tab.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OP\_FIELDS shows the use of ALL FIELDS WITH with a READ operation.

READ ENTITY demo\_spfli\_flights
    BY \\\_Flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'DL'
                               %key-Connid = 1699 ) )
     RESULT FINAL(rba\_all\_fields\_with)
     FAILED FINAL(failed\_rba\_all\_fields\_with).

Executable Example

-   The example [READ: Field Specification Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_read_op_fields_abexa.htm) demonstrates several different variants of field specification expressions with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_read_examples_abexas.htm).